import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { usePromiseTracker } from "react-promise-tracker";


export default function LoadingSpinner() {
    const { promiseInProgress } = usePromiseTracker();
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
        setOpen(true);
    }, []);

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div>
            {promiseInProgress === true && (<Backdrop
                sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
                open={open}
                onClick={handleClose}
            >
                <CircularProgress color="inherit" />
            </Backdrop>)}
        </div>
    );
}
