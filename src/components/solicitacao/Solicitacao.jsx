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
import { useState } from "react";

function Solicitacao() {
  const [colaborador, setColaborador] = useState(""); // Estado para o campo colaborador
  const [empresa, setEmpresa] = useState(""); // Estado para o campo empresa
  const [nPrestacao, setnPrestacao] = useState(""); // Estado para o campo número de prestação
  const [descricao, setDescricao] = useState(""); // Estado para o campo  descrição
  const [data, setData] = useState(""); // Estado para o campo data
  const [motivo, setMotivo] = useState(""); // Estado para o campo motivo  //ESSE ESTADO É PARA QUEM TÁ FAZENDO AVANÇADO UTILIZANDO MODAL
  const [tipoReembolso, setTipoReembolso] = useState(""); // Estado para o campo tipo de reembolso
  const [centroCusto, setCentroCusto] = useState(""); // Estado para o campo centro de custo
  const [ordemInterna, setorOrdemInterna] = useState(""); // Estado para o campo ordem interna
  const [divisao, setDivisao] = useState(""); // Estado para o campo divisão
  const [pep, setPep] = useState(""); // Estado para o campo pep
  const [moeda, setMoeda] = useState(""); // Estado para o campo moeda
  const [distanciaKm, setDistanciaKm] = useState(""); // Estado para o campo distância km
  const [valorKm, setValorKm] = useState(""); // Estado para o campo valor km
  const [valorFaturado, setValorFaturado] = useState(""); // Estado para o campo valor faturado
  const [despesa, setDespesa] = useState(""); // Estado para o campo despesa
  const[dadosReembolso, setDadosReembolso] = useState([]);

  //--função para capturar os valroes dos estados --

const handleSubmit = () => {
  const objetosReembolso = {
    colaborador,
    empresa,
    nPrestacao,
    descricao,
    data,
    tipoReembolso,
    ordemInterna,
    centroCusto,
    divisao,
    pep,
    moeda,
    distanciaKm,
    valorKm,
    valorFaturado,
    despesa
  };
setDadosReembolso(dadosReembolso.concat(objetosReembolso))
};

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
                <input value={colaborador} type="text" name="" id="nome-completo" />
              </div>

              <div className={styles.inputEmpresa}>
                <label htmlFor="">Empresa</label>
                <input value={empresa} type="text" name="" id="empresa" />
              </div>

              <div className={styles.inputPrestacao}>
                <label htmlFor="">N° Prest. Contas</label>
                <input value={nPrestacao} type="text" name="" id="prestacao-contas" />
              </div>

              <div className={styles.inputMotivo}>
                <label htmlFor="">Descrição / Motivo do Reembolso</label>
                <textarea value={descricao} name="" id="">   {""}     </textarea>
              </div>
            </div>

            <div className={styles.barraVertical}></div>

            <div className={styles.grupo2}>
              <div className={styles.inputData}>
                <label htmlFor="">Data</label>
                <input value={data} type="date" name="" id="" />
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
                <input value={ordemInterna} type="number" name="" id="" />
              </div>

              <div className={styles.divisoes}>
                <label htmlFor="">Div.</label>
                <input value={divisao} type="number" name="" id="" />
              </div>

              <div className={styles.pep}>
                <label htmlFor="">PEP</label>
                <input value={pep} type="number" name="" id="" />
              </div>

              <div className={styles.moeda}>
                <label htmlFor="">Moeda</label>
                <input value={moeda} type="text" name="" id="" />
                <select name="" id="">
                  <option value="">Selecionar</option>
                  <option value="">BRL</option>
                  <option value="">ARS</option>
                  <option value="">USD</option>
                </select>
              </div>

              <div className={styles.distancia}>
                <label htmlFor="">Dist / Km</label>
                <input value={distanciaKm} distancia type="text" name="" id="" />
              </div>

              <div className={styles.valorKm}>
                <label htmlFor="">Valor / Km</label>
                <input value={valorKm} type="number" name="" id="" />
              </div>

              <div className={styles.valorFaturado}>
                <label htmlFor="">Valor Faturado</label>
                <input value={valorFaturado} type="number" name="" id="" />
              </div>

              <div className={styles.despesa}>
                <label htmlFor="">Despesa</label>
                <input value={despesa} type="number" name="" id="" />
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
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <img src={Motivo} alt="ícone do motivo" />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>


        </main>
        <footer>
            
          <div className={styles.total}>
            <div className={styles.totalFaturado}>
              <label htmlFor="">Total Faturado</label>
              <input value={totalFaturado} type="number" name="totalFaturado" id="totalFaturado" />
            </div>

            <div className={styles.totalDespesa}>
              <label htmlFor="">Total Despesa</label>
              <input value={totalDespesa} type="number" name="totalDespesa" id="totalDespesa" />
            </div>

            <div className={styles.botoesAnalise}>
            <button className={styles.botaoEnviarAnalise}>
                <img src={Check} alt="ícone do botão enviar" /> Enviar para Análise</button>
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
