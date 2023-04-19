import React from 'react'
import './footer.css';
import tv from '../../images/tv.png';
import logo from '../../images/logo.svg'
const Footer = () => {
    return (
        <>
            <div className='foot'>
                <div className='white'>
                    <div className='spp'>
                        <img src={tv} style={{'height':'412px'}} />
                    </div>
                    <div className='spr'>
                        <h2>Stay in touch?</h2>
                        <p className='sub'>Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
                        </p>
                        <button className='btn'>SUBSCRIBE</button>
                    </div>
                </div>
                <div className='details'>
                    <div className='first'>
                        <p></p>
                    </div>
                    <div className='second'>

                    </div>
                    <div className='third'>

                    </div>
                </div>
                <div className='end'>
                    <div>
                        <p className='ttxxt1'>@shanmuga Electronics 2023</p>
                    </div>
                    <div className='tttt'>
                        <div>
                            <div>
                                <img src='' />
                                <p className='ttxxt'>shanmugaelectronics@gmail.com</p>
                            </div>
                            <div>
                                <img src='' />
                                <p className='ttxxt'>+91-9842776615</p>
                            </div>
                        </div>
                        <div>
                            <img src={logo} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer