const sendEmail = async ({ 
    email
  }) => {
    const sgMail = require('@sendgrid/mail')
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
      to: email, // Change to your recipient
      from: 'biohackucr@gmail.com', // Change to your verified sender
    }
    sgMail
      .send(msg)
      .then(() => {
        console.log('Email sent')
      })
      .catch((error) => {
        console.error(error)
      })
  }
  
  export { sendEmail }