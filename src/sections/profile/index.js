import React, { useState } from "react";

import { TabManager } from "../../components/tabs";
import "./styles.css";

const TABS = [
  { label: "Para Corretor", value: 1 },
  { label: "Para Imobiliarias", value: 2 },
  { label: "Para construtoras", value: 3 }
];

const TabBroker = () => (
  <div className="tab-content-all">

    <div style={{marginBottom: 50, marginTop: 20}}>
      <text className="text-info">
        Corretor de imóveis. <br/><br/>
        Tenha acesso imediato às melhores instituições financeiras para fechar os negócios de seus clientes. <br/><br/>
        As melhores e maiores instituições financeira estão conosco, além da gestão de suas vendas, você possui um agente financeiro online para lhe dar as melhores opções no perfil do seu cliente.
      </text>
    </div>

    <div>
      <div className="container-vantages-title">
        <text className="vantages-title">Vantagens de usar ImovControl: </text>
        <div className="fieldset"><></></div>
      </div>
      

      <div className="contant-vantages">

        <div className="container-info-breaker">
          <text className="title-info">Apenas uma solicitação</text>
          <text className="text-info">
            Com uma única solicitação, você aciona as maiores e melhores instituições financeira do país, caso precise, pode conversar com um analista de crédito via chat para esclarecimento de suas dúvidas.
          </text> 
        </div>
       
        <div className="container-info-breaker">  
          <text className="title-info">Acompanhe passo a passo</text>
          <text className="text-info">
            Acompanhe o passo a passo, de todas as etapas de seus processos, economizando tempo não indo atrás de vários correspondentes, financeiras, agências e/ou agentes financeiros de cada banco. Não tem perca de documentos, e não gaste com locomoção, já que trabalhamos remotamente e digitalmente, o que leva a você ter mais tempo para realizar mais vendas. 
          </text> 
        </div>
       
        <div className="container-info-breaker">
          <text className="title-info">Portfólio de Vendas</text>
          <text className="text-info">
            Além disso você terá acesso a todos os empreendimentos das construtoras cadastradas em nosso sistema, aumentando seu portfólio de vendas.
          </text> 
        </div>
    
      </div>
    </div>

    <div className="content-button">
      <button className="button">CADASTRE-SE PARA SABER MAIS</button>
    </div>


  </div>
)

const TabImobile = () => (
  <div className="tab-content-all">

    <div style={{marginBottom: 50, marginTop: 20, padding: 20}}>
      <text className="text-info">
        Imobiliárias.
        <br/><br/>
        Gerencie suas vendas e tenha acesso imediato às melhores instituições financeiras para fechar os seus negócios de sua equipe. Não faça sua equipe perder vendas, centralize todas as vendas financiadas em um lugar só.
        <br/><br/>
        Desta forma, você proprietário consegue dar um melhor suporte a sua equipe na aquilo que vocês realmente gostam de fazer, “VENDER”, e deixem as burocracias dos bancos conosco
        <br/><br/><br/><br/>


        Nós organizamos todas as solicitações de financiamento da sua equipe, e você acompanha, em tempo real como o andamento das análises de crédito, das vistorias dos imóveis, da elaboração e assinatura dos contratos de financiamento. Com isso, você economiza tempo não indo atrás de vários correspondentes, financeiras, agências e/ou agentes financeiros de cada banco. Nós nos comunicamos com os agentes e instituições financeiras.
        <br/><br/> 
        Deixe com a gente.
      </text>
    </div>

    <div className="content-button">
      <button className="button">CADASTRE-SE PARA SABER MAIS</button>
    </div>

  </div>

)

const TabCompany = () => (
  <div className="tab-content-all">

    <div style={{marginBottom: 50, marginTop: 20, padding: 20}}>
      <text className="text-info">
        Disponibilize as suas imobiliárias parceiras e seus corretores as informações de empreendimentos para conseguirem o financiamento para seus clientes.
        <br/><br/>
        Os corretores conseguem ter acesso à disponibilidade das unidades e fazer uma reserva em qualquer momento, além de, se no caso o cliente precisar de um financiamento bancário, a mesma plataforma já aciona as maiores e melhores instituições bancárias do país, tudo em um lugar só, sem precisa correr atrás do crédito para seu cliente ou esfriar um unidade por demora na aprovação.
        <br/><br/>
        Venda mais rápido conosco.
      </text>
    </div>

    <div className="content-button">
      <button className="button">CADASTRE-SE PARA SABER MAIS</button>
    </div>

  </div>

)


export default function Profile() {
  const [activeTab, handleTab] = useState(0)
  const [color, setColor] = useState('blue')

  return (
    <div className="container-profile">
      <div className="content-title-profile">
        <text className="title-profile">Qual o seu perfil?</text>
      </div>
      
      <TabManager tabs={TABS} activeTab={activeTab} handleTab={handleTab} color={color} />
      
      { activeTab === 1 ? <TabBroker/> : activeTab === 2 ? <TabImobile/> : <TabCompany/> }
    
    </div>
  );
}