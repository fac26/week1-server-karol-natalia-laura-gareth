

function validate(title){ //obj:{title, author, message}
    /*const validTitle=obj.title.trim()===''?false:true;
    const validAuthor=obj.author.trim()===''?false:true;
    const validMessage=obj.message.trim()===''?false:true;
    return [validTitle, validAuthor, validMessage];
    */
   return title.trim()===''?false:true;
}

module.exports={validate}