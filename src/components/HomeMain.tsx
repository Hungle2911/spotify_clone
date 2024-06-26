import { Link } from "react-router-dom";
const HomeMain = () => {
  return (
    <div className="w-full relative pt-32 bg-hvrgreen">
      <div className="relative">
        <span className="flex flex-col items-center px-4">
          <h1 className="text-[100px] font-extrabold text-white">
            Listening is everything
          </h1>
          <h3 className="text-[20px] mt-[70px] text-white">
            Wherever you are, whatever you feel, Spotify is your go-to for an
            unparalleled audio experience.
          </h3>
          <Link to={"/main"}>
            <a className="inline-block my-8 text-[16px] leading-none rounded-full py-[19px] px-[56px] text-white bg-black transition duration-300 uppercase font-bold min-w-[160px] hover:bg-white hover:text-black">
              Play music
            </a>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default HomeMain;
