import PropTypes from "prop-types";
import { Button } from "@mui/material";

const Button1 = ({ color, text, onClick }) => {
  return (
    <Button variant="contained" onClick={onClick} color={color} className="btn">
      {text}
    </Button>
  );
};

Button1.defaultProps = {
  color: "steelblue",
};

Button1.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button1;
