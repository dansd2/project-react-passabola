import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    const handleCadastro = async (e) => {
        e.preventDefault();

        if (email.trim() !== '' && senha.trim() !== '') {
            localStorage.setItem('email:', email);
            localStorage.setItem('senha:', senha);

            console.log('Redirecionando para /home');
            navigate('/home');

        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-70">
            <div className="bg-white p-15 rounded-lg shadow-md w-full max-w-md">
                <form onSubmit={handleCadastro}>
                    <h2 className="text-3xl font-bold mb-5 text-center text-blue-800">Faça o seu Login</h2>

                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2 font-medium">Email</label>
                        <input type="email" placeholder="Digite um email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-4 py-3 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition" />
                    </div>

                    <div className="mb-15">
                        <label className="block text-gray-700 mb-2 font-medium">Senha</label>
                        <input type="password" placeholder="Digite uma senha" value={senha} onChange={(e) => setSenha(e.target.value)} required className="w-full px-4 py-3 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition" />
                    </div>

                    <button type="submit" className="w-full bg-blue-800 text-white py-3 rounded-lg hover:bg-blue-700 transition">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
