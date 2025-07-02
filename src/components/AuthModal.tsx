import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

export default function AuthModal({ onClose }: { onClose: () => void }) {
  const { signIn, signUp } = useAuth();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-[90%] max-w-md shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-center">Entrar ou Criar Conta</h2>
        <input
          className="border w-full mb-2 p-2 rounded"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="border w-full mb-4 p-2 rounded"
          placeholder="Senha"
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <div className="flex gap-2">
          <button
            className="bg-green-600 text-white px-4 py-2 rounded w-full"
            onClick={() => signIn(email, senha)}
          >
            Entrar
          </button>
          <button
            className="bg-gray-300 px-4 py-2 rounded w-full"
            onClick={() => signUp(email, senha)}
          >
            Criar Conta
          </button>
        </div>
        <button className="mt-4 text-sm text-red-500 w-full" onClick={onClose}>
          Fechar
        </button>
      </div>
    </div>
  );
}
