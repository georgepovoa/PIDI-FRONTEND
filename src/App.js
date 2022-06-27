import './App.css';
import logo from "./imgs/99logo.png";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' ;
import { ChakraProvider } from '@chakra-ui/react'
import Aulas_tela from './aulas';

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
import Planos from './Planos';
import Alunos from './perfil-pages/Alunos';
import DadosStats from './perfil-pages/Dados';
import EditarPerfil from './perfil-pages/EditarPerfil';
import Financeiro from './perfil-pages/Financeiro';
import Report from './perfil-pages/Report';
import InsideChat from './chat/InsideChat';
import List_reports from './List_reports';

const Alink = styled.a`
  color : white;
  text-decoration : none;
  opacity: ${props => props.inativo ? 0.3 : 1};


`;

const Logozin = styled.img`

  width:80px;
  height:25px;
`;


function App() {
  return (<>
  
  
    <section class="top-nav">
    <div>
      <a href='/'><Logozin src={logo}></Logozin></a>
    </div>
    <input id="menu-toggle" type="checkbox" />
    <label class='menu-button-container' for="menu-toggle">
    <div class='menu-button'></div>
  </label>
    <ul class="menu">
      <li><Alink href='/'>Principal</Alink></li>
      <li><Alink href='/perfil'>Perfil</Alink></li>
      <li><Alink href='/login'>Login</Alink></li>
      <li><Alink href='/cadastro'>Cadastro</Alink></li>
      <li><Alink href='/chat'>Chat</Alink></li>
      <li><Alink href='/reports_tela'>Área de Admin.</Alink></li>
      <li><Alink href='/tela_aulas'>Area Aulas</Alink></li>
      <li><Alink href='#' inativo>Configurações</Alink></li>
      <li><Alink href='#' inativo>Sobre</Alink></li>
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
          <Route exact path="/chat/user" element={<InsideChat/>}/>
          <Route exact path="/planos" element={<Planos/>}/>
          

          <Route exact path="/alunos" element={<Alunos/>}/>
          <Route exact path="/dadosStats" element={<DadosStats/>}/>
          <Route exact path="/editarPerfil" element={<EditarPerfil/>}/>
          <Route exact path="/financeiro" element={<Financeiro/>}/>
          <Route exact path='/reports_tela' element = {<List_reports/>}/>
          <Route exact path="/report" element={<Report/>}/>
          <Route exact path="/tela_aulas" element={<Aulas_tela/>}/>

        </Routes>
    </Router>
    </>
  );
}

export default App;
