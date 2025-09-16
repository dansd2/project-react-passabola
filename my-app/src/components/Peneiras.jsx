import { CalendarFold, MapPin, UserRound } from "lucide-react";
import { Link } from "react-router-dom";

export default function Peneiras() {
  return (
    <main className="font-rubik bg-[#e2e1d7aa] overflow-x-hidden pt-28">
      <section id="peneiras" className="py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-10">Peneiras disponíveis</h1>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {[
              {
                titulo: "Peneira SPFC Feminino",
                data: "22/08/2025",
                local: "Cotia - São Paulo",
                publico: "Livre",
              },
              {
                titulo: "Peneira Corinthians Feminino",
                data: "05/09/2025",
                local: "São Bernardo do Campo - São Paulo",
                publico: "Livre",
              },
              {
                titulo: "Peneira Flamengo Feminino",
                data: "12/09/2025",
                local: "Rio de Janeiro - RJ",
                publico: "Livre",
              },
              {
                titulo: "Peneira Palmeiras Feminino",
                data: "20/09/2025",
                local: "São Paulo - SP",
                publico: "Livre",
              },
              {
                titulo: "Peneira Internacional Feminino",
                data: "28/09/2025",
                local: "Porto Alegre - RS",
                publico: "Livre",
              },
              {
                titulo: "Peneira Santos Feminino",
                data: "10/10/2025",
                local: "Santos - SP",
                publico: "Livre",
              },
            ].map((peneira, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md w-full flex flex-col gap-3 text-left"
              >
                <h2 className="text-xl font-bold">{peneira.titulo}</h2>
                <p className="flex items-center gap-2">
                  <CalendarFold size={18} /> {peneira.data}
                </p>
                <p className="flex items-center gap-2">
                  <MapPin size={18} /> {peneira.local}
                </p>
                <p className="flex items-center gap-2">
                  <UserRound size={18} /> {peneira.publico}
                </p>
                <span className="text-sm text-gray-500">
                  *Levar RG, chuteira e atestado médico
                </span>
                <Link
                  to="/cadastro"
                  className="mt-3 bg-[#314964] text-white font-bold py-2 rounded-md shadow-md hover:bg-[#24384f] inline-block text-center"
                >
                  Cadastrar-se
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}