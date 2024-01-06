import React from "react";
import { BiLogoJavascript, BiLogoJquery } from "react-icons/bi";
import { FaGrunt, FaGulp, FaLess, FaSass, FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { TbBrandTailwind } from "react-icons/tb";
import { SiJest, SiMongodb, SiStyledcomponents  } from "react-icons/si"
import Skills from "./skills/Skills";
const MySkills = () => {
    return(
        <section className=" w-11/12 bg-[#111] mx-auto">
            <h2 className="container text-3xl text-white h-16 flex items-center justify-center"> 
                Minhas habilidades 
            </h2>
            <div className=" mt-10 mb-20 md:mt-10 lg:mt-0 xl:mt-0 w-full h-full pb-4 flex justify-center items-center">
                <article className="container p-4 flex flex-col lg:flex-row xl:flex-row justify-between items-center">
                    <div className=" w-11/12 md:w-11/12 lg:w-3/5 xl:w-3/5 h-full text-white">
                        <Skills />
                    </div>
                    <div className=" w-11/12 md:3/5 lg:w-2/5 xl:w-2/5 h-full text-white mt-20 md:mt-0 lg:mt-0 xl:mt-0 p-4 md:p-8 lg:p-8 xl:p-8 bg-[rgba(0,0,0,0.6)] rounded-lg">
                        <h2 className="text-green-500 text-2xl mb-4">Habilidades em desenvolvimento</h2>
                        <p>
                            Tenho me dedicado a aprimorar habilidades desde HTML, CSS e JavaScript até frameworks como Bootstrap e bibliotecas como jQuery. 
                            Recentemente, tenho me concentrado em Node.js. Venho estudando dia após dia para obter melhores conhecimentos.
                        </p>
                        <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row gap-4 
                        items-start md:items-center lg:items-center xl:items-center justify-between mt-12">
                            <li 
                            className="flex justify-center items-center bg-green-700 
                            border-orange-600 w-1/3 h-28 rounded-md">
                                <div className="w-[98%] h-[98%] rounded-md flex flex-col justify-center items-center">
                                    < FaNodeJs className="w-3/6 h-3/6 " />
                                    <p className="text-sm">Node.js</p>
                                </div>
                            </li>
                            <p className="w-full md:w-2/3 lg:w-2/3 xl:w-2/3 text-sm">
                                <span className="text-green-500">Node.js</span> é um ambiente de execução 
                                JavaScript do lado do servidor que permite que você execute código 
                                <span className="text-green-500">JavaScript</span> no servidor. 
                                Diferentemente dos modelos tradicionais baseados em threads, o Node.js é eficiente, 
                                lidando com muitas conexões simultaneamente.
                            </p>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default MySkills;