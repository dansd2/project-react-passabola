import { useState } from "react";

export default function FormularioCadastro() {
  const [formData, setFormData] = useState({
    nome: "",
    idade: "",
    posicao: "",
    cpf: "",
    email: "",
    telefone: "",
    id: "",
  });

  const [mensagem, setMensagem] = useState("");
  const [carregando, setCarregando] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCarregando(true);
    setMensagem("");

    try {
      await fetch("https://api-passabola-2eqq.vercel.app/peneiras", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    } catch (error) {
      console.error("Erro no envio:", error);
      
    } finally {
      setMensagem("✅ Inscrição enviada com sucesso!");
      setFormData({
        nome: "",
        idade: "",
        posicao: "",
        cpf: "",
        email: "",
        telefone: "",
        id: "",
      });
      setCarregando(false);
    }
  };

  return (
    <main className="pt-40 px-6 bg-[#e2e1d7aa] min-h-screen">
      <section className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-900">
          Cadastro para Peneira
        </h2>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Nome completo"
            className="p-3 border rounded-md"
            required
          />
          <input
            type="number"
            name="idade"
            value={formData.idade}
            onChange={handleChange}
            placeholder="Idade"
            className="p-3 border rounded-md"
            required
          />
          <input type="none" name="cpf" value={formData.cpf} onChange={handleChange} placeholder="Seu CPF" className="p-3 border rounded-md" required />
          <select
            name="posicao"
            value={formData.posicao}
            onChange={handleChange}
            className="p-3 border rounded-md"
            required
          >
            <option value="">Posição</option>
            <option value="goleiro">Goleiro(a)</option>
            <option value="zagueiro">Zagueiro(a)</option>
            <option value="meia">Meia</option>
            <option value="atacante">Atacante</option>
          </select>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="E-mail"
            className="p-3 border rounded-md"
            required
          />
          <input
            type="tel"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            placeholder="Telefone"
            className="p-3 border rounded-md"
            required
          />
          <button
            type="submit"
            disabled={carregando}
            className={`bg-[#314964] text-white py-3 rounded-md font-bold transition ${carregando ? "opacity-50 cursor-not-allowed" : "hover:bg-[#24384f]"
              }`}
          >
            {carregando ? "Enviando..." : "Enviar inscrição"}
          </button>
        </form>

        {mensagem && (
          <p className="mt-4 text-center text-green-700 font-semibold">{mensagem}</p>
        )}
      </section>
    </main>
  );
}
