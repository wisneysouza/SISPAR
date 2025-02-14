import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loggin from "./components/loggin/Loggin.jsx";
import Reembolso from "./components/reembolso/Reembolso.jsx";
import Solicitacao from "./components/solicitacao/Solicitacao.jsx";
import "./global.scss";

function App() {
  return (
   <BrowserRouter>
      <Routes>
       <Route path="/" element={<Loggin />} />
       <Route path="/reembolso" element={<Reembolso />} />
       <Route path= "/solicitacao" element={<Solicitacao/>} />
      </Routes>
    </BrowserRouter>
   
  );
}
export default App;
