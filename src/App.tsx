import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Result from "./components/Result";

function App() {
  // const [results, setResult] = useState();
  return (
    <div className="app-box">
      <Form />
      <div className="mt-5">
      {/* <Result /> */}
      </div>
    </div>
  );
}

export default App;
