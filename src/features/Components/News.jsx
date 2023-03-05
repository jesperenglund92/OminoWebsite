
const News = () => {
    const demoLink = <a href="https://youtu.be/lzzkix9G_TU">here</a>
    const news = [<span>2023-03-05 - A demo video for the game is releasing today, watch it <a href="https://youtu.be/lzzkix9G_TU" target="_blank">here</a>!</span>];
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
