const path = require('path');
const fs = require('fs');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const uuid4 = require('uuid4');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

const readFile = (src) => new Promise((res, rej) => fs.readFile(path.resolve(__dirname, src), 'utf8', (err, data) => {
  if(err) rej(err);
  res(data);
}));

const writeFile = (src, data) => new Promise((res, rej) => fs.writeFile(path.resolve(__dirname, src), data, 'utf8', (err, data) => {
  if(err) rej(err);
  res(true);
}));

app.use(webpackDevMiddleware(compiler, { publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler, { log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000}));

app.use(express.json());

// // Обрабатываем статичные файлы
// app.use(express.static('public'))
// app.use('/assets', express.static(path.resolve(__dirname, 'assets')))

app.get('/api/positions', (req, res) => {
  readFile('positions.json').then(data => res.send(data));
});

app.get('/api/employees', (req, res) => {
  readFile('employees.json').then(data => res.send(data));
});

app.post('/api/employee', async (req, res) => {
  const employees = JSON.parse(await readFile('employees.json'));
  
  const employee = { id: uuid4(), ...req.body };
  employees.push(employee);
  
  const result = await writeFile('employees.json', JSON.stringify(employees));
  
  if(result === true) {
    res.send(JSON.stringify(employee));
  } else {
    res.send(JSON.stringify({ error: result }));
  }
});

app.patch('/api/employee', async (req, res) => {
  const employees = JSON.parse(await readFile('employees.json'));
  
  const i = employees.findIndex((e) => e.id === req.body.id);
  employees[i] = { ...employees[i], ...req.body };
  
  const result = await writeFile('employees.json', JSON.stringify(employees));
  if(result === true) {
    res.send(JSON.stringify(employees[i]));
  } else {
    res.send(JSON.stringify({ error: result }));
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(3000, () => {
  console.log('Test app listening on port 3000!\n');
});
