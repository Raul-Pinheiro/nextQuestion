/* eslint-disable react/jsx-no-bind */
/* eslint-disable func-names */
/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
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

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  return (

    <QuizBackGround backgroundImage={db.img}>
      <Head>
        <title>{db.title}</title>
        <meta property="og:title" content={db.title} key="title" />
        <meta property="og:image" content={db.img} key="image" />
        <meta property="og:description" content={db.description} key="description" />
        <meta property="og:url" content="https://next-question.vercel.app/" key="description" />


      </Head>
      <GitHubCorner projectUrl="https://github.com/Raul-Pinheiro" />
      <QuizContainer>
        <Texto.H1>Next Question</Texto.H1>

        <Widget>
          <Widget.Header>
            <Texto.H2>Random Quiz</Texto.H2>
          </Widget.Header>

          <Widget.Content>
            <Texto.P>Para começar, digite um apelido:</Texto.P>
            <Form onSubmit={function (e) {
              e.preventDefault();
              router.push(`/quiz?${name}`);
              console.log('Submit pelo react');
              // router manda para proxima página
            }}
            >
              <Form.Input
                placeholder="Apelido"
                onChange={function (e) {
                  setName(e.target.value);
                }}
              />

              <Form.Button type="submit" disabled={name.length === 0}>
                PLAY
              </Form.Button>
            </Form>
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
        <Footer />
      </QuizContainer>

    </QuizBackGround>

  );
}
