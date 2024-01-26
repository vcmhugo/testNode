const express = require('express');
const app = express();
const port = 5001;
const bodyparser = require('body-parser');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.post('/consulta',(req,res)=>{
    
    let nombre = req.body.name;
    let edad = req.body.edad;

    let usuario = {
        name:nombre,
        edad:edad
    }
    res.json(usuario);
    res.end();

})

if (require.main === module) {
    app.listen(port, () => {
        console.log('Server por el puerto', port);
    });
}

module.exports = app;

