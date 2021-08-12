import React, {Component} from 'react';
//import axios from 'axios';
import './Main.css';
import logoTrack from '../../assets/track.png';
import vector from '../../assets/vector.png';
import grafico from '../../assets/grafico.png';
import bars from '../../assets/bars.png';
import cifrao from '../../assets/cifrao.png';
import cifrao2 from '../../assets/cifrao2.png';
import madeira from '../../assets/madeira.png';
import leroy from '../../assets/leroy.png';

const URL_TO_FETCH = 'https://sistema.trackcash.com.br/api/products';
  fetch(URL_TO_FETCH, {
    method: 'get',
    headers: new Headers({ 
      'Content-Type': 'application/json; charset=utf-8',
      'token': 'dGVzdGVAbWV1ZW1haWwuY29tOm11ZGFyMTIz'
    }) 
  })
  .then(response => response.json())
  .then(data => {
    const dados = data
    const nome = dados.name
  })

  



class Main extends React.Component{
  
  render() {
    return (
      <div className="dashboard">
        <div className="navbar__esquerda">
          <div>
            <div className="navbar__img">
              <img src={logoTrack} alt="" />
            </div>
            <div className="navbar__direita__img">
              <img src={vector} alt="" />
            </div>
            <div className="content">
              <div className="titulo1">
                <h1>Tabela de Recorrências de Pagamentos</h1>
              </div>
              <div className="paragrafo">
                <p>Página de Recorrências referentes ao mês atual</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container__card">
          <div className="card__header">
            <h1>Desempenho Mensal e Diário</h1>
          </div>
          <div className="card1">
              <img src={grafico} alt="" className="grafico__img" />
              <div className="lateral">
                <p>Quantidade</p>
              </div>
              <div className="lateral__direita">
                <p>Valor</p>
              </div>
              <div className="square__orange"></div>
              <div className="vendas1">
                <p>Numero de vendas</p>
              </div>
              <div className="square__blue"></div>
              <div className="vendas2">
                <p>Valor de Vendas (R$)</p>
              </div>
              <div className="taxas" >
                <div className="pedidos1">
                  <img src={bars} alt="" />
                </div>
                <div className="valor__taxa">
                  <p>7,48%</p>
                </div>
                <div className="aprovacao">
                  <p>Taxa de aprovação dos pedidos</p>
                </div>
                <div className="reais">
                  <img src={cifrao} alt="" />
                </div>
                <div className="valor__taxa2">
                  <p>7,48%</p>
                </div>
                <div className="aprovacao2">
                  <p>Taxa de aprovação dos pedidos</p>
                </div>
              </div>
              <div className="taxas2">
                <div className="pedidos2">
                  <img src={bars} alt="" />
                </div>
                <div className="valor__taxa3">
                  <p>98</p>
                </div>
                <div className="aprovacao3">
                  <p>Pedidos aprovados na data de hoje</p>
                </div>
                <div className="reais2">
                  <img src={cifrao} alt="" />
                </div>
                <div className="valor__taxa4">
                  <p>7,78%</p>
                </div>
                <div className="aprovacao4">
                  <p>Total de vendas do dia (R$)</p>
                </div>
              </div>
          </div>
          <div className="card__header2">
            <h1>Desempenho Mensal e Diário</h1>
          </div>
          <div className="square__green">
            <img src={cifrao2} alt="" />
            <p className="p1">7,48%</p>
            <p className="p2"> Total líquido (R$)</p>
          </div>
          <div className="container__total">
              <img src={leroy} alt="" className="leroy__img" />
              <p>9.370,73</p>
              <img src={madeira} alt="" className="madeira__img" />
              <p className="p3">2.160,60</p>
          </div>
          <div className="rectangle"></div>
          <div className="retirada__container">
            <p>225,50</p>
            <p className="p4">Retirada (R$)</p>
            <p className="p5">982,01</p>
            <p className="p6">Comissões (R$)</p>
          </div>
          <div className="container__antecipacao">
            <p className="p7">685,20</p>
            <p className="p8">Antecipações (R$)</p>
            <p className="p9">988,00</p>
            <p className="p10">Frete de marketplace (R$)</p>
          </div>
          <div className="container__pagamentos">
            <p className="p11">208,38</p>
            <p className="p12">Pagamentos totais (R$)</p>
            <p className="p13">540,41</p>
            <p className="p14">Devoluções e cancelamentos</p>  
          </div>  
        </div>
        <div className="rodape">
            <p className="copy">Copyright © 2017 - 2021 TrackCash. Todos os Direitos Reservados.</p>
            <p className="termos">Termos de uso</p>
            <p className="priv">Politicas de privacidade</p>
            <p className="final">FAQ</p>
        </div>
      </div>
    )
  }
  }

 


export default Main;