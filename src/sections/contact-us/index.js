import React from "react";
import "./styles.css"
import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
import Button from 'react-bootstrap/Button'


export default function ContactUs({id}) {
        return (
            <div className={"section-contact-us"}>
                <div className={"section-opacity-perfil"} id={id}>

                    <div className="section-content">
                        <div className="content-contact-us">
                            <h2>Fale Conosco</h2>

                            <form>
                                <input type="text" name="name" className="inputName" placeholder="NOME" />

                                <div className="inputDown">
                                    <div>
                                        <input type="email" name="email" className="inputContact" placeholder="EMAIL" />
                                    </div>

                                    <div>
                                        <input type="telephone" name="telefone" className="inputContact" placeholder="TELEFONE" />
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
