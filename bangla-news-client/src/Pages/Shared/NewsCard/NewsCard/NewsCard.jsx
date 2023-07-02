import React from 'react';
import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { _id, title, author, details, image_url, total_view, rating } = news;

    const displayFlex = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    }

    return (
        <Card className="mb-5">
            <Card.Header className='d-flex align-items-center justify-content-between px-3 py-2'>
                <div className='d-flex align-items-center'>
                    <Image
                        src={author.img}
                        style={{ height: "50px" }}
                        roundedCircle
                    >
                    </Image>

                    <div className='ms-2'>
                        <p className='m-0 p-0 fw-bold'>{author.name}</p>
                        <p className='m-0 p-0'>{author.published_date}</p>
                    </div>
                </div>

                <div>
                    <FaRegBookmark className='me-2'></FaRegBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title className='text-center fs-3 fw-bolder'>{title}</Card.Title>

                <Card.Img variant="top" src={image_url} className='my-3' />

                <Card.Text>
                    {
                        details.length > 250 && (
                            <>
                                {details.slice(0, 250)}
                                <Link to={`/news/${_id}`} className='text-decoration-none ms-2'>Read More...</Link>
                            </>
                        )
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted" style={displayFlex}>
                <div style={displayFlex}>
                    <FaStar className='text-warning me-2'></FaStar>
                    <span>{rating.number}</span>
                </div>

                <div style={displayFlex}>
                    <FaEye className='text-primary me-2'></FaEye>
                    <span>{total_view}</span>
                </div>
            </Card.Footer>
        </Card>
    );
}

export default NewsCard;