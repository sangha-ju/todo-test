import React from "react";
import { createGlobalStyle } from "styled-components";
import TodoHead from "./components/TodoHead";
import TodoTemplate from "./components/TodoTemplate";

const GlobalStyle = createGlobalStyle`
 body {
  background-color: #dfe6e9;

  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
      </TodoTemplate>
    </div>
  );
}

export default App;
