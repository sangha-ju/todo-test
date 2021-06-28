import React from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
`;

const ModalBox = styled.div`
  width: 550px;
  height: 250px;
  background-color: #ffffff;
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 15px;
  border-bottom: 1px solid #e9ecef;

  button {
    width: 30px;
    height: 30px;
    border: none;
    outline: none;
    background-color: #ffffff;
    font-size: 20px;
    cursor: pointer;
  }
`;

const InputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;

  input {
    width: 220px;
    height: 30px;
    outline: none;
    border: 1px solid #e9ecef;
    border-radius: 5px;
  }

  button {
    width: 60px;
    height: 30px;
    margin-left: 5px;
    border: none;
    border-radius: 5px;
    outline: none;
    background-color: #0984e3;
    color: #ffffff;
    font-size: 15px;
    cursor: pointer;
  }
`;

function CreateModal() {
  return (
    <ModalContainer>
      <ModalBox>
        <Head>
          <h2>New Task</h2>
          <button>X</button>
        </Head>
        <InputBox>
          <input />
          <button>add</button>
        </InputBox>
      </ModalBox>
    </ModalContainer>
  );
}

export default CreateModal;
