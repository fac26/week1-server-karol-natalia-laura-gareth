
function sanitize(unsafe) {
   return unsafe.replace(/</g, "&lt;");
 }


function validate(message){ //obj:{title, author, message}
   if (message) {
      return `<span style="color: red">${message}</span>`;
    } else {
      return "";
    }
}

module.exports={sanitize, validate}