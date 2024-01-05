
const News = () => {
    const news = [<span>2024-01-05 - The <a href="https://www.kickstarter.com/projects/bockpe/polipod-a-fun-mobile-puzzle-game" target="_blank">Kickstarter Campaign</a> launches!</span>,
    <span>2024-01-01 - A demo video for the game is releasing today, watch it <a href="https://youtu.be/Vvb8goNZk3E" target="_blank">here</a>!</span>];
    return (
        <div className="center">
            <div className="card dark-bg">
                <h3 className="">news</h3>
                <div className="news-container">
                    <ul className="news">
                        {news.map((newsItem, i) => (
                            <li key={`newsItem-${i}`}>{newsItem}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default News;  
