import React, { useEffect, useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import { Box} from '@chakra-ui/react'
import api from '../../api/api';
import Cookies from "universal-cookie";
import axios from 'axios';
import CardContrato from './CardContrato';
import getToken from '../../api/auth/getToken';

const cookies = new Cookies();





function ContratoPage() {

  const [personalContratos, setPersonalContratos] = useState([])
  const [alunoContratos, setAlunoContratos] = useState([])
  const [att, setAtt] = useState(false)


  useEffect(() => {
    async function getContratosPersonal() {
     
      const response_user = await getToken()
      const userId = response_user.data.userId

      const findPersonal = await api.get(`/personal/user/${userId}`)

      const contratosPersonal = await api.get(`/contratos/personal/${findPersonal.data?.idPersonal}`)
      setPersonalContratos(contratosPersonal.data)




      const findAluno = await api.get(`/aluno/user/${userId}`)
      if (findAluno.data != null) {
        const contratosAluno = await api.get(`/contratos/aluno/${findAluno.data.idAluno}`)
        setAlunoContratos(contratosAluno.data)
      }
    }

    getContratosPersonal()
  }, [att])
  return (<>
    {
/* aulasContratadas: 24
fk_id_aluno: "91e6c8de-0177-4baa-a078-ce650ba65e4a"
fk_id_personal: "fa543bad-d7fd-4e1f-b048-ca6fc296ad30"
fk_id_plano: "8a4d6db1-4b04-4b0a-b272-10513cda05d7"
idContrato : "dc0a2223-0bae-4471-8f9e-6a4e623ff205"
situacaoContrato : true
valorMensal : 13.33333
valorTotal: 80
 */}
    {alunoContratos.map(i => {

        return (<>
          <ChakraProvider key = {i.idContrato}>
            <Box>
              <CardContrato
                tipo={"aluno"}
                personal={i.nomePersonal}
                aulasContratadas={i.aulasContratadas}
                valorTotal={i.valorTotal}
                observacoes={i.observacoes}
                plano={i.plano}
                resto={i}
                idContrato={i.idContrato}
                setAtt={setAtt}
                att={att}
              ></CardContrato>
            </Box>

            <br></br>
            <br></br>
            <br></br>
          </ChakraProvider>
        </>)
      
    })}

    {personalContratos.map(i => {
        return (<>
          <ChakraProvider key={i.idContrato}>
            <Box>
              <CardContrato
                tipo={"personal"}
                nomeDoAluno={i.nomeDoAluno}
                aulasContratadas={i.aulasContratadas}
                valorTotal={i.valorTotal}
                observacoes={i.observacoes}
                plano={i.plano}
                resto={i}
                idContrato={i.idContrato}
                setAtt={setAtt}
                att={att}

              ></CardContrato>
            </Box>

            <br></br>
            <br></br>
            <br></br>
          </ChakraProvider>
        </>)
      
    })}

  </>)

}

export default ContratoPage;