import logo from './profile.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Chrysics Homepage
        </p>
        <a
          className="App-link"
          href="https://github.com/CHRYSICS/CS340_group123"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link to a project
        </a>
      </header>
    </div>
  );
}

export default App;
