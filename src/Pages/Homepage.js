import React from 'react';
import styled from 'styled-components';
import PickImg from '../assets/dogs/logoimage.jpg';

const Homepage = () => {
  return (
    <Wrap>
        <Header>나와 가장 잘 맞는 댕댕이를 찾아라멍!</Header>
        <LogoImg><img src={PickImg} alt="대표강아지 사진" className="round-circle" width={300} height={300}/></LogoImg> 
    </Wrap>
  )
}

export default Homepage;

const Wrap = styled.div`
height: 100vh;
width:100%;
`
const Header = styled.div`
background-color: yellow; 
`
const LogoImg = styled.div`
margin-top: 20px;
`

