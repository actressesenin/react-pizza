import logo from '../src/logo.svg';
import './App.css';
import { render } from '@testing-library/react';

function App() {
  return (
    <div className="App">
      <header>
        <div>
          <img src={logo}/>
        </div>
        <ul>
          <li><a>Main</a></li>
          <li><a>About</a></li>
          <li><a>Contact us</a></li>
        </ul>
      </header>
    </div>
  );
}

export default App;
