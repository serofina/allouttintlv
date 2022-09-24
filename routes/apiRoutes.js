const router = require("express").Router();

router.post("/api/mailto", (req, res) => {
  let { name, email, phone, subject, message } = req.body;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.APP_PASS,
    },
  });

  let mail = {
    from: process.env.SMTP_EMAIL,
    to: process.env.SMTP_EMAIL,
    subject: subject,
    text: `
    from: ${name}

    email: ${email}
    phone: ${phone}

    message: ${message}
    `,
  };

  transporter.sendMail(mail, function (error, info) {
    if (error) {
      res.json(error);
    } else {
      res.json("Email sent: " + info.response);
    }
  });
});

module.exports = router;
