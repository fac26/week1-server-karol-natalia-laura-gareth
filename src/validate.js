
function sanitize(post) {
    console.log('sanitize')
    Object.keys(post).forEach(key=>post[key.name].replace(/</, "b"))
    console.log(post);
    
   
    return //Object.keys(post).forEach(key=>post[key].replace(/</g, "&lt;"));
 }


function validate(message){ //obj:{title, author, message}
   if (message) {
      return `<span style="color: red">${message}</span>`;
    } else {
      return "";
    }
}

module.exports={sanitize, validate}