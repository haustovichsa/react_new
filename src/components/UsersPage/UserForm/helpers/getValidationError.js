const getValidationErrorEntry = (title, message) => ({title, message});

export const getValidationError = (name, salary) => {
    if (name.trim().length === 0 || salary.length === 0) {
        return getValidationErrorEntry('Invalid input', 'Please enter a valid name and salary (non-empty values).')
    }

    if (Number(salary) <= 0) {
        return getValidationErrorEntry('Invalid salary', 'Please enter a valid salary (> 0).')
    }

    return null;
}
