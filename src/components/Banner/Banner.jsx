import { CiPlay1 } from "react-icons/ci";
import bannerImg from "../../assets/banner.png";

const Banner = () => {
  return (
    <section className="container mx-auto">
      <div className="hero bg-base-200 min-h-[calc(100dvh-80px)]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="flex-1">
            <img
              alt="banner img"
              src={bannerImg}
              className="w-full h-70 md:h-120 rounded-lg shadow-2xl"
            />
          </div>
          {/* hero description */}
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 mb-4">
              {/* glowing dot */}
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-purple-600"></span>
              </span>

              {/* gradient text */}
              <span className="text-sm font-medium text-transparent bg-clip-text bg-linear-to-r from-[#4f39f6] to-[#9514fa]">
                New: AI-Powered Tools Available
              </span>
            </div>
            <h1 className="text-xl md:text-5xl font-bold">
              Supercharge Your Digital Workflow
            </h1>
            <p className="py-6">
              Access premium AI tools, design assets, templates, and
              productivity software—all in one place. Start creating faster
              today. Explore Products
            </p>
            <button className="btn border-none text-white bg-linear-to-r from-[#4f39f6] to-[#9514fa] mr-4 rounded-full">
              Explore Products
            </button>
            <button className="btn rounded-full btn-outline border-[#9514fa]">
              <CiPlay1 color="#9514fa" className="text-lg" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#4f39f6] to-[#9514fa]">
                Watch Demo
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
