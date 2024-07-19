import { CardPortfolio } from "../components/CardPortfolio"
import { NavMenu } from "../components/NavMenu"
import '../styles/pages/portfolio.sass'

interface PortfolioProps {
    activeScreen: string
    handleActiveScreen: (value: string) => void
    windowWidth: number
}

    

export const Portfolio: React.FC<PortfolioProps> = ({
    activeScreen,
    handleActiveScreen,
    windowWidth
}) => {
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
                <div id="Portfolio">
                    <h1>Portfólio</h1>
                    <CardPortfolio />
                </div>
            </main>
        </>
    )
}