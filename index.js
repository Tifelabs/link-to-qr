import inquirer from 'inquirer';
import fs from "fs";
import qr from "qr-image";


inquirer
  .prompt([
    /* Pass your questions in here */
    {"message" : "Type in your URL: ",
     "name": "URL"
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url = answers.URL
      
    //QR-IMAGE
    var qr_png = qr.image(url);
    qr_png.pipe(fs.createWriteStream('qr-image.png'));

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });