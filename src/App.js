import './App.css';
import logo from "./imgs/99logo.png";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' ;
import AulasTela from "./components/aulas/aulas"

import Cadastro from './components/auth/cadastro/Cadastro'
import Chat from "./components/chat/Chat";
import Contrato from "./components/contrato/Contrato"
import Login from "./components/auth/login/Login"
import Perfil from "./components/perfil-pages/Perfil";
import Home from './Home';
import styled from 'styled-components';
import Planos from './components/planos/Planos';
import Alunos from './components/perfil-pages/Alunos';
import DadosStats from './components/perfil-pages/Dados';
import EditarPerfil from './components/perfil-pages/EditarPerfil';
import Financeiro from './components/perfil-pages/Financeiro';
import Report from './components/perfil-pages/Report';
import InsideChat from './components/chat/InsideChat';
import ListReports from './components/reports/List_reports';
import CompletarCadastro from './components/auth/cadastro/completarCadastro';
import { useState } from 'react';
import Cookies from "universal-cookie";
import Propostas from './components/propostas/propostas';
import ContratoPage from './components/contrato/Contrato';
import Temp from './temp';

const cookies = new Cookies();


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

  const logout = () => {
    // destroy the cookie
    cookies.remove("TOKEN", { path: "/" });
  }

  const [user,setUser] = useState()
  return (<>
  
  
    <section className="top-nav">
    <div>
      <a href='/'><Logozin src={logo}></Logozin></a>
    </div>
    <p>{user?.userEmail}</p>
    <input id="menu-toggle" type="checkbox" />
    <label className='menu-button-container' htmlFor="menu-toggle">
    <div className='menu-button'></div>
  </label>
    <ul className="menu">
      <li><Alink href='/'>Principal</Alink></li>
      <li><Alink href='/perfil'>Perfil</Alink></li>
      <li><Alink href='/login'>Login</Alink></li>
      <li><Alink href='/cadastro'>Cadastro</Alink></li>
      <li><Alink href='/completarcadastro'>Completar cadastro</Alink></li>
      <li><Alink href='/chat'>Chat</Alink></li>
      <li><Alink href='/reports_tela'>Área de Admin.</Alink></li>
      <li><Alink href='/tela_aulas'>Area Aulas</Alink></li>
      <li><Alink href='/propostas'>Propostas</Alink></li>
      <li><Alink href='/contratos'>Contratos</Alink></li>
      <li><Alink href='/temp'>TEMP</Alink></li>


      <li><Alink href='#' inativo>Configurações</Alink></li>
      <li><Alink href='#' inativo>Sobre</Alink></li>
      <li><Alink href='/login' onClick={() => logout()}>Logout</Alink></li>
    </ul>
  </section>

    
    
    <Router>
        <Routes>
          <Route exact path="/" element={<Home  setUser = {setUser}/>}/>
          <Route exact path="/login" element={<Login setUser = {setUser}/>}/>
          <Route exact path="/cadastro" element={<Cadastro/>}/>
          <Route exact path="/perfil" element={<Perfil/>}/>
          <Route exact path="/contrato" element={<Contrato/>}/>
          <Route exact path="/chat" element={<Chat/>}/>
          <Route exact path="/chat/user" element={<InsideChat/>}/>
          <Route exact path="/planos/:id" element={<Planos/>}/>
          <Route exact path="/completarcadastro" element={<CompletarCadastro user= {user}/>}/>
          <Route exact path="/alunos" element={<Alunos/>}/>
          <Route exact path="/dadosStats" element={<DadosStats/>}/>
          <Route exact path="/editarPerfil" element={<EditarPerfil/>}/>
          <Route exact path="/financeiro" element={<Financeiro/>}/>
          <Route exact path='/reports_tela' element = {<ListReports/>}/>
          <Route exact path="/report" element={<Report/>}/>
          <Route exact path="/tela_aulas" element={<AulasTela/>}/>
          <Route exact path="/propostas" element={<Propostas></Propostas>}/>
          <Route exact path="/contratos" element={<ContratoPage></ContratoPage>}/>
          <Route exact path="/temp" element={<Temp></Temp>}/>


        </Routes>
    </Router>
    </>
  );
}

export default App;
