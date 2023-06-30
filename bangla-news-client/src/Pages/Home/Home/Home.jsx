import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../../Shared/NewsCard/NewsCard/NewsCard';

const Home = () => {
    const allNews = useLoaderData();

    return (
        <div>
            <div>
                {
                    allNews.map(news => {
                        return <NewsCard key={news._id} news={news}></NewsCard>
                    })
                }
            </div>
        </div>
    );
};

export default Home;