import React, { useState } from 'react';

import {
    Typography,
    Box,
    Grid,
    Avatar,
    TextField,
    Button
} from '@mui/material';

import Classdrawer from '../../classdrawer/ClassDrawer';

const style = {
    gridcontainer: {
        display: "flex",
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        marginTop: 5,
        padding: 2,
        maxWidth: 1000
    },
    main: {
        display: "flex",
        cursor: "pointer",
        alignItems: "center",
    },
    textAreaStyle: {
        height: 10000
    }
}

export default function ClassAnnouncement() {

    const [showInput, setShowInput] = useState(false);

    const [inputValue, setInputValue] = useState('');

    return (
        <Classdrawer>
            <Box component={Grid} container justifyContent="center" sx={{ paddingTop: 5 }}>
                <Grid container sx={style.gridcontainer}>
                    {showInput ? (
                        <Grid container>
                            <TextField
                                variant="filled"
                                multiline
                                label="Announce Something to the class"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                fullWidth
                                inputProps={{
                                    sx: style.textAreaStyle
                              }}
                            />
                        </Grid>
                    ) : (
                        <Grid container sx={style.main}
                            onClick={() => setShowInput(true)}
                        >
                            <Avatar />
                            <Typography style={{ paddingLeft: 20 }}>Announce Something To Class</Typography>
                        </Grid>
                    )}
                </Grid>
                <Grid container justifyContent="center" sx={{ marginTop: 4, borderRadius: 30 }}>
                    <Button
                        variant="contained"
                        color="primary"
                    >Announce</Button>
                </Grid>
            </Box>
        </Classdrawer>
    )
}
