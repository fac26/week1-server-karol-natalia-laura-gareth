function deleteHandler(id, posts) {
    const idx = posts.findIndex((post) => post.id == id);
    posts.splice(idx, 1);
}

module.exports = { deleteHandler };
