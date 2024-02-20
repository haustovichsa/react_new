export const isNameValid = (value) => (value ?? '').trim().length > 0;

export const isSalaryValid = (value) => String(value ?? '').trim().length > 0 && Number(value) > 0;

export const getIsFormValid = (name, salary) => Boolean(isNameValid(name) && isSalaryValid(salary));