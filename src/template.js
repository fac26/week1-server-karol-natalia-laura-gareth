const {deleteHandler} = require('./deleteHandler');

const DUMMY_POSTS = [
    {
        title: 't1',
        author: 'author1',
        message: 'post1',
        id: '1',
        username: 'GB',
    },
    {
        title: 't2',
        author: 'author1',
        message: 'post1',
        id: '2',
        username: 'GB',
    }
];

function renderPost(post){
    return `<li>
    <h3>${post.title}</h3>
    <p>${post.author}</p>
    <p>${post.message}</p>
    <button onClick=${deleteHandler}>Delete</button>
    </li>`
}

function renderPosts(posts){//DUMMY_POSTS
    return posts.map(post=>renderPost(post));//['<li>..', '<li>']

}

function renderForm(){//err:{title: true||false, author, message} value:{title, author, message}

    return `<form method="POST">
    <div>
    <label for="title">Enter title</label>
    <input type="text" name="title" id="title"}/>
    
    </div>
    <div>
    <label for="author">Enter author name</label>
    <input type="text" name="author" id="author"}/>
    
    </div>
    <div>
    <label for="message">Enter title</label>
    <input type="text" name="message" id="message"/>
   
    </div>
    <button type="submit">Submit</button>
    </form>`

}



function html(posts, err, values){
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
    ${renderForm(err, values)}
    <h2>Haikuniverse posts</h2>
    <ul class='dummy-post'>${renderPosts(DUMMY_POSTS).join('')}</ul>
    <ul class='users-post'>${renderPosts(posts)}</ul>
        
    </body>
    </html>`
}

module.exports = {html}