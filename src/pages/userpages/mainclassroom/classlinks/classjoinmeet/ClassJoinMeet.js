import React from 'react';

import {
    Typography,
    Box,
    Grid,
    TextField,
    Button
} from '@mui/material';

import Classdrawer from '../../classdrawer/ClassDrawer';


const style = {
    gridcontainer: {
        display: "flex",
        padding: 2,
        marginTop: 1
    },
    btnStyle: {
        width: 60,
        height: 40,
        margin: 1
    }
}

export default function ClassJoinMeet() {
    return (
        <Classdrawer>
            <Box component={Grid} container justifyContent="flex-start" sx={{ padding: 5 }}>
                <Grid container justifyContent="center" alignItems="center" sx={{ marginTop: 10}}>
                    <Grid container justifyContent="flex-start" alignItems="center">
                        <Grid container Z>
                            <Typography variant="h6" >
                                Classroom meeting
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="flex-start" alignItems="center">
                        <Grid container sx={style.gridcontainer} justify='space-between'>
                            <Grid container justifyContent="space-between" spacing={5}>
                                <Grid item sm={6}>
                                    <TextField id="outlined-basic1" variant="outlined" fullWidth />
                                </Grid>
                                <Grid item sm={6}>
                                    <Button variant="contained" color="primary" sx={style.btnStyle}>
                                        Join
                                    </Button>
                                    <Button variant="contained" color="primary" sx={style.btnStyle}>
                                        Reset
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container sx={style.gridcontainer} justifyContent='space-between'>
                            <Grid container justifyContent="space-between" spacing={5}>
                                <Grid item sm={6}>
                                    <TextField id="outlined-basic2" variant="outlined" fullWidth />
                                </Grid>
                                <Grid item sm={6}>
                                    <Button variant="contained" color="primary" sx={style.btnStyle}>
                                        Join
                                    </Button>
                                    <Button variant="contained" color="primary" sx={style.btnStyle}>
                                        Reset
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Classdrawer>
    )
}
