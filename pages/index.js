import {Widget} from "../src/components/Widget"
import QuizBackGround from "../src/components/QuizBackGround"
import {QuizContainer} from "../src/components/QuizContainer"
import Footer from "../src/components/Footer"
import GitHubCorner from "../src/components/GitHubCorner"
import {Titulo} from "../src/components/Letras"
import db from "../db.json"
import { Meta } from "../src/components/MetaTag"






// function Title(props){
//   return <h1>{props.children}</h1>
// }
export default function Home() {
  return (
    <QuizBackGround backgroundImage = {db.img}>
      <Meta/>
      <GitHubCorner projectUrl="https://github.com/Raul-Pinheiro"/>
      <QuizContainer>
        <Titulo.H1>Next Question</Titulo.H1>
     

      <Widget>
        <Widget.Header>
          <Titulo.H2>Teste seu conhecimento aleatório</Titulo.H2>
        </Widget.Header>
          
        <Widget.Content>
          <p>Olá pessoal!</p>
        </Widget.Content>
  
        
      </Widget>
      <Widget>
         <Widget.Header>
            <h1> Quiz da galera</h1>
         </Widget.Header>
         <Widget.Content> 
            <p>Olá pessoal!</p>
         </Widget.Content>
      </Widget>
      <Footer/>
      </QuizContainer>
      
      </QuizBackGround>
  )
}
