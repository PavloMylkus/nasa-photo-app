import axios from "axios";
import { REACT_APP_API_KEY, REACT_APP_API_URL } from "../../const";



export const getPhotos = (data) => async (dispatch, getState) => {

	dispatch({
		type: "FETCH_PHOTOS_REQUEST"
	})

	try {
		// const response = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${REACT_APP_API_KEY}&page=1`)
		const response = await axios.get(`${REACT_APP_API_URL}mars-photos/api/v1/rovers/${data.rover}/photos?sol=${data.sol}&page=1&api_key=${REACT_APP_API_KEY}&camera=${data.camera}`)

		dispatch({
			type: "FETCH_PHOTOS_SUCCESS",
			payload: response.data.photos
		})

	} catch (error) {
		dispatch({
			type: "FETCH_PHOTOS_FAILURE",
			error
		})
	}
}

