import { useState } from "react";
import ViewManager from "../Components/ViewManager";

const PageTest = () => {
	const [page, setPage] = useState(0);
	return (
		<div>
			<ViewManager>
				<p>1</p>
				<p>2</p>
				<p>3</p>
				<p>4</p>
				<p>5</p>
			</ViewManager>
		</div>
	);
};
export default PageTest;
