import React from 'react'

export default function Header({dark}) {
    return (
        <header className="profile container">
            <div className="profile__container grid">
                <div className="profile__data">
                    <div className="profile__border">
                        <div className="profile__perfil">
                            {/* <img src={me} alt="Artem Dirksen"/> */}
                        </div>
                    </div>

                    <h2 className={dark === true ? "dark_text":"profile__name"}>Dirksen Artem</h2>
                    <h3 className={dark === true ? "dark_text profile__profession":"profile__profession"}>Front-end developer</h3>

                    <ul className="profile__social">
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=dirksen.tema@gmail.com&su=Vacancy&body=Hi!" target="_blank" className={dark === true ? "dark_text profile__social-link": "profile__social-link"}>
                        <ion-icon name="mail"></ion-icon>
                        </a>
                        <a href="https://www.linkedin.com/in/artem-dirksen-9821a0246/" target="_blank" className={dark === true ? "dark_text profile__social-link": "profile__social-link"}>
                            <ion-icon name="logo-linkedin"></ion-icon>
                        </a>
                        <a href="https://github.com/Gamzatov" target="_blank" className={dark === true ? "dark_text profile__social-link": "profile__social-link"}>
                            <ion-icon name="logo-github"></ion-icon>
                        </a>
                    </ul>
                </div>
                <div className="profile__buttons">
                    <a target='_blank' href="https://drive.google.com/file/d/1TDAINfvYCMy4NdMOx9Lj2aQKmyCmQYvD/view?usp=sharing" className="button">
                        Look out CV <i className="ri-download-line"></i>
                    </a>

                    <div className="profile__buttons-small">
                        <a href="https://api.whatsapp.com/send?phone=380683863010" rel='noreferrer' target="_blank" className={dark === true ? "dark_btn  button__small button" :"button button__small button__gray"}>
                            <ion-icon name="logo-whatsapp"></ion-icon>
                        </a>
                        <a href="https://t.me/ads_dev" rel='noreferrer' target="_blank"  className={dark === true ? "dark_btn" +
                            "  button__small button" :"button button__small button__gray"}>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}
