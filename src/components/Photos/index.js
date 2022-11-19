import React, { useState } from "react";
import ModalPhotoSelected from "../ModalPhotoSelected";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';



export default function Photos({ photo }) {
	const [modalWithDetails, setModalWithDetails] = useState(false);
	const handleDetails = () => {
		setModalWithDetails(true);
	};
	return (
		<>
			{modalWithDetails ? (
				<ModalPhotoSelected setModalWithDetails={setModalWithDetails} photo={photo} />
			) : (
				<Card sx={{ maxWidth: 350, cursor: 'pointer' }}>
					<CardMedia
						sx={{ minWidth: 250 }}
						height={250}
						onClick={handleDetails}
						component="img"
						image={photo.img_src}
						alt={photo.id}
					/>
				</Card>
			)}
		</>
	);
}
