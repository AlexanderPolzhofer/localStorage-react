import React from 'react';
import { useLocalStorage } from '../../utils/useLocalStorage';

const Form = () => {

    const [name, setName] = useLocalStorage('name', '');

    return (
        <form>
            <input type='text'
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder='Full name'
                aria-label='fullname'
            />
        </form>
    );
}

export default Form;
