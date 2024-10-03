import { motion } from 'framer-motion';
import { useState } from 'react';
import axios from 'axios';
import '../view/css/register.css';

export function Register() {
  // Gerenciar estado dos inputs
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPass, setRepeatPass] = useState('');
  const checkCreateAcc = () => {
    if (login === '' || password === '' || repeatPass === '') {
      alert('Todos os campos precisam ser preenchidos para criar uma CONTA.');
      return false;
    } else if (password !== repeatPass) {
      alert('As senhas não são iguais!');
      return false;
    }
    return true;
  };
  const cleanInputs = () => {
    setLogin('');
    setPassword('');
    setRepeatPass('');
  };
  // Função para manipular o envio do formulário
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!checkCreateAcc()) {
      cleanInputs();
      return;
    }
    try {
      const response = await axios.post('http://localhost:4000/createAccount', {
        login,
        password,
      });
      if (response.status === 201) {
        cleanInputs();
        alert(response.data.message); // Exibe a mensagem de sucesso
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        if (error.response.status === 400) {
          return alert(error.response.data.error); // Mensagem do backend
        } else {
          return alert('Ocorreu um erro. Tente novamente.'); // Mensagem genérica
        }
      } else {
        return alert('Erro inesperado.'); // Para qualquer outro tipo de erro
      }
    }
  };
  return (
    <>
      <div id="form">
        <motion.div
          initial={{ opacity: 0, x: '-100vw' }} // Estado inicial
          animate={{ opacity: 1, x: 0 }} // Estado final
          transition={{
            ease: 'linear',
            duration: 2, // Duração total da animação
            opacity: { duration: 1 }, // Duração específica da animação da opacidade
            x: { duration: 0.5 }, // Duração específica da animação do deslocamento
          }}
          className="form"
        >
          <form onSubmit={handleSubmit}>
            <span className="input-span">
              <label className="label">Login</label>
              <input
                type="text"
                name="login"
                id="login"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                required
              />
            </span>
            <span className="input-span">
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </span>
            <span className="input-span">
              <label className="label">Repeat Password</label>
              <input
                type="password"
                name="password_rep"
                id="password_rep"
                value={repeatPass}
                onChange={(e) => setRepeatPass(e.target.value)}
                required
              />
            </span>
            <input className="submit" type="submit" value="Criar Conta" />
          </form>
        </motion.div>
      </div>
    </>
  );
}
