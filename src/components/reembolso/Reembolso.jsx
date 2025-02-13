import Home from "../../assets/Dashboard/home.png";
import Seta from "../../assets/Dashboard/Vector.png";
import sytlkes from "./Reembolso.module.scss";

function Reembolso(){
    return(
        <div>
            <header>
                <img src={Home} alt="Casinha da header" />
                <img src={Seta} alt="Setinha da header" />
                <p>Reembolsos</p>
            </header>
            <main>
                <h1>Sistema de Reembolsos</h1>
                <p>
                    Solicite novos pedidos de reembolso, visualize solicitações em análise e todo o histórico.
                </p>
                <section>
                    
                </section>
            </main>
        
        </div>
    )
}

export default Reembolso