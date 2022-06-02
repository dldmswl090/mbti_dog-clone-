import React,{useState} from 'react';
import {ProgressBar,Button} from 'react-bootstrap';
import { createSearchParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { QuestionData } from '../assets/datas/Questiondata';

const Questionpage = () => {
//progressbar 이동하게 하며 질문과 같이 움직이게 하는 상태관리 만들기
  const [questionNo, setQuestionNo] = useState(0);
//답변마다 점수 더해주는 상태관리 만들기
  const [scoreAdd, setScoreAdd] = useState([
    {id: 'EI', score: 0},
    {id: 'SN', score: 0},
    {id: 'TF', score: 0},
    {id: 'JP', score: 0}
  ]);

  const navigate = useNavigate();

  const clickAnswerbtn = (num,type) => { 
    const newScore = scoreAdd.map((m) => 
    m.id === type ? {id:m.id, score:m.score+num}:m
    );
    setScoreAdd(newScore);
    if(QuestionData.length !== questionNo+1){
      setQuestionNo(questionNo+1);
    }else{
      const mbti = newScore.reduce(
        (acc,curr) => acc +(curr.score>=2 ? curr.id.substring(0,1):curr.id.substring(1,2)),""
      );
      navigate ({
        pathname :'/ResultPage',
        search: `?${createSearchParams({
          mbti:mbti,
        })}`
      })
      console.log(mbti);
    }
    
   }


  return (
    <Wrap>
   
    <ProgressBar variant="warning" now={(questionNo/QuestionData.length*100)}/>
    <Title>{QuestionData[questionNo].title}</Title>
    <ButtonGroup>
      <Button style={{backgroundColor:'lightpink', outLine:0, border:0, width:'400px', height:'200px'}} onClick={() => clickAnswerbtn(1, QuestionData[questionNo].type)}>{QuestionData[questionNo].answera}</Button>
      <Button style={{backgroundColor:'lightpink', outLine:0, border:0, width:'400px', height:'200px', marginLeft:'15px'}} onClick={() => clickAnswerbtn(0, QuestionData[questionNo].type)}>{QuestionData[questionNo].answerb}</Button>
    </ButtonGroup>
    </Wrap>
  )
}

export default Questionpage;

const Wrap = styled.div`
height: 100vh;
width:100%;

`
const Title = styled.div`
font-size: 27px;
font-weight: bold;
text-align: center;
`

const ButtonGroup = styled.div`
height:100vh;
width:100%;
display:flex;
justify-content:center;
align-items: baseline;
`