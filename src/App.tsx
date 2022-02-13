import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

const App: React.FC = (): JSX.Element => (
  <div className='container'>
    <Header />
    <Main />
  </div>
);

export default App;