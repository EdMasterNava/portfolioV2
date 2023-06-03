import * as React from 'react';
import { 
    Box,
    Button,
    FormControl,
    Grid,
    InputLabel,
    Paper,
    Typography 
} from '@mui/material';
import InputPassword from './modules/components/InputPassword';

function Home() {
    return (
        <>
            <Box sx={{height: 500}}>
                <Grid container sx={{height: '100%'}}>
                    <Grid 
                        item 
                        xs={6} 
                        sx={{
                            height: '100%', 
                            display: 'flex', 
                            flexDirection: 'column', 
                            justifyContent: 'center', 
                            alignItems: 'center'
                        }}
                    >
                        <Typography variant='h1' sx={{mb: 2}}>
                            Typography
                        </Typography>
                        <Box 
                            component={Paper} 
                            sx={{
                                bgcolor: 'darkgoldenrod', 
                                display: 'flex', 
                                flexDirection: 'column', 
                                justifyContent: 'center', 
                                alignItems: 'center', 
                                minWidth: 350, 
                                borderRadius: 10,
                                py: 2,
                                px: 5
                            }}
                        >
                            <Typography variant="h1">
                                Heading 1
                            </Typography>
                            <Typography variant="h2">
                                Heading 2
                            </Typography>
                            <Typography variant="h3">
                                Heading 3
                            </Typography>
                            <Typography variant="h4">
                                Heading 4
                            </Typography>
                            <Typography variant="h5">
                                Heading 5
                            </Typography>
                            <Typography variant="h6">
                                Heading 6
                            </Typography>
                            <Typography variant="subtitle1">
                                Sub Title 1
                            </Typography>
                            <Typography variant="subtitle2">
                                Sub Title 2
                            </Typography>
                            <Typography variant="body1">
                                Body 1
                            </Typography>
                            <Typography variant="body2">
                                Body 2
                            </Typography>
                            <Typography variant="caption">
                                Caption
                            </Typography>    
                        </Box>
                    </Grid>
                    <Grid 
                        item 
                        xs={6} 
                        sx={{
                            height: '100%', 
                            display: 'flex', 
                            flexDirection: 'column', 
                            justifyContent: 'center', 
                            alignItems: 'center'
                        }}
                    >
                        <Typography variant='h1'>
                            Input Password Component
                        </Typography>
                        <Box
                            component={Paper} 
                            sx={{
                                bgcolor: 'darkcyan', 
                                display: 'flex', 
                                flexDirection: 'column', 
                                justifyContent: 'center', 
                                alignItems: 'center', 
                                minWidth: 350, 
                                borderRadius: 10,
                                py: 2,
                                px: 10
                            }}
                        >
                            <FormControl variant='filled' fullWidth sx={{bgcolor: 'whitesmoke', borderRadius: '5px 5px 0 0'}}>
                                <InputLabel>
                                    Input Password
                                </InputLabel>
                                <InputPassword />
                            </FormControl>    
                        </Box>
                        <Typography variant='h1'>
                            Button Component
                        </Typography>
                        <Box
                            component={Paper} 
                            sx={{
                                bgcolor: 'darkseagreen', 
                                display: 'flex', 
                                flexDirection: 'column', 
                                justifyContent: 'center', 
                                alignItems: 'center', 
                                minWidth: 350, 
                                borderRadius: 10,
                                py: 2,
                                px: 10
                            }}
                        >
                            <Button variant='contained'>
                                <Typography>
                                    Press
                                </Typography>
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default Home;