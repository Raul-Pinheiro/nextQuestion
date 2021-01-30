import React from "react";
import {Widget} from '../Widget'
import {Form} from '../Form'
import AlternativesForm from '../AlternativesForm'
import {Texto} from '../Letras'
import BlackLinkArrow from '../BlackLinkArrow'



export default function QuestionWidget({question, questionIndex,totalQuestions, onSubmit, addResults}) {
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
            <BlackLinkArrow href="/"/>{`Pergunta ${questionIndex} de ${totalQuestions}`}
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