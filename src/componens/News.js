import React, { useState, useEffect } from 'react'
import NewsItems from './NewsItems';
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";




const News = (props) => {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, settoTalResults] = useState(0)




    const newsHub = async () => {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`

        setLoading(true)
        let data = await fetch(url);
        props.setProgress(40);
        let parsedData = await data.json()
        props.setProgress(80);
        setArticles(parsedData.articles)
        settoTalResults(parsedData.totalResults)
        setLoading(false)

        props.setProgress(100);

    }

    useEffect(() => {
        newsHub();
        // eslint-disable-line
    }, [])


    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`
        setPage(page + 1)
        setLoading(true)
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        settoTalResults(parsedData.totalResults)
        setLoading(false)
    };





    return (
        <div className='container-fluid ' style={{ marginTop: '90px' }}>
            <div className="container my-4">
                <h1 className='text-center my-5'>Headlines -
                    Top <span className="text-danger"> {props.category}</span>  headlines
                </h1>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner />}
                >
                    <div className="container">
                        <div className="row">
                            {articles.map((element) => {
                                return <div className='col-md-4 col-12' key={element.url}>
                                    <NewsItems
                                        title={element.title}
                                        description={element.description}
                                        imageUrl={element.urlToImage}
                                        newsUrl={element.url}
                                        author={element.author}
                                        date={element.publishedAt}
                                        source={element.source.name}
                                    />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </div>


        </div>
    )

}

export default News
