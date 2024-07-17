import React, { useEffect, useState } from "react";
import Photo from '../assets/img/carlos-marques.png'
import PhotoMobile from '../assets/img/carlos-marques-mobile.png'
import '../styles/components/LandingPage.sass'

interface LandingPageProps {
    handleActiveScreen: (value: string) => void
}

    

export const LandingPage: React.FC<LandingPageProps> = ({handleActiveScreen}) => {

    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    console.log(windowWidth)
    return(
        <>
            <main id="LandingPage">
                <img src={windowWidth <= 768 ? PhotoMobile : Photo} alt="Foto de Carlos Marques"/>
                <div>
                    <h1>Carlos Andrius Marques da Silva</h1>
                    <div>
                        <p>Meu nome é Carlos Marques, sou Técnico em TI e atualmente estou cursando Análise
                             e Desenvolvimento de Sistemas. Embora tenha uma personalidade descontraída,
                              sou extremamente focado e dedicado aos meus afazeres. No meu tempo livre, gosto
                               de praticar atividades físicas, como academia e futebol, além de pesquisar e
                                estudar formas de aprimorar meus conhecimentos.
                                 Também aprecio jogar vídeo game e socializar com amigos.</p>
                        <p>Tenho uma experiência profissional diversificada que inclui três anos trabalhando
                             com atendimento ao cliente e gerenciamento de recursos humanos e logísticos.
                              Além disso, atuei como Tech Lead de Qualidade, onde fui responsável pela análise
                               de requisitos, testes de usabilidade controlados e não controlados, planejamento
                                de projetos e documentação, e elaboração e melhorias em processos internos da empresa.</p>
                    </div>
                    <button
                        onClick={(e) => {handleActiveScreen('About')}}
                    >
                        Teste
                    </button>
                </div>
                
            </main>
        </>
    )
}