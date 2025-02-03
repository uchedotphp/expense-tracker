interface ExpenseFilterProps {
  onSelectCategory: (category: string) => void;
  categoryOptions: string[];
  selectedCategory?: string;
}

export const ExpenseFilter = ({
  categoryOptions,
  onSelectCategory,
}: ExpenseFilterProps) => {
  return (
    <select
      onChange={(event) => onSelectCategory(event.target.value)}
      className="form-select mb-3"
    >
      <option value="all">Open this select menu</option>
      {categoryOptions.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
