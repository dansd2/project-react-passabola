// src/components/Comunidade.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { LucideCircleUser } from 'lucide-react';

import menina1 from '../assets/menina1.png';
import menina2 from '../assets/menina2.png';
import menina3 from '../assets/menina3.png';
import menina4 from '../assets/menina4.png';
import menina5 from '../assets/menina5.png';

const depoimentos = [
  {
    nome: 'Maria Luisa',
    texto: 'Adorei poder jogar com outras meninas! Me senti super bem-vinda.',
    img: menina1,
  },
  {
    nome: 'Martha Silva',
    texto: 'O site é muito fácil de usar e os jogos são divertidos demais!',
    img: menina4,
  },
  {
    nome: 'Julia Dias',
    texto: 'Consegui treinar e conhecer novas amigas que amam futebol como eu!',
    img: menina5,
  },
  {
    nome: 'Sandra Lima',
    texto: 'Fiquei impressionada como é fácil me cadastrar e participar das peneiras.',
    img: menina2,
  },
  {
    nome: 'Clara Almeida',
    texto: 'O site me fez sentir parte de uma verdadeira comunidade de meninas no futebol!',
    img: menina3,
  },
];

export default function Comunidade() {
  return (
    <section className="py-12 px-6 flex flex-col items-center gap-8 bg-[#e2e1d7aa] relative overflow-hidden">
      <img
        src="./assets/soccer-outline.png"
        alt=""
        className="absolute left-[-250px] top-[-50px] opacity-5 pointer-events-none z-0"
      />
      <img
        src="./assets/soccer-outline.png"
        alt=""
        className="absolute right-[-250px] bottom-[-150px] opacity-5 pointer-events-none z-0"
      />

      <h1 className="text-3xl font-bold mt-38 mb-8">Nossa comunidade</h1>

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full max-w-6xl z-10"
      >
        {depoimentos.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white p-5 rounded-2xl shadow-md w-60 flex flex-col gap-3 text-center mx-auto">
              <img
                src={item.img}
                className="w-16 h-16 object-cover rounded-full mx-auto"
                alt={item.nome}
              />
              <p className="font-semibold">{item.nome}</p>
              <p className="text-sm text-gray-600">- {item.texto}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <p className="text-gray-700 text-center max-w-xl mb-6 z-10">
        Aqui, meninas de todo lugar se conectam, treinam juntas e compartilham sua paixão pelo futebol. Junte-se a nós!
      </p>

      <div className="flex gap-10 justify-center mb-8 flex-wrap z-10">
        <div className="text-center">
          <p className="text-2xl font-bold text-[#314964]">150+</p>
          <p className="text-gray-600 text-sm">Jogadoras cadastradas</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-[#314964]">35</p>
          <p className="text-gray-600 text-sm">Peneiras realizadas</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-[#314964]">20+</p>
          <p className="text-gray-600 text-sm">Times conectados</p>
        </div>
      </div>
    </section>
  );
}
