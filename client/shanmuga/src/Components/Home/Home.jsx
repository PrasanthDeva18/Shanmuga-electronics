import React from 'react'
import './Home.css'
import homet from '../../images/hometheatre.png';
import Slide from 'react-reveal/Slide';
const Home = () => {
    return (
        <>

            <div className='outer'>
                <div className='hero'>
                    <Slide left>
                        <div className='left'>
                            <div>
                                <h3 className='con'>
                                    Experience the ultimate in convenience and quality with our wide selection of top-of-the-line electronics.
                                </h3>
                            </div>
                            <div>
                                <button className='btn'>View More</button>
                            </div>

                        </div>
                    </Slide>
                    <div className='right'>
                        <img src={homet} style={{ 'width': '500px', 'height': '400px' }} />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home