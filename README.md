This is a simple system created to understand how  to generate random OTPs and send to email, just like most online transactions and webapps use. 
It is created using JavaScript and Node.js


HOW TO USE:
1. Install Node in your system if you don't have it already. Verify the installation of node in command prompt
2. Use node -v
3. npm -v
4. Setup Backend (NodeJS) can be done by creating a directory with
5. mkdir your-name-choice
6. cd your-name-choice
7. Initialize this project with the required packages npm init -y
8. Create index,js and .env files
9. Inside the .env file, copy this
10. EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password_or_password

Disclaimer: If you are using your Google account, Google might block your login attempt because Google considers this as a 'less secure app'. 
What you can do?

Generate an App Password. 
1. This needs to have your 2-step verification enabled.
2. Go to App Passwords section in your Google Account (Should be under Security).
3. Select Mail and Other as the app you are usig, name it like 'otp system password' and generate the password.
4. Google will provide you with a 16-character password which you need to replace in your .env file, under EMAIL_PASS
5. Update your .env file.
6. Copy the index.js file, make changes if you need any modifications and run the backend server by firing this command
7. node index.js
8. This will print a randomly generated 6-character otp on the console and will send the OTP on your registered email address.
9. 
