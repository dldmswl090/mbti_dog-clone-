import React,{useState,useEffect} from 'react'
import { ResultData } from '../assets/datas/Resultdata';
import styled from 'styled-components';
import {Button} from 'react-bootstrap';
import { useNavigate, useSearchParams } from 'react-router-dom';



const Resultpage = () => {
  const navigate = useNavigate();
  const handleClicktest = () => { 
      navigate('/');
   }

   const [searchParams] = useSearchParams();
   const mbti = searchParams.get('mbti');
   const [resultData, setResultData] = useState({});

   useEffect(() => {
     const result = ResultData.find((b)=> (b.best === mbti))
    
      setResultData(result)
     
   }, [mbti])
   


  
  return (
    <Wrap>
    <Header>당신과 가장 잘 맞는 댕댕이는!</Header>
    <LogoImg>
      <img alt="강아지 사진" src={resultData.image} className="rounded-circle"/>
    </LogoImg>
    <Title>{resultData.name}</Title>
    <Desc>{resultData.desc}</Desc> 
    <Button style={{backgroundColor:'lightgray' , color:'black', fontSize: '18px', border:'none', outLine:'none', padding: '15px'}} onClick={handleClicktest}>테스트 다시하기</Button>
</Wrap>
  )
}

export default Resultpage;

const Wrap = styled.div`
height: 100vh;
width:100%;
display: flex;
justify-content:center;
align-items: center;
flex-direction: column;

`
const Header = styled.div`
font-size: 27px;
font-weight: bold;
`
const LogoImg = styled.div`
margin-top: 40px;
margin-bottom: 40px;
`
const Desc = styled.div`
font-size: 20px;
margin-bottom: 40px;
`

const Title = styled.div`
text-align: center;
font-size: 25px;
`