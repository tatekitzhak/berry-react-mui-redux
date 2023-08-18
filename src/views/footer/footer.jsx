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

                    Ask Media Dev:
    About
    Contact

    Legal:
    Accessibility
    Terms of Use
    Privacy Policy
    Copyright Policy
                </Grid>
            </Grid>
        </MainCard>
    )
};

export default Footer;
