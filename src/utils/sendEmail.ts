import nodemailer from 'nodemailer';

const sendMail = async (to: string, subject: string, html: string) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'jntjannat99@gmail.com',
      pass: 'ifrf rosv gzzh nacs',
    },
  });

  await transporter.sendMail({
    from: 'Bike Shop😎',
    to,
    subject,
    text: 'Hello world?',
    html,
  });
};

export default sendMail;
