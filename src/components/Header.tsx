import UserIcon from "./UserIcon";

const Header = () => {
  return (
    <header className="bg-black text-white p-3 flex items-center justify-around">
      <div className="flex items-center">
        <i className="fa-brands fa-spotify text-5xl mr-2" />
        <span className="logo text-2xl font-bold mr-8">Spotify</span>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a className="hover:text-linkgreen font-bold" href="./premium.html">
              Premium
            </a>
          </li>
          <li>
            <a
              className="hover:text-linkgreen font-bold"
              href="./Spotify-songs/songs.html"
            >
              Songs
            </a>
          </li>
          <li>
            <a className="hover:text-linkgreen font-bold" href="./help.html">
              Help
            </a>
          </li>
          <li>
            <a
              className="hover:text-linkgreen font-bold"
              href="./download.html"
            >
              Download
            </a>
          </li>
          <p className="border-l border-gray-600 mx-2" />
          <button className="flex items-center space-x-2" type="button">
            <div className="usericon w-6 h-6">
              <UserIcon />
            </div>
            <span className="font-bold">Profile</span>
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
