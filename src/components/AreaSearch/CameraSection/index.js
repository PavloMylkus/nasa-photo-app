import React, { useState } from "react"
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { Box } from "@mui/material";


const CameraSection = ({ onChange }) => {
	return (

		<Box sx={{ marginTop: 1 }}>
			<FormControl fullWidth >
				<InputLabel
					color="secondary"
					variant="standard"
					htmlFor="uncontrolled-native">
					Camera
				</InputLabel>
				<NativeSelect
					color="secondary"
					onChange={onChange}
					defaultValue='FHAZ'
					inputProps={{
						name: 'Camera',
						id: 'uncontrolled-native',
					}}
				>
					<option value='FHAZ'>Front Hazard Avoidance Camera</option>
					<option value='RHAZ'>Rear Hazard Avoidance Camera</option>
					<option value='MAST'>Mast Camera</option>
					<option value='CHEMCAM'>Chemistry and Camera Complex</option>
					<option value='MAHLI'>Mars Hand Lens Imager</option>
					<option value='MARDI'>Mars Descent Imager</option>
					<option value='PANCAM'>Panoramic Camera</option>
					<option value='NAVCAM'>Navigation Camera</option>
					<option value='MINITES'>Miniature Thermal Emission Spectrometer (Mini-TES)	</option>
				</NativeSelect>
			</FormControl>
		</Box>
	)
};

export default CameraSection;