import Doctorcare from '../assets/img/doctorcare.png'
import '../styles/components/cardPortifolio.sass'


type Portfolio = {
    name: string,
    technologies: string,
    image: string,
    alt: string,
    href: string
}

const portfolio: Portfolio[] = [ 
    {
        name: 'Doctorcare',
        technologies: 'HTML5, CSS3 e JavaScript',
        image: Doctorcare,
        alt: 'Imagem inicial do site Doctorcare.',
        href: 'https://carlosmarques07.github.io/DoctorCare/#home'
    }
]

export const CardPortfolio = () => {
    return(
        <div id="CardPortfolio">
            {portfolio.map((item, index) => (
                <div key={index} className="card">
                    <div className="portfolioItem">
                        <div className='image'>
                            <img src={item.image} alt={item.alt} />
                        </div>
                        <div className='content'>
                            <h2>{item.name}</h2>
                            <p><b>Feito com: </b>{item.technologies}</p>
                            <a href={item.href} target='_blank'>Acessar</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}