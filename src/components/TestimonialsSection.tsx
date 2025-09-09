export const TestimonialsSection = () => {
  return (
    <div className="mt-24">
      <div className="flex justify-center">
        <h1 className="text-2xl font-bold  border-2 border-white inline-block p-2 ">
          MORE ABOUT INFLAVE
        </h1>
      </div>
      <div className="lg:flex container mx-auto px-6 gap-8 my-20">
        <div className="relative mt-10 overflow-hidden group">
          <img
            src="/public/experience-list1.jpg"
            alt="experience"
            className="transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute left-5 bottom-16">
            <h2 className="text-2xl font-semibold">INNOVATION</h2>
            <p className="text-sm">memorable and compact devices</p>
          </div>
        </div>

        <div className="relative mt-20 overflow-hidden group">
          <img
            src="/public/experience-list2.jpg"
            className="transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute left-5 bottom-16">
            <h2 className="text-2xl font-semibold">INNOVATION</h2>
            <p className="text-sm"> memorable and compact devices</p>
          </div>
        </div>
        <div className="relative overflow-hidden group">
          <img
            src="/public/experience-list3.jpg"
            className="transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute left-5 bottom-10">
            <h2 className="text-2xl font-semibold">DIGITAL FACTORY</h2>
            <p className="text-sm">disposable electronic cigarettes </p>
          </div>
        </div>
        <div className="relative overflow-hidden group mt-10">
          <img
            src="/public/experience-list4.jpg"
            className="transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute left-5 bottom-28">
            <h2 className="text-2xl font-semibold">DESIGN</h2>
            <p className="text-sm">active and comfortable use</p>
          </div>
        </div>
      </div>
    </div>
  );
};
