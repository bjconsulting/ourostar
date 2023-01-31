import { component$, useStore, useStylesScoped$ } from '@builder.io/qwik';
import photo from '../img/photo.png'
export default component$(() => {
    const data = useStore({
        name: '',
        email: '',
        tel: '',
        invest: ''
    })
    
    useStylesScoped$(form)

    return (
        <div class="w-full flex flex-row justify-center items-center bg-black min-h-[87vh]">
            <div class="left flex flex-col items-center justify-center  shrink max-w-[55%] mx-auto">
                <h1 class="font-extrabold text-center text-4xl text-gold uppercase mb-[1em]"> 
                    Realize seu grande sonho com as menores parcelas do mercado! 
                </h1>
                <p class="font-normal text-center text-xl text-white uppercase max-w-[80%]">
                    preencha o formulário e dê o primeiro passo para conquistar uma carta de crédito de 7 mil reais em barras de ouro!
                </p>

                <form action="/contact" method="POST" class="mt-[3em] pb-10 max-w-[70%]">
                    <input required id="name" type="text" placeholder='Nome' maxLength={20} onInput$={(e) => (data.name = (e.target as HTMLInputElement).value)} />
                    <input required id="tel" type="tel" placeholder='Telefone' maxLength={20} onInput$={(e) => (data.tel = (e.target as HTMLInputElement).value)} />
                    <input required id="email" type="email" placeholder='Email' maxLength={60} onInput$={(e) => (data.email = (e.target as HTMLInputElement).value)} />
                    <input required id="model" type="text" placeholder='Quanto quer investir por mês?' maxLength={240} onInput$={(e) => (data.invest = (e.target as HTMLInputElement).value)} />
                    <button class="py-2 bg-gold rounded-md w-full text-white  hover:bg-goldMinor hover:border-transparent transition text-xl font-bold"> Enviar </button>
                </form>

            </div>

            <div class="right flex justify-end items-end min-h-[inherit] ">
                <img src={photo} alt="Consiga o consórcio dos seus sonhos!" height="600px" width="560px"/>
            </div>
        </div>
    )
})

export const form = `
    input {
        font-family: 'Raleway', sans-serif;
        width: 100%;
        padding: 5px 0px;
        text-indent: 15px;
        margin-bottom: 1.3em;
        border-radius: 10px;
        border: 3px solid var(--gold);
    }
    button {
        font-family: 'Raleway', sans-serif;
    }
    img.img {
        box-shadow: 10px 20px 30px -3px rgba(0 0 0 / 0.3),
        -10px 15px 30px -3px rgba(0 0 0 / 0.2);
    }
`
