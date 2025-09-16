import bola from '../assets/bola.png';
import bgImage from '../assets/soccer-outline-half.png';

export default function Slideshow() {
  return (
    <section className="flex w-full h-screen mt-10 pt-[140px]">
      <div className="flex justify-between w-4/5 h-[70vh] bg-gradient-to-br from-[#e4efff] to-[#254259] rounded-r-[250px] shadow-lg overflow-hidden mx-auto">
        <img src={bola} alt="Bola" className="w-2/5 object-cover" />
        <div className="flex flex-col justify-center h-full text-right pr-24 text-white">
          <h2 className="text-[60px] font-bold">#PassaABola</h2>
          <p className="text-[20px] leading-[180%] tracking-wide">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos corporis iure maiores, assumenda, ex voluptatibus eligendi reiciendis nostrum vero ratione laborum voluptas.
          </p>
        </div>
      </div>
      <div className="w-1/5 h-[70vh] text-right opacity-5">
        <img src={bgImage} alt="Soccer Outline" className="h-full pointer-events-none select-none ml-6" />
      </div>
    </section>
  );
}
