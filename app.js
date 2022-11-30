const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const indexRouter = require('./routes/index');
const productsRouter = require('./routes/products');

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs'); 

app.use('/',indexRouter);
app.use('/products',productsRouter);

app.use(express.static('public'))

app.listen(port, () => console.log(`Corriendo en ${port}`))



