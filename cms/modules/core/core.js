const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { Storage } = require('@google-cloud/storage');
const Multer = require('multer');

const gcp_key_content = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
if (!gcp_key_content) {
  throw new Error("GOOGLE_SERVICE_ACCOUNT_KEY environment variable not set.");
}
const credentials = JSON.parse(gcp_key_content);
const storage = new Storage({ credentials });

const bucketName = process.env.BUCKET_GOOGLE;

//Configurações do Multer
//Aqui estabeleci o limite máximo de 5mb
const multer = Multer({
  storage: Multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024 //Limite de 5MB
  }
});

const indexRouter = require('../index/index-router.js');
const usersRouter = require('../user/UserRouter.js');
const postRouter = require('../post/PostRouter.js')
const docs = require('../../docs/index.js')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/../../../cms/files')));
app.use(express.static('theme/theme-one/assets'));

var corsOptions = {
  origin: [process.env.FRONTEND_URL, 'http://localhost:8000'],
  optionsSuccessStatus: 200,
  credentials: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE"
}

//[]TASK add to database list of domains cors
app.use(cors(corsOptions))

app.use((req, res, next) => {
  console.log((new Date()).toISOString() + ' ' + req.method + ' ' + req.url);
  next()
})

//app.use('/', indexRouter);
app.use('/api/user', usersRouter);
app.use('/api/post', postRouter)
app.use('/api/docs', (req, res) => {
  res.json(docs);
})

app.post('/upload', multer.single('file'), async (req, res) => {
  //Verifica se veio arquivo na requisição
  if (!req.file) {
    return res.status(400).send('Nenhum arquivo anexado');
  }

  //Cria uma referência para o arquivo na Storage usando o nome original dele
  const file = storage.bucket(bucketName).file(req.file.originalname);
  const fileName = req.file.originalname;
  //Cria um stream para escrever o arquivo na Storage e tratar os erros que podem acontecer durante o upload
  const stream = file.createWriteStream({
    metadata: {
      contentType: req.file.mimetype
    }
  });

  stream.on('error', (err) => {
    console.error('Erro ao fazer upload do arquivo:', err);
    res.status(500).send('Erro ao fazer upload do arquivo');
  });

  stream.on('finish', async () => {
    const url = `http(s)://storage.googleapis.com/${bucketName}/${fileName}`;
    console.log(url);
    res.status(200).send('Arquivo enviado com sucesso');
  });

  stream.end(req.file.buffer);
});

app.use(function (req, res, next) {
  console.log('notfound', req.url);
  res.status(404)
  res.json({ "error": "RouteNotFound", "documentation": "/api/docs" });
});

module.exports = app;
