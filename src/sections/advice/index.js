import React from "react";
import "./styles.css";
import logoImobanc from "../../assets/logo-imobanc.png";

export default class Advice extends React.Component {
    render() {
        return (
            <div className={"section-advice"}>
                <div className={"section-opacity-perfil"}>

                    <div className="section-content">
                        <div className="advices">
                            <div className="content-advice">
                                <div className="img-logo">
                                    <img src={logoImobanc} />
                                </div>
                                <div>
                                    <h2>Financiamentos - IMOBANC</h2>
                                    <p>Sabem quem corre por você atrás dos bancos?!
                                    A ImoBanc é a divisão de financiamentos, toda a equipe de atendimento formada por profissionais preparados para atender às necessidades e dúvidas dos nossos clientes e parceiros.
                                    Todos os analistas da ImoBanc possuem os certificados de treinamento ANEPS, CA 300 ou CA600.
                                </p>
                                </div>
                            </div>
                            <div className="content-advice">
                                <div className="img-logo">
                                    <img src={logoImobanc} />
                                </div>
                                <div>
                                    <h2>Seja um correspondente IMOV</h2>
                                    <p>
                                        Que ser tornar um representante ImovControl, e atuar na cidade fazendo toda a porte de logística e assinatura de contratos,
                                        e usar umas da melhor plataforma de captação de Leads para financiamentos?
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
