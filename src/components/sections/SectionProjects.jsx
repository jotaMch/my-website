import React, { useState, useEffect} from "react";
import Cabecalho from "../header/Cabecalho";
import { GoCheckCircle } from "react-icons/go";
import { HiOutlineArrowNarrowUp } from 'react-icons/hi';

const SectionProjects = ({ projects, newProject }) => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const Scroll = window.scrollY;

        if (Scroll > 200) {
        setIsVisible(true);
        } else {
        setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };    

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    
    return (
        <div className="">  
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
            <section className="flex flex-col justify-center md:pt-36 lg:pt-40 pt-0 xl:pt-40 container mx-auto">
                <div className="flex flex-col justify-center bg-[#111] p-4">
                    <h2 className="text-3xl text-white text-center mb-6" >Projeto mais recente</h2>
                    <div className="
                    flex flex-col md:flex-col lg:flex-row xl:flex-row items-center 
                    mx-auto md:mx-auto lg:mx-0 xl:mx-0 w-full md:w-10/12 lg:w-full 
                    xl:w-full pt-2 md:pt-0 lg:pt-0 xl:pt-0 justify-between">
                        
                        {newProject.map((newPro) => (
                        <article key={newPro.name} 
                        className="bg-green-500 w-11/12 md:w-full lg:w-5/12 xl:w-5/12 p-5 h-72 shadow-lg 
                        mt-10 md:mt-10 lg:mt-0 xl:mt-0 flex justify-center items-center rounded-md  ">
                            
                            <div className="">
                                
                                <p className="text-lg font-bold font-sans">{newPro.name}</p>
                                <div className="py-3 px-1 flex">
                                    {newPro.technologies.map((TechIcon, index) => (
                                        <TechIcon key={index} className="mr-1 w-6 h-6" />
                                    ))}
                                </div>
                                <div className="text-sm py-2 ">
                                    {newPro.about}
                                </div>
                                <div className="  bottom-2 flex gap-2">
                                    <a 
                                    href={newPro.link.front}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-green-100 text-green-700 rounded-xl px-3 py-1 text-sm
                                    hover:bg-[#111] hover:shadow hover:shadow-green-700 transition-all duration-300 ease-in-out"
                                    >
                                    Github front
                                    </a>
                                    <a 
                                    href={newPro.link.back}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-green-100 text-green-700 rounded-xl px-3 py-1 text-sm
                                    hover:bg-[#111] hover:shadow hover:shadow-green-700 transition-all duration-300 ease-in-out"
                                    >
                                    Github back
                                    </a>
                                </div>
                            </div>
                        </article>
                        ))}
                        <ul className="p-4 md:p-0 md:pt-4 lg:w-6/12 xl:w-6/12 text-white text-sm w-full">
                            <li className="font-semibold">Tecnologias:</li>
                            <li className="flex items-start md:items-center lg:items-center xl:items-center w-full my-2">
                                <GoCheckCircle className=" text-green-400 mr-2 w-[20px] h-[20px]" />
                                <p className="w-10/12">
                                    React, Tailwind CSS, React Router, React Icons e Axios.
                                </p>
                            </li>
                            <li className="flex items-start md:items-center lg:items-center xl:items-center w-full my-2">
                                <GoCheckCircle className=" text-green-400 mr-2 w-[20px] h-[20px]" />
                                <p className="w-10/12">
                                    Node.js com Express.js.
                                    body-parser para processamento de dados e CORS para controle de acesso.
                                </p>
                            </li>
                            <li className="flex items-start md:items-center lg:items-center xl:items-center w-full my-2">
                                <GoCheckCircle className=" text-green-400 mr-2 w-[20px] h-[20px]" />
                                <p className="w-10/12">
                                    Integração com o MongoDB Atlas para armazenamento.
                                </p>
                            </li>
                            <ul className=" text-white mt-4">
                                <li className="flex items-center font-semibold">Funcionalidades Principais:</li>
                                <li className="flex items-start md:items-center lg:items-center xl:items-center w-full my-2">
                                    <GoCheckCircle className=" text-green-400 mr-2 w-[20px] h-[20px]" />
                                    <p className="w-10/12">
                                    Adicionar Produto
                                    </p>
                                </li>
                                <li className="flex items-start md:items-center lg:items-center xl:items-center w-full my-2">
                                    <GoCheckCircle className=" text-green-400 mr-2 w-[20px] h-[20px]" />
                                    <p className="w-10/12">
                                        Atualizar e Deletar Produtos:
                                    </p>
                                </li>
                                <li className="flex items-start md:items-center lg:items-center xl:items-center w-full my-2">
                                    <GoCheckCircle className=" text-green-400 mr-2 w-[20px] h-[20px]" />
                                    <p className="w-10/12">
                                        Possibilidade de atualizar informações e remover produtos existentes.
                                    </p>
                                </li>
                                <li className="flex items-start md:items-center lg:items-center xl:items-center w-full my-2">
                                    <GoCheckCircle className=" text-green-400 mr-2 w-[20px] h-[20px]" />
                                    <p className="w-10/12">
                                        Listagem dinâmica obtendo dados do servidor Node.js.
                                    </p>
                                </li>
                            </ul>
                        </ul>
                    </div>
                </div>
                
                <div className="bg-[#111] p-4 my-20">
                    <h2 className="text-3xl text-white my-10 text-center" > Meus Projetos </h2>
                    <div className="flex justify-center gap-2 md:gap-4 lg:gap-2 xl:gap-4 flex-wrap w-full pb-24">
                        {projects.map((project) => (
                        <article key={project.name} 
                        className="bg-[#111] w-11/12 md:w-11/12 lg:w-[32%] xl:w-[32%] p-4 h-80 shadow-lg shadow-[#222] flex 
                        justify-center items-center rounded-md text-white ">
                            <div className="w-3/5 ">
                                <p className="text-lg font-bold font-sans">{project.name}</p>
                                <div className="py-3 px-1 flex">
                                    {project.technologies.map((TechIcon, index) => (
                                        <TechIcon key={index} className="mr-1 w-6 h-6" />
                                    ))}
                                </div>
                                <div className="text-sm py-2 ">
                                    {project.about}
                                </div>
                                <div  className="flex gap-2 mt-2">
                                    <a
                                        href={project.link.project}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-green-100 text-green-700 rounded-xl px-3 py-1 text-sm
                                        hover:bg-[#111] hover:shadow hover:shadow-green-700 transition-all duration-300 ease-in-out"
                                    >
                                        Projeto
                                    </a>
                                    <a
                                        href={project.link.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-green-100 text-green-700 rounded-xl px-3 py-1 text-sm
                                        hover:bg-[#111] hover:shadow hover:shadow-green-700 transition-all duration-300 ease-in-out"
                                    >
                                        GitHub
                                    </a>
                                </div>
                            </div>
                            {project.mobileImg.map((mobile, index) => (
                                <div key={index} className="h-full w-2/5 flex justify-center items-center">
                                    <img src={mobile} className="h-3/6 md:h-4/6 lg:h-4/6 xl:h-4/6 w-3/6 md:w-2/6 lg:w-3/6 xl:w-3/6" alt="image mobile" />
                                </div>
                            ))}
                        </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SectionProjects;
