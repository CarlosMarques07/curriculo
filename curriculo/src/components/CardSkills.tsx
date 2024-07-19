import { BsBootstrapFill } from 'react-icons/bs';
import '../styles/components/cardSkills.sass';

import { ReactNode } from 'react';
import { FaPhp, FaReact } from 'react-icons/fa6';
import { IoLogoAngular, IoLogoCss3, IoLogoHtml5, IoLogoJavascript, IoLogoSass, IoLogoVue } from 'react-icons/io5';
import { SiAdobephotoshop, SiCoreldraw, SiFigma, SiGimp, SiInkscape, SiJquery, SiMui, SiMysql, SiTailwindcss, SiTypescript } from 'react-icons/si';

type Skill = {
    icon: ReactNode;
    skill: string;
    seniority: string | null;
};

type Values = {
    title: string;
    skills: Skill[];
};

type CardValues = Values[];

const cardValues: CardValues = [
    {
        title: 'Linguagens Web',
        skills: [
            {
                icon: <IoLogoHtml5 className='icons' />,
                skill: 'HTML5',
                seniority: 'Intermediário',
            },
            {
                icon: <IoLogoCss3 className='icons' />,
                skill: 'CSS3',
                seniority: 'Intermediário',
            },
            {
                icon: <IoLogoJavascript className='icons' />,
                skill: 'JavaScript',
                seniority: 'Intermediário',
            },
            {
                icon: <FaPhp className='icons' />,
                skill: 'PHP',
                seniority: 'Básico',
            },
            {
                icon: <SiTypescript className='icons' />,
                skill: 'TypeScript',
                seniority: 'Básico',
            },
        ],
    },
    {
        title: 'Bibliotecas e Frameworks Web',
        skills: [
            {
                icon: <FaReact className='icons' />,
                skill: 'ReactJS',
                seniority: 'Básico',
            },
            {
                icon: <SiTailwindcss className='icons' />,
                skill: 'Tailwind CSS',
                seniority: 'Intermediário',
            },
            {
                icon: <IoLogoSass className='icons' />,
                skill: 'SASS',
                seniority: 'Intermediário',
            },
            {
                icon: <SiMui className='icons' />,
                skill: 'Material UI',
                seniority: 'Básico',
            },
            {
                icon: <BsBootstrapFill className='icons' />,
                skill: 'Bootstrap',
                seniority: 'Básico',
            },
            {
                icon: <IoLogoVue className='icons' />,
                skill: 'VueJS',
                seniority: 'Básico',
            },
            {
                icon: <SiJquery className='icons' />,
                skill: 'JQuery',
                seniority: 'Básico',
            },
            {
                icon: <IoLogoAngular className='icons' />,
                skill: 'Angular',
                seniority: 'Básico',
            },            
        ],
    },
    {
        title: 'Banco de Dados',
        skills: [
            {
                icon: <SiMysql className='icons' />,
                skill: 'MySQL',
                seniority: 'Intermediário',
            },
        ],
    },
    {
        title: 'Área Gráfica',
        skills: [
            {
                icon: <SiFigma className='icons' />,
                skill: 'Figma',
                seniority: 'Básico',
            },
            {
                icon: <SiGimp className='icons' />,
                skill: 'GNU GIMP',
                seniority: 'Básico',
            },
            {
                icon: <SiCoreldraw className='icons' />,
                skill: 'Corel Draw',
                seniority: 'Básico',
            },
            {
                icon: <SiInkscape className='icons' />,
                skill: 'Inkscape',
                seniority: 'Básico',
            },
            {
                icon: <SiAdobephotoshop className='icons' />,
                skill: 'Adobe Photoshop',
                seniority: 'Básico',
            },
        ],
    },
];

export const CardSkills = () => {
    return (
        <div id="Carousel">
            {cardValues.map((item, index) => (
                <div key={index} className='skill'>
                    <h2>{item.title}</h2>
                    <div id='Items'>
                        {item.skills.map((skill, skillIndex) => (
                            <div className="item" key={skillIndex}>
                                {skill.icon}
                                <h3>{skill.skill}</h3>
                                <p>{skill.seniority}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};
