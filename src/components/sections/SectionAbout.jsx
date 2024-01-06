import React from "react";
import { BiLogoLinkedin, BiLogoGithub, BiLogoGmail, BiLogoWhatsapp } from "react-icons/bi";
import CvJota from '../../assets/curriculo/CV_Antonio.pdf';
const SectionAbout = () => {

    return(
        <main className="
        flex flex-col md:flex-col lg:flex-row xl:flex-row justify-between 
        md:items-center w-11/12 mb-20 mx-auto bg-[#111] min-h-[600px]">
            <div className=" w-full md:w-full lg:w-5/12 xl:5/12 " >
                <div className="image-tec"></div>
            </div>
            <div className="flex items-center justify-center w-full md:w-full lg:w-7/12 xl:7/12 h-full">
                <div className="w-11/12 md:w-11/12 lg:w-4/6 xl:w-4/6 text-white">
                    <h2 className="text-green-400 text-2xl">O que faço?</h2>
                    <p className="my-2">
                        Desenvolvo aplicações web, desde simples sites e landing pages, até blogs ou lojas virtuais. 
                        Meu foco principal é solucionar os seus problemas ou de sua empresa.
                    </p>
                    <p className="my-2">
                        Criação de interfaces de alta fidelidade realizando a implementação detalhada e cuidadosa dessas interfaces, 
                        presando pela melhor experiência do usuário para atender as expectativas de cada projeto.
                    </p>
                    <h2 className="text-green-400 text-2xl">Sobre mim</h2>
                    <p>
                        Atualmente sou estudante, cursando Análise e Desenvolvimento de Sistemas na Universidade Estácio de Sá 
                        no Rio de Janeiro. Meu foco está em React, venho me desenvolvendo bastante e procuro sempre ultilizar 
                        as boas práticas. Estou pronto para desafios que possam me fazer crescer como profissional.
                    </p>
                    <div className="flex flex-col md:flex-col lg:flex-row xl:flex-row justify-between items-start  md:items-start lg:items-end xl:items-end my-4 md:my-8 lg:my-11 xl:my-11">
                        <a 
                        className="
                        bg-transparent border border-green-500 text-green-500 
                        w-[46%] md:w-[46%] lg:w-1/5 xl:w-1/5 h-14 hover:scale-105 duration-300
                        flex justify-center items-center" 
                        href={CvJota} 
                        download="Curriculo">
                            Currículo
                        </a>
                        <ul className="flex mt-6 md:sm:mt-6 lg:mt-0 xl:mt-0 justify-between w-40">
                            <li className="hover:bg-neutral-100 rounded hover:border hover:scale-110 duration-300 hover:text-sky-700">
                                <a href="https://www.linkedin.com/in/antonio-j%C3%A2nderson-082b54259/">
                                    <BiLogoLinkedin className="w-7 h-7"/>
                                </a>
                            </li>
                            <li className="hover:bg-neutral-400 rounded hover:border hover:scale-110 duration-300 hover:text-gray-950	">
                                <a  href="https://github.com/jotaMch">
                                    <BiLogoGithub className="w-7 h-7"/>
                                </a>
                            </li>
                            <li className="hover:bg-neutral-400 rounded hover:border hover:scale-110 duration-300 hover:text-red-700">
                                <a  href="mailto:jandersonmachado090@gmail.com">
                                    <BiLogoGmail className="w-7 h-7"/>
                                </a>
                            </li>
                            <li className="hover:bg-neutral-400 rounded hover:border hover:scale-110 duration-300 hover:text-green-500">
                                <a  href="https://wa.me/552194707188">
                                    <BiLogoWhatsapp className="w-7 h-7"/>
                                </a>
                            </li> 
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default SectionAbout;