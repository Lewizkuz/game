import { forwardRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
const View = forwardRef(({ selected, children, ...other }, ref) => (
	<div {...other} ref={ref} style={{ display: selected ? undefined : "none" }}>
		{children}
	</div>
));
const ViewManager = forwardRef(
	({ startindex, children = [], ...other }, ref) => {
		const [state, setState] = useState(startindex ? startindex : 0);
		return (
			<div {...other} ref={ref}>
				<button onClick={state > 0 ? () => setState(state - 1) : undefined}>
					{`<`}
				</button>
				<button
					onClick={
						state > children.length - 2 ? undefined : () => setState(state + 1)
					}
				>
					{`>`}
				</button>
				<div>
					{children
						? children.map((e, i) => (
								<View key={i} selected={state === i}>
									{e}
								</View>
						  ))
						: null}
				</div>
			</div>
		);
	}
);
ViewManager.propTypes = {
	startindex: PropTypes.number,
	children: PropTypes.array,
};

export default ViewManager;
