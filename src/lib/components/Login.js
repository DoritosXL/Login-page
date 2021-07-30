import React from 'react'
import Button from "@material-ui/core/Button"
import GamesIcon from "@material-ui/icons/Games"

const Login = ({ ImageUrl, onClick, Header, subText }) => {
  const templateImage =
    "https://source.unsplash.com/collection/496416"

  const backgroundImageCSS = {
    position: "absolute",
    width: "100%",
    height: "100%",
    background: `url(${
      ImageUrl ? ImageUrl : templateImage
    }) no-repeat center center fixed`,
    WebkitBackgroundSize: "cover",
    backgroundSize: "cover"
  }

  return (
    <div style={backgroundImageCSS}>
      <div className="appButton">
        <h1>{Header ? Header : "Place text here!"}</h1>
        <div className="appButtonSubtext">{subText}</div>
        <Button variant="contained" color="primary" startIcon={<GamesIcon />} onClick={onClick}>
          Login with google
        </Button>
      </div>
    </div>
  )
}

export default Login
