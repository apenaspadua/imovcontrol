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
                            </div><br />

                            {/* <div>
                                <label>Facebook</label>
                                <label>Instagram</label>
                                <label>Av. Paulista, 171 - Bela Vista</label>
                                <label>CEP: 01311904</label>
                            </div><br />

                            <div>
                                <label>37.371.370/1000-08</label>
                                <label>11 3164-2567</label>
                                <label> 19 99169-9215</label>
                            </div> */}
                        </div>

                        <div className="content-footer">
                            <div className="options-footer-contact">
                                <label>Facebook</label>
                                <label>Instagram</label>
                                <label>Av. Paulista, 171 - Bela Vista</label>
                                <label>CEP: 01311904</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
