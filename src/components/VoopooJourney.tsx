export const VoopooJourney = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto space-y-5 mt-20 mb-10 ">
        <h1 className="text-4xl font-bold">Start your Vape journey</h1>
        <p className="">
          Vape, as an international brand, has been focusing on technology
          innovation and investment, driven by a singular purpose - to unlock
          new possibilities and elevate the beauty of vaping for users .
        </p>
      </div>
      {/* image */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="relative group cursor-pointer">
          <img
            src="/argus_pc.jpg"
            className="brightness-50 group-hover:brightness-100 transition-all ease-in-out duration-200"
          />
          <h1 className="text-xl lg:text-3xl font-bold absolute left-32 lg:left-64 bottom-12">
            ONYX SERIES
          </h1>
        </div>
        <div className="relative group cursor-pointer">
          <img
            src="/drag_pc.jpg"
            className="brightness-50 group-hover:brightness-100 transition-all ease-in-out duration-200"
          />
          <h1 className="text-xl lg:text-3xl font-bold absolute left-32 lg:left-64 bottom-12">
            INFLAVE SERIES
          </h1>
        </div>
        <div className="relative group cursor-pointer">
          <img
            src="/v_pc.jpg"
            className="brightness-50 group-hover:brightness-100 transition-all ease-in-out duration-200"
          />
          <h1 className="text-xl lg:text-3xl font-bold absolute left-32 lg:left-64 bottom-12">
            VINCI SERIES
          </h1>
        </div>
        <div className="relative group cursor-pointer">
          <img
            src="/vinci_pc_37.jpg"
            className="brightness-50 group-hover:brightness-100 transition-all ease-in-out duration-200"
          />
          <h1 className="text-xl lg:text-3xl font-bold absolute left-32 lg:left-64 bottom-12">
            V SERIES
          </h1>
        </div>
      </div>
    </div>
  );
};
