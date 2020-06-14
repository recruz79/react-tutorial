import React from 'react';
import './App.css';
import Blog from './blog/Blog';
import logo from './logo.svg';
import Greeting from './helloworld/Greeting'
function App() {
  return (
    <React.Fragment>
      <Blog />
      
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Edit <code>src/App.js</code> and save to reload.</p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
        I want to learon a lot more wow this is so fast that I want to do all my work here!!!
        First thing is to get use to create component so I can reuse them for example the blog compoents shold be able to use them anytime
        lets try to add them into this project
      </header>
      </div>

      <Greeting />
    </React.Fragment>
  );
}

export default App;
