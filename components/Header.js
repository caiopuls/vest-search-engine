import Image from 'next/image'
import { useRouter, router } from "next/router"
import LogoExtendWhite from '../assets/LogoExtendWhite.svg'
import { XIcon, SearchIcon } from '@heroicons/react/solid'
import { useRef } from "react"

import HeaderOptions from './HeaderOptions'

function Header() {
    const router = useRouter();
    const searchInputRef = useRef(null);

    const search = e => {
        e.preventDefault();

        const term = searchInputRef.current.value;
        if (!term) return;

        router.push(`/search?term=${term}`);
    }

    return (
        <header className="sticky top=0 bg-[#3573DA] shadow-lg">
            <div className="flex w-full p-6 items-center">
            <Image 
                src={LogoExtendWhite}
                alt="Vest Logo"
                height={64}
                width={120}
                onClick={() => router.push("/")}
                className="cursor-pointer"
            />
            <form className="flex flex-grow px-6 py-3 ml-10 mr-5 bg-transparent border-b
             max-w-3xl items-center"  onSubmit={search}>
                <input 
                ref={searchInputRef} 
                placeholder="O que você está procurando?" 
                className="flex-grow w-full
                focus:outline-none bg-transparent text-white placeholder-white focus:placeholder-white" 
                type="text" 
                />

                <XIcon className="h-7 text-white cursor-pointer transition
                duration-100 transform hover:scale-110 pr-4"
                onClick={() => (searchInputRef.current.value = "")} />


                <SearchIcon className="h-6 text-white hidden sm:inline-flex border-l-2 pl-4 border-white" />
                <button hidden type="submit" onClick={search}>
                    Pesquisar
                </button>

            </form>
            
            </div>

            <HeaderOptions />
        </header>
    );
}

export default Header
