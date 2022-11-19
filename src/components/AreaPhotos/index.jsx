import React from "react";
import AreaSearch from "../AreaSearch";
import GridPhotos from "../GridPhotos";

import Typography from '@mui/material/Typography';
import "./style.css";


const AreaPhotos = () => {



	return (
		<>
			<Typography sx={{ fontSize: { xs: 28, sm: 36, md: 54 } }} color="white" align="center" variant="h1" component="h1">
				PHOTOS
			</Typography>
			<AreaSearch />
			<GridPhotos />
		</>

	);
}
export default AreaPhotos