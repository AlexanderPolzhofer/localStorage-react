import React from 'react';
import { useLocalStorage } from '../../utils/useLocalStorage';

const FormCheckbox = () => {

    const [checked, setChecked] = useLocalStorage('checked', false);

    return (
        <div>
            <form style={{ display: 'flex', flexDirection: 'column' }}>
                <label>
                    <input
                        type="checkbox"
                        checked={checked}
                        onChange={(e) => setChecked(e.target.checked)}
                    />{" "}
                    Not a robot?
                </label>
            </form>
        </div>
    );
}

export default FormCheckbox;
