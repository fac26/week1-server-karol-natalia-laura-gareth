const test = require('node:test');

//custom module
const app = require('../src/server');
const assert = require('node:assert');
const {html} = require('../src/template');

test('html module returns html page',()=>{
    const htmlTest = html([{}]);
    assert.match(htmlTest, /<!DOCTYPE html>/);
})

test('get request made to "/" route shoul return status code 200', async () => {
    const server = app.listen(8080);
    const response = await fetch('http://localhost:8080/');
    console.log(response.status);
    server.close();

    assert.equal(response.status, 200, `Expected status code 200 instead received ${response.status}`);
});

test('"/" route returns page with form', async () => {
    const server = app.listen(8080);
    const response = await fetch('http://localhost:8080/');
    server.close();

    const body = await response.text();
    assert.match(body, /<form/i, 'Page should include the form');
});

test('form has input with attribute name=title', async () => {
    const server = app.listen(8080);
    const response = await fetch('http://localhost:8080/');
    server.close();

    const body = await response.text();
    assert.match(body, /name="title"/);
});

test('form has input with attribute name=author', async () => {
    const server = app.listen(8080);
    const response = await fetch('http://localhost:8080/');
    server.close();

    const body = await response.text();
    assert.match(body, /name="author"/);
});

test('form has input with attribute name=message', async () => {
    const server = app.listen(8080);
    const response = await fetch('http://localhost:8080/');
    server.close();

    const body = await response.text();
    assert.match(body, /name="message"/);
});

test('POST without title re-renders page with error', async () => {
    const server = app.listen(8080);
    const response = await fetch('http://localhost:8080/', {
        method: 'POST',
        body: 'title=&author=MrBen&message=BeHappy', //
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
    });

    server.close();
    const body = await response.text();

    assert.match(
        body,
        /please enter title/i,
        `Expected HTML to include "please enter title", but received:\n${body}`
    );
});

test('POST with script tag is correctly sanitized', async () => {
    const server = app.listen(8080);
    const response = await fetch('http://localhost:8080/', {
        method: 'POST',
        body: "title=Test&author=MrBen&message=<script>alert('oh no')</script>",
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
    });
    server.close();

    const body = await response.text();
    assert.match(
        body,
        /&lt;script>alert\('oh no'\)&lt;\/script>/i,
        `Expected <script> to have '<' replaced with '&lt;', but received:\n${body}`
    );
});

test("missing routes return 404 response", async () => {
    const server = app.listen(9876);
    const response = await fetch("http://localhost:9876/definitely-not-real");
    server.close();

    assert.equal(response.status, 404);
    const body = await response.text();
    assert.match(body, /Not found/);
  });