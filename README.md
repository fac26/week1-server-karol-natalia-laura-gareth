# week1-server-karol-natalia-laura-gareth


Server Project: Microblogging

Our microblogging site is a resource for sharing haiku's with other fans of this short form of poetry.

Contributors: [Karol](https://github.com/Kr33L), [Natalia](https://github.com/nataliarusu), [Laura](https://github.com/LauraK0) and [Gareth](https://github.com/GalKJ).

You can find our site hosted on fly.io [here](week-one-server-kgnl.fly.dev)

## Setup
Make sure you have Git and Node (v18) installed.

1. Clone this repo and `cd` into the directory
2. Run `npm install` to install all the dependencies
3. Run `npm run dev` to start the server (using the `nodemon` library to auto-restart the server when you save changes).

## Test
Our test folder contains a `1.test.js` file.

You can run the tests with `npm test`.

Here you will find tests for:
- test for html module returns html page
- test to get request made to "/" route shoul return status code 200
- test that "/" route returns page with form
- test that form has input with attribute name=title
- test form has input with attribute name=author
- test form has input with attribute name=message
- test that POST with script tag is correctly sanitized
- test that missing routes returns 404 response 

## Users Stories

- [ ] As an opinionated person, I want to: post my thoughts so others can read them
- [ ] As a bored person, I want to: read what other people have posted

### Stretch User Story
- [ ] As an impulsive person, I want to: delete my posts so no one can see them anymore

## Acceptance Criteria
- [ ] Deployed to Fly.io
- [ ] A page with a form to submit posts, and a page showing all posts
- [ ] No .html files (all HTML responses should be created dynamically within Node)
- [ ] No client-side JavaScript (all logic should happen on the server)
- [ ] All static assets served correctly (CSS, favicon etc)
- [ ] Tests for each server route
- [ ] A responsive, mobile-first design
- [ ] Ensure your app is accessible to as many different users as possible
