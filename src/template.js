const { sanitize, validate } = require('./validate');

function renderPost(post) {
    return `<li>
    <h3>${post.title}</h3>
    <p>${post.author}</p>
    <p>${post.message}</p>
    <form method="POST" action='/delete/${post.id}'>
        <button type="submit">Delete</button>
    </form>
    </li>`;
}

function renderPosts(posts) {
    //DUMMY_POSTS
    console.log(posts)
    return posts.map((post) => renderPost(post)); //['<li>..', '<li>']
}

function renderForm(errors = {}) {
    return `<form method="POST">
    <div>
    <label for="title">Enter title</label>
    <input type="text" name="title" id="title" value=""/>
    ${validate(errors.title)}
    </div>
    <div>
    <label for="author">Enter author name</label>
    <input type="text" name="author" id="author"/>
    ${validate(errors.author)}
    </div>
    <div>
    <label for="message">Enter message</label>
    <input type="text" name="message" id="message"/>
    ${validate(errors.message)}  
    </div>
    <button type="submit">Submit</button>
    </form>`;
}

function html(posts, err, values) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="/style.css">
        <title>Document</title>
    </head>
    <body>
    <header>
    <h1>Haikuniverse</h1>
    <p>A microblog for sharing your favourite haiku</p>
    </header>
    ${renderForm(err, values)}
    <h2>Haikuniverse posts</h2>
    <ul class='users-post'>${renderPosts(posts).join('')}</ul>        
    </body>
    </html>`;
}

module.exports = { html, renderForm };
