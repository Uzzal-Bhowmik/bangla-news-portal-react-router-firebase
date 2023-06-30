import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { FaStar } from 'react-icons/fa';
import { Button } from 'react-bootstrap';

const DynamicNews = () => {
    const dynamicNews = useLoaderData();
    const { title, details, author, image_url, category_id, rating } = dynamicNews;

    return (
        <Card className='shadow'>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Text className='fs-3 text-center fw-semibold'>{title}</Card.Text>
                <Card.Text className='d-flex align-items-center justify-content-between container mt-4'>
                    <p><span className='fw-bold'>Author: </span>{author.name}</p>
                    <p><span className='fw-bold'>Published On: </span>{author.published_date}</p>
                    <p>
                        <FaStar className='text-warning me-2'></FaStar>
                        {rating.number}
                    </p>
                </Card.Text>
                <Card.Text>
                    {details}
                </Card.Text>

                <Link to={`/category/${category_id}`}>
                    <Button variant="primary">Explore Category</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default DynamicNews;