import NavBar from "../navbar/NavBar.jsx";
//importando o componente NavBar
import Home from "../../assets/Dashboard/home.png";
import Seta from "../../assets/Dashboard/Vector.png";
//importando as imagens
import styles from "./Solicitacao.module.scss";
//importando a estilização
import Lixeira from "../../assets/Solicitacao/lixeira.png";
import Motivo from "../../assets/Solicitacao/motivo.png";
import Del from "../../assets/Solicitacao/deletar.png";
import Check from "../../assets/Solicitacao/check.png";
import X from "../../assets/Solicitacao/x.png"

function Solicitacao() {
  return (
    <div className={styles.layoutSolicitacao}>
      <NavBar />

      <div className={styles.containerPrincipalSolicitacao}>
        {/* div envolvendo a haeader e a main */}
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

              <div className={styles.tipoDeDespesa}>
                <label htmlFor="">Tipo de Despesa</label>

                <select name="" id="">
                  <option value="Selecionar"></option>
                  <option value="">Alimentação</option>
                  <option value="">Combutíval</option>
                  <option value="">Condução</option>
                  <option value="">Estacionamento</option>
                  <option value="">Viagem Admin.</option>
                  <option value="">Viagem Operacional</option>
                  <option value="">Eventos de Representação</option>
                </select>
              </div>

              <div className={styles.centroDeCusto}>
                <label htmlFor="">Centro de Custo</label>

                <select name="" id="">
                  <option value="">Selecionar</option>
                  <option value="">
                    1100109002 - FIN CONTROLES INTERNOS MTZ
                  </option>
                  <option value="">
                    1100110002 - FIN VICE-PRESIDENCIA FINANCAS MTZ
                  </option>
                  <option value="">1100110101 - FIN CONTABILIDADE MTZ</option>
                </select>
              </div>

              <div className={styles.ordem}>
                <label htmlFor="">Ord. Int.</label>
                <input type="number" name="" id="" />
              </div>

              <div className={styles.divisoes}>
                <label htmlFor="">Div.</label>
                <input type="number" name="" id="" />
              </div>

              <div className={styles.pep}>
                <label htmlFor="">PEP</label>
                <input type="number" name="" id="" />
              </div>

              <div className={styles.moeda}>
                <label htmlFor="">Moeda</label>
                <select name="" id="">
                  <option value="">Selecionar</option>
                  <option value="">BRL</option>
                  <option value="">ARS</option>
                  <option value="">USD</option>
                </select>
              </div>

              <div className={styles.distancia}>
                <label htmlFor="">Dist / Km</label>
                <input type="text" name="" id="" />
              </div>

              <div className={styles.valorKm}>
                <label htmlFor="">Valor / Km</label>
                <input type="number" name="" id="" />
              </div>

              <div className={styles.valorFaturado}>
                <label htmlFor="">Valor Faturado</label>
                <input type="number" name="" id="" />
              </div>

              <div className={styles.despesa}>
                <label htmlFor="">Despesa</label>
                <input type="number" name="" id="" />
              </div>

              <div className={styles.botoes}>
                <button className={styles.botaoSalvar}>+ Salvar</button>
                <button className={styles.botaoDeletar}>
                  <img src={Del} alt="ícone do botão deleltar" />
                </button>
              </div>
            </div>
          </form>

          {/* Table é a tag principal que define a tabela */}
          {/* Thead é a tag que agrupa o cabeçalho */}
          {/* Tr é a linha da tabela */}
          {/* Th cabeçalho da tabela, cada coluna receberá um th -  */}
          {/* tBody agrupa o corpo da tabela, ou seja, a parte principal onde armazena os dados */}
          {/* Td representa uma célula onde cada dado é colocado */}

          <table>
            <thead>
              <tr>
                <th></th>
                <th>Colaborador(a)</th>
                <th>Empresa</th>
                <th>N° Prest.</th>
                <th>Data</th>
                <th>Motivo</th>
                <th>Tipo de despesa</th>
                <th>Ctr. Custo</th>
                <th>Ord. Int.</th>
                <th>Div.</th>
                <th>PEP</th>
                <th>Moeda</th>
                <th>Dist. Km</th>
                <th>Vla. Km</th>
                <th>Val. Faturado</th>
                <th>Despesa</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <img src={Lixeira} alt="ícone da lixeira" />
                </td>
                <td>Maria Vagas Figueira de Souza Santos Silva</td>
                <td>Shell</td>
                <td>345</td>
                <td>10/07</td>
                <td>
                  <img src={Motivo} alt="ícone do motivo" />
                </td>
                <td>Alimentação</td>
                <td>Fin</td>
                <td>2</td>
                <td>1</td>
                <td>2</td>
                <td>BRL</td>
                <td>20km</td>
                <td>5.00</td>
                <td>20.00</td>
                <td>45.00</td>
              </tr>
            </tbody>
          </table>


        </main>
        <footer>
            
          <div className={styles.total}>
            <div className={styles.totalFaturado}>
              <label htmlFor="">Total Faturado</label>
              <input type="number" name="" id="" />
            </div>

            <div className={styles.totalDespesa}>
              <label htmlFor="">Total Despesa</label>
              <input type="number" name="" id="" />
            </div>

            <div className={styles.botoesAnalise}>
            <button className={styles.botaoEnviarAnalise}>
                <img src={Check} alt="ícone do botão cancelar" /> Enviar Análise</button>
                <button className={styles.cancelar}>
                  <img src={X} alt="ícone do botão cancelar" />
                   Cancelar Solicitação
                </button>
                </div>


          </div>
        </footer>
      </div>
    </div>
    
  );
}

export default Solicitacao;
