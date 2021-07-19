/* eslint-disable @next/next/link-passhref */
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/outline'

import LogoExtendWhite from '../assets/LogoExtendWhite.svg'

function contact() {
    return (
        <div id="page-dark" className="flex flex-col items-center justify-center h-screen
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
   
             <Link href="/contact">
             <a className='link'>Entre em contato</a>
             </Link>
   
             <Link href="/about">
             <a className='link'>Sobre</a>
             </Link>
   
           </div>
         </header>
   
            <div className="flex flex-col items-center justify-center flex-grow w-4/5">
                <div className="flex space-x-2 items-start">
                
                <Link href="/">
                <ArrowLeftIcon 
                    className="h-8 mr-6 flex text-cen mt-1 text-white hover:text-opacity-80 cursor-pointer"
                    />
                </Link>

                <span className="text-3xl font-semibold text-start text-white pr-14">
                    Entre em contato
                </span>  

                </div>          

                <p className="flex flex-col items-center pt-10 text-white text-lg max-w-2xl mx-auto">
                Gostaria de fazer uma sugestão? Quer trabalhar conosco? 
                Ou ficar por dentro das novidades e atualizações do Vest?
                <br />
                <br />Redes sociais: @vestsearch
                <br />
                <br />E-mail: vestcontato@gmail.com
                </p>
            </div>
   
         <Footer />
       </div>
    )
}

export default contact
