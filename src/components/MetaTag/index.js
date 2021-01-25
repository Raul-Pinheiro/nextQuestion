import Head from 'next/head';
import db from "../../../db.json";

const  IndexPage = () => {
    return (
      <div>
        <Head>
          <title>Next Question</title>
          <meta property="og:title" content="Next Question" key="title" />
        </Head>
     
        <Head>
            <meta property="og:image" content={db.img} key="ogimage" />
        </Head>     
                  
        <Head>     
           <meta property="og:description" content={db.description} key="ogdesc" />
        </Head>
     
        
      </div>
    )
  }
  
  export default IndexPage