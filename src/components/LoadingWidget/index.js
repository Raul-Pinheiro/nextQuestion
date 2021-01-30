import React from 'react';
import {Widget} from '../Widget'

export default function LoadingWidget() {
    return (
      <Widget>
        <Widget.Header>
          Carregando...
        </Widget.Header>
  
        <Widget.Content>
          Preparando desafio..
        </Widget.Content>
      </Widget>
    );
  }