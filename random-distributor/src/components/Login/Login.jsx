import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from "./Login.module.css"
import signupLogo from './Img/signupLogo.png'
import facebook from './Img/facebook.png'
import { GoogleLogin } from "react-google-login";


const clientId =
    "686122184895-scrrs56eel1p7kv6qn31896qpss11l47.apps.googleusercontent.com";


const Login = () => {

    const onLoginSuccess = (res) => {
        console.log("Login Success:", res.profileObj);

    };

    const onLoginFailure = (res) => {
        console.log("Login Failed:", res);
    };



    return (
        <div className={styles.background_login}>

            <div className={styles.login_div}>
                <h1>Login</h1>
                <Box
                    style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        flexDirection: "column",
                        gap: "18px"
                    }}
                    component="form"
                    noValidate
                    autoComplete="off">
                    <TextField value="" name="email" label="Email" type="email" variant="filled" sx={{ background: "white", outline: 'none', border: 'none', borderRadius: '4px' }} />
                    <TextField value="" name="password" label="Password" type="password" variant="filled" sx={{ background: "white", outline: 'none', border: 'none', borderRadius: '4px' }} />
                </Box>

                <Button variant="contained" size="large" className={styles.login_btn} sx={{
                    padding: '12px', backgroundColor: '#00ADB5', fontWeight: 'medium', width: '100%', my: 3, fontSize: '18px', '&:hover': {
                        backgroundColor: '#04c5cf',
                    },
                }} >Login</Button>

                <div className={styles.buttonsDiv}>
                    <GoogleLogin clientId={clientId}
                        buttonText=""
                        icon={false}
                        onSuccess={onLoginSuccess}
                        onFailure={onLoginFailure}
                        cookiePolicy={"single_host_origin"}
                        isSignedIn={true}

                        className={styles.hide}>
                        <button className={styles.login_btn} > <img src={signupLogo} alt="signup logo" className={styles.signLogo} />

                            Google Signup</button> </GoogleLogin>
                    <button className={styles.fb_btn}  > <img src={facebook} alt="signup logo" className={styles.signLogo} /> Facebook Signup</button>
                </div>


                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', my: 1 }}>
                    <Typography variant="p" component="p" sx={{ cursor: 'pointer' }}>
                        Forget Password?
                    </Typography>
                    <Typography variant="p" component="p">
                        Dont't have an account? <span style={{ cursor: 'pointer', color: '#00ADB5' }}

                        >Signup</span>
                    </Typography>
                </Box>
            </div>
        </div>
    )
}

export default Login
