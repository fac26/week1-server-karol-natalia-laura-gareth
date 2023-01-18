function sanitize(post) {
    console.log('sanitize');
    const sanitisedPost = {};

    Object.keys(post).map(
        (key) => (sanitisedPost[key] = post[key].replace(/</, ''))
    );
    console.log(sanitisedPost);

    return sanitisedPost;
}

function validate(message) {
    //obj:{title, author, message}
    if (message) {
        return `<span style="color: red">${message}</span>`;
    } else {
        return '';
    }
}

module.exports = { sanitize, validate };
