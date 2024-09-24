const crypto = require("crypto"); //this is a built in nodejs module that is used to generate a random 6 digit OTP
const nodemailer = require("nodemailer"); //this will send eemails using gmail creds
require("dotenv").config(); //this loads the environment variables from the .env file
const readline = require("readline");

//store the generated otp somewhere
let generatedOtp = null;
let Expiration_time = null; //sotres time of expiration of the otp

//function to generate six-digit otp
function otp_generate() {
  const otp = crypto.randomInt(100000, 999999); //6 digit otpp generation
  Expiration_time = Date.now() + 4 * 60 * 1000; //4 minutes otp will expire
  return otp;
}

//this function sends otp using the email . it uses nodemailer
async function sendOTP(email, otp) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIl_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email, //user's email
    subject: "This is your OTP CODE",
    text: `Your OTP code is ${otp}. This otp expires in 4 minutes.`,
  };

  try {
    //handles error incase otp not sent
    await transporter.sendMail(mailOptions); //send email with otp
    console.log("OTP IS SENT TO ", email);
  } catch (error) {
    console.error("Error sending email ", error);
  }
}

//check function
function verifyOtp(inputOtp) {
  const currentTime = Date.now(); //current time

  if (currentTime > otpExpiration) {
    return "OTP expired"; //If current time is beyond expiration, OTP is expired
  } else if (inputOtp === generatedOtp) {
    return "OTP verified"; //OTP match
  } else {
    return "Invalid OTP"; //OTP no match
  }
}

const userEmail = "abc@gmail.com"; //Replace with your email address

//Generate OTP
generatedOtp = otp_generate();
console.log("Generated OTP:", generatedOtp); //Prints OTP for testing purposes

//Send OTP via email
sendOTP(userEmail, generatedOtp);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the OTP sent to your email: ", (userInputOtp) => {
  const verificationResult = verifyOtp(userInputOtp);
  console.log(verificationResult); //Verify the OTP
  rl.close();
});
