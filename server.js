const express = require('express');
const request = require('superagent');
const environment = 'development';
const config = require("./knexfile.js")[environment];
const knex = require("knex")(config);




const dev = process.env.NODE_ENV !== 'production';
const next = require('next');
const app = next({ dev });
const handle = app.getRequestHandler();
const { parse } = require('url');

const apiRoutes = require('./server/routes/apiRoutes.js');


const loadData = ()=>{
  const timeot = setTimeout(function () {
    request
    .get('http://api.giphy.com/v1/gifs/random?api_key=OwjURUifP4Nwd2IJoptMxRHzJIzAYS0s')
    .set('Content-Type', 'application/json')
    .query({

    })
    .end((err, response) => {
      if (err) {
        console.log('[err]:',err);
      }
      const data = response.body.data;
      if(data === ''){
        loadData()
      }
        knex('img_object')
        .returning('id')
        .insert({title:data.title,url:data.images.fixed_height_still.url,tag:data.source_tld})
        .then((resp)=>{
            loadData()
        })
    });
  }, 60000);
}

loadData()


app.prepare().then(() => {
  const server = express();

  server.use('/api', apiRoutes);

  // Server-side

  server.get('/index', (req, res) => {
    return app.render(req, res);
  });


  server.get('*', (req, res) => {
    return handle(req, res);
  });

  /* eslint-disable no-console */
  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('Server ready on http://localhost:3000');
  });


});
