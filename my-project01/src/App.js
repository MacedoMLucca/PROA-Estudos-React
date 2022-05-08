import logo from './logo.svg';
import './App.css';


// let nome = prompt('Digite seu nome');
// let AnoAtual = prompt('Digite o ano atual:')
// let AnoNasce = prompt('Digite o ano em que voce nasceu:')

// let idade = AnoAtual - AnoNasce

function App(props) {



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          nome e voce tem idade anos
        </p>
        <p>{props.pais}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
