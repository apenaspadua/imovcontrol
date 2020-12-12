import React from "react";
import "./styles.css";
import logoImovcontrol from "../../assets/logo-imov-control.svg";



export default class Footer extends React.Component {
    render() {
        return (
            <div className={"section-advice"}>
                <div className={"section-footer"}>
                    <div className="section-content">
                        <div className="content-footer">
                            <div className="img-logo-imov">
                                <img src={logoImovcontrol} />
                            </div>

                            <div className="options-footer">
                                <label>A IMOVCONTROL</label>
                                <label>ESCOLHA SEU PERFIL</label>
                                <label>SOLICITE SEU FINANCIAMENTO</label>
                                <label>ACOMPANHE AQUI</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
