import React from 'react';

import {
    Typography,
    Box,
    Grid,
    TextField,
    Button
} from '@mui/material';

import { Link } from 'react-router-dom';

import Classdrawer from '../../classdrawer/ClassDrawer';

const style = {

    //marginLeftTextfield helper
    marginLeftTF: {
        marginLeft: {
            xs: 0,
            md: 8
        }
    },
    gridcontainer: {
        display: "flex",
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        padding: 2,
        marginTop: 10
    },
    deadlineContainer: {
        border: "1px solid grey",
    }
}

export default function ClassCreateQuizExam() {
    return (
        <Classdrawer>
            <Box component={Grid} container justifyContent="flex-start" sx={{ padding: 1 }}>
                <Grid container alignItems="center">
                    <Grid container sx={style.gridcontainer} justifyContent='space-between'>
                        <Grid container justifyContent="flex-start" sx={{ padding: 2 }}>
                            <Typography variant="h6" sx={{ marginTop: 0.5, margin: 1 }}>
                                Title:
                            </Typography>
                            <TextField
                                variant="outlined"
                            />
                        </Grid>
                        <Grid container justifyContent="flex-start" sx={{ padding: 2 }}>
                            <Typography variant="h6" sx={{ marginTop: 0.5, margin: 1 }}>
                                Instruction:
                            </Typography>
                            <TextField
                                variant="outlined"
                                fullWidth
                                sx={style.marginLeftTF}
                            />
                        </Grid>
                        <Grid container justifyContent="flex-start" sx={{ padding: 2 }}>
                            <Grid item sm={6}>
                                <Grid container
                                    sx={{
                                        width: {
                                            xs: "100%",
                                            md: "50%",
                                        }
                                    }}
                                >
                                    <Typography variant="h6" sx={{ marginTop: 0.5, margin: 1 }}>
                                        Deadline :
                                    </Typography>
                                    <TextField
                                        variant="outlined"
                                        fullWidth
                                        sx={style.marginLeftTF}
                                    />
                                </Grid>

                            </Grid>
                            <Grid item sm={6}>
                                <Grid container
                                    sx={{
                                        width: {
                                            xs: "100%",
                                            md: "40%",
                                        }
                                    }}
                                >
                                    <Typography variant="h6" sx={{ marginTop: 0.5, margin: 1 }}>
                                        Total Points :
                                    </Typography>
                                    <TextField
                                        variant="outlined"
                                        fullWidth
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container justifyContent="flex-start" sx={{ padding: 2 }}>
                            <Link style={{ textDecoration: 'none', color: 'black' }} to='/classassignquizexam'>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    sx={style.marginLeftTF}
                                >
                                    Next
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Classdrawer>
    )
}
