import React from 'react'
import './black.css';
import Speaker from '../../images/repair.png'
import Zoom from 'react-reveal/Zoom';
const Black = () => {
    return (
        <>
            <div className='black'>
                <div className='le'>
                    <h1 className='con1'>HAND MADE AMPLIFIERS WE DO.</h1>
                    <p className='con2'>We also firmly believed that our customers deserved more choices, straightforward information and legendary service.</p>
                    <button className='btnn'>View More</button>
                </div>
                <Zoom>
                    <div>
                        <img src={Speaker} style={{ 'width': '500px', 'height': '400px' }} />
                    </div>
                </Zoom>

            </div>
        </>
    )
}

export default Black