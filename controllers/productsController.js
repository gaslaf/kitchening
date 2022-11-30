const fs = require('fs');
const path = require('path');
const products = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','products.json'),'utf-8'));
const categories = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','categories.json'),'utf-8'));
const {validationResult} = require('express-validator')
module.exports = {
    search: (req,res) => {
        title : 'algo'
    },
    detail: (req,res) =>{
        const producto = productos.find(product => product.id === +req.params.id) 
        return res.render('productDetail',{
            productos,
            product
        })
    },
    add: (req,res) => {
        return res.render('productAdd',{
            title: 'Agregar producto',
            categories
        })
    },
    store: (req,res) => {
        let errors = validationResult(req);
        
        if (req.fileValidationError) {
            let image = {
                param : 'image',
                msg: req.fileValidationError,
            }
            errors.errors.push(image)
        }
        if(errors.isEmpty()){
            const {nombre,descripcion,categoria} = req.body;
            let product = {
                id: products.length != 0 ?  products[products.length -1].id +1 : 1,
                name: nombre.trim(),
                category : categoria,
                description: descripcion.trim(),
                photos:  req.file.filename
        }
        }else{
            return res.render('productAdd',{
                categories,
                errors : errors.mapped(),
                old : req.body
            })
        products.push(product);
        fs.writeFileSync(path.join(__dirname,'..','data','products.json'),JSON.stringify(products,null,2),'utf-8')
        return res.redirect('/');
    }},
    edit: (req,res) => {
        res.render('productEdit',{
            title : 'algo',
            product : productos.find(product => product.id === +req.params.id) 
        })
    },
    update: (req,res) => {
        title : 'algo'
    },
    destroy: (req,res) => {
        title : 'algo'
    },
    }