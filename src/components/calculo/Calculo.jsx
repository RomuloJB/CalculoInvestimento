import React from 'react';
import Header from '../header/Header';

const Calculo = () => {
  const [initial, setInitial] = React.useState('');
  const [months, setMonths] = React.useState('');
  const [rate, setRate] = React.useState('');
  const [result, setResult] = React.useState(null);
  const [calculations, setCalculations] = React.useState([]);

  const fetchCalculations = async () => {
    const res = await fetch('/api/calculations');
    const data = await res.json();
    setCalculations(data);
  };

  React.useEffect(() => { fetchCalculations(); }, []);

  const calculate = async () => {
    if (!initial || !months || !rate || isNaN(initial) || isNaN(months) || isNaN(rate)) return alert('Dados inválidos');
    const res = await fetch('/api/calculate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ initial: +initial, months: +months, rate: +rate / 100 }),
    });
    const data = await res.json();
    setResult(data.finalValue);
  };

  const save = async () => {
    if (!result) return;
    await fetch('/api/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ initial: +initial, months: +months, rate: +rate, finalValue: result }),
    });
    fetchCalculations();
  };

  const clear = async () => {
    await fetch('/api/clear', { method: 'DELETE' });
    fetchCalculations();
  };

  return (
    <div>
      <Header />
      <h2>Formulário</h2>
      <input placeholder="Valor inicial" value={initial} onChange={e => setInitial(e.target.value)} />
      <input placeholder="Prazo (meses)" value={months} onChange={e => setMonths(e.target.value)} />
      <input placeholder="Taxa de juros mensal (%)" value={rate} onChange={e => setRate(e.target.value)} />
      <button onClick={calculate}>Calcular</button>
      {result && <p>Valor final: {result.toFixed(2)}</p>}
      <button onClick={save}>Salvar</button>
      <table>
        <thead><tr><th>Inicial</th><th>Meses</th><th>Juros (%)</th><th>Final</th></tr></thead>
        <tbody>{calculations.map((c, i) => <tr key={i}><td>{c.initial}</td><td>{c.months}</td><td>{c.rate}</td><td>{c.finalValue}</td></tr>)}</tbody>
      </table>
      <button onClick={clear}>Limpar Tabela</button>
    </div>
  );
};

export default Calculo;