import { CardExperience } from "../components/CardExperience"
import { NavMenu } from "../components/NavMenu"
import '../styles/pages/experience.sass'


interface ExperienceProps {
    activeScreen: string
    handleActiveScreen: (value: string) => void
    windowWidth: number
}

    

export const Experience: React.FC<ExperienceProps> = ({
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
                <div id="Experience">
                    <h1>Experiência</h1>
                    <CardExperience />
                </div>
            </main>
        </>
    )
}