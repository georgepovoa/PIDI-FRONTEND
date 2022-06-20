import React from 'react';
import styled from 'styled-components';
import arrow from './imgs/arrow.png';
import personal from './imgs/personal.jpg';
import star from './imgs/star.png';
import axios from 'axios';

const lista_avaliação = [
  {
    nome: "Lúcio",
    estrelas: 5,
    descricao: "Muito bom personal."
  },
  {
    nome: "Mateus",
    estrelas: 3,
    descricao: "Mexe muito no celular."
  }, {
    nome: "Lúcio",
    estrelas: 5,
    descricao: "Muito bom personal."
  }, {
    nome: "Thiago",
    estrelas: 2,
    descricao: "Péssimo em lutas."
  },
  {
    nome: "Lúcio",
    estrelas: 5,
    descricao: "Muito bom personal."
  },
  {
    nome: "Mateus",
    estrelas: 2,
    descricao: "Mexe muito no celular."
  }, {
    nome: "Lúcio",
    estrelas: 5,
    descricao: "Muito bom personal."
  }, {
    nome: "Thiago",
    estrelas: 2,
    descricao: "LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem LoremLoremLoremLoremLorem"
  },
]
var total_estrelas = 0

lista_avaliação.map(i => {
  total_estrelas += i.estrelas

})

const media_estrelas = total_estrelas / lista_avaliação.length

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

const ProfileImage = styled.img`
  width:100%;
  height : 75%;
  margin:0;
`;

const PersonalInfo = styled.div`
  margin-top:-5px;

  background:black;
  color: white;
  width:100%;
  height:200px;
  opacity:0.9;
  display:flex;
  flex-direction: column;
  justify-content:center;



`;

const Title = styled.h1`
  margin:auto;
  font-size: 2em;
  text-align: center;

  color: white;

`;

const SubTitle = styled.h2`
  font-size: 1em;

  color: #00000;
  opacity:0.6;
  
`;

const ReviewStar = styled.img`

  width : 15px;
  height : 15px;
  margin-left : 7px;
  align-self: center;

`
const ReviewArea = styled.div`
  
  margin:auto;
  display:flex;
  flex-direction:row;

`
const ReviewNumber = styled.p`
  color:white;
  width : 15px;
  height : 15px;
  margin-left : 7px

`

const StatsArea = styled.div`
  background:white;
  color: black;
  width:100%;
  height:100px;
  display:flex;
  flex-direction: row;
  justify-content:center;

`;

const Stat = styled.div`
  width:75px;
  display:flex;
  flex-direction: column;
  justify-content:center;
  margin-left:15px;
  

`;

const StatText = styled.p`

  text-align:center;
  font-size: ${props => props.bold ? "24px" : "16px"};
  font-weight: ${props => props.bold ? 1000 : 400};
  margin-bottom:0px;

`

const BtnArea = styled.div`

  border-style : solid;
  border-radius :50px;
  border-width: 1px;
  width:80%;
  height:50px;
  display:flex;
  flex-direction:row;
  justify-content:  space-between;
  margin:auto;
  margin-top:15px;

  

`

const Btn = styled.button`

  background: none;
  border:none;
  background-color: ${props => props.active ? "#1E8AD3" : "none"};
  border-radius : 20px;
  width:28%;
  


`

const VerValoresBtn = styled.button`
  position:fixed;
  bottom:0px;
  width:100%;
  height:50px;
  background: black;
  color: white;
  font-size:18px;
  font-weight: bold;
`

const SimpleLink = styled.a`
text-decoration: none;
color: white;


`;

const MediaImage = styled.img`


  margin:7px;
  width:33%;


  

`;

const ContainerMedia = styled.div`

  margin-top: 15px;
  display:flex;
  flex-wrap:wrap;
  justify-content:space-around;

`

const ContainerSobre = styled.div`

  margin-top: 15px;
  margin-bottom: 100px;
  

`

const ContainerAvaliacao = styled.div`

  margin-top: 15px;
  margin-bottom: 100px;

`

const AvaliacaoBloco = styled.div`


  border-radius: 20px;
  box-shadow: 0 0 20px 8px #d0d0d0;
  width:85%;
  overflow-wrap: break-word;
  margin: auto;
  margin-bottom: 35px;

`









function MediaScreen(props) {



  const media_array = Array.from(Array(15).keys())

  return <ContainerMedia>


    {media_array.map(i => {
      return <MediaImage src={`https://picsum.photos/200/300?random=${i}`}></MediaImage>
    })}



  </ContainerMedia>;
}


function SobreScreen(props) {
  const espec_list = ["Artes marciais", "Academia", "cross-fit", "LPO", "Artes marciais", "Academia", "cross-fit", "LPO"]
  const loc_list = ["Taguatinga", "Sudoeste", "Guará", "ASA SUL", "Taguatinga", "Sudoeste", "Guará", "ASA SUL"]
  return <ContainerSobre>

    <SubTitle>Especializações</SubTitle>
    {espec_list.map(i => {
      return <StatText>{i}</StatText>
    })}
    <hr></hr>
    <SubTitle>Locais de atendimento</SubTitle>
    {loc_list.map(i => {
      return <StatText>{i}</StatText>
    })}
    <br></br>
    <br></br>
    <br></br>
    <br></br>



  </ContainerSobre>
}


function AvaliacaoScreen(props) {

  return <ContainerAvaliacao>

<br></br>
    
    <br></br>


    {lista_avaliação.map(i => {
      var list_estrelas = []
      for (let index = 0; index < i.estrelas; index++) {
        list_estrelas.push(<ReviewStar src={star}></ReviewStar>);

      }
      return <AvaliacaoBloco>

        
        <SubTitle>Nome </SubTitle>
        <StatText>{i.nome}</StatText>
        <br></br>
        <SubTitle>Avaliacao  </SubTitle>
        <StatText>{list_estrelas}</StatText>
        <br></br>
        <SubTitle>Descricao</SubTitle>
        <StatText>{i.descricao}</StatText>




      </AvaliacaoBloco>
    })}
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
  </ContainerAvaliacao>
}




class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      midia: true,
      sobre: false,
      avaliacao: false,
    };


  }
  midiaOn = () => {
    console.log("MIDIA")
    this.setState({ midia: true, sobre: false, avaliacao: false })
  }

  sobreOn = () => {
    console.log("Sobre")
    this.setState({ midia: false, sobre: true, avaliacao: false })
  }

  avaliacaoOn = () => {
    console.log("Avalizao")
    this.setState({ midia: false, sobre: false, avaliacao: true })

  }
  render() {

    var list_estrelas = []
    for (let index = 0; index < media_estrelas; index++) {
      list_estrelas.push(<ReviewStar src={star}></ReviewStar>);

    }


    
    return <>
      <a href='/'><Back src={arrow}></Back></a>
      <ProfileImage src={personal}></ProfileImage>
      <PersonalInfo>
        <Title>Prof. Pedro</Title>
        <SubTitle>@kalist</SubTitle>
        <ReviewArea>
          {list_estrelas}
          <ReviewNumber>{media_estrelas}</ReviewNumber>
        </ReviewArea>



      </PersonalInfo>
      <StatsArea>
        <Stat>
          <StatText bold>276</StatText>
          <StatText >imagens</StatText>
        </Stat>
        <Stat>
          <StatText bold>12</StatText>
          <StatText >Alunos</StatText>
        </Stat>
        <Stat>
          <StatText bold>23</StatText>
          <StatText >Seguidores</StatText>
        </Stat>
      </StatsArea>

      <BtnArea>
        {this.state.midia ? <Btn active onClick={() => this.midiaOn()}>Mídia </Btn> : <Btn onClick={this.midiaOn}>Mídia</Btn>}
        {this.state.sobre ? <Btn active onClick={() => this.sobreOn()}>Sobre </Btn> : <Btn onClick={this.sobreOn}>Sobre</Btn>}
        {this.state.avaliacao ? <Btn active onClick={() => this.avaliacaoOn()}>Avaliação </Btn> : <Btn onClick={this.avaliacaoOn}>Avaliação</Btn>}

      </BtnArea>


      {
        this.state.midia ? <MediaScreen></MediaScreen> : <></>
      }

      {
        this.state.sobre ? <SobreScreen></SobreScreen> : <></>
      }

      {
        this.state.avaliacao ? <AvaliacaoScreen></AvaliacaoScreen> : <></>
      }

      <VerValoresBtn><SimpleLink href='/planos'>Ver planos e valores</SimpleLink></VerValoresBtn>




    </>
  }
}

export default Home;