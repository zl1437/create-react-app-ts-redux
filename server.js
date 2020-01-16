const path = require('path');
const express = require('express');
const history = require('connect-history-api-fallback');
const publishStatus = require('@gaodun.com/publish-status');
const app = express();
const options = {
	maxAge: 1200000
};

app.get('/status', (req, res) => {
	const result = publishStatus();
	res.json(result);
});

app.use('/', history());
app.use('/', express.static(path.join(__dirname), options));

app.use(express.static(path.join(__dirname, 'build'), options));
app.set('views', path.join(__dirname, 'build'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.status(200).render('index', {
		title: '首页'
	});
});



app.listen(3010, () => {
	console.log('server is listening on 3010');
});
