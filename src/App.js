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
import CompletarCadastro from './completarCadastro';
import { useEffect, useState } from 'react';
import Cookies from "universal-cookie";
import Propostas from './propostas';

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
  
  
    <section class="top-nav">
    <div>
      <a href='/'><Logozin src={logo}></Logozin></a>
    </div>
    <p>{user?.userEmail}</p>
    <input id="menu-toggle" type="checkbox" />
    <label class='menu-button-container' for="menu-toggle">
    <div class='menu-button'></div>
  </label>
    <ul class="menu">
      <li><Alink href='/'>Principal</Alink></li>
      <li><Alink href='/perfil'>Perfil</Alink></li>
      <li><Alink href='/login'>Login</Alink></li>
      <li><Alink href='/cadastro'>Cadastro</Alink></li>
      <li><Alink href='/completarcadastro'>Completar cadastro</Alink></li>
      <li><Alink href='/chat'>Chat</Alink></li>
      <li><Alink href='/reports_tela'>Área de Admin.</Alink></li>
      <li><Alink href='/tela_aulas'>Area Aulas</Alink></li>
      <li><Alink href='/propostas'>Propostas</Alink></li>
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
          <Route exact path="/master" element={<Master/>}/>
          <Route exact path="/ajustes" element={<Ajustes/>}/>
          <Route exact path="/perfil" element={<Perfil/>}/>
          <Route exact path="/pagamentos" element={<Pagamentos/>}/>
          <Route exact path="/contrato" element={<Contrato/>}/>
          <Route exact path="/chat" element={<Chat/>}/>
          <Route exact path="/chat/user" element={<InsideChat/>}/>
          <Route exact path="/planos/:id" element={<Planos/>}/>
          <Route exact path="/completarcadastro" element={<CompletarCadastro user= {user}/>}/>
          <Route exact path="/alunos" element={<Alunos/>}/>
          <Route exact path="/dadosStats" element={<DadosStats/>}/>
          <Route exact path="/editarPerfil" element={<EditarPerfil/>}/>
          <Route exact path="/financeiro" element={<Financeiro/>}/>
          <Route exact path='/reports_tela' element = {<List_reports/>}/>
          <Route exact path="/report" element={<Report/>}/>
          <Route exact path="/tela_aulas" element={<Aulas_tela/>}/>
          <Route exact path="/propostas" element={<Propostas></Propostas>}/>

        </Routes>
    </Router>
    </>
  );
}

export default App;
