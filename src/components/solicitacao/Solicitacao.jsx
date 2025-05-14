import { useState, useEffect } from "react";

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

import Api from "../../Services/Api.jsx"; //importando a conexão

function Solicitacao() {
   //Usando o hook useState do React, que serve para criar e controlar um estado dentro do componente.
  // const [estado, setEstado] = useState("")
  //estado:  é a variável que guarda os dados (o valor atual).
  //setEstado: é a função que atualiza esse valor.
  // useState("")  O valor inicial é uma string vazia (""), ou seja, ainda não foi preenchido nada.
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

  // Esse é o array que irá receber os dados em formato de objeto
  //useState([])  Estamos dizendo que o estado vai começar como um array vazio ([]), porque vamos armazenar vários objetos de reembolso ali.
  //Criei uma caixinha chamada dadosReembolso para guardar todos os reembolsos que o usuário for adicionando.Ela começa vazia, e eu posso atualizar essa lista com a função setDadosReembolso.
const [enviado, setEnviado] = useState(false);

useEffect(() =>{
  if(enviado){
    setDadosReembolso([]); //limpa os dados após o envio
    setEnviado(false); //reseta o estado de controle
  }
}, [enviado]);

  //-------------------------------------FUNÇÃO PARA CAPTURAR OS VALORES DOS ESTADOS-----------------------

  // Essa função captura os valores dos estados, coloca eles organizados em objetos que serão adicionados no array dadosReembolso para serem exibidos no map
  // Função que é chamada quando o formulário é enviado

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
  //alert("Formulário enviado com sucesso!"); //mostra um alerta na tela para o usuário, avisando que o formulário foi enviado corretamente


setDadosReembolso(dadosReembolso.concat(objetosReembolso))

    // Aqui acontece a atualização da lista de reembolsos.
    // setDadosReembolso(...) atualiza o estado com essa nova lista.
    // dadosReembolso é o estado atual com os reembolsos anteriores.
    // concat(objetoReembolso) adiciona o novo reembolso no final da lista, sem modificar os anteriores.
  
  limparCampos();//quando clicar em salvar, ativa a função de limpar os campos

};

  //--------------------FUNÇÃO PARA ENVIAR OS DADOS PARA O BD -----------
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTc0NDM5ODU5NiwianRpIjoiOTdkNWI0YmUtOTU3My00ZmEzLTlkY2ItMjE2MGY3MmRiZmUzIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6IjEiLCJuYmYiOjE3NDQzOTg1OTYsImNzcmYiOiIwNGViOTcwNy05NDFjLTQwYWItOTJiZS04ZjU0MTliNGFmOTQiLCJleHAiOjE3NDQzOTk0OTZ9.R87xKzHSVishWF8ZNjWnRnhfoEmS0GXx4sN2y6TUR70";

  //// Função que será chamada quando quisermos enviar os dados do reembolso
  const enviarParaAnalise = async () => {
    try {
      const response = await Api.post("/refunds/new", dadosReembolso, {
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
  
      setEnviado(true); // Aciona o useEffect
    } catch (error) {
      console.error("Erro ao enviar:", error);
    }
  };

  ///----------------FUNÇÃO DE DELETAR ----------------------
  // Essa função serve para remover um item da lista de reembolsos, com base no número da posição dele (índice). Ela cria uma nova lista sem aquele item e atualiza o estado com essa nova lista.

  const handleDelete = (index) => {
    setDadosReembolso(dadosReembolso.filter((item, i) => i !== index));
  };

  // Essa é uma função chamada handleDelete.
  // Ela recebe como parâmetro um index, que representa a posição do item que queremos remover da lista dadosReembolso.

  // setDadosReembolso(...)  Aqui usamos o setDadosReembolso, que é a função que atualiza o estado dadosReembolso. Ou seja, estamos dizendo: "Atualize a lista de reembolsos com uma nova lista, sem o item que queremos excluir."

  // dadosReembolso.filter((item, i) => i !== index)
  // filter percorre toda a lista de reembolsos.
  // Para cada item da lista, ele também pega o índice atual, representado por i. I = ÍNDICE ATUAL

  // A condição i !== index diz: "só mantenha os itens cujo índice for diferente do índice que queremos remover."

  // Resultado: o item com o índice passado na função é removido da lista, e todos os outros permanecem.

  //--------------FUNÇÃO DE LIMPAR OS INPUTS QUANDO CLICAR EM SALVAR -----------------------

  const limparCampos = () => {
    setColaborador(""),
      setEmpresa(""),
      setnPrestacao(""),
      setDescricao(""),
      setData(""),
      setMotivo(""),
      setTipoReembolso(""),
      setCentroCusto(""),
      setorOrdemInterna(""),
      setDivisao(""),
      setPep(""),
      setMoeda(""),
      setDistanciaKm(""),
      setValorKm(""),
      setValorFaturado(""),
      setDespesa("");
  };

  //---------------FUNÇÃO PARA LIMPAR TODA A LISTA, AO CLICAR NO BOTÃO CANCELAR REEMBOLSO ----

  const cancelarSolicitacao = () => {
    setDadosReembolso([]); // limpa todos os dados salvos
    limparCampos(); // limpa os inputs também (se quiser)
  };

  //-------------------

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
          {/* onSubmit:  É um evento que dispara quando você clica no botão de “Enviar” 
       (e) => e.preventDefault():Essa é uma função que bloqueia o comportamento padrão do formulário. */}

          {/* OBS: Em HTML puro, quando você envia um <form>, ele recarrega a página automaticamente.
      Só que no React a gente não quer que isso aconteça, porque a gente controla tudo com JavaScript e hooks (useState, useEffect, etc).
      Por isso, usamos e.preventDefault() pra impedir o recarregamento da página. */}

          <form  onSubmit={(e) => e.preventDefault()} className={styles.formSolicitacao}>
            <div className={styles.grupo1}>
              <div className={styles.inputNome}>
                {/* onChange:  é um evento no React (e também no HTML puro) que dispara quando o valor de um campo muda.
Diz ao React: “toda vez que o usuário digitar algo nesse campo, atualize a variável colaborador com o novo valor”. 
e.target.value é o que foi digitado pelo usuário.
*/}

                <label htmlFor="nome">Nome Completo</label>
                <input value={colaborador} type="text" name="colaborador" onChange={(e) => setColaborador(e.target.value)}/>
              </div>

              <div className={styles.inputEmpresa}>
                <label htmlFor="empresa">Empresa</label>
                <input value={empresa} type="text" name="empresa"  onChange={(e) => setEmpresa(e.target.value)}/>
              </div>

              <div className={styles.inputPrestacao}>
                <label htmlFor="prestacao">N° Prest. Contas</label>
                <input value={nPrestacao} type="number" name="nPrestacao"  onChange={(e) => setnPrestacao(e.target.value)} />
              </div>

              <div className={styles.inputMotivo}>
                <label htmlFor="descricao">Descrição / Motivo do Reembolso</label>
                <textarea value={descricao} name="descricao"  onChange={(e) => setDescricao(e.target.value)}>  </textarea>
              </div>
            </div>

            <div className={styles.barraVertical}></div>

            <div className={styles.grupo2}>
              <div className={styles.inputData}>
                <label htmlFor="date">Data</label>
                <input value={data} type="date" name="data"  onChange={(e) => setData(e.target.value)} />
              </div>

              <div className={styles.tipoDeDespesa}>
                <label htmlFor="tipoReembolso">Tipo de Despesa</label>
                

                <select name="tipoReembolso" id="tipoReembolso" onChange={(e) => setTipoReembolso(e.target.value)}>
                  <option value="selecionar">Selecionar</option>
                  <option value="alimentacao">Alimentação</option>
                  <option value="combustivel">Combutíval</option>
                  <option value="conducao">Condução</option>
                  <option value="estacionamento">Estacionamento</option>
                  <option value="viagem adm">Viagem Admin.</option>
                  <option value="viagem oper">Viagem Operacional</option>
                  <option value="eventos">Eventos de Representação</option>
                </select>
              </div>

              <div className={styles.centroDeCusto}>
                <label htmlFor="custo">Centro de Custo</label>

                <select name="centroCusto" id="centroCusto" value={centroCusto} onChange={(e) => setCentroCusto(e.target.value)}>

                  <option value="">Selecionar</option>
                  <option value="FIN CONTROLES INTERNOS MTZ">
                    1100109002 - FIN CONTROLES INTERNOS MTZ
                  </option>
                  <option value="FIN VICE-PRESIDENCIA FINANCAS MTZ">
                    1100110002 - FIN VICE-PRESIDENCIA FINANCAS MTZ
                  </option>
                  <option value="FIN CONTABILIDADE MTZ">1100110101 - FIN CONTABILIDADE MTZ
                  </option>
                </select>
              </div>

              <div className={styles.ordem}>
                <label htmlFor="ordemInterna">Ord. Int.</label>
                <input value={ordemInterna} type="text" name="ordemInterna" id="ordemInterna" onChange={(e) => setorOrdemInterna(e.target.value)}/>
              </div>

              <div className={styles.divisoes}>
                <label htmlFor="divisao">Div.</label>
                <input value={divisao} type="text" name="divisao" id="divisao" onChange={(e) => setDivisao(e.target.value)} />
              </div>

              <div className={styles.pep}>
                <label htmlFor="pep">PEP</label>
                <input value={pep} type="text" name="pep" id="PEP" onChange={(e) => setPep(e.target.value)} />
              </div>

              <div className={styles.moeda}>
                <label htmlFor="moeda">Moeda</label>
                <select value={moeda} name="moeda" id="coents" onChange={(e) => setMoeda(e.target.value)} >
                  <option value="">Selecionar</option>
                  <option value="brl">BRL</option>
                  <option value="ars">ARS</option>
                  <option value="usd">USD</option>
                </select>
              </div>

              <div className={styles.distancia}>
                <label htmlFor="distancia">Dist / Km</label>
                <input value={distanciaKm} type="text" name="distanciaKm" id="distance-input" onChange={(e) => setDistanciaKm(e.target.value)} />
              </div>

              <div className={styles.valorKm}>
                <label htmlFor="valor">Valor / Km</label>
                <input value={valorKm} type="text" name="valorKm" onChange={(e) => setValorKm(e.target.value)} />
              </div>

              <div className={styles.valorFaturado}>
                <label htmlFor="faturado">Valor Faturado</label>
                <input value={valorFaturado} type="text" name="valorFaturado" onChange={(e) => setValorFaturado(e.target.value)} />
              </div>

              <div className={styles.despesa}>
                <label htmlFor="taxa">Despesa</label>
                <input value={despesa} type="text" name="despesa" id="despesa" onChange={(e) => setDespesa(e.target.value)} />
              </div>

              <div className={styles.botoes}>
                <button className={styles.botaoSalvar} onClick={handleSubmit} type="submit">
                  <img src={Salvar} alt="" />Salvar</button>

                <button className={styles.botaoDeletar}type="button" inClick={() =>{limparCampos();}}>
                  <img src={Del} alt="ícone do botão deletar" />
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
              {dadosReembolso.map(item, index) }
              <tr key={index}>
                <td>
                  <button onClick={() => handleDelete(index)}
                    className ={styles.buttonLixeira}
                  > 

                  
                  <img className="styles.lixeira" src={Lixeira} alt="ícone da lixeira" />
                </button>
                </td>
                <td>{item.colaborador}</td>
                <td>{item.empresa}</td>
                <td>{item.nPrestacao}</td>
                <td>{item.data}</td>

                <td>
                  <img src={Motivo} alt="ícone do motivo" />
                </td>

                {/*<td>{item.descricao}</td>*/}
                <td>{item.tipoReembolso}</td>
                <td>{item.centroCusto}</td>
                <td>{item.ordemInterna}</td>
                <td>{item.divisao}</td>
                <td>{item.pep}</td>
                <td>{item.moeda}</td>
                <td>{item.distancia}</td>
                <td>{item.valorKm}</td>
                <td>{item.valorFaturado}</td>
                <td>{item.despesa}</td>
              </tr>
            
            </tbody>
          </table>


        </main>

        <footer className={styles.footerSolicitacao}>
          <div className={styles.total}>

            <div className={styles.totalFaturado}>
              <label>Total Faturado</label>
              <input value={dadosReembolso .reduce((total, item) => total +Number(item.valorFaturado || 0),0) .toFixed(2)} type="text"/>
            </div>

{/* 
.reduce serve para percorrer a lista inteira e somar os valores de valorFaturado/despesa.
Soma o total atual com o valor da despesa do item.
Usa Number(...) para garantir que seja um número (evita erros caso venha uma string).
O 0 no final é o valor inicial da soma

Usa item.despesa || 0 para evitar undefined — se não tiver valor, ele usa 0.
.tofixed: Ele formata o número com 2 casas decimais.
Mesmo que a soma dê 150, ele vai mostrar 150.00.
Se a soma for 10.5, vai mostrar 10.50. */}

            <div className={styles.totalDespesa}>
              <label>Total Despesa</label>
              <input value={dadosReembolso .reduce((total, item) => total +Number(item.despesa || 0),0) .toFixed(2)}
              type="text"  />
            </div>

            <div className={styles.botoesAnalise}>
            <button className={styles.botaoEnviarAnalise} onClick={enviarParaAnalise}>
                <img src={Check} alt="ícone do botão enviar" /> Enviar para Análise{""}</button>

                <button className={styles.cancelar} onClick={cancelarSolicitacao}>
                  <img src={X} alt="ícone do botão cancelar" />
                  Cancelar Solicitação{""}
                </button>
                </div>


          </div>
        </footer>
      </div>
    </div>
    
  );
}

export default Solicitacao;
