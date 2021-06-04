import React, { useState } from 'react';
//materialUI
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useForm, Controller } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: '#2d2e40'
    }
}));

const RegisterPage: React.FC = () => {
    const { handleSubmit, control } = useForm();
    const classes = useStyles();

    const [registerData, setRegisterData] = useState({
        "username": "",
        "email": "",
        "password1": "",
        "password2": ""
    });

    const handleChange = (e: any) => {
        const {id, value} = e.target;
        setRegisterData(prevRegisterData =>({
            ...prevRegisterData,
            [id]: value
        }));
    };

    const onSubmit = (e: any) => {
        console.log("handle submit");
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h2" variant="h5">
                    Register
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                    <Controller 
                        name="username"
                        control={control}
                        defaultValue=""
                        render={({ field: { onChange, value }, fieldState: { error }}) => (
                            <TextField 
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                autoComplete="username"
                                autoFocus
                                value={registerData.username}
                                onChange={handleChange}
                                error={!!error}
                                helperText={error ? error.message : null}
                            />
                        )}
                        rules= {{ required: 'Username required'}}
                    />
                    <Controller 
                        name="email"
                        control={control}
                        defaultValue=""
                        render={({ field: { onChange, value }, fieldState: { error }}) => (
                            <TextField 
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="E-mail"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                value={registerData.email}
                                onChange={handleChange}
                                error={!!error}
                                helperText={error ? error.message : null} 
                            />
                        )}
                        rules={{ required: 'Email required' }}
                    />
                    <Controller
                        name="password"
                        control={control}
                        defaultValue=""
                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password1"
                                label="Password"
                                type="password"
                                id="password1"
                                autoFocus
                                value={registerData.password1}
                                onChange={handleChange}
                                error={!!error}
                                helperText={error ? error.message : null}
                            />
                        )}
                        rules={{ required: 'Password required' }}
                    />
                    <Controller
                        name="password"
                        control={control}
                        defaultValue=""
                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password2"
                                label="Password"
                                type="password"
                                id="password2"
                                autoFocus
                                value={registerData.password2}
                                onChange={handleChange}
                                error={!!error}
                                helperText={error ? error.message : null}
                            />
                        )}
                        rules={{ required: 'Password required' }}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Register
                    </Button>
                </form>
            </div>
        </Container>
    );
};

export default RegisterPage;


                    