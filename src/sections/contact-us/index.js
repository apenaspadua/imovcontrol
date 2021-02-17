import React, { useEffect, useState } from "react";
import "./styles.css";
import emailjs from "emailjs-com";
import InputMask from "react-input-mask";
import Alert from 'react-bootstrap/Alert'


export default function ContactUs({ id }) {
    const [isEmailSentError, setIsEmailSentError] = useState(false);
    const [isEmailSentSuccess, setIsEmailSentSuccess] = useState(false);

    const botoesConfirmacao = () => {
        if(isEmailSentError) {
           
            return (
                <div className="feedback-negative">
                    <label>Ocorreu um erro, por favor tente mais tarde!</label>
                </div>
            );
        } else if (isEmailSentSuccess) {
            
            return (
                <div className="feedback-positive">
                    <label>Email enviado com sucesso!</label>
                </div>
            );
        }
    }

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_wmsii3x', 'template_o8i32dp', e.target, 'user_IKDGgB1T5N5Q74Ywm5OCv')
            .then((result) => {
                setIsEmailSentSuccess(true);
                console.log(result.text);

            }, (error) => {
                setIsEmailSentError(true);
                console.log(error.text);
            });

        // e.target.reset()
    }

    return (
        <div className={"section-contact-us"}>
            <div className={"section-opacity-perfil"} id={id}>

                <div className="section-content">
                    <div className="content-contact-us">
                        <h2>Fale Conosco</h2>

                        <form onSubmit={sendEmail}>
                            <input type="text" name="name" className="inputName" placeholder="NOME" />

                            <div className="inputDown">
                                <div>
                                    <input type="email" name="email" className="inputContact" placeholder="EMAIL" />
                                </div>

                                <div>
                                    {/* <input type="telephone" name="phone" className="inputContact" placeholder="TELEFONE" /> */}
                                    <InputMask mask="(99)99999-9999" name="phone" className="inputContact" placeholder="TELEFONE" />
                                </div>
                            </div>
                            <input className="button-form" disabled={isEmailSentSuccess} type="submit" value="Enviar"/>
                        </form>
                    </div>
                    {botoesConfirmacao()}
                </div>
            </div>
        </div>
    )
}
