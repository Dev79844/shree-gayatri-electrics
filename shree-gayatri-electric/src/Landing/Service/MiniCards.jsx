import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";
import Vector from '../../assets/Images/Vector.svg';

const cardContent1 = (
    <div style={{ color: 'black', transition: 'color 0.3s' }}>
        <CardContent>
            <img src={Vector} alt="Gear" style={{ margin: "1rem" }} />
            <Typography variant="h5" component="div" mb={4} fontSize={"2rem"}>
                Maintenance and repair of Air Circuit Breakers’s
            </Typography>
            {/*<Typography variant="body2" mb={4} fontSize={"1.3rem"}>*/}
            {/*    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet aspernatur cupiditate ea, nihil*/}
            {/*    placeat quaerat repudiandae unde velit veniam?*/}
            {/*</Typography>*/}
        </CardContent>
    </div>
);

const cardContent2 = (
    <div style={{ color: 'black', transition: 'color 0.3s' }}>
        <CardContent>
            <img src={Vector} alt="Gear" style={{ margin: "1rem" }} />
            <Typography variant="h5" component="div" mb={4} fontSize={"2rem"}>
                Seamless Functioning of Transformer’s associated with The Gujarat Electric Board
            </Typography>
            {/*<Typography variant="body2" mb={4} fontSize={"1.3rem"}>*/}
            {/*    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet aspernatur cupiditate ea, nihil*/}
            {/*    placeat quaerat repudiandae unde velit veniam?*/}
            {/*</Typography>*/}
        </CardContent>
    </div>
);

const cardContent3 = (
    <div style={{ color: 'black', transition: 'color 0.3s' }}>
        <CardContent>
            <img src={Vector} alt="Gear" style={{ margin: "1rem" }} />
            <Typography variant="h5" component="div" mb={4} fontSize={"2rem"}>
                Manufacture and Sell of transformer link
            </Typography>
            {/*<Typography variant="body2" mb={4} fontSize={"1.3rem"}>*/}
            {/*    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet aspernatur cupiditate ea, nihil*/}
            {/*    placeat quaerat repudiandae unde velit veniam?*/}
            {/*</Typography>*/}
        </CardContent>
    </div>
);

const createCard = (content) => (
    <Card variant="outlined"
          sx={{ borderRadius: '5%',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
              transition: 'box-shadow 0.3s, background-color 0.3s, transform 0.3s',
              height: "100%",
              display: "flex",
              alignItems: "center",
              '&:hover': { boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                  backgroundColor: 'orange',
                  transform: 'translateY(-10px)' } }}
    >
        {content}
    </Card>
);

export default function MiniCards() {
    return (
        <>
            <div className={'card-box'}>
                <Grid container spacing={3}>
                    <Grid item sm={12} md={4}>
                        {createCard(cardContent1)}
                    </Grid>
                    <Grid item sm={12} md={4}>
                        {createCard(cardContent2)}
                    </Grid>
                    <Grid item sm={12} md={4}>
                        {createCard(cardContent3)}
                    </Grid>
                </Grid>
            </div>
        </>
    );
}
