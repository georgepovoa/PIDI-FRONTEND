import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' 
import Master from "./Master";
import Ajustes from "./Ajustes";
import Cadastro from "./Cadastro";
import Chat from "./Chat";
import Contrato from "./Contrato";
import Login from "./Login";
import Pagamentos from "./Pagamentos";
import Perfil from "./Perfil";
import Home from './Home';
import styled from 'styled-components';

// const H2 = styled.h2`
//   vertical-align: center;
//   text-align: center;

// `;

// const Topnav = styled.section`
// display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: space-between;
//   background-color: #00BAF0;
//   background: linear-gradient(to left, #f46b45, #eea849);
//   /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
//   color: #FFF;
//   height: 50px;
//   padding: 1em;

// `;

// const Menu = styled.ul`
// display: flex;
//   flex-direction: row;
//   list-style-type: none;
//   margin: 0;
//   padding: 0;

// `;

// const MenuLi = styled.li`
// margin: 0 1rem;
//   overflow: hidden;

// `;

// const MenuBtnContainer = styled.button`
// display: none;
//   height: 100%;
//   width: 30px;
//   cursor: pointer;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;

// `;

// const MenuToggle = styled.input`
// display: none;

// `;

const Alink = styled.a`
  color : white;
  text-decoration : none;

`;








function App() {
  return (<>
  
    <section class="top-nav">
    <div>
      Logo Here
    </div>
    <input id="menu-toggle" type="checkbox" />
    <label class='menu-button-container' for="menu-toggle">
    <div class='menu-button'></div>
  </label>
    <ul class="menu">
      <li><Alink href='/'>Principal</Alink></li>
      <li><Alink href='/perfil'>Perfil</Alink></li>
      <li><Alink href='#'>Meus Planos</Alink></li>
      <li><Alink href='#'>Meus Pagamentos</Alink></li>
      <li><Alink href='#'>Area do Personal</Alink></li>
      <li><Alink href='#'>Configurações</Alink></li>
      <li><Alink href='#'>Sobre</Alink></li>
    </ul>
  </section>

    
    
    <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/cadastro" element={<Cadastro/>}/>
          <Route exact path="/master" element={<Master/>}/>
          <Route exact path="/ajustes" element={<Ajustes/>}/>
          <Route exact path="/perfil" element={<Perfil/>}/>
          <Route exact path="/pagamentos" element={<Pagamentos/>}/>
          <Route exact path="/contrato" element={<Contrato/>}/>
          <Route exact path="/chat" element={<Chat/>}/>
        </Routes>
    </Router>
    </>
  );
}

export default App;
