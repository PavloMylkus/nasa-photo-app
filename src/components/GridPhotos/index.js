import React, { useState } from "react";
import { useSelector } from "react-redux";
import { LoadingAlert, PhotoNotFoundAlert } from "../Alerts";
import Photos from "../Photos";
import { experimentalStyled as styled } from '@mui/material/styles';
import {
	Box,
	Grid,
	Paper
} from '@mui/material';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useForm } from "../../hooks/useForm";

const GridPhotos = () => {

	const state = useSelector((state) => state.result);

	const [maxCount, setMaxCount] = useState(3);
	const showMorePhoto = () => {
		setMaxCount(state.photos.length)

	}

	return (<Box sx={{
		display: 'flex',
		marginTop: 2,
		flexDirection: 'column',
		alignItems: 'center'
	}}>
		{state.loading && <LoadingAlert />}
		{state.photos.length == 0 && <PhotoNotFoundAlert />}
		{state.photos.length > 0 && (
			<Grid container spacing={2} sx={{
				marginTop: 2,
				padding: 1,
				display: { xs: 'flex' },
				flexDirection: { xs: 'column', lg: 'row', md: 'row', sm: 'row' },
				flexWrap: { xs: 'nowrap', lg: 'wrap', md: 'wrap', sm: 'wrap' },
				alignItems: { xs: 'center', md: 'flex-start', sm: 'flex-start', lg: 'flex-start' },
			}}>
				{state.photos.slice(0, maxCount).map((photo, index) => (
					<Grid
						sx={{ width: '266px' }}
						key={index}
						item
						xs={12}
						sm={6}
						md={4}
						lg={4}
					>
						<Photos key={state.photos.id} photo={photo} />
					</Grid>
				))}

			</Grid>
		)}
		{state.photos.length > maxCount
			&& <Button
				color="secondary"
				variant="contained"
				endIcon={<ExpandMoreIcon />}
				onClick={showMorePhoto}>
				Load more
			</Button>
		}
	</Box>

	);
}

export default GridPhotos;
