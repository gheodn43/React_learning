import React from 'react';

export default function CustomInput({ inputs, handleChange }) {
    return (
        <div className="d-flex flex-wrap">
            {inputs.map((input, index) => (
                <div key={index} className={`position-relative p-2 ${input.size}`}>
                    <label htmlFor={input.field} className="position-absolute bg-light label-cus">
                        {input.field}
                    </label>
                    <input
                        type={input.type || 'text'}
                        className="rounded-3 input-cus w-100 bg-light border-dark"
                        placeholder={`Enter ${input.field}`}
                        id={input.field}
                        name={input.field}
                        value={input.value || ''}
                        onChange={handleChange}
                    />
                </div>
            ))}
        </div>
    );
}
