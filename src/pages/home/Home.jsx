import React from 'react';
import Header from '../../components/header/Header';
import { Link } from 'react-router-dom';

const Home = () => {
  const now = new Date();
  const dateStr = now.toLocaleDateString('pt-BR');
  const timeStr = now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  return (
    <div>
      <Header />
      <p>Olá, você acessou esta página dia {dateStr} às {timeStr}</p>
      <Link to="/calculo"><button>Realizar o Cálculo de Investimento</button></Link>
    </div>
  );
};

export default Home;