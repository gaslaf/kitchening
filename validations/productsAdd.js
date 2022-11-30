const {check} = require('express-validator');

module.exports = [
    check('nombre')
    .notEmpty().withMessage('El nombre es obligatorio'),
    
    check('descripcion')
    .isLength({
        min: 20
    }).withMessage('Minimo   20 caracteres'),

    check('categoria')
    .notEmpty().withMessage('Seleccionar categoria')
]