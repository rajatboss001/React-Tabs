
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { BLOG_DATA } from "../../utils/helper";

const TABS = [
  "bathroom",
  "kitchen",
  "bedroom",
  "terrace",
  "living-room",
];

const Homepage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [position, setPosition] = useState(50);

  const category = searchParams.get("category");
  const activeTab = TABS.includes(category) ? category : "bathroom";

  const project = BLOG_DATA.find(
    (item) => item.category === activeTab
  );

  const handleTabChange = (tab) => {
    setSearchParams({ category: tab });
    setPosition(50);
  };

  return (
    <section>
      <div className="hero-container mx-auto max-w-330 px-5 py-29.5">
        <div className="flex justify-between gap-10 max-lg:flex-col">
          <div className="w-full max-w-162.5">
            <p className="text-sm font-semibold leading-158 text-dark-gray/70">
              Stress-Free Construction
            </p>

            <h2 className="mt-2.5 text-5xl font-medium leading-130 text-almost-black max-sm:text-3xl">
              Construction & Renovation Projects Done the Right Way.
            </h2>
          </div>

          <div className="w-full max-w-129.75">
            <p className="mb-7 text-lg leading-162 text-dark-gray">
              Explore completed construction and renovation projects
              delivered with transparent planning and trusted execution.
            </p>

            <button className="group relative cursor-pointer overflow-hidden rounded-full border border-almost-black px-6 py-3.5 text-lg font-semibold text-almost-black transition-colors duration-300 hover:text-white before:absolute before:inset-0 before:-translate-x-full before:rounded-full before:bg-almost-black before:transition-transform before:duration-500 hover:before:translate-x-0">
  <span className="relative z-10">View All Projects</span>
</button>
          </div>
        </div>

        <div className="hero-row mt-16">
          <div className="flex justify-between gap-5 overflow-x-auto border-b border-gray-200">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`cursor-pointer whitespace-nowrap border-b-2 px-5 py-4 text-2xl capitalize ${
                  activeTab === tab
                    ? "border-almost-black font-semibold text-almost-black"
                    : "border-transparent font-normal text-dark-gray"
                }`}
              >
                {tab.replace("-", " ")}
              </button>
            ))}
          </div>

          {project ? (
            <div className="mt-8 grid grid-cols-2 items-center gap-10 max-lg:grid-cols-1">
              {/* Left Content */}
              <div className="w-full max-w-105">
                <h3 className="text-custom-3xl font-medium text-almost-black">
                  {project.heading}
                </h3>

                <p className="mt-3 text-lg leading-162 text-dark-gray">
                  {project.para}
                </p>

                <div className="mt-6 flex flex-wrap gap-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center">
                      <img
                        src={project.time}
                        alt=""
                        className="h-6 w-6"
                      />
                    </div>

                    <h4 className="text-xl font-medium text-almost-black">
                      {project.days}
                    </h4>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center">
                      <img
                        src={project.locationimg}
                        alt=""
                        className="h-6 w-6"
                      />
                    </div>

                    <h4 className="text-xl font-medium text-almost-black">
                      {project.location}
                    </h4>
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center">
                    <img
                      src={project.priceimg}
                      alt=""
                      className="h-6 w-6"
                    />
                  </div>

                  <h4 className="text-xl font-medium text-almost-black">
                    {project.price}
                  </h4>
                </div>
              </div>

              <div className="relative w-full overflow-hidden rounded-xl">
                <img
                  src={project.beforeImage}
                  alt="Before renovation"
                  className="block aspect-[4/3] w-full object-cover"
                />

                {/* After Image */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{
                    clipPath: `inset(0 0 0 ${position}%)`,
                  }}
                >
                  <img
                    src={project.afterImage}
                    alt="After renovation"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>

                <span className="absolute left-4 top-4 z-10 rounded-full bg-white px-5 py-2 text-sm font-medium text-black shadow">
                  Before
                </span>

                <span className="absolute right-4 top-4 z-10 rounded-full bg-white px-5 py-2 text-sm font-medium text-black shadow">
                  After
                </span>

                <div
                  className="pointer-events-none absolute bottom-0 top-0 z-10 w-0.5 bg-white"
                  style={{ left: `${position}%` }}
                />

                <div
                  className="pointer-events-none absolute top-1/2 z-20 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-lg text-black shadow-md"
                  style={{ left: `${position}%` }}
                >
                  ‹›
                </div>

                <input
                  type="range"
                  min="0"
                  max="100"
                  value={position}
                  onChange={(e) =>
                    setPosition(Number(e.target.value))
                  }
                  aria-label="Compare before and after images"
                  className="absolute inset-0 z-30 h-full w-full cursor-ew-resize opacity-0"
                />
              </div>
            </div>
          ) : (
            <p className="mt-8 text-dark-gray">
              No project found for this category.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Homepage;
