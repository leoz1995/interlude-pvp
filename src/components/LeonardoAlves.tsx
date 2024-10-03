import { motion } from "framer-motion";

interface Data {
  user: {
    avatar_url: string;
    name: string;
    html_url: string; // Adiciona a URL do perfil do GitHub
  } | null;
}
export function LeonardoAlves({ user }: Data) {
  return (
    <>
      <div id="creditos">
        <div id="leonardo_profile">
          {user ? (
            <>
              <img src={user.avatar_url} alt="" className="leonardo_img" />
              Created By: {user.name}
              <motion.a
                initial={{ scale: 0.8, opacity: 1 }}
                animate={{ scale: 1.2, opacity: 0.4 }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="leonardo_follow"
              >
                SEGUIR
              </motion.a>
            </>
          ) : (
            <p>POR FAVOR MANTENHA OS CRÉDITOS! - LEONARDO ALVES.</p>
          )}
        </div>
        <p>Web Desenvolvido em React Vite + TypeScript.</p>
        <p>Versão - 1.0</p>
      </div>
    </>
  );
}
