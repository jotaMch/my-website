import React, { useState } from "react";
import SectionProjects from "./sections/SectionProjects";
import { FaGrunt, FaLess, FaSass, FaHtml5, FaReact, FaBootstrap, FaNodeJs } from "react-icons/fa";
import { BiLogoJquery, BiLogoJavascript, BiLogoTailwindCss, BiLogoCss3 } from "react-icons/bi";
import { SiVite, SiMongodb } from "react-icons/si";

import mobile1 from '../assets/project-image/mobile1.png'; 
import mobile2 from '../assets/project-image/mobile2.png';
import mobile3 from '../assets/project-image/mobile3.png';
import mobile4 from '../assets/project-image/mobile4.png';
import mobile5 from '../assets/project-image/mobile5.png';
import mobile6 from '../assets/project-image/mobile6.png';
import mobile7 from '../assets/project-image/mobile7.png';

const Project = () => {
    const [newProject, setNewProject] = useState([
        {
            name: "Gestão de Recursos & Produtos",
            about: "Este projeto foi desenvolvido com o objetivo de criar uma aplicação de gerenciamento de produtos, proporcionando funcionalidades como adição, edição, exclusão e filtragem. ",
            technologies: [FaReact, BiLogoTailwindCss, FaNodeJs, SiMongodb],
            link: {
                front: 'https://github.com/jotaMch/CRUD-Front-REACT', 
                back: 'https://github.com/jotaMch/CRUD-Back-NODE/tree/main'
            },
        }
    ])
    
    const [projects, setProjects] = useState([
        {
        name: "Gif Shop",
        about: "Um projeto de loja de roupas obtendo carossel, menu interativo, imagens, produtos e um formulário com validações em JQuery",
        technologies: [FaBootstrap, FaLess, FaGrunt, BiLogoJquery],
        mobileImg: [mobile1],
        link: {
            project: 'https://grif-shop-jm.vercel.app/', 
            github: 'https://github.com/jotaMch/Grif-shop-jm'
        },
        },
        {
        name: "Jota Motors",
        about: "Um projeto para venda de carros com um menu interativo e carrossel. Também com seções sobre o epaço, com cards de carros interativo com o formulário.",
        technologies: [ FaHtml5, FaSass, BiLogoJquery],
        mobileImg: [mobile2],
        link: {
            project: 'https://loja-jm.vercel.app/', 
            github: 'https://github.com/jotaMch/loja_de_carros'
        },
        },
        {
            name: "E-commerce",
            about: "Projeto para E-commerce, usei JavaScript puro fazendo a integração dos produtos e cards. Fiz o uso de Tailwind para estilização, assim obtendo mais organização.",
            technologies: [ FaHtml5, BiLogoJavascript, SiVite, BiLogoTailwindCss],
            mobileImg: [mobile4],
            link: {
                project: 'https://jotamch.github.io/E-commerce_js/', 
                github: 'https://github.com/jotaMch/E-commerce_js'
            },
        },
        {
            name: "FIPE API HTTP REST",
            about: "Formulário para consulta de informações de veiculos, com opções de marca, modelo e ano. Feito com o uso da FIPE API HTTP REST.",
            technologies: [ FaReact, BiLogoCss3],
            mobileImg: [mobile5],
            link: {
                project: 'https://api-fipe-project.vercel.app/', 
                github: 'https://github.com/jotaMch/Api_fipe_project'
            },
        },
        {
            name: "Jm Contact",
            about: "Aplicação de gerenciamento de contatos baseado em React, utilizando tecnologias como React Hooks e conponentes funcionais.",
            technologies: [ FaReact, BiLogoCss3],
            mobileImg: [mobile7],
            link: {
                project: 'https://desafio-lest-contact-janderson.vercel.app/', 
                github: 'https://github.com/jotaMch/desafio_lest_contact_janderson/tree/master'
            },
        },
        {
            name: "Focus Tourism",
            about: "Página de turismo feita com foco em viagens, com imagens e cards mostrando locais. Contem seções sobre a focus, cards e formulario.",
            technologies: [ FaHtml5, BiLogoCss3, BiLogoJavascript],
            mobileImg: [mobile6],
            link: {
                project: 'https://turismo-jm.vercel.app/', 
                github: 'https://github.com/jotaMch/turismo-jm'
            },
        },
    ]);

    return (
        <>
            <SectionProjects 
            projects={projects} 
            newProject={newProject}
            />
        </>
    );
};

export default Project;
