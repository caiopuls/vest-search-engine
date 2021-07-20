import HeaderOption from "./HeaderOption"
import { 
    NewspaperIcon,
    BeakerIcon,
    PlayIcon,
    SearchIcon,
} from "@heroicons/react/outline"

function HeaderOptions() {
    return (
        <div className="flex w-full text-[#B9D4FF]
        justify-evenly text-base lg:justify-start lg:space-x-36
        lg:pl-52 border-b">

            {/* Options/Categories */}

            <div className="flex space-x-6">
                <HeaderOption Icon={SearchIcon}
                title="Todas" selected /> {/* Todas */}
                <HeaderOption Icon={BeakerIcon}
                title="Artigos"  /> {/* Artigos */}
                <HeaderOption Icon={NewspaperIcon}
                title="Notícias"  /> {/* Notícias */}
                <HeaderOption Icon={PlayIcon}
                title="Vídeos"  /> {/* Vídeos */}
            </div>
            
        </div>
    )
}

export default HeaderOptions
