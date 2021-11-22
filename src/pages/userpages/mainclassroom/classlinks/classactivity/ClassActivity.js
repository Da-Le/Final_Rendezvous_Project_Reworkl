import React from 'react';

import {
    Typography,
    Box,
    Grid,
    Button
} from '@mui/material';

import { Link } from 'react-router-dom';

import Classdrawer from '../../classdrawer/ClassDrawer';

const style = {
    gridcontainer: {
        display: "flex",
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        padding: 2,
        marginTop: 1
    }
}

export default function ClassActivity() {
    return (
        <Classdrawer>
            <Box component={Grid} container justifyContent="flex-start" sx={{ padding: 5 }}>
                <Grid container justifyContent="flex-start" alignItems="center">
                    <Grid container sx={{ marginTop: 5 }}>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to='/classcreateactivity'>
                            <Button
                                variant="contained"
                                color="primary"
                                sx={{ textDecoration: 'none' }}
                            >
                                Create Activity
                            </Button>
                        </Link>
                    </Grid>
                    <Grid container justifyContent="flex-start" alignItems="center">
                        <Grid container justifyContent="space-between" sx={{ marginTop: 2 }}>
                            <Typography variant="subtitle1">
                                Date Created: 06-02-2021 05:20PM
                            </Typography>
                            <Typography variant="subtitle1">
                                Deadline: 06-02-2021 05:20PM
                            </Typography>
                        </Grid>
                        <Grid container sx={style.gridcontainer} justifyContent='space-between'>
                            <Grid container justifyContent="space-between" sx={{ marginTop: 1 }}>
                                <Typography variant="subtitle1">
                                    Activity 2: Loren Ipsum
                                </Typography>
                                <Typography variant="subtitle1">
                                    Total Score: 100
                                </Typography>
                            </Grid>
                            <Grid container justifyContent="space-between" sx={{ marginTop: 1 }}>
                                <Typography variant="subtitle1">
                                    neque poriodsadagagagahahabjkhkhkjashdkahdsa
                                </Typography>
                                <Typography variant="subtitle1">
                                    Status: Undone
                                </Typography>
                            </Grid>
                            <Grid container justifyContent="flex-end" sx={{ marginTop: 1 }}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                >
                                    Edit
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Classdrawer>
    )
}
