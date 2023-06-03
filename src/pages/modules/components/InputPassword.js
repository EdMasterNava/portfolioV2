import * as React from 'react';
import { 
    IconButton, 
    FilledInput, 
    InputAdornment,
} from '@mui/material';

import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';

import { useToggle } from './hooks/useToggle';


const InputPassword = (props) => {
    const [showPassword, toggle] = useToggle(false);

    return (
        <FilledInput
            {...props}
            type={showPassword ? 'text' : 'password'}
            sx={{color: 'black'}}
            endAdornment={
                <InputAdornment position="end">
                    <IconButton edge="end" onClick={toggle}>
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                </InputAdornment>
            }
        />
    );
};

export default React.memo(InputPassword);