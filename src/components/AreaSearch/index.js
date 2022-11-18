import React, { useState } from "react";
import { useForm } from "../../hooks/useForm";
import { ErrorAlert } from "../Alerts";
import CameraSection from "./CameraSection";
import RoverSection from "./RoverSection";
import SolSectoion from "./SolSection";

export default function AreaSearch() {
	const { alertERR, handleClick, handleChangeRover, handleChangeCamera, handleChangeSol } = useForm();
	return (
		<div id="searchPhotos">
			<form onSubmit={handleClick}>

				<RoverSection onChange={handleChangeRover} />
				<br />
				<CameraSection onChange={handleChangeCamera} />
				<br />
				<SolSectoion onChange={handleChangeSol} />
				<button type="submit">Search</button>
				{alertERR ? <ErrorAlert /> : ""}
			</form>

		</div>
	);
}
