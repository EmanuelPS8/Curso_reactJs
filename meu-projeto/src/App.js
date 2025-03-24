import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';
function App() {

  // pode utilizar esse área para colocar variaveis
  const nome = "Emanuel";



  const url = "https://i.pinimg.com/736x/c8/49/6f/c8496f276336e9e3ce63462ea791f9c2.jpg";
  const url2 = "https://i.pinimg.com/736x/f6/7f/e9/f67fe9486563e6077072a61d45c4140c.jpg"

  return (
    <div className="App">
      <h1>Olá, mundo!</h1>
      <Frase />
      <Frase />
      <p>Olá, {nome}.</p>
      <img src={url} alt="Imagem de exemplo"/>
      <SayMyName nome="Emanuel" />
      <SayMyName nome="João" />
      <SayMyName nome={nome} />
      <Pessoa foto={url2} nome="JungKook" idade="28" profissao="Desenvolvedor" />
      <List/>
    </div>
  );
}

export default App;
