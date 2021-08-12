import './App.css';
import Main from './components/Main/Main';
import Login from './components/Login/Login';


const App = () => {
  /*<Login> = acessa a tela de login*/
  /*<Main> = acessa a tela do dashboard*/
  return(
    <div className="container">
      
      <Login></Login>
      <Main></Main>
    
    </div>
  )
}

export default App;
