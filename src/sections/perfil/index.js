import React from "react";
import "./styles.css"
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
// import { Tab } from 'react-bootstrap';
// export { Sonnet } from 'react-bootstrap';

export default class Perfil extends React.Component {
    render() {
        return (
            <div className={"section-perfil"}>
                <div className={"section-opacity-perfil"}>

                    <div className="section-content">
                        <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
                            <Tab eventKey="Corretor" title="Para Corretor">
                                <h2>Corretor</h2>
                            </Tab>
                            <Tab eventKey="Imobiliarias" title="Para Imobiliarias">
                                <h2>Imobiliarias</h2>

                            </Tab>
                            <Tab eventKey="Construtoras" title="Para Construtoras/incorporados">
                                <h2>Construtoras</h2>

                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        )
    }
}
