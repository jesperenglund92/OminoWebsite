
const Us = () => {
    return (
        <section id='usSection'>
            <div className="my-grid-header"><h2>about us</h2></div>
            <div className="my-container">
                <div className="new-grid us-grid">
                    <div className="multi-paragraph-item us-text">
                        <p>It all started as a school project in the fall of 2020 at KTH in Stockholm. Since the project was complete, the development has continued intermitttently and now it's finally starting to come together.</p>
                        <p>I had some collaborators during that project, but none of them chose to continue working on the project with me. The few things that were not orignially done by me have been remade/rewritten/redesigned. So, except for a handful of free assets, everything in Polipod was made by me, Jesper Englund, including game logic, level editor, data architecture, UI, shaders, movement mechanics and environment interactions, level design, music, sound effects, skyboxes and this website.</p>
                        <p>In the fall of 2023 I started the company Omino Games AB, which will be publishing Polipod, but it's still just me working on it.</p>
                    </div>
                    <div className="center">
                        <div className="us-img-container">
                            <img src="images/jesperTransparent.png" className="grid-img us-img" alt="Jesper" />
                            <div className="img-caption">
                                <p>Jesper Englund - CEO/Developer/Designer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Us;  
