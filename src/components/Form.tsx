import { ResultData } from "./dataType";
import { useForm } from "react-hook-form";
interface FormProps {
  categoryOptions: string[];
  onClickSubmit: (result: ResultData) => void;
}

export const Form = ({ categoryOptions, onClickSubmit }: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ResultData>();
  console.log(errors);

  const submitForm = (e: ResultData) => {
    console.log("the form data", e);
    onClickSubmit(e);
  };

  return (
    <form onSubmit={handleSubmit(data => {
      submitForm(data);
      reset();
    })}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description", { required: true, minLength: 5 })}
          className="form-control"
          id="description"
          aria-describedby="emailHelp"
        />
        {errors.description?.type === "required" && (
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { required: true, valueAsNumber: true })}
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
          {...register("category")}
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
