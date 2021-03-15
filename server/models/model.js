const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    nome:{
        type: String,
        required:true,
    },
    descricao: {
        type: String,
        required: true
    },
    quantidade: {
        type: String,
        required: true
    }
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;