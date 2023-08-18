// material-ui
import { Grid, Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import EarningCard from '@/views/dashboard/Default/EarningCard';

// ==============================|| SAMPLE PAGE ||============================== //

function Footer(params) {

    return (
        <MainCard title={params.params}>
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
                    <Grid item sx={{ mb: 1.25 }}>

                        <Typography>Ask Media Dev:</Typography>
                        <Typography>About</Typography>
                        <Typography>Contact</Typography>

                    </Grid>
                    <Grid item sx={{ mb: 1.25 }}>

                        <Typography>Legal:</Typography>
                        <Typography>Accessibility</Typography>
                        <Typography>Terms of Use</Typography>
                        <Typography>Privacy Policy</Typography>
                        <Typography>Copyright Policyt</Typography>

                    </Grid>
                </Grid>
            </Grid>
            <Typography>© 2023 askmediadev.com </Typography>
            <Typography> The project is currently in public beta</Typography>
        </MainCard>
    )
};

export default Footer;
