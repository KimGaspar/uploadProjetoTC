import React, {Component} from 'react';

import './Login.css';

import iconLocked from '../../assets/locked.png';
import iconEnvelope from '../../assets/envelope.png';
import logoTrash from '../../assets/logo.png';

const URL_TO_FETCH = 'https://sistema.trackcash.com.br/api/products';
  fetch(URL_TO_FETCH, {
    method: 'get',
    headers: new Headers({ 
      'Content-Type': 'application/json; charset=utf-8',
      'token': 'dGVzdGVAbWV1ZW1haWwuY29tOm11ZGFyMTIz',
    }) 
  })
  .then(function(response) {
    console.log(response);
  })
  .catch(function(err) { 
    console.error(err);
  });
  
class Login extends React.Component {
  render() {
  return (
      <div className="login__container">
          <div className="login__card1">
              <img src={logoTrash} alt="" />
            <div className="login__titulo">
              <h1>Fazer login no TrackCash: </h1>
            </div>
            <div className="login__email">
              <input type="email" placeholder="Digite seu Email"/>
              <img src={iconEnvelope} alt="IconEnvelope" className="icon1"/>

            </div>
            <div className="login__senha">
              <input type="" placeholder="Digite sua Senha"/>
              <img src={iconLocked} alt="IconCadeado" className="icon2"/>
            
            </div>
            <div className="login__entrar">
              <button type="submit">Fazer Login</button>
            </div>
            <div className="login__lembrete">
              <input type="checkbox" className="check__box"
              />Lembre-me
            </div>
            <div className="login__recuperar">
              <a href="#" className="recuperar__senha">Recuperar Senha</a>
              <a href="#" className="login__cadastro">Cadastre-se</a>
            </div>
              
         
          </div>
          <div className="login__img">
            <div  className="login__card2">
               <h1>Muito mais que um conciliador financeiro!</h1>
               <p>A melhor ferramenta no mercado e a única com processo automatizado,que compara as informações entre Plataformas, MarketPlaces, Transportadoras, Meios de Pagamento e instituições Financeiras!</p>
            </div>
          </div>
      </div>    
   )
  }
}

export default Login;