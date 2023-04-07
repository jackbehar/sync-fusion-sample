import React from "react";
import PropTypes from "prop-types";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";

function Button(props) {
  return <ButtonComponent {...props} />;
}

Button.propTypes = {
  /**

Positions the icon before/after the text content in the Button.
The possible values are:
Left: The icon will be positioned to the left of the text content.
Right: The icon will be positioned to the right of the text content.
*/
  iconPosition: PropTypes.oneOf(["Left", "Right"]),
  /**
  
  Defines class/multiple classes separated by a space for the Button that is used to include an icon.
  Buttons can also include font icon and sprite image.
  */
  iconCss: PropTypes.string,
  /**
  
  Specifies a value that indicates whether the Button is disabled or not.
  */
  disabled: PropTypes.bool,
  /**
  
  Allows the appearance of the Button to be enhanced and visually appealing when set to true.
  */
  isPrimary: PropTypes.bool,
  /**
  
  Defines class/multiple classes separated by a space in the Button element. The Button types, styles, and
  size can be defined by using
  this.
  */
  cssClass: PropTypes.string,
  /**
  
  Defines the text content of the Button element.
  */
  content: PropTypes.string,
  /**
  
  Makes the Button toggle, when set to true. When you click it, the state changes from normal to active.
  */
  isToggle: PropTypes.bool,
  /**
  
  Overrides the global culture and localization value for this component. Default global culture is 'en-US'.
  */
  locale: PropTypes.string,
  /**
  
  Defines whether to allow the cross-scripting site or not.
  */
  enableHtmlSanitizer: PropTypes.bool,
  /**
  
  Triggers once the component rendering is completed.
  */
  created: PropTypes.func,
};

export default Button;
