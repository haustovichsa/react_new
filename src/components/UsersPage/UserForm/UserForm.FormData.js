import { useState } from 'react';
import './UserForm.css';
import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';
import ErrorModal from '../../UI/ErrorModal/ErrorModal';
import { getValidationError } from './helpers/getValidationError';

const UserForm = props => {
    const [error, setError] = useState(null);

    const submitHandler = event => {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(event.currentTarget);

        const name = formData.get('name');
        const salary = formData.get('salary');

        const validationError = getValidationError(name, salary);

        if (validationError) {
            setError(validationError);
            return;
        }

        if (props.onGetUser) {
            props.onGetUser({ name, salary });
        }

        form.reset();
    };

    return (
        <>
            {error && (
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onConfirm={() => setError(null)}
                />
            )}
            <Card className="input">
                <form onSubmit={submitHandler}>
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" type="text" />

                    <label htmlFor="salary">Salary</label>
                    <input id="salary" name="salary" type="number" />

                    <Button type="submit">Apply</Button>
                </form>
            </Card>
        </>
    );
};

export default UserForm;
