import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Tela Login/logo-ws.png";
import styles from "./Loggin.module.scss";
import api from "../../Services/Api"
import{ useState} from "react"

function Loggin() {
  const navigate = useNavigate()
  const irPraReembolso = () => {
    navigate("/reembolso")
  }

  const [email, setEmail] = useState("")
  const[senha, setSenha] = useState("")

  const fazerLogin = async (e) => {
    e.preventDefault();//previne o carregamento da pagina

  try{
    const resposta = await api.post("/colaborador/login",{
      "email": email,
    "senha":senha
  }) // <-- realizar a requisicao com o verbo POST para a rota de login
  console.log(resposta.data)
  alert("Login realizado com sucesso!")
  irPraReembolso()


  } catch(error){
    console.log("Erro ao fazer o login: ",error)
    alert("Deu erro no login aqui ó")
  } 

  } 

  return (
    <main className={styles.mainReembolso}>

      <section className={styles.containerImagem}></section>

      <section className={styles.containerForm}>
        <img src={Logo} alt="Logo da Wilson Sons" />

        <h1>Boas vindas ao Novo Portal SISPAR</h1>

        <p>Sistema de Emissão de Boletos e Parcelamento</p>

        <form className={styles.formLogin}>

          <input type="email" name="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          
          <input type="password" name="password" id="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)}
          />

          <a href="">Esqueci minha senha </a>

          <div>
            <button onClick={fazer.login} className={styles.buttonEntrar}>Entrar</button>
            <button className={styles.buttonCriar}>Criar conta</button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Loggin;
