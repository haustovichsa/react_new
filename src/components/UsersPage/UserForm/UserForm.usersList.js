import './UserForm.css';
import Card from '../../UI/Card/Card';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';

const UserForm = props => {
    return (
        <>
            <Card className="input">
                <Input
                    label="Name"
                    id="name"
                    type="text"
                    value={props.name}
                    onChange={props.onChangeName}
                />
                {props.nameError && <div>{props.nameError}</div>}

                <Input
                    label="Salary"
                    id="salary"
                    type="number"
                    value={props.salary}
                    onChange={props.onChangeSalary}
                />
                {props.salaryError && <div>{props.salaryError}</div>}
                <Button onClick={props.onDeleteUser}>Delete user</Button>
            </Card>
        </>
    );
};

export default UserForm;
