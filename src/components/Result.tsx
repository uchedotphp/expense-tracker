interface ResultProps {
  results: { description: string; amount: number; category: string }[];
  categoryOptions: string[];
}

export const Result = ({ categoryOptions, results }: ResultProps) => {
  return (
    <>
      {!results.length && <p className="text-center">No results</p>}
      {results.length && (
        <>
          <select className="form-select mb-3">
            <option selected>Open this select menu</option>
            {categoryOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>

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
              {results.map((result, index) => (
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
          </table>
        </>
      )}
    </>
  );
};

export default Result;
