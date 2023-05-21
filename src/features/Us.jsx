
const Us = () => {
    return (
        <section id='usSection'>
            <div className="my-grid-header"><h2>about us</h2></div>
            <div className="my-container">
                <div className="new-grid us-grid">
                    <div className="multi-paragraph-item us-text">
                        <p>It all started as a school project in the fall of 2020 at KTH in Stockholm. Since the project was complete, the development has continued intermitttently and now it's finally starting to come together.</p>
                        <p>Hannes Runelöv has been a crucial cog in this project, as he had the idea for the core mechanics of the game. He also developed these mechanics in addition to Omino creature animations, as well as creating shaders, such as ice and conveyor belts. Due to personal reasons, he will just stay on as a level designer and tester going forward.</p>
                        <p>Everything else that you see and hear in the game was designed and developed by Jesper Englund, including game logic, level editor, data architecture, UI, movement mechanics and environment interactions, level design, music, sound effects, skyboxes and this website.</p>
                    </div>
                    <div className="center">
                        <div className="us-img-container">
                            <img src="images/jesperTransparent.png" className="grid-img us-img" alt="Jesper" />
                            <div className="img-caption">
                                <p>Jesper Englund - Developer, designer, project manager etc.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Us;  
