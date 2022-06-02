import React from 'react';
import styled from 'styled-components';
import PickImg from '../assets/dogs/logoimage.jpg';
import Button from 'react-bootstrap/Button';
import  {useNavigate} from 'react-router-dom';



const Homepage = () => {

  const navigate = useNavigate();
const handleClicktest = () => { 
    navigate('/Questionpage');
 }

  return (
    <Wrap>
        <Header>나와 가장 잘 맞는 댕댕이를 찾아라멍!</Header>
        <LogoImg>
          <img alt="대표강아지 사진" src={PickImg} className="rounded-circle"/>
        </LogoImg>
        <Desc>나와 가장 잘 맞는 댕댕이를 지금부터 찾아볼까요?</Desc> 
        <Button style={{backgroundColor:'lightgray' , color:'black', fontSize: '18px', border:'none', outLine:'none', padding: '15px'}} onClick={handleClicktest}>테스트 시작하기</Button>
    </Wrap>
  )
}

export default Homepage;

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
