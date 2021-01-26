import {Widget} from "../src/components/Widget"
import QuizBackGround from "../src/components/QuizBackGround"
import {QuizContainer} from "../src/components/QuizContainer"
import Footer from "../src/components/Footer"
import GitHubCorner from "../src/components/GitHubCorner"
import {Texto} from "../src/components/Letras"
import db from "../db.json"
// import { Meta } from "../src/components/MetaTag"
import Head from 'next/head';







// function Title(props){
//   return <h1>{props.children}</h1>
// }
export default function Home() {
  return (
    
      
      <QuizBackGround backgroundImage = {db.img}>
      <Head>
        <title>{db.title}</title>
        <meta property="og:title" content={db.title} key="title" />
        <meta property="og:image" content={db.img} key="image" />
        <meta property="og:description" content={db.description} key="description" />
      </Head>
      <GitHubCorner projectUrl="https://github.com/Raul-Pinheiro"/>
      <QuizContainer>
        <Texto.H1>Next Question</Texto.H1>
     

      <Widget>
        <Widget.Header>
          <Texto.H2>Random Quiz</Texto.H2>
        </Widget.Header>
          
        <Widget.Content>
          <Texto.P>Prontos para as perguntas?</Texto.P>
         
        </Widget.Content>

     
        
      </Widget>
          
      <Widget>
         <Widget.Header>
            <Texto.H2> Quiz da comunidade</Texto.H2>
         </Widget.Header>
         <Widget.Content> 
            <Texto.P>Olá pessoal!</Texto.P>
         </Widget.Content>
      </Widget>
      <Footer/>
      </QuizContainer>
      
      </QuizBackGround>
    
  )
}
