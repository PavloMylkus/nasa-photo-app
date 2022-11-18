import React from "react"
import FormRadio from "../FormRadio";
const RoverSection = ({ onChange }) => {
	return (
		<>
			<FormRadio type="radio" name="rover" id="rover1" value='Curiosity' onChange={onChange}>
				Curiosity
			</FormRadio>
			<FormRadio type="radio" name="rover" id="rover2" value='Opportunity' onChange={onChange}>
				Opportunity
			</FormRadio>
			<FormRadio type="radio" name="rover" id="rover3" value='Spirit' onChange={onChange}>
				Spirit
			</FormRadio>
		</>
	)
};

export default RoverSection;
