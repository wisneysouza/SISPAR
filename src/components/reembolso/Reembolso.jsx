import Home from "../../assets/Dashboard/home.png";
import Seta from "../../assets/Dashboard/Vector.png";
import styles from "./Reembolso.module.scss";
import Analises from "../../assets/Dashboard/Analises.png";
import NumeroAnalise from "../../assets/Dashboard/N-Analises.png";
import NumeroAprovados from "../../assets/Dashboard/N-Aprovados.png";
import NumeroRejeitados from "../../assets/Dashboard/N-Rejeitados.png";
import NumeroSolicitados from "../../assets/Dashboard/N-Solicitados.png";
import Sistema from "../../assets/Dashboard/Sistema-atualizado.png";
import SolicitarHistorico from "../../assets/Dashboard/Solicitar - Histórico.png";
import SolicitarReembolso from "../../assets/Dashboard/Solicitar - Reembolso.png";

//importando o componente navBar

import NavBar from "../navbar/NavBar.jsx"

function Reembolso() {
  return (

    <div className={styles.layout}>

      <NavBar />

      <header>
        <img src={Home} alt="Casinha da header" />
        <img src={Seta} alt="Setinha da header" />
        <p>Reembolsos</p>
      </header>

      <main className={styles.mainReembolso}>

        <h1>Sistema de Reembolsos</h1>
        <p>
          Solicite novos pedidos de reembolso, visualize solicitações em análise
          e todo o histórico.
        </p>

        <section className={styles.containerCards}>
            
          <article>
            <img
              src={SolicitarReembolso}
              alt="Ícone para solicitação de reembolso"
            />
            <h3>solicitar Reembolso</h3>
          </article>

          <article>
            <img src={Analises} alt="Ícone para análises" />
            <h3>Verificar Análises</h3>
          </article>

          <article>
            <img src={SolicitarHistorico} alt="Ícone de hidtórico" />
            <h3>Histórico</h3>
          </article>

        </section>

        <section className={styles.containerStatus}>
          <div>
            <img
              className={styles.imgSolicitados}
              src={NumeroSolicitados}
              alt=""
            />
            <h4>182</h4>
            <p>Solicitados</p>
          </div>

          <div>
            <img className={styles.imgEmAnalise} src={NumeroAnalise} alt="" />
            <h4>74</h4>
            <p>Em análise</p>
          </div>

          <div>
            <img className={styles.imgAprovados} src={NumeroAprovados} alt="" />
            <h4>195</h4>
            <p>Aprovados</p>
          </div>

          <div>
            <img
              className={styles.imgRejeitados} src={NumeroRejeitados} alt="" />
            <h4>41</h4>
            <p>Rejeitados</p>
          </div>

        </section>

        <section className={styles.containerSistema}>
          <img src={Sistema} alt="" />
          <p>Sistema atualizado.</p>
        </section>

      </main>
    </div>
  );
}

export default Reembolso;
