import { useCallback, useState } from 'react';

const useForm = (initialState = {}) => {
    const [formData, setFormData] = useState(initialState);

    const handleInputChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const setValue = useCallback((key, value) => {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [key]: value,
            };
        });
    }, []);

    return {
        formData,
        handleInputChange,
        setValue,
    };
};

export default useForm;
