const express = require('express');
const con = require ('./db'); 
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(3000, () =>{
    con.connect((erro)=>{
        if(!erro){
            console.log('Servidor OK');
        }else{
            console.log('Erro: ' + erro.sqlMessage)
        }
    })
});

app.get('/contatos', (req, res) => {
    const slq = 'SELECT * FROM contatos';
    con.query(slq, (erro, resultado) => {
        if (!erro) {
            res.send(resultado);
        } else {
            res.send('Erro = '+ erro.sqlMessage)
        }
    });
});

app.get('/contatos/:id', (req,res)=>{
    const id = req.params.id;
    const sql = 'SELECT * FROM contatos WHERE cocliente = ?';
    con.query(sql,[id], (erro, resultado) =>{
        if(!erro){
            console.log(resultado)
            res.send(resultado);
        }else{
            res.send('Erro = '+ erro.sqlMessage);
        }
    });
});

app.post('/tbagenda', (req,res)=>{
    const cont = req.body;
    const sql = 'INSERT INTO contatos( nome, apelido, whatsapp, observacoes, foto, nota ) VALUES (?,?,?,?)';
    con.query(sql, [cont.nome, cont.apelido, cont.whatsapp, cont.observacoes, cont.foto, cont.nota], (erro, resultado)=>{
        if(!erro){
            console.log(resultado)
            res.send(resultado);
        }else{
            res.send('Erro = '+ erro.sqlMessage);
        }
    });
});

app.delete('/tbagenda/:id/', (req, res)=>{
    const cont = req.params.id;
    const sql = 'DELETE FROM contatos WHERE contatos = ?';
    con.query(sql, [cont], (erro, resultado)=>{
        if(!erro){
            res.send(resultado);
        }else{
            res.send('Erro = '+ erro.sqlMessage)
        }
    });
});

app.put('/contatos', (req, res)=>{
    const cont = req.body;
    const sql = 'UPDATE clientes SET nome = ?, apelido = ?, whatsapp = ?, observacoes, foto, nota = ? WHERE cocliente = ?';
    con.query(sql, [cont.nome, cont.apelido, cont.whatsapp, cont.observacoes, cont.foto, cont.nota], (erro, resultado)=>{
        if(!erro){
            console.log(resultado)
            res.send(resultado);
        }else{
            res.send('Erro = '+ erro.sqlMessage);
        }
    });
})