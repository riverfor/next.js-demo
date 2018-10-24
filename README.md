# Funny Gif

## About the project

The demo project (Funny Gif) function is to recommend funny Giphy gif images to its audiences.

The demo project (funny gif) shows that I am able to program with next.js (a very lightweight boilerplate built on top of React.js ), Redux, Redux Saga component, Bootstrap 4 and so on, etc.

- It uses next.js in the backend to access Giphy.com public APIs to pull the list of images and prints it as a list of bootstrap cards on the front page.
- It uses Redux to store image with titles. It uses Redux saga to do the background update to make the images (cards) change automatically every 5 seconds.
- It uses bootstrap 4 to handle the card and layouts.
- It uses knex + postgresql to save data.


## How to install

### Node / Postgresql

- Install postgresql
- Install node
```
wget -qO- https://deb.nodesource.com/setup_9.x | sudo -E bash -
sudo apt-get install -y nodejs
```
- Install knex 
```
node install -g knex
```

### Inital database

createdb -U <username> -h 127.0.0.1 <dbname>
knex migrate:latest --env development

### Setup application

npm install
npm run build

### Run

node server.js

### About

Q: Couldn't install sqlite3

A: npm install sqlite3 --build-from-source
