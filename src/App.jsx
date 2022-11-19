import "./App.css";
import AreaPhotos from "./components/AreaPhotos";
import React from "react";
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';



function App() {
	return (
		<Container maxWidth="lg">
			<>
				<AreaPhotos />
			</>
		</Container>
	);
}

export default App;
