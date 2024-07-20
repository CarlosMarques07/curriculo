import '../styles/components/cardExperience.sass'

type Experience = {
    company: string
    local: string | null,
    regime: string
    since: string
    end: string
    function: string
    attribuition: string
}

type Experiences = Experience[]

const experiences: Experiences = [
    {
        company: 'CG Contadores',
        local: null,
        regime: 'PJ',
        since: '04/2023',
        end: '07/2024',
        function: 'Analista e Líder Técnico de Qualidade',
        attribuition: 'Gerenciamento de equipe, testes manuais, concepção de melhorias em sistemas e processos, análise de requisitos, elaboração de casos de uso, aplicação de testes controlados e não controlados, elaboração de documentação técnica e de uso de ferramentas, elaboração de testes ordenados e não ordenados, concepção de processos e ferramentas conforme necessidade do usuário, elaboração de protótipos junto ao Designer Gráfico, concepção de melhorias em UX/UI, aplicação de treinamentos.'
    },
    {
        company: 'Cia. Zaffari Comércio e Indústria LTDA.',
        local: 'Bourbon Hipermercado Canoas',
        regime: 'CLT',
        since: '01/2022',
        end: '04/2023',
        function: 'Estoquista',
        attribuition: 'Gerenciamento de equipes, conferência de pordutos recebidos, gerenciamento de estoque e PDV, treinamento de novos colaboradores, atendimento ao cliente, elaboração de processos operacionais, prevenção de perdas.'
    },
    {
        company: 'Cia. Zaffari Comércio e Indústria LTDA.',
        local: 'Bourbon Hipermercado Canoas',
        regime: 'CLT',
        since: '10/2020',
        end: '12/2021',
        function: 'Auxiliar de loja - Eletro',
        attribuition: 'Conferência de produtos recebidos, organização de estoque e PDV, treinamento de novos colaboradores, atendimento ao cliente, prevenção de perdas.'
    },
    {
        company: 'WeCan Br Serviços Temporários LTDA.',
        local: 'Bourbon Hipermercado Canoas',
        regime: 'Temporário',
        since: '04/2020',
        end: '09/2020',
        function: 'Auxiliar de loja - Têxtil',
        attribuition: 'Organização de estoque e PDV, treinamento de novos colaboradores, atendimento ao cliente, prevenção de perdas.'
    }
]    

export const CardExperience = () => {
    return(
        <div id="CardExperience">
            {experiences.map((item, index) => (
                <div key={index} className='card'>
                    <div className="experienceItem">
                        <h2>{item.company}</h2>
                        {item.local !== null &&
                            <p><b>Local: </b>{item.local}</p>
                        }
                        <p><b>Função: </b>{`${item.function} (${item.regime})`}</p>
                        <div className='sinceEnd'>
                            <p><b>Início: </b>{item.since}</p>
                            <p><b>Término: </b>{item.end}</p>
                        </div>
                        <p><b>Atribuições: </b>{item.attribuition}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}