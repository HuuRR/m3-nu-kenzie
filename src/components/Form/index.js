import { useState } from "react";
import "./style.css";

function Form({ listTransactions, setListTransactions }) {
  const [trans, setTrans] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    const dados = new FormData(event.target);

    const manipularDados = Object.fromEntries(dados);

    setListTransactions([...listTransactions, manipularDados]);
  }

  function capturaOnChange(event) {
    const { name, value } = event.target;
    setTrans({ ...trans, [name]: value });
  }
  console.log(trans);
  return (
    <form onSubmit={handleSubmit}>
      <div className="div-desc">
        <span className="spam-desc">Descrição</span>
        <input
          name="description"
          value={trans.description || ""}
          type="text"
          onChange={capturaOnChange}
        ></input>
        <span className="exemplo">Ex. Compra de roupas</span>
      </div>
      <div className="div-valor-tipo">
        <div className="div-valor">
          <span>Valor</span>
          <input
            name="value"
            type="number"
            value={trans.value || ""}
            onChange={capturaOnChange}
          ></input>
        </div>
        <div className="div-tipo">
          <span>Tipo de Valor</span>
          <select
            name="type"
            value={trans.type || ""}
            onChange={capturaOnChange}
          >
            <option value="none">-</option>
            <option value="entrada">Entrada</option>
            <option value="saída">Saída</option>
          </select>
        </div>
      </div>
      <div className="div-botao">
        <button type="submit">Adicionar</button>
      </div>
    </form>
  );
}

export default Form;
