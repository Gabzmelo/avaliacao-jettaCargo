const axios = require('axios');


exports.homeRoutes = (req,res) => {
    axios.get('http://localhost:3000/api/users')
        .then(function(response){
            res.render('index', { users : response.data });
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.add_caixa = (req,res) =>{
    res.render('add_caixa');
}

exports.update_caixa = (req,res) => {
    axios.get('http://localhost:3000/api/users', {params: {id:req.query.id}})
    .then(function(userdata){
        res.render('update_caixa', {user: userdata.data})
    })
    .catch(err => {
        res.send(err);
    })
}