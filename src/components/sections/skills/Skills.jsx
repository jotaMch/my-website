import React from "react";
import { BiLogoJavascript, BiLogoJquery } from "react-icons/bi";
import { FaGrunt, FaGulp, FaLess, FaSass, FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { TbBrandTailwind } from "react-icons/tb";
import { SiJest, SiMongodb, SiStyledcomponents  } from "react-icons/si"

const Skills = () => {
    return(
        <ul className=" w-full flex flex-wrap gap-2 md:gap-4 lg:gap-6 xl:gap-6 md:mb-10">
            <li className="flex justify-center items-center bg-gradient-to-tr from-black to-green-500 
            w-[31.6%] md:w-22 lg:w-28 xl:w-28 h-20 md:h-32 lg:h-28 xl:h-28 rounded-md">
                <div className="w-[98%] h-[98%] bg-black rounded-md flex flex-col justify-center items-center">
                    < FaHtml5 className="w-3/6 h-3/6" />
                    <p className="text-sm">HTML</p>
                </div>
            </li>
            <li className="flex justify-center items-center bg-gradient-to-tr from-black to-green-500 
            w-[31.6%] md:w-22 lg:w-28 xl:w-28 h-20 md:h-32 lg:h-28 xl:h-28 rounded-md">
                <div className="w-[98%] h-[98%] bg-black rounded-md flex flex-col justify-center items-center">
                    < FaCss3Alt className="w-3/6 h-3/6" />
                    <p className="text-sm">CSS</p>
                </div>
            </li>
            <li className="flex justify-center items-center bg-gradient-to-tr from-black to-green-500 
            w-[31.6%] md:w-22 lg:w-28 xl:w-28 h-20 md:h-32 lg:h-28 xl:h-28 rounded-md">
                <div className="w-[98%] h-[98%] bg-black rounded-md flex flex-col justify-center items-center">
                    < BiLogoJavascript className="w-3/6 h-3/6" />
                    <p className="text-sm">JavaScript</p>
                </div>
            </li>
            <li className="flex justify-center items-center bg-gradient-to-tr from-black to-green-500 
            w-[31.6%] md:w-22 lg:w-28 xl:w-28 h-20 md:h-32 lg:h-28 xl:h-28 rounded-md">
                <div className="w-[98%] h-[98%] bg-black rounded-md flex flex-col justify-center items-center">
                    < FaGitAlt className="w-3/6 h-3/6" />
                    <p className="text-sm">Git</p>
                </div>
            </li>
            <li className="flex justify-center items-center bg-gradient-to-tr from-black to-green-500 
            w-[31.6%] md:w-22 lg:w-28 xl:w-28 h-20 md:h-32 lg:h-28 xl:h-28 rounded-md">
                <div className="w-[98%] h-[98%] bg-black rounded-md flex flex-col justify-center items-center">
                    < BiLogoJquery className="w-3/6 h-3/6" />
                    <p className="text-sm">JQuery</p>
                </div>
            </li>
            <li className="flex justify-center items-center bg-gradient-to-tr from-black to-green-500 
            w-[31.6%] md:w-22 lg:w-28 xl:w-28 h-20 md:h-32 lg:h-28 xl:h-28 rounded-md">
                <div className="w-[98%] h-[98%] bg-black rounded-md flex flex-col justify-center items-center">
                    < FaBootstrap className="w-3/6 h-3/6" />
                    <p className="text-sm">Bootstrap</p>
                </div>
            </li>
            <li className="flex justify-center items-center bg-gradient-to-tr from-black to-green-500 
            w-[31.6%] md:w-22 lg:w-28 xl:w-28 h-20 md:h-32 lg:h-28 xl:h-28 rounded-md">
                <div className="w-[98%] h-[98%] bg-black rounded-md flex flex-col justify-center items-center">
                    < FaSass className="w-3/6 h-3/6" />
                    <p className="text-sm">SASS</p>
                </div>
            </li>
            <li className="flex justify-center items-center bg-gradient-to-tr from-black to-green-500 
            w-[31.6%] md:w-22 lg:w-28 xl:w-28 h-20 md:h-32 lg:h-28 xl:h-28 rounded-md">
                <div className="w-[98%] h-[98%] bg-black rounded-md flex flex-col justify-center items-center">
                    < FaLess className="w-3/6 h-3/6" />
                    <p className="text-sm">LESS</p>
                </div>
            </li>
            <li className="flex justify-center items-center bg-gradient-to-tr from-black to-green-500 
            w-[31.6%] md:w-22 lg:w-28 xl:w-28 h-20 md:h-32 lg:h-28 xl:h-28 rounded-md">
                <div className="w-[98%] h-[98%] bg-black rounded-md flex flex-col justify-center items-center">
                    < FaGulp className="w-3/6 h-3/6" />
                    <p className="text-sm">Gulp</p>
                </div>
            </li>
            <li className="flex justify-center items-center bg-gradient-to-tr from-black to-green-500 
            w-[31.6%] md:w-22 lg:w-28 xl:w-28 h-20 md:h-32 lg:h-28 xl:h-28 rounded-md">
                <div className="w-[98%] h-[98%] bg-black rounded-md flex flex-col justify-center items-center">
                    < FaGrunt className="w-3/6 h-3/6" />
                    <p className="text-sm">Grunt</p>
                </div>
            </li>
            <li className="flex justify-center items-center bg-gradient-to-tr from-black to-green-500 
            w-[31.6%] md:w-22 lg:w-28 xl:w-28 h-20 md:h-32 lg:h-28 xl:h-28 rounded-md">
                <div className="w-[98%] h-[98%] bg-black rounded-md flex flex-col justify-center items-center">
                    < FaReact className="w-3/6 h-3/6" />
                    <p className="text-sm">React</p>
                </div>
            </li>
            <li className="flex justify-center items-center bg-gradient-to-tr from-black to-green-500 
            w-[31.6%] md:w-22 lg:w-28 xl:w-28 h-20 md:h-32 lg:h-28 xl:h-28 rounded-md">
                <div className="w-[98%] h-[98%] bg-black rounded-md flex flex-col justify-center items-center">
                    < TbBrandTailwind className="w-3/6 h-3/6" />
                    <p className="text-sm">Tailwind CSS</p>
                </div>
            </li>
            <li className="flex justify-center items-center bg-gradient-to-tr from-black to-green-500 
            w-[31.6%] md:w-22 lg:w-28 xl:w-28 h-20 md:h-32 lg:h-28 xl:h-28 rounded-md">
                <div className="w-[98%] h-[98%] bg-black rounded-md flex flex-col justify-center items-center">
                    < SiStyledcomponents className="w-3/6 h-3/6" />
                    <p className="text-sm">Styled</p>
                </div>
            </li>
            <li className="flex justify-center items-center bg-gradient-to-tr from-black to-green-500 
            w-[31.6%] md:w-22 lg:w-28 xl:w-28 h-20 md:h-32 lg:h-28 xl:h-28 rounded-md">
                <div className="w-[98%] h-[98%] bg-black rounded-md flex flex-col justify-center items-center">
                    < SiJest className="w-3/6 h-3/6" />
                    <p className="text-sm">Jest</p>
                </div>
            </li>
            <li className="flex justify-center items-center bg-gradient-to-tr from-black to-green-500 
            w-[31.6%] md:w-22 lg:w-28 xl:w-28 h-20 md:h-32 lg:h-28 xl:h-28 rounded-md">
                <div className="w-[98%] h-[98%] bg-black rounded-md flex flex-col justify-center items-center">
                    < SiMongodb className="w-3/6 h-3/6" />
                    <p className="text-sm">Mongdb Atlas</p>
                </div>
            </li>
            <li className="flex justify-center items-center bg-gradient-to-tr from-black to-green-500 
            w-[31.6%] md:w-22 lg:w-28 xl:w-28 h-20 md:h-32 lg:h-28 xl:h-28 rounded-md">
                <div className="w-[98%] h-[98%] bg-black rounded-md flex flex-col justify-center items-center">
                    < SiJest className="w-3/6 h-3/6" />
                    <p className="text-sm">Jest</p>
                </div>
            </li>
        </ul>
    )
}

export default Skills;