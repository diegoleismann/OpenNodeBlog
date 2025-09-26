const nodemailer = require("nodemailer");
const user = process.env.EMAIL;
const pass = process.env.SMTP_PASSWORD;
console.log(user, pass);


class ContactController {
  constructor() { }


  async send(req, res) {
    console.log(req.body, "BODY")
    const { message, phone, email, name } = req.body
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: user,
        pass: pass,
      },
    });


    const sent = await transporter.sendMail({
      from: '"Contato" <contato@dlw.dev.br>',
      to: "contato@dlw.dev.br",
      subject: "Mensagem do Site",
      text: "", // plain‑text body
      html: `
        Nome: ${name || "Sem Nome"}
        E-mail: ${email || "Sem e-mail"}
        Telefone: ${phone || "Telefone"}
        Menssage: ${message || ""}
      `, // HTML body
    });
    console.log(sent, "SENT");
    transporter.close();
    res.json({ success: "Enviado com Sucesso!" })
  }
}
module.exports = ContactController