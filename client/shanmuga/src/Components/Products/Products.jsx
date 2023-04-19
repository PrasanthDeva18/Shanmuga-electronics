import React from 'react'
import './product.css'
import Amp from '../../images/amplifier.png';
import speaker from '../../images/speaker.png'
import tele from '../../images/tele.png';
import Zoom from 'react-reveal/Zoom';
const Products = () => {
    return (
        <>
            <div className='products'>
                <h3 className='pro'>OUR LATEST PRODUCTS</h3>
                <Zoom>
                    <div className='gallery'>
                        <img src={Amp} style={{ 'width': '320px', 'height': '360px' }} />
                        <img src={speaker} style={{ 'width': '320px', 'height': '360px' }} />
                        <img src={tele} style={{ 'width': '320px', 'height': '360px' }} />
                    </div>
                </Zoom>

                <div className='bbb'>
                    <button className='btn'>VIEW GALLERY</button>
                </div>

            </div>
        </>
    )
}

export default Products