export default function Autenticar(req, res) {
    const userInput = req.body.user;
    const passwordInput = req.body.password;

    if (userInput == "Renato" && passwordInput == "admin123") {
        req.session.autenticado = true;
        req.session.user = { username: userInput }
        console.log('Login bem-sucedido:', req.session.user);  

        //resposta.redirect('/private/principal');

        res.render('principal', { user: req.session.user });
    } else {
        res.status(401).json({ error: "Login falhou. Verifique seu usuário e senha." });
    }
}

export function verificarAutenticacao(req, res, next) {
    if (req.session.autenticado) {
        next();
    } else {
        res.redirect('./login.html');
    }
}
 