import React, { useState } from 'react';

const Form = () => {

    const [name, setName] = useState('');

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
