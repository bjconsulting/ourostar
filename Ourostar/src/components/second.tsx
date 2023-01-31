import { component$} from '@builder.io/qwik';
import invest from '../img/invest.png'
import best from '../img/best.png'
import portfolio from "../img/portfolio.png"
import future from "../img/future.png"
import plane from "../img/plane.png"
import retire from "../img/retire.png"

export default component$ (() => {
    return (
        <div class="bg-gold flex flex-col justify-center items-center w-full">
            <div class="flex flex-col justify-center items-center mx-auto max-w-[90vw] w-full py-[2em] gap-[2em]">
                <h2 class="text-white text-4xl font-extrabold py-[1em]">
                    Saiba o que vale ouro para você.
                </h2>
                
                <div class="flex flex-row justify-around items-center py-3 min-w-full">
                    <div class="flex flex-row justify-center items-center gap-[1em] basis-[30%] w-full]">
                        <img src={invest} alt="Investir em um ativo que só se valoriza." height="80px" width="80px" loading='lazy'/>
                        <p class="max-w-[60%]"> Investir em um ativo que só se valoriza. </p>
                    </div>
                    <div class="flex flex-row justify-center items-center gap-[1em] basis-[30%] w-full]">
                        <img src={best} alt="Equipe de especialistas para fazer gestão do patrimônio." height="80px" width="80px" loading='lazy' />
                        <p class="max-w-[60%]"> Equipe de especialistas para fazer gestão do patrimônio. </p>
                    </div>
                    <div class="flex flex-row justify-center items-center gap-[1em] basis-[30%] w-full]">
                        <img src={portfolio} alt="Diversificar seu portfólio de investimentos." height="80px" width="80px" loading='lazy' />
                        <p class="max-w-[60%]"> Diversificar seu portfólio de investimentos. </p>
                    </div>
                </div>

                <div class="flex flex-row justify-around items-center py-3 min-w-full">
                    <div class="flex flex-row justify-center items-center gap-[1em] basis-[30%] w-full]">
                        <img src={future} alt="Planejar o futuro dos filhos." height="80px" width="80px" loading='lazy' />
                        <p class="max-w-[60%]"> Planejar o futuro dos filhos. </p>
                    </div>
                    <div class="flex flex-row justify-center items-center gap-[1em] basis-[30%] w-full]">
                        <img src={plane} alt="Fazer a viagem dos sonhos." height="80px" width="80px" loading='lazy' />
                        <p class="max-w-[60%]"> Fazer a viagem dos sonhos. </p>
                    </div>
                    <div class="flex flex-row justify-center items-center gap-[1em] basis-[30%] w-full]">
                        <img src={retire} alt="Se preparar para a aposentadoria." height="80px" width="80px" loading='lazy' />
                        <p class="max-w-[60%]"> Se preparar para a aposentadoria. </p>
                    </div>
                </div>


                <button class="my-[1em] py-3 px-[5em] outline-none rounded-[10px] bg-black transition text-gold font-bold hover:bg-goldMinor hover:text-black">
                    Quero saber mais!
                </button>

            </div>
        </div>
    )
})