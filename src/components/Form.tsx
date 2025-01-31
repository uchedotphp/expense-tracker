import { FormEvent, useRef } from "react";
import { ResultData } from "./dataType";
interface FormProps {
  categoryOptions: string[];
  onClickSubmit: (result: ResultData) => void;
}

export const Form = ({ categoryOptions, onClickSubmit }: FormProps) => {
  const description = useRef<HTMLInputElement>(null);
  const amount = useRef<HTMLInputElement>(null);
  const category = useRef<HTMLSelectElement>(null);
  const result: ResultData = { description: "", amount: 0, category: "" };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    result["description"] = description.current?.value || "";
    result["amount"] = amount.current?.value
      ? parseFloat(amount.current.value)
      : 0;
    result["category"] = category.current?.value || "";
    onClickSubmit(result);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          ref={description}
          className="form-control"
          id="description"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          ref={amount}
          className="form-control"
          id="amount"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select
          ref={category}
          className="form-select"
          aria-label="Default select example"
        >
          <option defaultValue="0">Open this select menu</option>
          {categoryOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
