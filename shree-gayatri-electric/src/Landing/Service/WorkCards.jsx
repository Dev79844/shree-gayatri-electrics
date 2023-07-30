import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea, Grid} from '@mui/material';
import workedAtImage1 from '../../assets/Images/workedAtImage1.jpeg'
import workedAtImage2 from '../../assets/Images/workedAtImage2.png'
import workedAtImage3 from '../../assets/Images/workedAtImage3.jpeg'


export default function WorkCards() {
    return (
        <>
            <Grid container spacing={10} mt={10} px={6}>
                <Grid item sm={12} md={4}>

                    <CardActionArea sx={{
                        borderRadius: '16px',
                        backgroundColor: "#fff",
                        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                        transition: 'box-shadow 0.3s, background-color 0.3s, transform 0.3s',
                        '&:hover': {
                            boxShadow: '0px 0px 4px #fff',
                            transform: 'translateY(-10px)'
                        }
                    }}>
                        <CardMedia
                            component="img"
                            height="auto"
                            image={workedAtImage1}
                            alt="green iguana"
                            sx={{borderRadius: "16px"}}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" fontSize={"3rem"} component="div" color="text.secondary">
                                Vapi
                            </Typography>
                            <Typography variant="h5" color="text.secondary">
                                Over 20 years, we ensured seamless GEB transformer operation in Vapi District
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Grid>

                <Grid item sm={12} md={4}>

                    <CardActionArea sx={{
                        borderRadius: '16px',
                        backgroundColor: "#fff",
                        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                        transition: 'box-shadow 0.3s, background-color 0.3s, transform 0.3s',
                        '&:hover': {
                            boxShadow: '0px 0px 4px #fff',
                            transform: 'translateY(-10px)'
                        }
                    }}>
                        <CardMedia
                            component="img"
                            height="auto"

                            image={workedAtImage2}
                            alt="green iguana"
                            // borderRadius= "5%"
                            sx={{ borderRadius: "16px" }}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" fontSize={"3rem"} component="div" color="text.secondary">
                                Godhra
                            </Typography>
                            <Typography variant="h5" color="text.secondary">
                                Over 12 years, we ensured seamless GEB transformer operation in Godhra District
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Grid>

                <Grid item sm={12} md={4}>

                    <CardActionArea sx={{
                        borderRadius: '16px',
                        backgroundColor: "#fff",
                        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                        transition: 'box-shadow 0.3s, background-color 0.3s, transform 0.3s',
                        '&:hover': {
                            boxShadow: '0px 0px 4px #fff',
                            transform: 'translateY(-10px)'
                        }
                    }}>
                        <CardMedia
                            component="img"
                            height="auto"
                            image={workedAtImage3}
                            alt="green iguana"
                            sx={{ borderRadius: "16px" }}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" fontSize={"3rem"} component="div" color="text.secondary">
                                Valsad
                            </Typography>
                            <Typography variant="h5" color="text.secondary">
                                Over 15 years, we ensured seamless GEB transformer operation in Vapi District
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Grid>
            </Grid>
        </>
    );
}
