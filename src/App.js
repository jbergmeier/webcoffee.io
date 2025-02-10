import logo from './B_image_white.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <p className="text">
            we are preparing something exciting<br />
            & amazing for you!<br />
          </p>
          <p className="text">
            <a href="mailto:hello@webcoffee.io?subject=Hello%20Web" className="email">hello@webcoffee.io</a>
          </p>

      </header>
    </div>
  );
}

export default App;
