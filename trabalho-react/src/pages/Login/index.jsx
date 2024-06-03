import logo from "trabalho-react\public\NetflixLogo.png";
import "./style.module.css";
import { useEffect, useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [count, setCount] = useState(0);
  const [mensagemErro, setMensagemErro] = useState("");
  const [check, setCheck] = useState(0);

  function addCount() {
    setCount((count) => count + 1);
  }

  function addCheck() {
    setCheck((check) => check + 1);
  }

  useEffect(() => {
    if (count !== 0) {
      setCount((count) => 0);
      if (email === "") {
        console.clear();
        console.log("Esqueceu de por email.");
        setMensagemErro("Insira um email ou número de telefone.");
      } else if (password === "") {
        console.clear();
        console.log("Esqueceu de por senha.");
        setMensagemErro("Insira sua senha.");
      } else {
        if (validaLogin(email, password)) {
          console.clear();
          setMensagemErro("");
          alert("Login feito com sucesso!");
        } else {
          console.clear();
          console.log("não entrou");
          console.log("email: ", email);
          console.log("senha: ", password);
          setMensagemErro("Email ou senha incorretos.");
        }
      }
    }
  },[count]);

  useEffect(() => {
    if (check !== 0) {
      if (check % 2 !== 0) {
        console.clear();
        alert("Você será lembrado!");
      } else {
        console.clear();
        alert("Agora você não será lembrado!");
      }
    }
  }, [check]);

  function validaLogin(email, password) {
    return email === "anayukari@gmail.com" && password === "ana1234";
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="Login-Box">
          <div className="Login-Box-Container">
            <p>
              <b>Entrar</b>
            </p>
            <p>
              <input
                className="EmaileSenha"
                placeholder="Insira seu Email ou número de telefone."
                onChange={(e) => setEmail(e.target.value)}
              />
            </p>
            <p>
              <input
                className="EmaileSenha"
                placeholder="Senha"
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
            </p>
            {mensagemErro && <p className="mensagem-de-erro">{mensagemErro}</p>}
            <button onClick={addCount}>Entrar</button>
            <p>
              <a className="Texto-pequeno">Esqueceu a senha?</a>
            </p>
            <div className="Lembrar">
              <input type="checkbox" name="lembrar" onChange={addCheck} />
              <label htmlFor="lembrar"> Lembre-se de mim!</label>
            </div>
            <p className="Assine">
              Novo por aqui?<a className="App-link"> Assine agora</a>.
            </p>
            <div className="reCaptcha">
              <p className="SaibaMais">
                Esta página é protegida pelo Google reCAPTCHA para garantir que
                você não é um robô.<a className="App-link"> Saiba mais.</a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <footer className="App-footer">
        <div className="App-footerCont">
          <div className="Footer-cont">
            <p>Dúvidas? Uma pena.</p>
            <p>
              <a>Perguntas frequentes</a>
            </p>
            <p>
              <a>Preferências de cookies</a>
            </p>
          </div>
          <div className="Footer-cont">
            <p>
              <a>Central de Ajuda</a>
            </p>
            <p>
              <a>Informações corporativas</a>
            </p>
          </div>
          <div className="Footer-cont">
            <p>
              <a>Termos de Uso</a>
            </p>
          </div>
          <div className="Footer-cont">
            <p>
              <a>Privacidade</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Login;