import Head from 'next/head';
import db from "../../../db.json";

function  IndexPage(){
    return (
      <div>
        <Head>
          <title>Next Question</title>
          
          <meta property="og:image" content={db.img} key="ogimage" />
          <meta property="og:title" content="Next Question" key="title" />
          <meta property="og:description" content={db.description} key="ogdesc" />

        </Head>   
                   
      </div>
    )
  }
  
  export default IndexPage