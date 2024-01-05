import React, {useState} from "react";
import Cabecalho from "../header/Cabecalho";
import emailjs from "@emailjs/browser";
import Wpp from "../../assets/contact/wpp.png";
import { BsFillSendFill } from "react-icons/bs";

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);
    const [valido, setValido] = useState(false);
    const [load, setLoad] = useState(false)

    const clearConfirmation = () => {
        if (valido) {
            setValido(false);
        }
    };

    function validateFields() {
        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            setIsError(true);
            return false;
        }
        setIsError(false);
        return true;
    }

    function sendEmail(e) {
        e.preventDefault();

        if (!validateFields()) {
            return;
        }

        setTimeout(()=> {
            setLoad("Aguarde ...")
        }, 100)

        const templateParams = {
            from_name: name,
            message: message,
            email: email,
        };

        emailjs.send('service_1c9ivpc', 'template_qby0rqm', templateParams, 'm70p7fzy1ofQo6eUH')
            .then((response) => {
                console.log('Email enviado!', response.status, response.text);
                setMessage('');
                setEmail('');
                setName('');
                setValido(true);
            })
            .catch((err) => {
                console.log('Erro:', err);
            });
    }

    return (
        <div className="h-[1400px] md:h-[1500px] lg:h-screen xl:h-screen flex flex-col justify-between items-center">
            < Cabecalho />
            <div className="
            container z-10 overflow-hidden p-8 rounded-lg bg-[#111] text-white flex 
            flex-col md:flex-col lg:flex-row xl:flex-row justify-around md:items-center items-end
            mt-0 md:mt-40 lg:mt-40 xl:mt-40 responsive-contact h-full md:h-full lg:h-[700px] xl:h-[700px]">
                <div className="w-full md:w-5/6 lg:w-3/6 xl:w-3/6">
                    <h2 className="text-2xl font-bold mb-6">Quer saber mais ?</h2>
                    <p className="text-xl w-10/12 md:w-full lg:w-full xl:w-full">Entre em contato comigo para mais informações.</p>
                    <div className="
                    flex flex-col md:flex-row lg:flex-row xl:flex-row justify-between items-center
                    h-[80%] w-full md:w-full lg:w-10/12 xl:w-full">
                        <div className="mr-auto md:mr-auto lg:mr-0 xl:mr-0">
                            <p className="
                            text-3xl md:text-5xl lg:text-5xl xl:text-5xl text-start
                            mt-8 md:mt-2 lg:mt-0 xl:mt-0 w-3/6 ">
                                Entar em contato pelo <br/>
                                <a 
                                className="text-green-400 
                                text-5xl md:text-6xl lg:text-8xl xl:text-8xl underline" 
                                href="https://wa.me/552194707188">
                                        Whatsapp
                                </a>
                            </p>
                        </div>
                        <img className="  
                        ml-auto md:ml-0 lg:ml-0 xl:ml-0
                        w-8/12 md:w-3/6 lg:w-2/6 xl:w-2/6
                        h-full md:h-full lg:h-5/6 xl:h-5/6
                        " src={Wpp} alt="" />
                    </div>
                </div>
                <div className="w-full md:w-5/6 lg:w-2/6 xl:w-2/6 h-full md:flex md:flex-col md:justify-center">
                    <h2 className="text-4xl mb-10 text-green-400 ç">Ou envie sua mensagem para meu inbox!</h2>

                    <form method="post" action="#" onSubmit={sendEmail} className="flex flex-col w-full ">
                        <div className="mb-4">
                            <input
                                className={`mt-1 p-2 w-full border rounded-md bg-transparent ${isError && name.trim() === '' ? 'border-red-500' : ''}`}
                                placeholder="Seu nome"
                                type="text"
                                value={name}
                                onChange={(e) => { setName(e.target.value); clearConfirmation(); }}
                            />
                            {isError && name.trim() === '' && <p className="text-red-500">Por favor, insira seu nome</p>}
                        </div>

                        <div className="mb-4">
                            <input
                                className={`mt-1 p-2 w-full border rounded-md bg-transparent ${isError && email.trim() === '' ? 'border-red-500' : ''}`}
                                placeholder="Seu email"
                                type="email"
                                value={email}
                                onChange={(e) => { setEmail(e.target.value); clearConfirmation(); }}
                            />
                            {isError && email.trim() === '' && <p className="text-red-500">Por favor, insira seu email</p>}
                        </div>

                        <div className="mb-4">
                            <textarea
                                className={`mt-1 p-2 w-full border rounded-md bg-transparent ${isError && message.trim() === '' ? 'border-red-500' : ''}`}
                                placeholder="Sua mensagem"
                                value={message}
                                rows="3"
                                onChange={(e) => { setMessage(e.target.value); clearConfirmation(); }}
                            />
                            {isError && message.trim() === '' && <p className="text-red-500">Por favor, insira sua mensagem</p>}
                        </div>
                        <button
                            className="bg-green-400 text-[#111]
                            px-4 py-4 font-bold rounded-md hover:bg-green-600"
                            type="submit"
                        >
                            {load && !valido ? load : 'Enviar'}
                        </button>
                        {valido && <p className="text-green-400 flex items-center mt-2">Sua mensagem foi enviada <BsFillSendFill className="ml-2"/></p>}
                    </form>
                </div>
            </div>
            <footer className="mt-10 flex items-center h-20">
                <span className="text-white">
                    &copy; {new Date().getFullYear()} Antonio Jânderson
                </span>
            </footer>
        </div>
    
    )
}

export default Contact;





