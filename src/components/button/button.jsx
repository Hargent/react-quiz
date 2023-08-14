import PropTypes from "prop-types";

const Button = ({
	children,
	additionalClass,
	onClick,
	type,
	payload = null,
	disabled = false
}) => {
	return (
		<button
			className={`btn ${additionalClass}`}
			onClick={() => {
				onClick({ type: type, payload: payload });
			}}
			disabled={disabled}>
			{children}
		</button>
	);
};

Button.propTypes = {
	children: PropTypes.node,
	additionalClass: PropTypes.string,
	onClick: PropTypes.func,
	type: PropTypes.string,
	payload: PropTypes.any,
	disabled: PropTypes.bool
};

export default Button;
