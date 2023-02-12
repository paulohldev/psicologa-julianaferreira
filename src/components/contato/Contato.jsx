import React from 'react';
import styled from 'styled-components';
import Botao from '../Botao';
import Titulo from '../Titulo';

const Input = styled.input`
  padding: 15px;
  border-radius: 4px;
  border: 1px solid var(--black);
  &:focus {
    outline: none;
  }
  max-width: 620px;
  min-width: 300px;
  width: 100%;
  font-family: 'Barlow', sans-serif;
`;

const TextArea = styled.textarea`
  padding: 15px;
  border-radius: 4px;
  border: 1px solid var(--black);
  &:focus {
    outline: none;
  }
  max-width: 620px;
  min-width: 300px;
  width: 100%;
  font-family: 'Barlow', sans-serif;
  height: 350px;
  resize: none;
  margin-bottom: 40px;
`;

const Label = styled.label`
  font-family: 'Barlow', sans-serif;
  font-weight: 600;
  display: block;
  margin-bottom: 3px;
  margin-top: 20px;
`;

const Form = styled.form`
  max-width: 620px;
  margin: 30px auto 0 auto;
`;

const Contato = () => {
  return (
    <section style={{ paddingBottom: '200px' }}>
      <Titulo center paddingTop={90}>
        Entre em Contato
      </Titulo>
      <Form>
        <Label htmlFor="nome">NOME</Label>
        <Input type="text" name="nome" id="nome" />
        <div style={{ display: 'flex', gap: '20px' }}>
          <div>
            <Label htmlFor="email">EMAIL</Label>
            <Input type="text" name="email" id="email" />
          </div>
          <div>
            <Label htmlFor="celular">NÚMERO DE CELULAR</Label>
            <Input type="text" name="celular" id="celular" />
          </div>
        </div>
        <div>
          <Label htmlFor="descricao">ENVIE SUA MENSAGEM</Label>
          <TextArea
            type="textarea"
            name="descricao"
            id="descricao"
            placeholder="Descreva seu problema ou questão emocional"
          />
        </div>
        <Botao color="161616" backgroundColor="87CEFA">
          ADQUIRIR UM ORÇAMENTO
        </Botao>
      </Form>
    </section>
  );
};

export default Contato;
