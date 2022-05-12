import React from 'react';
import styled from 'styled-components';
import arrow from './imgs/arrow.png';
import personal from './imgs/personal.jpg';
import star from './imgs/star.png'

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
  font-size: ${props => props.bold ? "24px" :"16px" };
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
  background-color: ${props => props.active ? "#1E8AD3"  : "none"};
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


`









class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      midia: true,
      sobre:false,
      avaliacao:false,
    };

    
  }
   midiaOn = () =>{
     console.log("MIDIA")
    this.setState({midia:true,sobre:false,avaliacao:false})
  }

  sobreOn= () =>{
    console.log("Sobre")
    this.setState({midia:false,sobre:true,avaliacao:false})
  }

  avaliacaoOn= () =>{
    console.log("Avalizao")
    this.setState({midia:false,sobre:false,avaliacao:true})
    
  }
  render() {
    return<> 
    <a href='/'><Back src={arrow}></Back></a>
    <ProfileImage src={personal}></ProfileImage>
    <PersonalInfo>
      <Title>Prof. Pedro</Title>
      <SubTitle>@kalist</SubTitle>
      <ReviewArea>
      <ReviewStar src={star}></ReviewStar>
      <ReviewStar src={star}></ReviewStar>
      <ReviewStar src={star}></ReviewStar>
      <ReviewStar src={star}></ReviewStar>
      <ReviewStar src={star}></ReviewStar>
      <ReviewNumber>5.0</ReviewNumber>
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
        {this.state.midia ?<Btn active onClick={() => this.midiaOn()}>Mídia </Btn>:<Btn onClick={this.midiaOn}>Mídia</Btn> }
        {this.state.sobre ?<Btn active onClick={() =>this.sobreOn()}>Sobre </Btn>:<Btn onClick={this.sobreOn}>Sobre</Btn> }
        {this.state.avaliacao ?<Btn active onClick={() =>this.avaliacaoOn()}>Avaliação </Btn>:<Btn onClick={this.avaliacaoOn}>Avaliação</Btn> }

      </BtnArea>


      {
        this.state.midia ? <p>MIDIA</p>:<></>
      }

      {
        this.state.sobre ? <p>Sobre</p>:<></>
      }

      {
        this.state.avaliacao ? <p>AVALIACAO</p>:<></>
      }

      <VerValoresBtn><SimpleLink href='/planos'>Ver planos e valores</SimpleLink></VerValoresBtn>
    
    
    

</>
  }
}

export default Home;