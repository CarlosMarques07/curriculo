import React from "react";
import { NavMenu } from "../components/NavMenu";
import '../styles/pages/skills.sass'
import { CardSkills } from "../components/CardSkills";


interface SkillsProps {
    activeScreen: string
    handleActiveScreen: (value: string) => void
    windowWidth: number
}

    

export const Skills: React.FC<SkillsProps> = ({
    activeScreen,
    handleActiveScreen,
    windowWidth
}) => {
    return(
        <>
            <main>
                {windowWidth > 768 &&
                    <aside>
                        <NavMenu
                            activeScreen={activeScreen}
                            handleActiveScreen={handleActiveScreen}
                        />
                    </aside>
                }
                <div id="Skills">
                    <h1>Habilidades</h1>
                    <CardSkills />
                </div>
            </main>
        </>
    )
}