import React, { useState, useEffect } from 'react';
import arrow from './imgs/arrow.png'
import styled from 'styled-components'
import Cookies from "universal-cookie";
import axios from 'axios';
import {useForm} from 'react-hook-form';
import api from './api/api';

const cookies = new Cookies();



const Back = styled.img`
position: fixed;
top :75px;
left:7px;
width: 30px;
height: 30px;
border-width:1px;
border-style:solid;
border-radius:50%;
padding:3px;

`;

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: black;
  margin-bottom:12px;
  margin-top:20px;
  
`;

const SubTitle = styled.h2`
  font-size: 1em;
  text-align: center;
  color: #141414;
  opacity:0.6;
  margin-bottom:12px;

`;

const InputBox = styled.input`
display: block;
margin-right: auto;
margin-left: auto;
border: solid;
border-radius : 15px;
margin-bottom:15px;
padding-top:10px;
padding-bottom : 10px;

`;

const SubmitCadastro = styled.button`
  display: block;
  margin-right: auto;
  margin-left: auto;
  border: solid;
  border-radius : 15px;
  margin-bottom:15px;
  background-color : #41a8f5;
  padding-top : 10px;
  padding-bottom : 10px;
  width:45%;

`;

const Obs = styled.p`
  font-size : 0.7em;

`;

const Link = styled.a`
  color : orange ; 

`;

const BtnPersonal = styled.button`

  background: none;
  border:none;
  background-color: ${props => props.ativo ? "#1E8AD3" : "none"};
  border-radius : 20px;
  width:28%;

`

const BtnAluno = styled.button`

  background: none;
  border:none;
  background-color: ${props => props.ativo ? "#1E8AD3" : "none"};
  border-radius : 20px;
  width:28%;

`

const BtnArea = styled.div`
display:flex;
width:100%;
justify-content: space-around;
height:35px;
margin-bottom:7px;

`

const DivOfTags = styled.div`
display:flex;
justify-content:space-around;

`

function CompletarCadastro (props) {

  useEffect( () => {
    async function getUser() {
      const token = cookies.get("TOKEN")

    // Update the document title using the browser API
    const configuration = {
      method: "get",
      url: "http://localhost:3000/auth-endpoint",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
 const response_user = await axios(configuration)
 setUser(response_user.data)

    }

    getUser()
    console.log("rodou use Effect")
    


    
  },[]);

  function changeToPersonal(){
    setPersonal(true)
    setAluno(false)
    

  }

  function changeToAluno(){
    setAluno(true)
    setPersonal(false)
  }

  function AddToEspecializacao(){
    setEspecializacao([...especializacao,especializacaoInput])
  }

  function removeFromEspecializacao(index){
    var especializacoes = [...especializacao]
    especializacoes.splice(index,1)
    setEspecializacao(especializacoes) 
  }

  const completarCadastro = async data => {
    data.fk_id_user = user.userId
    data.preferenciasExplicitas = especializacao
    data.documentacao = "fakeUrl"
    data.rating = parseInt(data.rating)
    if (aluno){
      const response = await api.post("/aluno",data)
      console.log(response.data)
    }
    else{
      const response = await api.post("/personal",data)
      console.log(response.data)
      var newList = planos
      for(var i=0; i<planos.length;i++){
        newList[i].fk_id_personal = response.data.idPersonal
        
      }
      console.log(newList)

      const postPlanos = await api.post("/planos",newList)
      console.log(postPlanos)


    }
  }
  
  function alterarPlano (valor,index,tipo){
  if(tipo === "diasPorSemana"){
    var newList = planos
    newList[index].diasPorSemana = valor
    console.log(newList[index])
    return setPlanos([...newList])
    
  }
  else if(tipo === "valorDoPlano"){
    var newList = planos
    newList[index].valorDoPlano = valor
    console.log(newList[index])
    return setPlanos([...newList])

  }
  else{
    console.log(planos)
  }
}
  const [personal,setPersonal] = useState(false)
  const [aluno,setAluno] = useState(true)
  const [user,setUser] = useState(false)
  const [trava,setTrava] = useState(false)
  
  const [especializacao,setEspecializacao] = useState([])
  const [especializacaoInput,setEspecializacaoInput] = useState("")
  const [profilePic, setProfilePic] = useState(null);
  const [documentoComFoto, setDocumentoComFoto] = useState(null);
  const [selfieComDocumento, setSelfieComDocumento] = useState(null);
  const [planos, setPlanos] = useState([]);

  const {register,handleSubmit,formState:{error}} = useForm()

  console.log(user)
  console.log("Especialização lista")
  console.log(especializacao)
    return(
    <>
    
    <Title>Completar Cadastro </Title>
    <SubTitle>Entre com seus dados e siga os passos para envio dos documentos</SubTitle>
      <form onSubmit={handleSubmit(completarCadastro)}>
      <BtnArea>
      <BtnAluno onClick={()=>changeToAluno()} ativo = {aluno} type="button">Aluno</BtnAluno>
      <BtnPersonal onClick={()=>changeToPersonal()} ativo={personal} type="button" >Personal</BtnPersonal>
      </BtnArea>
    <InputBox placeholder = "CPF" name='cpf' {...register("cpf")}></InputBox>
    <InputBox placeholder = "RG" name='rg' {...register("rg")}></InputBox>
    <InputBox placeholder = "instagram" name='instagram' {...register("instagram")}></InputBox>

    <label>profile_pic</label>
    <input 
          type="file"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.files[0])}>

          </input>
      
    <label>Documento com foto</label>
    <input 
          type="file"
          value={documentoComFoto}
          onChange={(e) => setDocumentoComFoto(e.target.files[0])}>

          </input>
    <label>Selfie com documento</label>
    <input 
          type="file"
          value={selfieComDocumento}
          onChange={(e) => setSelfieComDocumento(e.target.files[0])}>

          </input>
    <InputBox placeholder = "LOCALIZAÇÃO" name='local' {...register("local")}></InputBox>

    {personal?<>
    <InputBox placeholder = "CREF"></InputBox>

    <InputBox placeholder = "Especializações" value={especializacaoInput} onChange={e => setEspecializacaoInput(e.target.value)}></InputBox>
    <button onClick={()=>AddToEspecializacao()} type="button">add espec</button>
    {especializacao.map((i,index) =>{
      return (
      <DivOfTags>
        <SubTitle>{i}</SubTitle>
        <button onClick={()=>removeFromEspecializacao(index)} type="button">remover ({index})</button>
      </DivOfTags>
      )
    })}

    <button onClick={()=>{
      setPlanos([...planos,{diasPorSemana:0,valorDoPlano:0}])
    }} type="button">Adicionar planos e valores</button>

    {planos.map((i,index) =>{return(
      <div>
        <lable>Dias por semana</lable>
        <InputBox placeholder={i.diasPorSemana} onChange={(e) => alterarPlano(e.target.value,index,"diasPorSemana")}></InputBox>
        <lable>Valor mensal do plano</lable>
      <InputBox placeholder={i.valorDoPlano} onChange={(e) => alterarPlano(e.target.value,index,"valorDoPlano")}></InputBox>
      </div>
    )
    

    })
    }
    

    
    
    
    </>
      
      
      :<></>}
    
    <input hidden value={especializacao} name="preferenciasExplicitas" {...register("preferenciasExplicitas")}/>
    <input hidden value={user.userId} name ="fk_id_user"  {...register("fk_id_user")}/>
    {console.log(user.userId)}
    <input hidden value={5} name="rating"  {...register("rating")}>

    </input>
    <SubmitCadastro type='submit'>Cadastrar</SubmitCadastro>
    </form>
    </>
    )
}

export default CompletarCadastro;