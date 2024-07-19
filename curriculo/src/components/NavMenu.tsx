import React from 'react'
import Photo from '../assets/img/carlos-marques.png'
import '../styles/components/navMenu.sass'
import { BsDownload, BsGithub, BsInstagram, BsWhatsapp } from 'react-icons/bs'

interface NavMenuProps {
    activeScreen: string
    handleActiveScreen: (value: string) => void
}

export const NavMenu: React.FC<NavMenuProps> = ({
    activeScreen,
    handleActiveScreen 
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
                            onClick={(e) => {handleActiveScreen('About')}}
                        >
                            Sobre
                        </button>
                        <button className={activeScreen === 'Skills' ? 'active' : ''}
                            onClick={(e) => {handleActiveScreen('Skills')}}
                        >
                            Habilidades
                        </button>
                        <button className={activeScreen === 'Experience' ? 'active' : ''}
                            onClick={(e) => {handleActiveScreen('Experience')}}
                        >
                            Experiência
                        </button>
                        <button className={activeScreen === 'Portfolio' ? 'active' : ''}
                            onClick={(e) => {handleActiveScreen('Portfolio')}}
                        >
                            Portfólio
                        </button>
                        <button className="download"
                        >
                            <BsDownload style={{strokeWidth: '1px'}}/>
                            Baixar PDF
                        </button>
                    </nav>
                    <p>Made with: ReactJS, Typescript and SASS</p>
                </div>
            </div>
        </>
    )
}