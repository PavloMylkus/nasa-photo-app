import React, { useState } from "react";
import { useForm } from "../../hooks/useForm";
import { ErrorAlert } from "../Alerts";
import CameraSection from "./CameraSection";
import RoverSection from "./RoverSection";
import SolSectoion from "./SolSection";
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';


export default function AreaSearch() {
	const { alertERR, handleClick, handleChangeRover, handleChangeCamera, handleChangeSol } = useForm();
	return (

		<form onSubmit={handleClick}>
			<Paper elevation={3}
				sx={{
					padding: 2,
					margin: '0 auto',
					maxWidth: 600,
					maxHeight: 600,
					minHeight: 250,
					background: "rgb(125 125 125 / 28%)",
					backdropFilter: 'blur(10px)',
					borderRadius: '15px',
					display: 'flex',
					flexDirection: 'column'

				}}>
				<RoverSection onChange={handleChangeRover} />

				<CameraSection onChange={handleChangeCamera} />

				<SolSectoion onChange={handleChangeSol} />
				<Button type="submit" variant="contained" color="secondary" endIcon={<ImageSearchIcon />}>
					Search
				</Button>
				{alertERR ? <ErrorAlert /> : ""}
			</Paper>
		</form>


	);
}
