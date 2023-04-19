import React from 'react'
import './service.css'
import tv from '../../images/tv.png';
import repair from '../../images/reapir.png'
import speaker from '../../images/repair.png';
import Zoom from 'react-reveal/Zoom';
const Services = () => {
    return (
        <>
            <div className='services'>
                <h3 className='pro'>OUR SERVICES</h3>
                <Zoom>
                    <div className='gallery'>
                        <div className='sercar'>
                            <img src={repair} style={{ 'width': '320px', 'height': '360px' }} />
                            <p>TELEVISION REPAIR</p>
                        </div>
                        <div className='sercar'>
                            <img src={speaker} style={{ 'width': '320px', 'height': '360px' }} />
                            <p>AUDIO SYSTEM REPAIR</p>
                        </div>
                        <div className='sercar'>
                            <img src={tv} style={{ 'width': '320px', 'height': '360px' }} />
                            <p>INSTALLATION</p>
                        </div>
                    </div>
                </Zoom>
                <div className='bbb'>
                    <button className='btn'>VIEW MORE</button>
                </div>
            </div>
        </>
    )
}

export default Services