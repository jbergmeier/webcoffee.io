import logo from './bergmeier-white.svg';
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
            <a href="mailto:hello@bergmeier.solutions?subject=Hello%20Web" className="email">hello@bergmeier.solutions</a>
          </p>

      </header>
    </div>
  );
}

export default App;
