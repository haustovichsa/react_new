import styled from 'styled-components';
import { useState } from 'react';
import Card from '../../UI/Card/Card.styled';
import Button from '../../UI/Button/Button.styled';
import * as ValidationHelper from './helpers/validationHelper';

const DEFAULT_NAME = '';
const DEFAULT_SALARY = '0';
const DEFAULT_IS_NAME_VALID = true;
const DEFAULT_IS_SALARY_VALID = true;

const changeValueHandler = setValue => event => setValue(event.target.value);

const Label = styled.label`
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
`;

const Input = styled.input`
    font: inherit;
    display: block;
    width: 100%;
    border: 1px solid ${props => (props.invalid ? 'red' : '#2f2f2f')};
    padding: 0.2rem;
    margin-bottom: 0.5rem;
    background: ${props => (props.invalid ? 'pink' : null)};
`;

const StyledCard = styled(Card)`
    margin: 2rem auto;
    padding: 1rem;
    width: 90%;
    max-width: 40rem;
`;

const UserForm = props => {
    const [name, setName] = useState(DEFAULT_NAME);
    const [salary, setSalary] = useState(DEFAULT_SALARY);
    const [isNameValid, setNameIsValid] = useState(DEFAULT_IS_NAME_VALID);
    const [isSalaryValid, setSalaryIsValid] = useState(DEFAULT_IS_SALARY_VALID);

    const blurNameHandler = () => setNameIsValid(ValidationHelper.isNameValid(name));
    const blurSalaryHandler = () => setSalaryIsValid(ValidationHelper.isSalaryValid(salary));

    const submitHandler = event => {
        event.preventDefault();

        if (props.onGetUser) {
            props.onGetUser({ name, salary });
        }

        setName(DEFAULT_NAME);
        setSalary(DEFAULT_SALARY);
    };

    const isFormValid = ValidationHelper.getIsFormValid(name, salary);

    return (
        <StyledCard className="input">
            <form onSubmit={submitHandler}>
                <Label htmlFor="name">Name</Label>
                <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={changeValueHandler(setName)}
                    onBlur={blurNameHandler}
                    invalid={!isNameValid}
                />

                <Label htmlFor="salary">Salary</Label>
                <Input
                    id="salary"
                    type="number"
                    value={salary}
                    onChange={changeValueHandler(setSalary)}
                    onBlur={blurSalaryHandler}
                    invalid={!isSalaryValid}
                />

                <Button type="submit" disabled={!isFormValid}>
                    Apply
                </Button>
            </form>
        </StyledCard>
    );
};

export default UserForm;
