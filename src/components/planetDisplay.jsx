import "./planetDisplay.css";
import { useState } from "react";
import { ReactComponent as Picture } from "../assets/planets-fact-site/starter-code/assets/planet-earth.svg";
import { BsFillArrowUpRightSquareFill } from "react-icons/bs";

export default function PlanetDisplay({ data }) {
  const [planetImage, setPlanetImage] = useState(data.images.planet);

  return (
    <>
      <section>
        <div className="planet-image-container">
          <Picture className="planet-image" />
        </div>
        <div className="planet-content-container">
          <h1>{data.name}</h1>
          <blockquote>
            <p>{data.overview.content}</p>
          </blockquote>
          <figcaption>
            Source:{" "}
            <cite>
              <a href={data.overview.source}>Wikipedia</a>
              <BsFillArrowUpRightSquareFill id="arrow-icon" />
            </cite>
          </figcaption>
          <div className="button-container">
          <button className='button-content'>
                <p className='button-number'>01</p>
                <p className='button-text'>Overview</p>
          </button>
          <button className='button-content'>
                <p className='button-number'>02</p>
                <p className='button-text'>Internal Structure</p>
          </button>
          <button className='button-content'>
                <p className='button-number'>03</p>
                <p className='button-text'>Surface Geology</p>
          </button>
          </div>
        </div>
      </section>
    </>
  );
}
