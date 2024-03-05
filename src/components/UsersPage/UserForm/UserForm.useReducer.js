import { useCallback, useReducer } from 'react';
import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';
import * as ValidationHelper from './helpers/validationHelper';
import classes from './UserForm.module.css';
import Input from '../../UI/Input/Input.useEffect';

const initialState = {
    name: '',
    isNameValid: true,
    salary: '',
    isSalaryValid: true,
};

const CHANGE_NAME = 'CHANGE_NAME';
const BLUR_NAME = 'BLUR_USER_NAME';
const CHANGE_SALARY = 'CHANGE_SALARY';
const BLUR_SALARY = 'BLUR_SALARY';
const CLEAR_FORM = 'CLEAR_FORM';

const reducer = (state, action) => {
    switch (action.type) {
        case CHANGE_NAME: {
            return {
                ...state,
                name: action.payload,
            };
        }
        case BLUR_NAME: {
            return {
                ...state,
                isNameValid: ValidationHelper.isNameValid(state.name),
            };
        }
        case CHANGE_SALARY: {
            return {
                ...state,
                salary: action.payload,
            };
        }
        case BLUR_SALARY: {
            return {
                ...state,
                isSalaryValid: ValidationHelper.isSalaryValid(state.salary),
            };
        }
        case CLEAR_FORM: {
            return initialState;
        }
        default: {
            return state;
        }
    }
};

const getIsFormValid = state => ValidationHelper.getIsFormValid(state.name, state.salary);

const UserForm = props => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const nameChangeHandler = useCallback(value => {
        dispatch({ type: CHANGE_NAME, payload: value });
    }, []);

    const salaryChangeHandler = value => dispatch({ type: CHANGE_SALARY, payload: value });
    const blurNameHandler = () => dispatch({ type: BLUR_NAME });
    const blurSalaryHandler = () => dispatch({ type: BLUR_SALARY });
    const submitHandler = event => {
        event.preventDefault();

        if (props.onGetUser) {
            const { name, salary } = state;
            props.onGetUser({ name, salary });
        }

        dispatch({ type: CLEAR_FORM });
    };

    const { name, salary, isNameValid, isSalaryValid } = state;
    const isFormValid = getIsFormValid(state);

    return (
        <Card className={classes.input}>
            <form onSubmit={submitHandler}>
                <Input
                    label="Name"
                    id="name"
                    type="text"
                    value={name}
                    onChange={nameChangeHandler}
                    onBlur={blurNameHandler}
                    className={isNameValid ? {} : classes.invalid}
                />

                <Input
                    label="Salary"
                    id="salary"
                    type="number"
                    value={salary}
                    onBlur={blurSalaryHandler}
                    onChange={salaryChangeHandler}
                    className={isSalaryValid ? {} : classes.invalid}
                />

                <Button type="submit" disabled={!isFormValid}>
                    Apply
                </Button>
            </form>
        </Card>
    );
};

export default UserForm;
