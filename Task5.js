var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'montassarabidi92@outlook.fr',
    pass: '**************'
  }
});

var mailOptions = {
  from: 'montassarabidi92@outlook.fr',
  to: 'abdelhafidh.bensalem1990@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'nodejs Task5 - montassar'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});