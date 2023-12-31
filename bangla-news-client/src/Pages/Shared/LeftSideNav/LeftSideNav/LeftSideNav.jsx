import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("https://bangla-news-server-mu.vercel.app/news-categories")
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])


    return (
        <div>
            <h4 className='mb-3 d-none d-lg-block'>All Category</h4>

            <ul>
                {
                    categories.map(category => (
                        <li key={category.id} className='mb-2' style={{ listStyleType: "none" }}>
                            <Link to={`/category/${category.id}`}>
                                {category.name}
                            </Link>
                        </li>

                    ))
                }
            </ul>

        </div>
    );
};

export default LeftSideNav;