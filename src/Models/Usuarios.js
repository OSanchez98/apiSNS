const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
    Nombre: String,
    Apellidos: String,
    Direccion: String,
    Sexo: String,
    Fe_Nacimiento: String,
    Correo: String,
    Pass: String,
    file : {
        name: String,
        title: String,
        src: String
      }
})
module.exports = mongoose.exports('usuario',UsuarioSchema);