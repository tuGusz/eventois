//Fonte: https://github.com/rfsgoncalves/PPIAulaAoVivo01/blob/master/index.js
//Aula ao vivo com o professor.
import express from 'express';
import session from 'express-session';
import Autenticar from './auth/autenticar.js';
import { verificarAutenticacao } from './auth/autenticar.js';

const host = 'localhost';
const port = 3000;
const app = express();

app.set('view engine', 'ejs');
app.set('views', './private');  
app.use(express.urlencoded({extended: true}));
app.use(session({
    secret: 'segredo',
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 15
    }
}));

app.use(express.static('./public'));
app.use(express.static('./private'));  

app.get('/login', (req, res) => {
    res.render('login');   
});
app.post('/login', Autenticar);
app.use(verificarAutenticacao, express.static('./private'));
app.listen(port, host, () => {
    console.log("Servidor on-line.");
    console.log(`-> http://${host}:${port}`);
});
