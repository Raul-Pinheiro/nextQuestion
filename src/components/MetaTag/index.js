import Head from 'next/head';
import db from "../../../db.json";


export const Meta = () => (
      <Head>
        <title key="title">{db.title}</title>

        <meta
          key="description"
          name="description"
          content={db.description}
        />
      
        <meta
          key="og:title"
          name="og:title"
          content={db.title}
        />
      
      
        <meta
          key="og:image"
          name="og:image"
          content={db.img}
        />
      </Head>
  );