"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Games = _interopRequireDefault(require("@material-ui/icons/Games"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Login = (_ref) => {
  let {
    ImageUrl,
    onClick,
    Header,
    subText
  } = _ref;
  const templateImage = "https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg";
  const backgroundImageCSS = {
    position: "absolute",
    width: "100%",
    height: "100%",
    background: "url(".concat(ImageUrl ? ImageUrl : templateImage, ") no-repeat center center fixed"),
    WebkitBackgroundSize: "cover",
    backgroundSize: "cover"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: backgroundImageCSS
  }, /*#__PURE__*/React.createElement("div", {
    className: "appButton"
  }, /*#__PURE__*/React.createElement("h1", null, Header ? Header : "Place text here!"), /*#__PURE__*/React.createElement("div", {
    className: "appButtonSubtext"
  }, subText), /*#__PURE__*/React.createElement(_Button.default, {
    variant: "contained",
    color: "primary",
    startIcon: /*#__PURE__*/React.createElement(_Games.default, null),
    onClick: onClick
  }, "Login with google")));
};

var _default = Login;
exports.default = _default;