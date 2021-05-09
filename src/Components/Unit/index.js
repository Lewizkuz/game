import { forwardRef, useState } from "react";
import PropTypes from "prop-types";
const printFace = (mood) => {
	switch (mood) {
		case "happy":
		case "joy":
			return "😄";
		case "laugh":
		case "lol":
			return "🤣";
		case "sad":
		case "mournful":
			return "😥";
		default:
			return "😐";
	}
};
const Unit = forwardRef(({ name, image, mood = "neutral", ...other }, ref) => {
	return (
		<p {...other} ref={ref}>
			{printFace(mood)}
		</p>
	);
});
Unit.propTypes = {
	startindex: PropTypes.number,
	children: PropTypes.array,
};

export default Unit;
