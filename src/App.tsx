import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Result from "./components/Result";
import { ResultData } from "./components/dataType";

function App() {
  const [results, setResult] = useState<ResultData[]>([]);
  const categoryOptions = [
    "all categories",
    "groceries",
    "utitlities",
    "rent",
    "mortgage",
    "insurance",
    "transportation",
    "health",
    "entertainment",
    "clothing",
    "other",
  ];
  return (
    <div className="app-box">
      <Form
        categoryOptions={categoryOptions}
        onClickSubmit={(res) => setResult([...results, res])}
      />
      <div className="mt-5">
        <Result results={results} categoryOptions={categoryOptions} />
      </div>
    </div>
  );
}

export default App;
