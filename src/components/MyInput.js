import {
    forwardRef,
    useImperativeHandle,
    useState,
} from 'react';
import {
    TextField,
} from '@material-ui/core';

const MyInput = forwardRef((props, ref) => {
    const {
        defaultValue,
    } = props;

    const [value, setValue] = useState(defaultValue || '');

    const getValue = () => {
        return value;
    }

    const handleOnChange = ({ target }) => {
        setValue(target.value);
    };

    useImperativeHandle(ref, () => ({
        setValue,
        getValue,
    }));

    return (
        <TextField
            {...props}
            value={value}
            onChange={handleOnChange}
        />
    );
});

export default MyInput;