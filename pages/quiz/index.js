import React from 'react'
import Head from 'next/head'
import QuizBackGround from '../../src/components/QuizBackGround'
import { QuizContainer } from '../../src/components/QuizContainer'
import Footer from '../../src/components/Footer'
import GitHubCorner from '../../src/components/GitHubCorner'
import { Texto } from '../../src/components/Letras'
import db from '../../db.json'
import {ResultWidget} from '../../src/components/ResultWidget'
import QuestionWidget from '../../src/components/QuestionWidget'
import LoadingWidget from '../../src/components/LoadingWidget'





export default function QuizPage() {

 
  const screenStates = {
    LOADING:'LOADING',
    RESULT:'RESULT',
    QUIZ:'QUIZ'
  }

  //Estados iniciais
  const [currentQuestion, setCurrentQuestion] = React.useState(0)
  const index = currentQuestion;
  const total = db.questions.length  
  const question = db.questions[index]
  const [results, setResults ] = React.useState([])
  const [screenState,setScreenState] = React.useState(screenStates.LOADING)

  function addResult(result){
    
    setResults([
      ...results,
      result
    ])
    
  }

  React.useState(()=>{
    // fetch()...
    setTimeout(()=>{
      
      setScreenState(screenStates.QUIZ)
    },1000);
    // nasce === didMount
  },[]);


  function handleSubmit(){
    const nextQuestion = index + 1;
    if(nextQuestion < total){
      return (
        setCurrentQuestion(index + 1) 
      )     
    }else{
      return setScreenState(screenStates.RESULT)
    }
  }

  return (
    <QuizBackGround backgroundImage={db.bg}>
      <Head>
        <title>Quiz</title>
      </Head>
      <GitHubCorner projectUrl="https://github.com/Raul-Pinheiro" />
      
      <QuizContainer>
        <Texto.H1>Next Question</Texto.H1>
        
      {screenState === screenStates.QUIZ && (
        <QuestionWidget

          question={question}
          totalQuestions={total}
          questionIndex={index + 1}
          onSubmit={handleSubmit}
          addResults={addResult}
        />
      
      )}
      {screenState === screenStates.LOADING && <LoadingWidget />}
        
      {screenState === screenStates.RESULT && <ResultWidget results={results}/>}
        <Footer />
      </QuizContainer>

    </QuizBackGround>
  );
}
