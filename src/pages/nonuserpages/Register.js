import React, { useState } from 'react'

import {
    Box,
    Button,
    Typography,
    Grid,
    TextField,
    InputAdornment,
    FormControl,
    IconButton,
} from '@mui/material';

import { Link, useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { registerInitiate } from '../../redux/actions/userAction';

import logoRendezvous from '../../assets/img/jpg/RendezvousNewLogo.jpg'
import EmailIcon from '@mui/icons-material/Email';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LockIcon from '@mui/icons-material/Lock';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonIcon from '@mui/icons-material/Person';

const style = {
    marginTopButton: {
        marginTop: 3
    },
    marginStyle: {
        marginTop: 1
    },
    root: {
        padding: "80px 20px",
    },
    menuLink: {
        fontSize: "1.2rem",
        marginLeft: 2,
        "&:hover": {
            color: theme => theme.palette.secondary.main,
        }
    },
    section1: {
        backgroundColor: "#f3f3f3",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px 40px",
        borderRadius: 2
    },
    headingStyle1: {
        marginTop: "-10px",
        textAlign: "center",
        fontWeight: 700,
        fontSize: {
            xs: "1rem",
            sm: "1.2rem",
            md: "1.5rem",
        },
        fontFamily: "ComicSans"
    },
    labelStyle: {
        fontSize: 20
    },
    btnColor: {
        backgroundColor: (theme) => theme.colors.buttonColor,
        color: (theme) => theme.colors.textColor,
        "&:hover": {
            backgroundColor: (theme) => theme.colors.buttonColor,
            color: (theme) => theme.colors.navButtonHover,
        }
    }
}

export default function Register() {

    const dispatch = useDispatch();

    const [values, setValues] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
        showPassword: false,
        errors: "",
    });

    const history = useHistory();

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const signup = () => {

        if (!values.email || !values.password || !values.confirmPassword || !values.displayName) {
            setValues({ ...values, errors: "Please Complete all fields" })
            console.log("sdad");
        } else if (values.password !== values.confirmPassword) {
            setValues({ ...values, errors: "Password do not match!" })
            console.log("sdsdadasdasdad");
        }
        else {
            console.log("di gumagana");
            setValues({ ...values, errors: "", isLoading: true });
            dispatch(registerInitiate(values.email, values.password, values.displayName, history));
        }
    }

    return (
        <Box sx={style.root}>
            <Grid container justifyContent="center">
                <Box sx={style.section1} boxShadow={12}>
                    <Typography variant="subtitle1" color="textPrimary" sx={style.headingStyle1}>
                        Sign Up
                    </Typography>
                    <img
                        src={logoRendezvous}
                        alt="Rendezvous Logo"
                        style={{ height: "100px", width: "100px", marginBottom: 5 }}
                    />
                    <FormControl sx={{ m: 1, backgroundColor: 'white' }} fullWidth variant="outlined">
                        <TextField
                            placeholder="Full Name"
                            onChange={handleChange('displayName')}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PersonIcon />
                                    </InputAdornment>
                                ),
                            }}
                            size="medium"
                        />
                    </FormControl>
                    <FormControl sx={{ m: 1, backgroundColor: 'white' }} fullWidth variant="outlined">
                        <TextField
                            placeholder="Email Address"
                            onChange={handleChange('email')}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <EmailIcon />
                                    </InputAdornment>
                                ),
                            }}
                            size="medium"
                        />
                    </FormControl>
                    <FormControl sx={{ m: 1, backgroundColor: 'white' }} fullWidth variant="outlined">
                        <TextField
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            placeholder="Password"
                            onChange={handleChange('password')}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LockIcon />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                    </FormControl>
                    <FormControl sx={{ m: 1, backgroundColor: 'white' }} fullWidth variant="outlined">
                        <TextField
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.confirmPassword}
                            placeholder="Confirm Password"
                            onChange={handleChange('confirmPassword')}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LockIcon />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                    </FormControl>
                    <Button
                        variant="outlined"
                        startIcon={<ExitToAppIcon />}
                        sx={{ ...style.btnColor, ...style.marginTopButton }}
                        onClick={signup}
                    >
                        Sign up
                    </Button>
                    <Typography
                        variant="subtitle1"
                        sx={style.marginTopButton}
                    >
                        Already Have an account
                    </Typography>
                    <Link to="/login" style={{ textDecoration: 'none' }}>
                        <Button
                            variant="outlined"
                            startIcon={<PersonAddIcon />}
                            sx={{ ...style.btnColor, ...style.marginTopButton }}
                        >
                            Back to Login
                        </Button>
                    </Link>
                </Box>
            </Grid>
        </Box>
    )
}
