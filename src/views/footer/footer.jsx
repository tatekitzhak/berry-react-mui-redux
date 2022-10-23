import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '@/features/counterSlice';
import { set_menu, menu_open, set_font_family, set_border_radius } from '@/features/customizationCreateSlice';
// material-ui
import { Grid, Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import EarningCard from '@/views/dashboard/Default/EarningCard';

// ==============================|| SAMPLE PAGE ||============================== //

function Footer() {
    const item = {
        "id": "tabler-icons",
        "title": "Tabler Icons",
        "type": "item",
        "url": "/icons/tabler-icons",
        "breadcrumbs": false
    }
    const newFont = `'Inter', sans-serif`;
    const count = useSelector((state) => state.counter.value)
    // Handle left drawer
    const leftDrawerOpened = useSelector((state) => state.customization.opened);
    const dispatch = useDispatch()
    useEffect(() => {
        
    });
    return (
        <MainCard title="Sample Card">
            <Typography variant="body2">
                Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna alissa. Ut enif
                ad minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal. Duos aube grue dolor in
                reprehended in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean cuspidate non president, sunk in culpa
                qui officiate descent molls anim id est labours.
            </Typography>
            <Grid container direction="column"
                  alignItems="center"
                  justifyContent="center">

                <Grid item xs={3}>
                    <EarningCard></EarningCard>
                    <div>
                        <div>
                            <button
                                aria-label="Increment value"
                                onClick={() => dispatch(increment())}
                            >
                                Increment
                            </button>

                            <button
                                aria-label="Decrement value"
                                onClick={() => dispatch(decrement())}
                            >
                                Decrement
                            </button>
                            <button onClick={() => dispatch(set_menu(leftDrawerOpened ))}>
                                dispatch set_menu
                            </button>
                            <button onClick={() => dispatch(menu_open( item))}>
                                dispatch menu_open
                            </button>
                            <button onClick={() => dispatch(set_font_family( newFont))}>
                                dispatch set_font_family
                            </button>
                            <button onClick={() => dispatch(set_border_radius( 12))}>
                                dispatch set_font_family
                            </button>
                        </div>
                        <span>{count}</span>
                    </div>
                </Grid>
            </Grid>
        </MainCard>
    )
};

export default Footer;
