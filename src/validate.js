function sanitize(post) {
    const sanitisedPost = {};

    Object.keys(post).map(
        (key) => (sanitisedPost[key] = post[key].replace(/</g, '&lt;'))
    );

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
