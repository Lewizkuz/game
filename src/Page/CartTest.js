import { useState } from "react";
const Stepper = ({ index, children, ...other }) =>
	children
		? children.length
			? children.map((e, i) => (
					<div
						key={i}
						style={{ display: i === index ? undefined : "none" }}
						{...other}
					>
						{e}
					</div>
			  ))
			: null
		: null;
const CartItem = ({ name, description, listed, amount, defaultLabel }) => {
	const [state, setState] = useState(defaultLabel);
	const handlechange = (e) => {
		if (e.target.value !== defaultLabel) {
			setState(e.target.value);
		}
	};
	return (
		<div
			style={{
				border: "1px solid black",
				margin: ".5em",
				padding: ".5em",
			}}
		>
			<h2>
				{name ? name : null}
				{amount ? " x " + amount : null}
			</h2>
			{description ? <p>{description}</p> : null}
			{listed ? (
				listed.length ? (
					<select value={state} onChange={handlechange}>
						<option value={defaultLabel}>{defaultLabel}</option>
						{listed.map((e, i) => (
							<option key={i} value={e}>
								{e}
							</option>
						))}
					</select>
				) : null
			) : null}
		</div>
	);
};
const Step1 = ({ cart, setter }) => (
	<div>
		<h1>This is your cart!</h1>
		{cart.length
			? cart.map((e, i) => (
					<CartItem
						key={i}
						amount={e.amount}
						name={e.name}
						description={e.description}
						defaultLabel="jeejee"
					/>
			  ))
			: null}
	</div>
);
const Step2 = () => (
	<div>
		<h1>Agree PLZ</h1>
		<p>Agree PLZ</p>
	</div>
);
const Step3 = () => (
	<div>
		<p>Agree PLZ PLZ</p>
	</div>
);
const Step4 = () => (
	<div>
		<p>Agree PLZ PLZ PLZ</p>
	</div>
);

const ProductList = ({ cart, setter }) => {
	const products = [
		{
			name: "Asus läppäri",
			description: "Kelpo, iha ok. Paristot ei kuulu hintaan",
		},
		{ name: "Halpa kakka", description: "Huono, älä osta" },
		{ name: "Vituiks-män -figuuri", description: "On se kumma" },
		{ name: "Oikea kukko", description: "Aika moista" },
		{ name: "Betalyx rouveri", description: "Tää ei ole hyvä, tää on PARAS" },
		{ name: "Heikki Hela", description: "Naurettava pelle..." },
	];
	return (
		<div>
			<h1>Welcome to store! Here are some products!</h1>
			{products.length
				? products.map((e, i) => (
						<div
							key={i}
							style={{
								border: "1px solid black",
								margin: ".5em",
								padding: ".5em",
							}}
						>
							<h2>{e.name}</h2>
							<p>{e.description}</p>
							<button
								onClick={() =>
									cart.length
										? cart.map((s) => s.name).includes(e.name)
											? cart[cart.map((s) => s.name).indexOf(e.name)].amount++
											: setter([...cart, { ...e, amount: 1 }])
										: setter([{ ...e, amount: 1 }])
								}
							>
								Add to cart
							</button>
						</div>
				  ))
				: null}
		</div>
	);
};
const CartTest = () => {
	const [view, setView] = useState(0);
	const [cart, setCart] = useState([]);
	const x = { cart: cart, setter: (e) => setCart(e) };
	console.log(cart);
	return (
		<div>
			<div>
				<button onClick={() => setView(view - 1)}>{`<`}</button>
				<button onClick={() => setView(view + 1)}>{`>`}</button>
				<Stepper index={view}>
					<ProductList {...x} />
					<Step1 {...x} />
					<Step2 {...x} />
					<Step3 {...x} />
					<Step4 {...x} />
				</Stepper>
			</div>
		</div>
	);
};
export default CartTest;
