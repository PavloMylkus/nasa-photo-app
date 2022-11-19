import React from "react"
import Slider from '@mui/material/Slider';
import InputLabel from '@mui/material/InputLabel';
import { Box } from "@mui/material";



const SolSectoion = ({ onChange }) => {
	const [value, setValue] = React.useState(10);

	const handleChange = (event, newValue) => {

		setValue(newValue);
	};
	return (
		<Box
			sx={{ marginTop: 2 }}>
			<InputLabel
				variant="standard"
				htmlFor="sol">
				Sol {value}
			</InputLabel>
			<Slider
				name="sol"
				aria-label="Sol"
				defaultValue={1}
				max={1000}
				min={1}
				color="secondary"
				onChange={onChange}
				onChangeCommitted={handleChange}
			/>
		</Box>
	)
};

export default SolSectoion;
