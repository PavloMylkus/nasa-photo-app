import React from "react"
import FormRadio from "../FormRadio";
const CameraSection = ({ onChange }) => {
	return (
		<>
			<FormRadio type="radio" name="camera" id="camera1" value='FHAZ' onChange={onChange}>
				FHAZ
			</FormRadio>
			<FormRadio type="radio" name="camera" id="camera2" value='RHAZ' onChange={onChange}>
				RHAZ
			</FormRadio>
			<FormRadio type="radio" name="camera" id="camera3" value='NAVCAM' onChange={onChange}>
				NAVCAM
			</FormRadio>
		</>
	)
};

export default CameraSection;