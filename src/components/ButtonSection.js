import React from "react"
import '../scss/buttonSection.scss'

const ButtonSection = ({children, backgorundColor}) => {
    return(
        <a className={`button-section ${backgorundColor}`}>
            <section className="button-sectioncontainer">
                {children}
            </section>
        </a>
    )
}

export default ButtonSection;