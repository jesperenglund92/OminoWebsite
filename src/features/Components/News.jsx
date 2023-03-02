
const News = () => {
    const news = ["2022-02-06 - Lorem ipsum dolor sit amet, consectetur adipiscing elit", "2022-02-06 - Lorem ipsum dolor sit amet, consectetur adipiscing elit", "2022-02-06 - Lorem ipsum dolor sit amet, consectetur adipiscing elit", "2022-02-06 - Lorem ipsum dolor sit amet, consectetur adipiscing elit", "2022-02-06 - Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    return (
        <div className="center">
            <div className="card dark-bg">
                <h3 className="">news</h3>
                <div className="center">
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
