import React from 'react'
import q from '../../images/q.svg'
import './reviews.css'
import Fade from 'react-reveal/Fade';
const Reviews = () => {
    return (
        <Fade left>
            <div className='reviews'>
                <div className='cc'>
                    <h2>CUSTOMER REVIEWS</h2>
                </div>
                <div className='rr'>
                    <div className='card'>
                        <div>
                            <img src={q} />
                        </div>
                        <div>
                            <p>Great variety of cuts and amazing customer service. Helped to find the perfect ring and helped me to personalize it a little more.</p>
                        </div>
                        <div>
                            <p>- Prasanth D</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div>
                            <img src={q} />
                        </div>
                        <div>
                            <p>Great variety of cuts and amazing customer service. Helped to find the perfect ring and helped me to personalize it a little more.</p>
                        </div>
                        <div>
                            <p>- Prasanth D</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div>
                            <img src={q} />
                        </div>
                        <div>
                            <p>Great variety of cuts and amazing customer service. Helped to find the perfect ring and helped me to personalize it a little more.</p>
                        </div>
                        <div>
                            <p>- Prasanth D</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fade>

    )
}

export default Reviews