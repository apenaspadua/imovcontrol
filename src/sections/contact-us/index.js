import React from "react";
import "./styles.css"
import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
import Button from 'react-bootstrap/Button'


export default class ContactUs extends React.Component {
    render() {
        return (
            <div className={"section-contact-us"}>
                <div className={"section-opacity-perfil"}>

                    <div className="section-content">
                        <div className="content-contact-us">
                            <h2>Fale Conosco</h2>
                            <Form>
                                <Form.Group controlId="formBasicName">
                                    <Form.Label>Nome: </Form.Label>
                                    <Form.Control type="text" placeholder="Nome" />
                                </Form.Group>
                                <div>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Email: </Form.Label>
                                        <Form.Control type="email" placeholder="Email" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Telefone: </Form.Label>
                                        <Form.Control type="fone" placeholder="(xx) xxxx-xxxx" />
                                    </Form.Group>
                                </div>
                                <Button variant="primary" type="button">
                                    Enviar
                                </Button>
                            </Form>
                            {/* <form>
                                <label>Nome:</label>
                                <input type="text" name="name" />
                                <div>
                                    Email:
                                    <input type="email" name="email" />
                                    Telefone:
                                    <input type="telephone" name="telefone" />
                                </div>
                                <input type="submit" value="Enviar" />
                            </form> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
