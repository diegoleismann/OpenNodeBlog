const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  host: "smtp.titan.email",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

class ContactController {
  constructor() { }


  async send(req, res) {

    await transporter.sendMail({
      from: '"Contato" <contato@dlw.dev.br>',
      to: "contato@dlw.dev.br",
      subject: "Mensagem do Site",
      text: "", // plain‑text body
      html: "", // HTML body
    });

    res.json({ success: "Enviado com Sucesso!" })
  }
}
module.exports = ContactController