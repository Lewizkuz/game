import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const RouterTest = () => {
	const [state, setState] = useState(0);
	return (
		<Router>
			<div>
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/users">Users</Link>
						</li>
					</ul>
				</nav>

				<Switch>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/users">
						<Users />
					</Route>
					<Route path="/">
						<Home change={state} setter={(e) => setState(e)} />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};

function Home({ change, setter }) {
	useEffect(() => {
		if (setter) {
			setter(change + 1);
		}
	}, []);
	return <h2>Home, {change}</h2>;
}

function About() {
	return <h2>About</h2>;
}

function Users() {
	return <h2>Users</h2>;
}
export default RouterTest;
