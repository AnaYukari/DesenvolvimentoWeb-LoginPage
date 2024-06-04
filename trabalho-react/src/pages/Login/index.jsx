import logo from "../../images/NetflixLogo.png";
import style from "./style.module.css";
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
      setCount(0);
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
  },[count, email, password]);

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
    <>
    <div className={style.App}>
      <header className={style.AppHeader}>
        <div>
          <img src={logo} className={style.AppLogo} alt="logo" />
        </div>
        <div className={style.LoginBox}>
          <div className={style.LoginBoxContainer}>
            <p>
              <b>Entrar</b>
            </p>
            <p>
              <input
                className={style.EmaileSenha}
                placeholder="Insira seu Email ou número de telefone."
                onChange={(e) => setEmail(e.target.value)}
              />
            </p>
            <p>
              <input
                className={style.EmaileSenha}
                placeholder="Senha"
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
            </p>
            {mensagemErro && <p className={style.mensagemDeErro}>{mensagemErro}</p>}
            <button onClick={addCount}>Entrar</button>
            <p>
              <a className={style.TextoPequeno}>Esqueceu a senha?</a>
            </p>
            <div className={style.Lembrar}>
              <input type="checkbox" name="lembrar" onChange={addCheck} />
              <label htmlFor="lembrar"> Lembre-se de mim!</label>
            </div>
            <p className={style.Assine}>
              Novo por aqui?<a className={style.AppLink}> Assine agora</a>.
            </p>
            <div className={style.reCaptcha}>
              <p className={style.SaibaMais}>
                Esta página é protegida pelo Google reCAPTCHA para garantir que
                você não é um robô.<a className={style.AppLink}> Saiba mais.</a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <footer className={style.AppFooter}>
        <div className={style.AppFooterCont}>
          <div className={style.FooterCont}>
            <p>Dúvidas? Uma pena.</p>
            <p>
              <a>Perguntas frequentes</a>
            </p>
            <p>
              <a>Preferências de cookies</a>
            </p>
          </div>
          <div className={style.FooterCont}>
            <p>
              <a>Central de Ajuda</a>
            </p>
            <p>
              <a>Informações corporativas</a>
            </p>
          </div>
          <div className={style.FooterCont}>
            <p>
              <a>Termos de Uso</a>
            </p>
          </div>
          <div className={style.FooterCont}>
            <p>
              <a>Privacidade</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}

export default Login;