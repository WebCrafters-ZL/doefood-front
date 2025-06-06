import { Button } from "@/components/shadcn/button";
import { Separator } from "@/components/shadcn/separator";
import {
  FaHandHoldingHeart,
  FaHistory,
  FaSignOutAlt,
  FaUserEdit,
  FaAward,
} from "react-icons/fa";
import { Link, Navigate } from "react-router-dom";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useAuth } from "@/context/AuthContext";
import { motion } from "framer-motion";

export default function HomeDoador() {
  const { user, logout } = useAuth();

  if (!user) return <Navigate to="/autenticacao/login" />;

  const btnClass =
    "w-full flex items-center justify-center gap-3 py-5 text-lg rounded-xl transition-transform transform hover:scale-105";

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#F5F5F5] flex items-center justify-center py-10 px-4">
        <motion.div
          className="w-full max-w-4xl bg-white shadow-xl rounded-2xl p-8 space-y-10 animate-fade-in-up"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <motion.h1
            className="text-4xl font-bold text-[#4CAF50] text-center font-poppins"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Obrigado por fazer a diferença 💚
          </motion.h1>

          <motion.div
            className="text-center text-gray-700 text-lg italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Seu gesto de solidariedade ajuda a combater a fome e o desperdício
            de alimentos. Você é essencial nessa corrente do bem!
          </motion.div>

          {/* Certificado */}
          <motion.div
            className="bg-green-50 border border-green-200 rounded-xl p-6 shadow-inner flex flex-col md:flex-row items-center justify-between gap-6 animate-fade-in-up delay-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-4">
              <FaAward className="text-4xl text-[#FF9800]" />
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Certificado de Doador
                </h2>
                <p className="text-gray-600 text-sm">
                  Reconhecimento simbólico pelo seu compromisso social
                </p>
              </div>
            </div>
            <Button variant="orange" className="px-6 py-4 text-base rounded-xl transition-transform hover:scale-105">
              Baixar Certificado
            </Button>
          </motion.div>

          {/* Ações */}
          <motion.div
            className="grid md:grid-cols-2 gap-4 animate-fade-in-up delay-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Link to="/doador/nova-doacao">
              <Button variant="green" className={btnClass}>
                <FaHandHoldingHeart className="text-2xl" />
                Nova Doação
              </Button>
            </Link>

            <Link to="/doador/historico-doacao">
              <Button variant="blue" className={btnClass}>
                <FaHistory className="text-2xl" />
                Histórico de Doações
              </Button>
            </Link>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-4 animate-fade-in-up delay-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link to="/doador/editar-perfil">
              <Button variant="orange" className={btnClass}>
                <FaUserEdit className="text-2xl" />
                Editar Perfil
              </Button>
            </Link>

            <Button variant="red" onClick={logout} className={btnClass}>
              <FaSignOutAlt className="text-2xl" />
              Sair da Conta
            </Button>
          </motion.div>

          <Separator className="my-6" />

          <motion.div
            className="text-center text-sm text-gray-500 italic animate-fade-in-up delay-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Doe com responsabilidade e ajude quem precisa 💚
          </motion.div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
