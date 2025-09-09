import Marquee from "react-fast-marquee";


export const AboutSection = () => {
  return (
    <div>
      <Marquee speed={200} className=" ">
        <div>
          <img className="w-30 h-32 mr-16" src="/union.png" />
        </div>
        <div>
          <img className="w-30 h-32 mr-16" src="/union.png" />
        </div>
        <div>
          <img className="w-30 h-32 mr-16" src="/union.png" />
        </div>
        <div>
          <img className="w-30 h-32 mr-16" src="/union.png" />
        </div>
      </Marquee>
    </div>
  );
};
