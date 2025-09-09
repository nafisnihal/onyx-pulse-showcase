import Marquee from "react-fast-marquee";


export const AboutSection = () => {
  return (
    <div>
      <Marquee speed={200} className=" ">
        <div>
          <img className="w-30 h-32 mr-16" src="/public/union (1).png" />
        </div>
        <div>
          <img className="w-30 h-32 mr-16" src="/public/union (1).png" />
        </div>
        <div>
          <img className="w-30 h-32 mr-16" src="/public/union (1).png" />
        </div>
        <div>
          <img className="w-30 h-32 mr-16" src="/public/union (1).png" />
        </div>
      </Marquee>
    </div>
  );
};
