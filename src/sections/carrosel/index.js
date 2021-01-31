import React from "react";
import "./styles.css";

import InfiniteCarousel from 'react-leaf-carousel';

import image1 from "../../assets/imovcontrol-dashboard1.png"
import image2 from "../../assets/imovcontrol-dashboard2.png"
import image3 from "../../assets/imovcontrol-dashboard3.png"

export default function Carrosel({id}) {
        return (

            <div className={"section-carrosel"} id={id}>
                <div className={"section-opacity"}>

                    <div className="content-about-carrosel">
                        <div className="content-about-text">
                            <text className="title-about-imovcontrol">A ImovControl</text>
                            <text className="text-about">A ImovControl é uma plataforma digital que usa a tecnologia para organizar as vendas de imóveis financiadas pelas maiores instituições financeiras do país.<br /><br /> Fundada em 2020 em São Paulo, por correspondentes bancários que viam a necessidade de gestão neste setor, trazendo não só tecnologia na gestão dos financiamentos, como no atendimento a parceiros e cliente.<br /><br /> Através da tecnologia, agilizamos a busca do melhor credito imobiliário para os nossos clientes e parceiro.</text>
                        </div>

                        <div className="content-about-carousel">
                            <InfiniteCarousel
                                breakpoints={[
                                    {
                                        breakpoint: 500,
                                        settings: {
                                            slidesToShow: 1,
                                            slidesToScroll: 1,
                                        },
                                    },
                                    {
                                        breakpoint: 100,
                                        settings: {
                                            slidesToShow: 1,
                                            slidesToScroll: 1,
                                        },
                                    },
                                ]}
                                dots={false}
                                showSides={true}
                                sidesOpacity={.5}
                                sideSize={.2}

                                slidesToScroll={1}
                                slidesToShow={1}
                                scrollOnDevice={true}
                            >
                                <div>
                                    <img style={{ borderRadius: 5 }} src={image2} />
                                </div>
                                <div>
                                    <img style={{ borderRadius: 5 }} src={image1} />
                                </div>
                                <div>
                                    <img style={{ borderRadius: 5 }} src={image3} />
                                </div>

                            </InfiniteCarousel>
                        </div>
                    </div>
                </div>
            </div>
        )
}
