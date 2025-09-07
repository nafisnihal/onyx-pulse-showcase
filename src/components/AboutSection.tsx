import Marquee from "react-fast-marquee";
import img1 from "../assets/union.svg";

export const AboutSection = () => {
  return (
    <div>
      <Marquee speed={300}>
        <div>
          <img className="w-30 h-32" src={img1} />
        </div>
        <div>
          <img className="w-30 h-32" src={img1} />
        </div>
        <div>
          <img className="w-30 h-32" src={img1} />
        </div>
      </Marquee>
    </div>
  );
};
