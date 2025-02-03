import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import { ResultData, categoryOptions } from "./components/dataType";

function App() {
  const [expenses, setExpense] = useState<ResultData[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div className="app-box">
      <Form
        categoryOptions={categoryOptions}
        onClickSubmit={(newExpense) => setExpense([...expenses, newExpense])}
      />
      <div className="mt-5">
        <div className="mb-3">
          <ExpenseFilter
            categoryOptions={categoryOptions}
            onSelectCategory={(e) => setSelectedCategory(e)}
            selectedCategory={selectedCategory}
          />
        </div>
        <ExpenseList expenses={visibleExpenses} />
      </div>
    </div>
  );
}

export default App;
