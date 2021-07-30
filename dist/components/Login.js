"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

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
  const templateImage = "https://picsum.photos/2048/1080";
  const backgroundImageCSS = {
    position: "absolute",
    width: "100%",
    height: "100%",
    background: "url(".concat(ImageUrl ? ImageUrl : templateImage, ") no-repeat center center fixed"),
    WebkitBackgroundSize: "cover",
    backgroundSize: "cover"
  };
  const appButton = {
    textAlign: "center",
    margin: "25px auto",
    minWidth: "300px",
    maxWidth: "500px",
    minHeight: "200px",
    backgroundColor: "#e0e0e0",
    padding: "20px 0px 20px 0px",
    position: "relative",
    borderRadius: "5px"
  };
  const appButtonSubtext = {
    marginBottom: "25px"
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: backgroundImageCSS
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: appButton
  }, /*#__PURE__*/_react.default.createElement("h1", null, Header ? Header : "Place text here!"), /*#__PURE__*/_react.default.createElement("div", {
    style: appButtonSubtext
  }, subText), /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "contained",
    color: "primary",
    startIcon: /*#__PURE__*/_react.default.createElement(_Games.default, null),
    onClick: onClick
  }, "Login with google")));
};

var _default = Login;
exports.default = _default;