import React from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';
import { Widget } from '../src/components/Widget';
import QuizBackGround from '../src/components/QuizBackGround';
import { QuizContainer } from '../src/components/QuizContainer';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import { Texto } from '../src/components/Letras';
import db from '../db.json';
import {Form} from '../src/components/Form'
import AlternativesForm from '../src/components/AlternativesForm';

function ResultWidget({results}){
  return (    
      <Widget>
        <Widget.Header>
          Você acertou {results.filter(x=>x).length} de 10 perguntas!
        </Widget.Header>
  
        <Widget.Content>
            Compartilhe com os amigos!
        </Widget.Content>
      </Widget>
    
  )
}

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>

      <Widget.Content>
        Preparando desafio..
      </Widget.Content>
    </Widget>
  );
}
function QuestionWidget({question, questionIndex,totalQuestions, onSubmit, addResults}) {
  const questionId = `question__${questionIndex}`;  
  const [isFormSubmited,setIsFormSubmited] = React.useState()
  const [selectedAlternative, setSelectedAlternative] = React.useState(undefined);
  const isCorrect = selectedAlternative === question.answer;
  const hasAlternativeSelected = selectedAlternative !== undefined;


  return (
    <Widget>
      <Widget.Header>
        {/* <BackLinkArrow href="/" /> */}
        <h3>
          {`Pergunta ${questionIndex} de ${totalQuestions}`}
        </h3>
      </Widget.Header>

      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
      />
      <Widget.Content>     
        <Widget.Content>  
          <Texto.H2>
            {question.description}
          </Texto.H2>
        </Widget.Content>

        <AlternativesForm onSubmit={(e) => {
            e.preventDefault();
            setIsFormSubmited(true)
            setTimeout(() =>{
              addResults(isCorrect)
              onSubmit()
              setIsFormSubmited(false)          
              setSelectedAlternative(undefined)
            },3*1000)
            
         
          }}
        >
          {isFormSubmited && isCorrect && <p>Você Acertou</p>}
          {!isCorrect && isFormSubmited && <p>Você Errou</p>}
       
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            const isSelected = selectedAlternative === alternativeIndex;
            const status = isCorrect? 'SUCCESS' : 'ERROR';
            
            return (
              <Widget.Topic as="label"
               key={alternativeId} 
               htmlFor={alternativeId} 
               data-selected={isSelected}
               data-status={isFormSubmited && status} 
              >  

              <input id={alternativeId} name={questionId} type="radio" style={{display:'none'}}        
                onChange = {()=>{              
                  setSelectedAlternative(alternativeIndex)
              }}/>     

              {alternative}            
              </Widget.Topic>              
            );
          })}

          <Form.Button type="submit" disabled={!hasAlternativeSelected} >
            Confirmar
          </Form.Button>
          
      
           
        </AlternativesForm>
      </Widget.Content>
    </Widget>
  );
}


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
