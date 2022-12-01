import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'

import api from '../../api/api';
import CardAula from './card';
import getToken from '../../api/auth/getToken';





class AulasTela extends React.Component {
  constructor() {
    super();
    this.state = {
      aulasPersonal: [],
      aulasAluno: [],
      alunoId: "",
      personalId: ""
    };

  }
  async componentDidMount() {

    var contratosAluno = []

    const response_user = await getToken()
    const userId = response_user.data.userId
    const findPersonal = await api.get(`/personal/user/${userId}`)
    const contratoComAulas = await api.get(`/contratos/aulas/personal/${findPersonal.data?.idPersonal}`)
    const findAluno = await api.get(`/aluno/user/${userId}`)
    if (findAluno.data){
      contratosAluno = await api.get(`/contratos/aulas/aluno/${findAluno?.data.idAluno}`)

    }



    this.setState({ aulasList: contratoComAulas?.data, personalId: findPersonal?.data.idPersonal, aulasAluno: contratosAluno?.data })
  }
  render() {
    return <>
      <ChakraProvider>
        <Box>
          {this.state.aulasList ? this.state.aulasList.map(i => {
            var aulasFaltam = 0
            for (var jj = 0; jj < i.aulas.length; jj++) {
              if (i.aulas[jj].fechada == false) {
                aulasFaltam += 1
              }
            }
            return <CardAula aluno={i.aluno.nomeMostrado} horario={i.horario} falta_aulas={i.falta_aulas} contratoFull={i} tipo={"personal"} key={i.aluno.nomeMostrado}></CardAula>
          }) : <></>}

          {this.state.aulasAluno ? this.state.aulasAluno.map(i => {
            var aulasFaltam = 0
            for (var jj = 0; jj < i.aulas.length; jj++) {
              if (i.aulas[jj].fechada == false) {
                aulasFaltam += 1
              }
            }
            console.log(i)
            return <CardAula personal={i.personal.nomeMostrado} horario={i.horario} falta_aulas={aulasFaltam} contratoFull={i} tipo={"aluno"} key = { i.personal.nomeMostrado}></CardAula>
          }) : <></>}
        </Box>

        <br></br>
        <br></br>
        <br></br>
      </ChakraProvider>
    </>

  }
}

export default AulasTela;