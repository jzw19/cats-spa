import React from 'react';
import bubbles from '../../util/img/bubbles-tunnel.jpg';

import './Home.css';

export const Home = () => {
    return(
        <div className='homeContainer'>
            <p>The cat life</p>
            <img id='bubblesTunnel' src={bubbles} alt='black cat sitting in a fabric tunnel' />
            <figcaption>Bubbles</figcaption>
            <p>Look into my eyes...</p>
            <p>Filler</p>
            <p>Filler</p>
            <p>Filler</p>
            <p>Filler</p>
            <p overflow='hidden'>Filler</p>
        </div>
    );
}

export default Home;