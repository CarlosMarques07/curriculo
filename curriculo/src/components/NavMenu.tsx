import React from 'react'
import Photo from '../assets/img/carlos-marques.png'
import Curriculo from '../assets/docs/Carlos Marques - Currículo.pdf'
import '../styles/components/navMenu.sass'
import { BsDownload, BsGithub, BsInstagram, BsWhatsapp } from 'react-icons/bs'

interface NavMenuProps {
    activeScreen: string
    handleActiveScreen: (value: string) => void,
    windowWidth: number
    setOpenMenu?: (value: boolean) => void
}

export const NavMenu: React.FC<NavMenuProps> = ({
    activeScreen,
    handleActiveScreen,
    windowWidth,
    setOpenMenu 
}) => {
    return(
        <>
            <div id="Menu">
                <img src={Photo} alt="Foto de Carlos Marques"/>
                <div>
                    <h1>Carlos Marques </h1>
                    <h2>Front-end Developer / QA Analyst</h2>
                    <nav>
                        <div id='SocialLinks'>
                            <a href="https://www.instagram.com/carlytos.1/" target="_blank">
                                <BsInstagram />
                            </a>
                            <a href="https://wa.me/5551991955649" target="_blank">
                                <BsWhatsapp />
                            </a>
                            <a href="https://github.com/CarlosMarques07" target="_blank">
                                <BsGithub />
                            </a>
                        </div>
                        <button className={activeScreen === 'About' ? 'active' : ''}
                            onClick={() => {windowWidth > 768 
                                ? handleActiveScreen('About')
                                : handleActiveScreen('About'); if (setOpenMenu) setOpenMenu(true);; 
                            }}
                        >
                            Sobre
                        </button>
                        <button className={activeScreen === 'Skills' ? 'active' : ''}
                            onClick={() => {windowWidth > 768 
                                ? handleActiveScreen('Skills')
                                : handleActiveScreen('Skills'); if (setOpenMenu) setOpenMenu(true);; 
                            }}
                        >
                            Habilidades
                        </button>
                        <button className={activeScreen === 'Experience' ? 'active' : ''}
                            onClick={() => {windowWidth > 768 
                                ? handleActiveScreen('Experience')
                                : handleActiveScreen('Experience'); if (setOpenMenu) setOpenMenu(true); 
                            }}
                        >
                            Experiência
                        </button>
                        <button className={activeScreen === 'Portfolio' ? 'active' : ''}
                            onClick={() => {windowWidth > 768 
                                ? handleActiveScreen('Portfolio')
                                : handleActiveScreen('Portfolio'); if (setOpenMenu) setOpenMenu(true);; 
                            }}
                        >
                            Portfólio
                        </button>
                        <a className="download" href={Curriculo} download='Carlos Marques - Currículo.pdf'>
                            <BsDownload style={{strokeWidth: '1px'}}/>
                            Baixar PDF
                        </a>
                    </nav>
                    <p>Made with: ReactJS, Typescript and SASS</p>
                </div>
            </div>
        </>
    )
}