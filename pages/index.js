import Head from 'next/head'
import Logo from '../assets/LogoTextBlue.svg'
import LogoExtendWhite from '../assets/LogoExtendWhite.svg'
import { SearchIcon } from '@heroicons/react/outline'
import Footer from '../components/Footer'

import Image from 'next/image'
import Link from 'next/link'
import { useRef } from "react"
import { useRouter } from "next/router"


export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (

    <div id="page" className="flex flex-col items-center justify-center h-screen
     bg-fixed bg-gray-100 w-full bg-no-repeat bg-center">
      <Head>
        <title>Vest</title>
        <meta name="description" content="Mecanismo de pesquisa para informações confiáveis e seguras." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className='flex w-full py-6 px-10 justify-between
      text-sm text-gray-700'>
        <div className='flex space-x-4 items-center'>
          <Image
          src={LogoExtendWhite}
          height={50}
          width={120}
          alt='Vest'
          />
        </div>

        <div className='flex space-x-4 items-center'>

          <Link href='/contact'>
          <a className='link'>Entre em contato</a>
          </Link>

          <Link href='/about'>
          <a className='link'>Sobre</a>
          </Link>
        

        </div>
      </header>

      <form className="flex flex-col items-center m-48 flex-grow w-4/5">
        <Image
          src={Logo}
          height={98}
          width={164}
          alt='Vest'
        />

        <p className="pt-5 text-[#606774] font-medium text-lg text-center font-roboto md:font-Roboto">Seja bem-vindo ao Vest. Pesquise com fontes confiáveis.</p>
        
        <div className="flex w-full mt-5 hover:shadow-lg
        focus-within:shadow-lg max-w-md rounded-full border
        border-[#C1D3E9] px-5 py-4 items-center sm:max-w-xl
        lg:max-w-2xl bg-[#EBF2FF] ">
          <SearchIcon className='h-6 mr-3 text-gray-500' />
          <input 
          ref={searchInputRef}
          placeholder="Pesquisar"
          type="text" 
          className='flex-grow focus:outline-none bg-transparent' 
          />
        </div>
        
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8
        sm:space-y-0 sm:flex-row sm:space-x-4">

          <button onClick={search} className="btn">Pesquisar com Vest</button>

          {/*Próxima atualização = CATEGORIAS DE PESQUISA */}

          {/*<button onClick={search} className="btn">Todas</button>*/}
          {/*<button onClick={search} className="btn">Artigos</button>*/}
          {/*<button onClick={search} className="btn">Notícias</button>*/}
          {/*<button onClick={search} className="btn">Vídeos</button>*/}

        </div>
      </form>

      <Footer />
    </div>
  )
}
