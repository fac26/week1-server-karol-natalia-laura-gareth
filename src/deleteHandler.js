function deleteHandler(id, posts) {
    const idx = posts.findIndex((post) => post.id == id);
    console.log(idx);
    const deleted = posts.splice(idx, 1);
    console.log(`deleted the value at idx ${idx} the value`);
    console.log(deleted);
    console.log('posts left in array after delete');
    console.log(posts);
}

module.exports = { deleteHandler };
