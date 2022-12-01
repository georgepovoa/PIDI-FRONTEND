import React, { useState } from 'react';
import styled from 'styled-components';
import media from './imgs/gallery.png'

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
margin-top:10%;
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

export default function Temp(props) {

  const [mediaArea, setMidiaArea] = useState(true)
  const [infoArea, setInfoArea] = useState(false)
  const [ratingsArea, setRatingsArea] = useState(false)


  function handleMediaClick() {
    setMidiaArea(true)
    setInfoArea(false)
    setRatingsArea(false)
  }

  function handleInfoClick() {
    setMidiaArea(false)
    setInfoArea(true)
    setRatingsArea(false)
  }

  function handleRatingClick() {
    setMidiaArea(false)
    setInfoArea(false)
    setRatingsArea(true)
  }


  return (
    <Container>
      <Card>
        <CardHeader>
          <CardHeaderImage src="https://picsum.photos/200/300?random=1"></CardHeaderImage>
          <CardHeaderInfoDiv>
            <CardHeaderInfoP>Nome : Teste 1</CardHeaderInfoP>
            <CardHeaderInfoP>instagram : @testes</CardHeaderInfoP>
            <CardHeaderInfoP>Rating : 4.5</CardHeaderInfoP>
          </CardHeaderInfoDiv>




        </CardHeader>

        <ChooseSection>
          <ChooseSectionImg src={media} onClick={handleMediaClick}></ChooseSectionImg>
          <ChooseSectionImg src={media} onClick={handleInfoClick}></ChooseSectionImg>
          <ChooseSectionImg src={media} onClick={handleRatingClick}></ChooseSectionImg>

        </ChooseSection>
        {mediaArea ?
          <ContentMediaSection>
            <MediaSectionIMG />
            <MediaSectionIMG />
            <MediaSectionIMG />
            <MediaSectionIMG />
            <MediaSectionIMG />
            <MediaSectionIMG />
            <MediaSectionIMG />
            <MediaSectionIMG />
            <MediaSectionIMG />
            <MediaSectionIMG />
            <MediaSectionIMG />
            <MediaSectionIMG />
            <MediaSectionIMG />
            <MediaSectionIMG />
            <MediaSectionIMG />
            <MediaSectionIMG />

          </ContentMediaSection>
          : <></>}


        {infoArea ?
          <ContentInfoSection>
            <ContentInfoTitle>Especializações</ContentInfoTitle>
            <ContentInfoP>Espec 1 </ContentInfoP>
            <ContentInfoP>Espec 2 </ContentInfoP>
            <ContentInfoP>Espec 3 </ContentInfoP>
            <ContentInfoP>Espec 4 </ContentInfoP>
            <ContentInfoP>Espec 5 </ContentInfoP>
            <ContentInfoP>Espec 6 </ContentInfoP>

            <ContentInfoTitle>Locais de atendimento</ContentInfoTitle>

            <ContentInfoP>Local 1 </ContentInfoP>
            <ContentInfoP>Local 2 </ContentInfoP>
            <ContentInfoP>Local 3 </ContentInfoP>
            <ContentInfoP>Local 4 </ContentInfoP>
            <ContentInfoP>Local 1 </ContentInfoP>
            <ContentInfoP>Local 2 </ContentInfoP>
            <ContentInfoP>Local 3 </ContentInfoP>
            <ContentInfoP>Local 4 </ContentInfoP>
            <ContentInfoP>Local 1 </ContentInfoP>
            <ContentInfoP>Local 2 </ContentInfoP>
            <ContentInfoP>Local 3 </ContentInfoP>
            <ContentInfoP>Local 4 </ContentInfoP>
            <ContentInfoP>Local 1 </ContentInfoP>
            <ContentInfoP>Local 2 </ContentInfoP>
            <ContentInfoP>Local 3 </ContentInfoP>
            <ContentInfoP>Local 4 </ContentInfoP>
          </ContentInfoSection> : <></>}
        {ratingsArea ? <ContentRatingSection>
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
    </Container>
  )
}