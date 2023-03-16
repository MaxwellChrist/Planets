import "./planetDisplay.css";
import { useState, useEffect } from "react";
import { BsFillArrowUpRightSquareFill } from "react-icons/bs";

const svgPath = "/src/components";

export default function PlanetDisplay({ data }) {
  const [planetImage, setPlanetImage] = useState(svgPath + data.images.planet);
  const [isHover, setIsHover] = useState(false);
  const [hoverColor, setHoverColor] = useState("#6F2ED6");
  const [hoverButtonNumber, sethoverButtonNumber] = useState(0);

  function determineColor() {
    let planetName = data.name;
    if (planetName.toLowerCase() === "mercury") {
      setHoverColor("#419EBB");
    } else if (planetName.toLowerCase() === "venus") {
      setHoverColor("#EDA249");
    } else if (planetName.toLowerCase() === "earth") {
      setHoverColor("#6F2ED6");
    } else if (planetName.toLowerCase() === "mars") {
      setHoverColor("#D14C32");
    } else if (planetName.toLowerCase() === "jupiter") {
      setHoverColor("#D83A34");
    } else if (planetName.toLowerCase() === "saturn") {
      setHoverColor("#CD5120");
    } else if (planetName.toLowerCase() === "uranus") {
      setHoverColor("#1EC2A4");
    } else {
      setHoverColor("#2D68F0");
    }
  }

  function handleHoverEffectIn(e) {
    setIsHover(true);
    if (e.target.id === "button-01") sethoverButtonNumber(1);
    if (e.target.id === "button-02") sethoverButtonNumber(2);
    if (e.target.id === "button-03") sethoverButtonNumber(3);
  }

  function handleHoverEffectOut() {
    setIsHover(false);
    sethoverButtonNumber(0);
  }

  const hoverColorFill1 = {
    backgroundColor: isHover &&  hoverButtonNumber === 1 ? hoverColor : "transparent",
  };

  const hoverColorFill2 = {
    backgroundColor: isHover &&  hoverButtonNumber === 2 ? hoverColor : "transparent",
  };

  const hoverColorFill3 = {
    backgroundColor: isHover &&  hoverButtonNumber === 3 ? hoverColor : "transparent",
  };

  useEffect(() => {
    determineColor();
  }, [data, isHover]);

  return (
    <>
      <section>
        <div className="planet-image-container">
          <img className="planet-image" src={planetImage} />
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
            <button
            id="button-01"
              className="button-content"
              onMouseEnter={(e) => handleHoverEffectIn(e)}
              onMouseLeave={handleHoverEffectOut}
              style={hoverColorFill1}
            >
              <p className="button-number">01</p>
              <p className="button-text">Overview</p>
            </button>
            <button
            id="button-02"
              className="button-content"
              onMouseEnter={(e) => handleHoverEffectIn(e)}
              onMouseLeave={handleHoverEffectOut}
              style={hoverColorFill2}
            >
              <p className="button-number">02</p>
              <p className="button-text">Internal Structure</p>
            </button>
            <button
            id="button-03"
              className="button-content"
              onMouseEnter={(e) => handleHoverEffectIn(e)}
              onMouseLeave={handleHoverEffectOut}
              style={hoverColorFill3}
            >
              <p className="button-number">03</p>
              <p className="button-text">Surface Geology</p>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
