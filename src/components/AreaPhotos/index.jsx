import React from "react";
import { useForm } from "../../hooks/useForm";
import AreaSearch from "../AreaSearch";
import GridPhotos from "../GridPhotos";

import "./style.css";


const AreaPhotos = () => {



	return (
		<section id="areaPhotos">
			<div id="titleAreaPhotos">
				<h1>Photos</h1>
			</div>
			<AreaSearch />
			<GridPhotos />

		</section>
	);
}
export default AreaPhotos