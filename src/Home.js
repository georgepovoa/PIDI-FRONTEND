import React from 'react';
import styled from 'styled-components';
import personal from './imgs/personal.jpg';
import star from './imgs/star.png';
import axios from 'axios';
import Cookies from "universal-cookie";
import api from './api/api';
import getToken from './api/auth/getToken';

import media from './imgs/gallery.png'


const cookies = new Cookies();

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
  @media (min-width: 768px) {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 25%;
    min-width:413px;
    min-height:275px;
  }
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

const FlexBtnArea = styled.div`
display:flex;`

const VerValoresBtn = styled.button`
  position:fixed;
  bottom:0px;
  width:50%;
  height:50px;
  background: black;
  color: white;
  font-size:18px;
  font-weight: bold;
  ${props => props.left ? "left:0px;" : "right:0px;"}
`

const SimpleLink = styled.a`
text-decoration: none;
color: white;


`;

const MediaImage = styled.img`


  margin:7px;
  width:33%;
  @media (min-width: 768px) {
    width:15%;
    height:15%;

  }


  

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
  padding:8px;

`

const Container = styled.div`

width:100%;
background: linear-gradient(180deg, rgba(15, 12, 41) 0%, rgba(48, 43, 99) 45.14%, #24243E 100%);
height:100%;
position:absolute;
display:flex;
`

const Card = styled.div
  `
position: absolute;
width: 90%;
height: 80%;
margin-left:5%;
margin-top:2%;
overflow-y:auto;


background: linear-gradient(180deg, rgba(62, 81, 252, 0.22) 0%, rgba(62, 81, 252, 0.0462) 100%);
backdrop-filter: blur(2px);

/* Note: backdrop-filter has minimal browser support */
border-radius: 15px;
`

const CardHeader = styled.div
  `
position: absolute;
width: 100%;
height: 145px;
min-height:145px;
top: 0px;

background: linear-gradient(180deg, rgba(62, 81, 252, 0.22) 0%, rgba(62, 81, 252, 0.0462) 100%);
backdrop-filter: blur(2px);

/* Note: backdrop-filter has minimal browser support */
border-radius: 15px;


`

const CardHeaderImage = styled.img
  `

position: absolute;
width:115px;
height: 115px;
margin-top:15px;
margin-left:15px;

border-radius:50%;

`

const CardHeaderInfoDiv = styled.div`
position: absolute;
width: 50%;
height: 90%;
left: 45%;
top: 5%;
display:flex;
flex-direction:column;
justify-content: space-around;

`

const CardHeaderInfoP = styled.p`
font-size:15px;
color:white;
margin:0px;
padding:0px;
font-family: 'Inter';

`

const ChooseSection = styled.div`
position:absolute;
width:  85%;
height: 54px;
top:145px;
margin-left:7.5%;
background: rgba(217, 217, 217, 0.49);
border-radius: 50px;
display:flex;
justify-content: space-evenly;

`

const ChooseSectionImg = styled.img`
width: 25px;
height: 25.95px;
margin:10px;
margin-top:15px;

`

const ContentMediaSection = styled.div`
width:100%;
height:66%;
position:absolute;
top:33%;
display:flex;
flex-wrap:wrap;
justify-content: space-around;
overflow-y:auto;

`




const MediaSectionIMG = styled.img`
width: 82px;
height: 134px;
background:white;
margin:15px;
`

const ContentInfoSection = styled.div`
width:100%;
height:66%;
position:absolute;
top:40%;
overflow-y:auto;

`

const ContentInfoTitle = styled.h1`
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
text-align: center;
color:white;

`

const ContentInfoP = styled.p`
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
color:white;

margin-left:30px;
`

const ContentRatingSection = styled.div`
width:100%;
height:66%;
position:absolute;
top:40%;
overflow-y:auto;

`

const AvaliacaoContainer = styled.div`


  border-radius: 20px;
  border: solid 1px black;
  width:85%;
  overflow-wrap: break-word;
  margin: auto;
  margin-bottom: 35px;
  padding:8px;

`

const SubTitle = styled.h2`
  font-size: 1em;

  color: white;
  opacity:0.6;
  
`;

const StatText = styled.p`

  text-align:center;
  font-size: ${props => props.bold ? "24px" : "16px"};
  font-weight: ${props => props.bold ? 1000 : 400};
  margin-bottom:0px;
  color:white;

`








function MediaScreen(props) {



  const media_array = Array.from(Array(15).keys())

  return <ContainerMedia>


    {media_array.map(i => {
      return <MediaImage src={`https://picsum.photos/200/300?random=${i}`} key={i}></MediaImage>
    })}



  </ContainerMedia>;
}

function AvaliacaoScreen(props) {

  return <ContainerAvaliacao>

    <br></br>

    <br></br>


    {lista_avaliação.map(i => {
      var list_estrelas = []
      for (let index = 0; index < i.estrelas; index++) {
        list_estrelas.push(<ReviewStar src={star} key={i}></ReviewStar>);

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
      personalArray: [],
      user: { userEmail: "" },
      mediaArea: true,
      infoArea: false,
      ratingsArea: false
    };


  }

  async componentDidMount() {
    const response_user = await getToken()
    const response = await api.get("/personal")
    console.log(response_user.data)


    console.log(response)

    this.setState({
      personalArray: response.data,
      user: response_user.data,
      personalIndex: 0

    })
    this.props.setUser(this.state.user)

  }

  handleMediaClick= () =>{

    this.setState(
      {
        mediaArea: true,
        infoArea: false,
        ratingsArea: false
      }
    )
  }

  handleInfoClick= () =>{
    this.setState(
      {
        mediaArea: false,
        infoArea: true,
        ratingsArea: false
      }
    )
  }

  handleRatingClick = () =>{
    this.setState(
      {
        mediaArea: false,
        infoArea: false,
        ratingsArea: true
      }
    )
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

  alterarPersonal = () => {
    if (this.state.personalIndex < this.state.personalArray.length - 1) {
      this.setState({ personalIndex: this.state.personalIndex += 1 })
    }
  }
  render() {


    var media_estrelas = 0
    if (this.state.personalArray !== undefined) {
      //media_estrelas = this.state.personalArray[this.state.personalIndex].rating
      //console.log(this.state.personalArray[this.state.personalIndex].rating, "MEDIA ESTERALSDLAS")
      media_estrelas = this.state.personalArray[this.state.personalIndex]?.rating
    }
    console.log(media_estrelas, "media estrelas")
    var list_estrelas = []
    for (let index = 0; index < media_estrelas; index++) {
      list_estrelas.push(<ReviewStar src={star}></ReviewStar>);

    }

    const token = cookies.get("TOKEN")
    console.log(this.state.personalArray)
    if (token) {

      return <Container>
        <Card>
          {/* {token ? <h1>Com auth</h1>:<h1>Sem Auth</h1>} */}
          <CardHeader>
            <CardHeaderImage src="https://picsum.photos/200/300?random=1"></CardHeaderImage>
            <CardHeaderInfoDiv>
              <CardHeaderInfoP>Nome : {this.state.personalArray[this.state.personalIndex]?.user.nome}</CardHeaderInfoP>
              <CardHeaderInfoP>instagram : @{this.state.personalArray[this.state.personalIndex]?.user.instagram}</CardHeaderInfoP>
              <CardHeaderInfoP>Rating : {this.state.personalArray[this.state.personalIndex]?.rating}</CardHeaderInfoP>
            </CardHeaderInfoDiv>




          </CardHeader>

          <ChooseSection>
            <ChooseSectionImg src={media} onClick={this.handleMediaClick}></ChooseSectionImg>
            <ChooseSectionImg src={media} onClick={this.handleInfoClick}></ChooseSectionImg>
            <ChooseSectionImg src={media} onClick={this.handleRatingClick}></ChooseSectionImg>

          </ChooseSection>

          {this.state.mediaArea ?
            <ContentMediaSection>
              <MediaSectionIMG src='https://picsum.photos/200/300?random=1'/>
              <MediaSectionIMG src='https://picsum.photos/200/300?random=2'/>
              <MediaSectionIMG src='https://picsum.photos/200/300?random=3'/>
              <MediaSectionIMG src='https://picsum.photos/200/300?random=4'/>
              <MediaSectionIMG src='https://picsum.photos/200/300?random=5'/>


            </ContentMediaSection>
            : <></>}


          {this.state.infoArea ?
            <ContentInfoSection>
              <ContentInfoTitle>Especializações</ContentInfoTitle>
              {this.state.personalArray[this.state.personalIndex]?.preferenciasExplicitas.map(i =>{
                return(<ContentInfoP key= {i}>{i} </ContentInfoP>)
              })}


              <ContentInfoTitle>Locais de atendimento</ContentInfoTitle>

              <ContentInfoP>Local 1 </ContentInfoP>
              <ContentInfoP>Local 2 </ContentInfoP>
              <ContentInfoP>Local 3 </ContentInfoP>
              <ContentInfoP>Local 4 </ContentInfoP>


            </ContentInfoSection> : <></>}
          {this.state.ratingsArea ? <ContentRatingSection>
            <AvaliacaoContainer>
              <SubTitle>Nome </SubTitle>
              <StatText>nome</StatText>
              <br></br>
              <SubTitle>Avaliacao  </SubTitle>
              <StatText>4.5</StatText>
              <br></br>
              <SubTitle>Descricao</SubTitle>
              <StatText>desc</StatText>
            </AvaliacaoContainer>
          </ContentRatingSection> : <></>}

          


        </Card>
        <VerValoresBtn left>
            <SimpleLink href={'/planos/' + this.state.personalArray[this.state.personalIndex]?.idPersonal}>Ver planos e valores</SimpleLink>
          </VerValoresBtn><VerValoresBtn>
            <SimpleLink onClick={() => this.alterarPersonal()}>Ver próximo personal</SimpleLink>
          </VerValoresBtn>
      </Container>
    }
    else {
      return <>
        <p>Por favor faça o login </p>
        <a href='/login'>Login</a>
      </>
    }
  }
}

export default Home;