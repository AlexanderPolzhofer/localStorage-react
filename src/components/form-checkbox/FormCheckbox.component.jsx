import React, { useState } from 'react';
import FormSubmit from '../form-submit/FormSubmit.component';

const FormCheckbox = () => {

    const [name, setName] = useState("");
    const [checked, setChecked] = useState(false);

    return (
        <div>
            <form style={{display: 'flex', flexDirection: 'column'}}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full name"
                    aria-label="fullname"
                />
                <label>
                    <input
                        type="checkbox"
                        checked={checked}
                        onChange={(e) => setChecked(e.target.checked)}
                    />{" "}
                    Not a robot?
                </label>
            </form>
            <FormSubmit/>
        </div>
    );
}

export default FormCheckbox;
