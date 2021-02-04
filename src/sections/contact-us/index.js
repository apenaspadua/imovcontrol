import React from "react";
import "./styles.css";
import emailjs from "emailjs-com";
import Form from 'react-bootstrap/Form'


export default function ContactUs({ id }) {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_wmsii3x', 'template_o8i32dp', e.target, 'user_IKDGgB1T5N5Q74Ywm5OCv')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

            e.target.reset()
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
                                    <input type="telephone" name="phone" className="inputContact" placeholder="TELEFONE" />
                                </div>
                            </div>
                            <input className="button-form" type="submit" value="Enviar" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
