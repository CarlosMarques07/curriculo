import React from "react";
import { NavMenu } from "../components/NavMenu";
import '../styles/pages/about.sass'


interface AboutProps {
    activeScreen: string
    handleActiveScreen: (value: string) => void
    windowWidth: number
}

    

export const About: React.FC<AboutProps> = ({
    activeScreen,
    handleActiveScreen,
    windowWidth
}) => {

    function calculateAge(birthDate: string) {
        const today = new Date();
        const birth = new Date(birthDate);
        let age = today.getFullYear() - birth.getFullYear();
        const monthDiff = today.getMonth() - birth.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
            age--;
        }
        return age;
    }

    return(
        <>
           <main>
                {windowWidth > 1160 &&
                    <aside>
                        <NavMenu
                            activeScreen={activeScreen}
                            handleActiveScreen={handleActiveScreen}
                            windowWidth={windowWidth}
                        />
                    </aside>
                }
                <div id="About">
                    <h1>Sobre mim</h1>
                    <p>
                        Me chamo <b>Carlos Andrius Marques da Silva</b>, tenho {calculateAge('2001-08-07')} anos,
                            moro em Porto Alegre/RS, sou Técnico em TI e atualmente estou cursando Análise e
                             Desenvolvimento de Sistemas na Unisinos. Embora tenha uma personalidade descontraída,
                              sou extremamente focado e dedicado aos meus afazeres. Meus hobbys consistem em praticar
                               atividades físicas, como academia e futebol, cozinhar, ler livros, além de pesquisar e estudar
                                formas de aprimorar meus conhecimentos. Também aprecio jogar vídeo game, xadrez e socializar com amigos.</p>
                    <p>Tenho uma experiência profissional diversificada que inclui três anos trabalhando com 
                        atendimento ao cliente e gerenciamento de recursos humanos e logísticos. Além disso,
                         atuei como Tech Lead de Qualidade e Analista de Qualidade, onde fui responsável pela análise de requisitos, testes
                          de usabilidade controlados e não controlados, planejamento de projetos e documentação,
                            elaboração e melhorias em processos internos da empresa.</p>
                    <h1>Principais Características</h1>
                    <ul>
                        <li><b>Interesse em Aprender:</b> estou sempre disposto aprender algo novo, indiferente da área de conhecimento.</li>
                        <li><b>Fácil Aprendizado:</b> aprendo com facilidade processos, padrões de negócios e ferramentas.</li>
                        <li><b>Liderança:</b> experiente em gestão de recursos humanos.</li>
                        <li><b>UX/UI e Clean Code:</b> Conhecimento amplo em design de experiência do usuário e práticas de código limpo.</li>
                        <li><b>Análise crítica:</b> sempre analisando cenários para tomadas de decisões mais eficientes e funcionais.</li>
                    </ul>
                </div>
           </main>
        </>
    )
}