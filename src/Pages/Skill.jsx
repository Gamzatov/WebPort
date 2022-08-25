import React from 'react'

export default function Skill({dark}) {
    let themeTitle = dark === true ? 'dark_text skills__name' : 'skills__name'
    let themeSubtitle = dark === true ? 'dark_text skills__level' : 'skills__level';

    return (
        <div className="skills__content grid" data-content id="skills">
            <div className="skills__area">
                <h3 className="skills__title">Frontend Developer</h3>

                <div className="skills__box">
                    <div className="skills__group">
                        <div className="skills__data">
                           <ion-icon name="checkmark-circle-outline"></ion-icon>

                            <div>
                                <h3 className={themeTitle}>HTML</h3>
                                <span className={themeSubtitle}>Advanced</span>
                            </div>
                        </div>

                        <div className="skills__data">
                           <ion-icon name="checkmark-circle-outline"></ion-icon>

                            <div>
                                <h3 className={themeTitle}>CSS</h3>
                                <span className={themeSubtitle}>Intermediate</span>
                            </div>
                        </div>

                        <div className="skills__data">
                           <ion-icon name="checkmark-circle-outline"></ion-icon>

                            <div>
                                <h3 className={themeTitle}>JavaScript</h3>
                                <span className={themeSubtitle}>Intermediate</span>
                            </div>
                        </div>
                    </div>

                    <div className="skills__group">
                        <div className="skills__data">
                           <ion-icon name="checkmark-circle-outline"></ion-icon>

                            <div>
                                <h3 className={themeTitle}>React</h3>
                                <span className={themeSubtitle}>Intermediate</span>
                            </div>
                        </div>
                        <div className="skills__data">
                           <ion-icon name="checkmark-circle-outline"></ion-icon>

                            <div>
                                <h3 className={themeTitle}>Redux</h3>
                                <span className={themeSubtitle}>Intermediate</span>
                            </div>
                        </div>

                        <div className="skills__data">
                           <ion-icon name="checkmark-circle-outline"></ion-icon>

                            <div>
                                <h3 className={themeTitle}>TypeScript</h3>
                                <span className={themeSubtitle}>Basic</span>
                            </div>
                        </div>

                        <div className="skills__data">
                           <ion-icon name="checkmark-circle-outline"></ion-icon>

                            <div>
                                <h3 className={themeTitle}>Git</h3>
                                <span className={themeSubtitle}>Intermediate</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="skills__area">
                <h3 className="skills__title">Backend Developer</h3>

                <div className="skills__box">
                    <div className="skills__group">
                        <div className="skills__data">
                           <ion-icon name="checkmark-circle-outline"></ion-icon>

                            <div>
                                <h3 className={themeTitle}>PHP</h3>
                                <span className={themeSubtitle}>Basic</span>
                            </div>
                        </div>

                        <div className="skills__data">
                           <ion-icon name="checkmark-circle-outline"></ion-icon>

                            <div>
                                <h3 className={themeTitle}>MySQL</h3>
                                <span className={themeSubtitle}>Basic</span>
                            </div>
                        </div>

                        <div className="skills__data">
                           <ion-icon name="checkmark-circle-outline"></ion-icon>

                            <div>
                                <h3 className={themeTitle}>Postman</h3>
                                <span className={themeSubtitle}>Basic</span>
                            </div>
                        </div>
                    </div>

                    <div className="skills__group">
                        <div className="skills__data">
                           <ion-icon name="checkmark-circle-outline"></ion-icon>

                            <div>
                                <h3 className={themeTitle}>Python</h3>
                                <span className={themeSubtitle}>Basic</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
