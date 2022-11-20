import React from "react"
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';

const RoverSection = ({ onChange }) => {
	const BpIcon = styled('span')(({ theme }) => ({
		borderRadius: '50%',
		width: 16,
		height: 16,
		boxShadow:
			theme.palette.mode === 'dark'
				? '0 0 0 1px rgb(16 22 26 / 40%)'
				: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
		backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
		backgroundImage:
			theme.palette.mode === 'dark'
				? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
				: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
		'.Mui-focusVisible &': {
			outline: '2px auto rgba(19,124,189,.6)',
			outlineOffset: 2,
		},
		'input:hover ~ &': {
			backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
		},
		'input:disabled ~ &': {
			boxShadow: 'none',
			background:
				theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
		},
	}));

	const BpCheckedIcon = styled(BpIcon)({
		backgroundColor: '#137cbd',
		backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
		'&:before': {
			display: 'block',
			width: 16,
			height: 16,
			backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
			content: '""',
		},
		'input:hover ~ &': {
			backgroundColor: '#106ba3',
		},
	});

	// Inspired by blueprintjs
	const BpRadio = (props) => {
		return (
			<Radio

				disableRipple
				color="default"
				checkedIcon={<BpCheckedIcon />}
				icon={<BpIcon />}
				{...props}
			/>
		);
	}

	return (
		<Box sx={{
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			flexDirection: 'column'
		}}>
			<FormLabel id="demo-customized-radios">Rover</FormLabel>
			<RadioGroup
				sx={{ flexDirection: 'row' }}
				defaultValue="female"
				aria-labelledby="demo-customized-radios"
				name="customized-radios"
			>
				<FormControlLabel
					value="Curiosity"
					control={<BpRadio />}
					label="Curiosity"
					onChange={onChange} />
				<FormControlLabel
					value="Opportunity"
					control={<BpRadio />}
					label="Opportunity"
					onChange={onChange} />
				<FormControlLabel
					value="Spirit"
					control={<BpRadio />}
					label="Spirit"
					onChange={onChange} />
			</RadioGroup>

		</Box>
	)
};

export default RoverSection;
