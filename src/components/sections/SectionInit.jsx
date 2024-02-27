import React from "react";
import Cabecalho from "../header/Cabecalho";
import Layout from "../../assets/capa-edit.png";
import { HiOutlineArrowNarrowUp } from 'react-icons/hi';

const SectionInit = ({scrollToTop, isVisible}) => {

    return(
        <section className="">
            {isVisible && 
            <button
            onClick={scrollToTop}
            className="z-100 fixed bottom-8 right-4 bg-transparent text-green-400 
            py-2 px-3 rounded-full border border-green-400"
            >
                <HiOutlineArrowNarrowUp className="w-6 h-6" />                                                                                  
            </button>
            }
            < Cabecalho />
            <div className="h-full w-full relative flex justify-center items-center">
                <article className="flex justify-center items-center text-white container h-screen md:h-[800px] lg:h-full xl:h-full p-4 mt-0 md:mt-36 lg:mt-40 xl:mt-40 mb-20 bg-[#111] h-[500px]">
                    <div className="mx-auto md:mx-0 lg:mx-0 xl:mx-0 w-11/12 md:w-full lg:w-7/12 xl:w-7/12
                    flex flex-col justify-center items-center text-center">
                        <img src={Layout} 
                            className="w-36 h-36 rounded-full border border-neutral bg-gradient-to-tr from-white to-green-500 "
                            alt="image code" 
                        />
                        <h1 className="text-4xl mb-4">
                            Desenvolvedor <span className="text-green-500">Front-end</span>
                        </h1>
                        <p>
                        Seja bem-vindo, me chamo Antonio Jânderson!
                        </p>
                        <p className="w-11/12 ">
                        Sou um desenvolvedor front-end dedicado e apaixonado por criar novas experiências web.
                        </p>
                        <div className="w-full flex gap-2 justify-center items-center">
                            <button
                            className="
                            bg-green-500 w-[46%] md:w-[46%] lg:w-1/5 xl:w-1/5 h-14 mt-12
                            hover:scale-105 duration-300" 
                            type="button">
                                Contate-me
                            </button>
                        </div>
                    </div>
                </article>
            </div>

        </section>
    )
}

export default SectionInit;