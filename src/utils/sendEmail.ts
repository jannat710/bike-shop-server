import nodemailer from 'nodemailer';

const sendMail = async (to: string, subject: string, html: string) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'jannatul0040@gmail.com',
      pass: 'jbfq pxyj qwsh cjal',
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
