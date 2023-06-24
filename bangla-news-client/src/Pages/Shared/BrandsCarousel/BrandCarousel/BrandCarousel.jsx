import Carousel from 'react-bootstrap/Carousel';

import carousel1 from "../../../../assets/1.png";
import carousel2 from "../../../../assets/2.png";

function BrandCarousel() {
    return (
        <Carousel data-bs-theme="dark">
            <Carousel.Item>
                <img
                    className="d-block w-100 rounded"
                    src={carousel1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 rounded"
                    src={carousel2}
                    alt="Second slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default BrandCarousel;