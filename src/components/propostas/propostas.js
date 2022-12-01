import React, { useEffect, useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'

import api from '../../api/api';
import Cookies from "universal-cookie";
import CardProposta from './cardPropostas';
import getToken from '../../api/auth/getToken';
const cookies = new Cookies();


function Propostas() {

  const [personalPropostas, setPersonalPropostas] = useState([])
  const [alunoPropostas, setAlunoPropostas] = useState([])
  const [att, setAtt] = useState(false)


  useEffect(() => {
    async function getPropostasPersonal() {

      const response_user = await getToken()
      const userId = response_user.data.userId

      const findPersonal = await api.get(`/personal/user/${userId}`)

      const propostasPersonal = await api.get(`/proposta/personal/${findPersonal.data?.idPersonal}`)
      setPersonalPropostas(propostasPersonal.data)



      const findAluno = await api.get(`/aluno/user/${userId}`)
      if (findAluno.data != null) {
        const propostasAluno = await api.get(`/proposta/aluno/${findAluno.data.idAluno}`)
        console.log(findAluno.data.idAluno)
        setAlunoPropostas(propostasAluno.data)
      }
    }

    getPropostasPersonal()
  }, [att])
  return (<>
    {/* aluno: {idAluno: '91e6c8de-0177-4baa-a078-ce650ba65e4a', fk_id_user: 'ed8897f6-1cfd-44fe-8ea8-122ac0b7e855', avaliacoes: Array(0), rating: 0, documentacao: 'docs', …}
fk_id_aluno: "91e6c8de-0177-4baa-a078-ce650ba65e4a"
fk_id_personal: "fa543bad-d7fd-4e1f-b048-ca6fc296ad30"
fk_id_plano: "db8570b5-5e1e-4835-b57b-d9cf2e60458d"
idProposta: "3a862ad9-3a92-4ce7-9cd3-adb4e69790d2"
mesesContratados: 1
nomePersonal: "1"
observacoes: ""
personal: {idPersonal: 'fa543bad-d7fd-4e1f-b048-ca6fc296ad30', fk_id_user: 'df9dc7e1-a72f-40b7-8c16-365d8fc4c455', avaliacoes: Array(0), rating: 5, documentacao: 'fakeUrl', …}
plano: {idPersonalPlanos: 'db8570b5-5e1e-4835-b57b-d9cf2e60458d', fk_id_personal: 'fa543bad-d7fd-4e1f-b048-ca6fc296ad30', diasPorSemana: '3', valorDoPlano: '600'}
situacaoProposta: false
valorTotal: 600
[[Prototype]]: Object */}
    {alunoPropostas.map(i => {
      if (i.situacaoProposta == false) {
        return (<>
          <ChakraProvider>
            <Box>
              <CardProposta
                tipo={"aluno"}
                personal={i.nomePersonal}
                mesesContratados={i.mesesContratados}
                valorTotal={i.valorTotal}
                observacoes={i.observacoes}
                plano={i.plano}
                resto={i}
                idProposta={i.idProposta}
                setAtt={setAtt}
                att={att}
                key = {i.idProposta}
              ></CardProposta>
            </Box>

            <br></br>
            <br></br>
            <br></br>
          </ChakraProvider>
        </>)
      }
    })}

    {personalPropostas.map(i => {
      if (i.situacaoProposta == false) {
        return (<>
          <ChakraProvider>
            <Box>
              <CardProposta
                tipo={"personal"}
                nomeDoAluno={i.nomeDoAluno}
                mesesContratados={i.mesesContratados}
                valorTotal={i.valorTotal}
                observacoes={i.observacoes}
                plano={i.plano}
                resto={i}
                idProposta={i.idProposta}
                setAtt={setAtt}
                att={att}
                key = {i.idProposta}

              ></CardProposta>
            </Box>

            <br></br>
            <br></br>
            <br></br>
          </ChakraProvider>
        </>)
      }
    })}

  </>)

}

export default Propostas;