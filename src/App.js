import "./App.css";
import ViewManager from "./Components/ViewManager";
import PageTest from "./Page/PageTest";
import UnitTest from "./Page/UnitTest";
import CartTest from "./Page/CartTest";
import RouterTest from "./Page/routertest";
import { StrictMode } from "react";

const App = () => {
	return (
		<div className="App">
			<StrictMode>
				{/* <CartTest /> */}
				<RouterTest />
				<ViewManager startindex={3}>
					<UnitTest />
					<PageTest />
					<CartTest />
					<p>3</p>
					<p>4</p>
				</ViewManager>
			</StrictMode>
		</div>
	);
};

export default App;
