import React from "react"

const FormRadio = ({ type, name, id, value, onChange, children }) => {
	return (
		<label htmlFor={id}>
			{children}
			<input type={type} name={name} id={id} value={value} onChange={onChange} />
		</label>
	)
};

export default FormRadio;
