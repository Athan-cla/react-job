import PropTypes from "prop-types";

const bgDefault = "bg-gray-100";

const Card = ({ children, bg = bgDefault }) => {
  return <div className={`${bg} p-6 rounded-lg shadow-md`}>{children}</div>;
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  bg: PropTypes.string,
};

export default Card;
