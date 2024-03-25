import React from 'react';
import './Home.css'
import palmL from '../../assets/palmL.png'
import palmR from '../../assets/palmR.png'
import compass from '../../assets/compass.png'
import photos from '../../assets/photos.png'
import rtL from '../../assets/rtL.png'
import hta from '../../assets/hta.png'
import rtR from '../../assets/rtR.png'
import canon from '../../assets/canon.png'

const Home = () => {
    return (
        <div className='homeLayout'>
            <img className='appear' src={rtR} alt="" style={{position:'absolute', right:'0', top:'120px', animationDelay:'1.1s'}}/>
            <img className='appear' src={rtL} alt="" style={{position:'absolute', left:'0', top:'45px', animationDelay:'0.5s'}}/>
            <img className='slideL' src={palmL} alt="" style={{position:'absolute', left:'0', top:'0'}}/>
            <img className='slideR' src={palmR} alt="" style={{position:'absolute', right:'0', top:'0'}}/>
            <img className='appear scale' src={hta} alt="" style={{position:'absolute', right:'655px', top:'400px', animationDelay:'1.5s'}}/>
            <img className='appear scale' src={canon} alt="" style={{position:'absolute', right:'520px', top:'-60px', animationDelay:'1.2s'}}/>
            <img className='appear scale' src={compass} alt="" style={{position:'absolute', left:'370px', top:'290px', animationDelay:'0.8s'}}/>
            <img className='appear scale' src={photos} alt="" style={{position:'absolute', left:'400px', top:'-55px', animationDelay:'1s'}}/>
            <div className='sliderContainer'>
                <div className="tv-image-slider tv-moduleid-9969222"></div>
            </div>

        </div>
    );
};

export default Home;