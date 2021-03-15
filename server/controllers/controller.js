var Userdb = require('../models/model');

exports.create = (req, res) => {
    if(!req.body){
        res.status(400).send({message: "Espaço não pode estar vazio"});
        return;
    }

    const user = new Userdb({
        nome: req.body.nome,
        descricao: req.body.descricao,
        quantidade: req.body.quantidade
    })

    user 
    .save(user)
    .then(data => {
        //res.send(data)
        res.redirect('/add-caixa')
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Algum erro ocorreu ao criar a operação"
        })
    })
}

exports.find = (req, res) => {

    if(req.query.id){
        const id = req.query.id;

        Userdb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Caixa não encontrada id"+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro id" + id})
            })

    }else{
        Userdb.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Algum erro ocorreu" })
            })
    }
}

exports.update = (req, res) => {
    if(!req.body){
        return res
        .status(400)
        .send({message: "Caixa não pode estar vazia"})
    }

    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Não foi possível atualizar ${id}.`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Erro ao atualizar caixa"})
        })
}

exports.delete = (req, res) => {
    const id = req.params.id;

    Userdb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Não foi possível deletar ${id}.`})
            }else{
                res.send({
                    message : "Deletado com sucesso!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Não é possível deletar com id=" + id
            });
        });
}