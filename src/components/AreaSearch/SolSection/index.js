import React from "react"
import Slider from '@mui/material/Slider';
import InputLabel from '@mui/material/InputLabel';
import { Box } from "@mui/material";
import Input from '@mui/material/Input';


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
				htmlFor="sol"
			>
				Sol
				<Input
					sx={{ marginLeft: 1 }}
					type="number"
					placeholder={`${value}`}
					size="small"
					onChange={onChange}
				/>
			</InputLabel>
			<Slider
				name="sol"
				aria-label="Sol"
				defaultValue={0}
				max={1000}
				min={0}
				color="secondary"
				onChange={onChange}
				onChangeCommitted={handleChange}
			/>
		</Box>
	)
};

export default SolSectoion;
