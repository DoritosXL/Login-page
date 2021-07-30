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

  const appButton = {
    textAlign: "center",
    margin:"25px auto",
    width: "25%",
    minHeight:"200px",
    backgroundColor: "#e0e0e0",  
    padding:"20px 0px 20px 0px",
    position:"relative",
    borderRadius: "5px"
  }

  const appButtonSubtext = {
    marginBottom: "25px"
  }



  return (
    <div style={backgroundImageCSS}>
      <div style={appButton}>
        <h1>{Header ? Header : "Place text here!"}</h1>
        <div style={appButtonSubtext}>{subText}</div>
        <Button variant="contained" color="primary" startIcon={<GamesIcon />} onClick={onClick}>
          Login with google
        </Button>
      </div>
    </div>
  )
}

export default Login
