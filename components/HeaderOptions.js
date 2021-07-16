import HeaderOption from "./HeaderOption"
import { 
    NewspaperIcon,
    BeakerIcon,
    PlayIcon,
    SearchIcon,
} from "@heroicons/react/outline"

function HeaderOptions() {
    return (
        <div className="flex w-full text-gray-700
        justify-evenly text-base lg:justify-start lg:space-x-36
        lg:pl-52 border-b">

            {/* Options/Categories */}

            <div className="flex space-x-6">
                <HeaderOption Icon={SearchIcon}
                title="Todas" selected /> {/* Todas */}
                <HeaderOption Icon={BeakerIcon}
                title="Em breve"  /> {/* Artigos */}
                <HeaderOption Icon={NewspaperIcon}
                title="Em breve"  /> {/* Notícias */}
                <HeaderOption Icon={PlayIcon}
                title="Em breve"  /> {/* Vídeos */}
            </div>
            
        </div>
    )
}

export default HeaderOptions
