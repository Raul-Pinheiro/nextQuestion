import {Widget} from "../src/components/Widget"
import QuizBackGround from "../src/components/QuizBackGround"
import {QuizContainer} from "../src/components/QuizContainer"
import Footer from "../src/components/Footer"
import GitHubCorner from "../src/components/GitHubCorner"
import db from "../db.json"







// function Title(props){
//   return <h1>{props.children}</h1>
// }
export default function Home() {
  return (
    <QuizBackGround backgroundImage = {db.img}>
      <GitHubCorner projectUrl="https://github.com/Raul-Pinheiro"/>
      <QuizContainer>
        <h1>Next Question Quiz</h1>
     

      <Widget>
        <Widget.Header>
          <h1>Teste seu conhecimento aleatório</h1>
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
