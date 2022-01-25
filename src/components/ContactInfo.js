import React from "react"

export default function ContactInfo() {
    return (
        <div className="contact">
            <div className="contact--titles">
                <h2>Henrique C. Maçaneiro</h2>
                <h3>Frontend Developer</h3>
                <h5>hcmacaneiro.website</h5>
            </div>
            <div className="contact--buttons">
                <button id="button-email"><i className="fas fa-envelope" id="email-icon"></i> Email</button>
                <button id="button-linkedin"><i className="fab fa-linkedin-in" id="linkedin-icon"></i> LinkedIn</button>
            </div>
            <div className="contact--about">
                <h2>About</h2>
                <p>
                    I'm a frontend developer eager to grow and better my craft so as to be better able to provide clients and companies with valuable designs. I'm constantly learning and becoming better, each day at a time.
                </p>
                <h2>Interests</h2>
                <p>
                    Coffee and Erva-mate aficionado. Avid reader of brazilian and russian 19th century literature. Jiu-jiteiro. Acoustic Guitar hobbyist. 
                </p>

            </div>
        </div>
    )
}