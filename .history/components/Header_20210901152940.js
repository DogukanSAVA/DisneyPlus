import Image from "next/image";
import {HomeIcon, PlusIcon, SearchIcon, StarIcon } from "@heroicons/react/solid";
import {signIn} from "next-auth/client";

function Header() {
          return (
                    <div className="sticky bg-[#040714] top-0 z[1000] flex items-center px-10 h-[72px] md:px-12">
                              <Image src="/image/logo.svg" width={80} height={80} className="cursor-pointer" />
                              <div className="hidden ml-10 md:flex items-center space-x-6">
          <a className="header-link group">
            <HomeIcon className="h-4" />
            <span className="span">Home</span>
          </a>
          <a className="header-link group">
            <SearchIcon className="h-4" />
            <span className="span">Search</span>
          </a>
          <a className="header-link group">
            <PlusIcon className="h-4" />
            <span className="span">Watchlist</span>
          </a>
          <a className="header-link group">
            <StarIcon className="h-4" />
            <span className="span">Originals</span>
          </a>
          <a className="header-link group">
            <img src="/image/movie-icon.svg" alt="" className="h-5" />
            <span className="span">Movies</span>
          </a>
          <a className="header-link group">
            <img src="/image/series-icon.svg" alt="" className="h-5" />
            <span className="span">Series</span>
          </a>
        </div>
        <button className="ml-auto uppercase border px-4 py-1.5 rounded font-medium tracking-wide hover:bg-white hover:text-black transition-all duration-200" onClick={signIn}>Login</button>
                    </div>
                         );
}

export default Header;