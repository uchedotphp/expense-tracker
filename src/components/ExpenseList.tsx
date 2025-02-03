interface ResultProps {
  expenses: { description: string; amount: number; category: string }[];
}

export const ExpenseList = ({ expenses }: ResultProps) => {
  if (!expenses.length) {
    return <p className="text-center">No expenses</p>;
  }
  return (
    <table className="table table-bordered border-primary">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Description</th>
          <th scope="col">Amount</th>
          <th scope="col">Category</th>
          <th scope="col">
            Actions{" "}
            <button type="submit" className="btn btn-danger btn-sm ms-2">
              Clear all
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((result, index) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{result.description}</td>
            <td>{result.amount}</td>
            <td>{result.category}</td>
            <td>
              <button type="submit" className="btn btn-primary btn-sm">
                Edit
              </button>
              <button
                type="submit"
                className="btn btn-outline-danger ms-3 btn-sm"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>{expenses.reduce((acc, curr) => acc + curr.amount, 0)}</td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
