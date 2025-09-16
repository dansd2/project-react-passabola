import { useState } from "react";
import {
    Plus,
    Minus,
    CalendarFold,
    MapPin,
    UserRound,
    CircleUser,
    Menu,
} from "lucide-react";

const timelineData = [
    {
        ano: "1921",
        titulo: "O futebol feminino é proibido no Brasil por decreto",
        texto:
            "Surgem as primeiras partidas oficiais de futebol feminino no Brasil. Mesmo assim, a prática enfrentava resistência e preconceito, e logo seria proibida.",
    },
    {
        ano: "1941",
        titulo: "Decreto de Vargas proíbe mulheres de jogar futebol no Brasil.",
        texto:
            "Com o governo de Getúlio Vargas, um decreto veta oficialmente que mulheres joguem futebol, fazendo com que o esporte feminino ficasse quase desaparecido no país por décadas.",
    },
    {
        ano: "1979",
        titulo: "Revogação da proibição, mulheres podem jogar oficialmente.",
        texto:
            "A proibição é finalmente revogada. A partir daí, mulheres podem voltar a jogar oficialmente, marcando o início da reconstrução do futebol feminino no Brasil.",
    },
    {
        ano: "1991",
        titulo: "Primeira Copa do Mundo Feminina da FIFA, realizada na China.",
        texto:
            "A FIFA realiza a primeira Copa do Mundo Feminina, na China. Esse torneio dá visibilidade global para o futebol feminino e abre caminho para o crescimento da modalidade.",
    },
    {
        ano: "1996",
        titulo: "Futebol feminino estreia nas Olimpíadas de Atlanta.",
        texto:
            "O futebol feminino faz sua estreia nas Olimpíadas, em Atlanta, mostrando que o esporte feminino também merece espaço nos maiores palcos internacionais.",
    },
    {
        ano: "2007",
        titulo: "Brasil chega à final da Copa do Mundo, com Marta em destaque.",
        texto:
            "O Brasil chega à final da Copa do Mundo, com a estrela Marta brilhando. Esse é um dos momentos de maior projeção do futebol feminino brasileiro no cenário mundial.",
    },
    {
        ano: "2019",
        titulo: "Marta se torna a maior artilheira da história das Copas.",
        texto:
            "Marta se torna a maior artilheira da história das Copas, somando as competições masculinas e femininas, consolidando seu status como ícone do esporte.",
    },
    {
        ano: "2020",
        titulo: "CBF anuncia igualdade de premiações e diárias entre seleções.",
        texto:
            "A CBF anuncia igualdade de premiações e diárias entre as seleções masculina e feminina, um passo importante para a valorização das atletas no país.",
    },
    {
        ano: "2023",
        titulo: "Primeira Copa do Mundo Feminina com 32 seleções.",
        texto:
            "A Copa do Mundo Feminina cresce ainda mais e acontece com 32 seleções pela primeira vez. A Espanha conquista o título, mostrando a evolução e a competitividade do futebol feminino ao redor do mundo.",
    },
];

export default function Historias() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="font-rubik bg-[#e2e1d7aa] min-h-screen flex flex-col">
            {/* Linha do tempo */}
            <section
                id="linhatempo"
                className="flex flex-col items-center py-12 px-4 flex-1"
            >
                {/*<h1 className="text-5xl font-bold mb-8">Linha do tempo</h1>*/}
                <h1 className="text-5xl font-bold mt-20 mb-8">Linha do tempo</h1>

                <div className="flex flex-col items-center w-full max-w-2xl gap-4">
                    {timelineData.map((item, index) => (
                        <div
                            key={index}
                            className="relative flex flex-col w-full bg-white/70 rounded-xl shadow-md p-5"
                        >
                            <div className="line absolute left-[-15px] top-0 h-full w-[1px] bg-black" />
                            <div className="absolute left-[-22px] top-0 w-4 h-4 bg-[#314964] rounded-full" />

                            <div className="flex justify-between items-center">
                                <div>
                                    <h2 className="font-bold text-lg">{item.ano}</h2>
                                    <p>{item.titulo}</p>
                                </div>
                                <button
                                    className="toggle-btn bg-transparent p-2"
                                    onClick={() => toggle(index)}
                                >
                                    {openIndex === index ? <Minus /> : <Plus />}
                                </button>
                            </div>

                            {openIndex === index && (
                                <div className="mt-3 text-sm text-gray-700">{item.texto}</div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
