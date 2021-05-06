import { useState } from "react";
import Unit from "../Components/Unit";

const UnitTest = () => {
	const [mood, setMood] = useState(null);
	return (
		<div>
			<Unit mood={mood} />
			{[
				["neutral", "reset"],
				["joy", "joy"],
				["sad", "sad"],
				["laugh", "laugh"],
			].map((e, i) => (
				<button key={i} onClick={() => setMood(e[0])}>
					{e[1]}
				</button>
			))}
		</div>
	);
};
export default UnitTest;
