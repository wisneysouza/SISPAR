import NavBar from "../navbar/NavBar.jsx";
//importando o componente NavBar
import Home from "../../assets/Dashboard/home.png";
import Seta from "../../assets/Dashboard/Vector.png";
//importando as imagens
import styles from "./Solicitacao.module.scss";
//importando a estilização

function Solicitacao() {
  return (
    <div className={styles.layoutSolicitacao}>
      <NavBar />

      <div className={styles.containerPrincipalSolicitacao}>
        {/* //div envolvendo a haeader e a main */}
        <header className={styles.headerSolicitacao}>
          <img src={Home} alt="Casinha da header" />
          <img src={Seta} alt="Setinha da header" />
          <p>Reembolsos</p>
          <img src={Seta} alt="Setinha da header" />
          <p>Solicitação de Reembolsos</p>
        </header>

        <main className={styles.mainSolicitacao}>
          <form className={styles.formSolicitacao}>
            <div className={styles.grupo1}>
              <div className={styles.inputNome}>
                <label htmlFor="">Nome Completo</label>
                <input type="text" name="" id="nome-completo" />
              </div>

              <div className={styles.inputEmpresa}>
                <label htmlFor="">Empresa</label>
                <input type="text" name="" id="empresa" />
              </div>

              <div className={styles.inputPrestacao}>
                <label htmlFor="">N° Prest. Contas</label>
                <input type="text" name="" id="prestacao-contas" />
              </div>

              <div className={styles.inputMotivo}>
                <label htmlFor="">Descrição / Motivo do Reembolso</label>
                <textarea name="" id="">
                  {""}
                </textarea>
              </div>
             </div>

             <div className={styles.barraVertical}></div>

             <div className={styles.grupo2}>
                <div className={styles.inputData}>
                    <label htmlFor="">Data</label>
                    <input type="date" name="" id="" />

                </div>
                
              <div className={styles.despesa}>
                <select name="" id="">
                  <option value="Selecionar"></option>
                  <option value="">Alimentação</option>
                  <option value="">Combutíval</option>
                </select>
              </div>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}

export default Solicitacao