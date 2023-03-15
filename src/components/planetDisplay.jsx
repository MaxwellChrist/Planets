import './planetDisplay.css';
import { useState } from 'react';
import { ReactComponent  as Picture } from '../assets/planets-fact-site/starter-code/assets/planet-earth.svg'

export default function PlanetDisplay({data}) {

    const [planetImage, setPlanetImage] = useState(data.images.planet)

    return (
        <>
            <section>
                <div className='planet-image-container'>
                    <h1>{data.name}</h1>
                    <Picture />
                    <div className='planet-image' style={{backgroundImage: planetImage}}></div>
                </div>
            </section>
        </>
    )
}