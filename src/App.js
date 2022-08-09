import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import List from "./components/List";
import TotalMoney from "./components/TotalMoney";

function App() {
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: "2500" },
    { description: "Conta de luz", type: "saída", value: "150" },
  ]);
  //console.log(listTransactions);
  return (
    <div>
      <header>
        <Header />
      </header>
      <div className="container">
        <div className="form-total">
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />
          <TotalMoney listTransactions={listTransactions} />
        </div>
        <div className="container-list">
          <List listTransactions={listTransactions} />
        </div>
      </div>
    </div>
  );
}

export default App;
