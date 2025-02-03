export interface ResultData {
    description: string;
    amount: number;
    category: string;
}

export const categoryOptions = [
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

export const selectedFilterCategory = 'all'