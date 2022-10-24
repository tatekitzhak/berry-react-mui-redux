import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '@/features/counterSlice';
import { set_menu, menu_open, set_font_family, set_border_radius } from '@/features/customizationCreateSlice';
import { getUsers } from "@/features/usersSlice";
import { fetchTopics } from "@/features/topics/topicsSlice";
import { incrementFetch, fetchData } from "@/features/fetchDataSlice";
// material-ui
import { Grid, Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import EarningCard from '@/views/dashboard/Default/EarningCard';

// ==============================|| SAMPLE PAGE ||============================== //

function Footer() {
    const dispatch = useDispatch()
    const { users } = useSelector((state) => state.users);
    const count = useSelector((state) => state.counter.value)

    // data fetch
    const dataFetching = useSelector((state) => state.topicsSlice);
    // Handle left drawer
    const leftDrawerOpened = useSelector((state) => state.customization.opened);

    const item = {
        "id": "tabler-icons",
        "title": "Tabler Icons",
        "type": "item",
        "url": "/icons/tabler-icons",
        "breadcrumbs": false
    }
    
    const newFont = `'Inter', sans-serif`;
    
    useEffect(() => {
        dispatch(getUsers(1234));
      }, [dispatch]);
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
                        <h1>Welcome to React Redux Toolkit Crash Course</h1>
                            {users && users.map((user, i) => <h1 key={i}>{user.name}</h1>)}
                    </div>

                    <div>
                       
                       <button onClick={() => dispatch(fetchTopics(3))}>
                        Fetch Data
                        </button>
                        <br/>
                        <button onClick={() => dispatch(fetchData())}>
                        incrementFetch
                        </button>
                    </div>
                </Grid>
            </Grid>
        </MainCard>
    )
};

export default Footer;
