import React from "react";
import PropTypes from "prop-types";

function Button(props) {
  return (
    <>
      <button
        {...props}
      />
      </>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(['base', 'link', 'neutral', 'brand', 'outline-brand', 'destructive', 'success', 'text-destructive', 'icon']),
};

export default Button;
