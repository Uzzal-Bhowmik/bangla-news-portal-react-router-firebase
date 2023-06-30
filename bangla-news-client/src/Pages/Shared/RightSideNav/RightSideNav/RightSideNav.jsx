import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaFacebook, FaGithub, FaGoogle, FaTwitch, FaTwitter } from 'react-icons/fa';
import BrandCarousel from '../../BrandsCarousel/BrandCarousel/BrandCarousel';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';


const RightSideNav = () => {

    const { providerLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();
    const handleGooGleLogin = () => {
        providerLogin(googleProvider)
            .then(result => console.log(result.user))
            .catch(error => console.error(error))
    }

    return (
        <div>
            <h4>Login With</h4>

            <ButtonGroup vertical className='mt-2'>
                <Button variant='outline-primary' onClick={handleGooGleLogin}><FaGoogle className='mb-1 me-1' /> Login with Google</Button>
                <Button variant='outline-dark' className='mt-2'><FaGithub className='mb-1 me-1' /> Login with GitHub</Button>
            </ButtonGroup>

            {/* social icons */}
            <div className='my-5'>
                <h4 className='mb-3'>Find Us On</h4>

                <div className='rounded border p-2 ps-3 fs-5 bg-white shadow-sm mb-2'>
                    <p className='m-0'> <FaFacebook className='mb-1 me-1' /> Facebook</p>
                </div>
                <div className='rounded border p-2 ps-3 fs-5 bg-white shadow-sm mb-2'>
                    <p className='m-0'> <FaTwitter className='mb-1 me-1' /> Twitter</p>
                </div>
                <div className='rounded border p-2 ps-3 fs-5 bg-white shadow-sm mb-2'>
                    <p className='m-0'> <FaTwitch className='mb-1 me-1' /> Twitch</p>
                </div>
            </div>

            {/* brands */}
            <div>
                <h4>Sponsors</h4>

                <div className='mt-3'>
                    <BrandCarousel></BrandCarousel>
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;