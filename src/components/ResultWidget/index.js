import react from 'react'
import {Widget} from '../Widget'


export function ResultWidget({results}){
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