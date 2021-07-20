/* eslint-disable @next/next/link-passhref */
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/outline'

import LogoExtendWhite from '../assets/LogoExtendWhite.svg'

function about() {
    return (
        <div id="page-dark" className="flex flex-col items-center justify-center h-screen
        bg-fixed bg-gray-100 w-full bg-no-repeat bg-center">
         <Head>
           <title>Vest</title>
           <meta name="description" content="Mecanismo de pesquisa para informações confiáveis e seguras." />
           <link rel="icon" href="/favicon.ico" />
         </Head>
   
         <header className='flex w-full py-5 px-8 justify-between
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
   
             <Link href="/contact">
             <a className='link'>Entre em contato</a>
             </Link>
   
             <Link href="/about">
             <a className='link'>Sobre</a>
             </Link>
   
           </div>
         </header>
   
         <div className="flex flex-col items-center justify-center flex-grow w-4/5">
                <div className="flex space-x-2 items-center">
                
                <Link href="/">
                <ArrowLeftIcon 
                    className="h-8 flex mr-6 text-cen mt-1 text-white hover:text-opacity-80 cursor-pointer"
                    />
                </Link>

                <span className="text-3xl font-semibold text-center text-white pr-24">
                    Sobre o Vest search.
                </span>  

                </div>          

                <p className="flex flex-col items-center pt-10 text-white text-lg max-w-2xl mx-auto">
                
                Créditos: Caio Garcia | @caiogarciap
                </p>
            </div>
   
         <Footer />
       </div>
    )
}

export default about
