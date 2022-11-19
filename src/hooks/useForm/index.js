import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { getPhotos } from "../../redux/actions/getPhotos";


export const useForm = () => {

	const dispatch = useDispatch();
	const [data, setData] = useState({
		rover: "",
		camera: "FHAZ",
		sol: 1,
		page: 1
	});
	const [alertERR, setAlertERR] = useState(false);



	const handleClick = (e) => {
		e.preventDefault();
		if (data.rover === "" || data.camera === "" || data.sol > 1000) {
			setAlertERR(true);
			return setTimeout(() => {
				setAlertERR(false);
			}, 1500);
		}
		return dispatch(getPhotos(data));
	};

	const handleChangeRover = (e) => {
		setData({
			...data,
			rover: e.target.value
		});

	};
	const handleChangeCamera = (e) => {
		setData({
			...data,
			camera: e.target.value
		});

	};
	const handleChangeSol = (e) => {
		setData({
			...data,
			sol: e.target.value
		});

	};



	return {
		handleClick,
		handleChangeRover,
		handleChangeCamera,
		handleChangeSol,
		alertERR,
		data,
	}
}