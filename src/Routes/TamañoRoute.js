const TamañoController = require('../Controllers/TamañoController');

module.exports = function(app)
{
    app.post('/api/tam/lista',TamañoController.tamañoLista);
    app.post('/api/tam/create',TamañoController.tamañoCreate);
}