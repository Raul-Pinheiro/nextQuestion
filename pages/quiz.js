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

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>

      <Widget.Content>
        [Desafio do Loading]
      </Widget.Content>
    </Widget>
  );
}
function QuestionWidget({question, questionIndex,totalQuestions, onSubmit}) {
  const questionId = `question__${questionIndex}`;
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
        <Texto.H2>
          {question.description}
        </Texto.H2>

        <Form onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            return (
              <Widget.Topic
                as="label"
                htmlFor={alternativeId}
              >
                <input
                  // style={{ display: 'none' }}
                  id={alternativeId}
                  name={questionId}
                  type="radio"
                />
                {alternative}
              </Widget.Topic>
            );
          })}

          <Form.Button type="submit" >
            Confirmar
          </Form.Button>
        </Form>
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

  const [screenState,setScreenState] = React.useState(screenStates.LOADING)

  

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
      return setCurrentQuestion(index + 1)      
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
        />

      )}
      {screenState === screenStates.LOADING && <LoadingWidget />}
        
      {screenState === screenStates.RESULT && <div>Você acertou!</div>}
        <Footer />
      </QuizContainer>

    </QuizBackGround>
  );
}
