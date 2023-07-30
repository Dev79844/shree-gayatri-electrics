import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import WorkCards from "./WorkCards.jsx";

const OurWork = () => {

    const divStyle = {
        borderRadius: "4px",
        borderLeft: "8px solid white",
        paddingLeft: "1rem",
        marginLeft: "1rem"
    };

    return (
        <div className="about-container">
            <div className="about-content">
                <Grid container spacing={3}>
                    <Grid item sm={12} md={6} >
                        <div style={divStyle}>
                            <Typography variant={"h3"} textAlign={"left"} fontSize={"3rem"}>
                                Let’s See A Selection Of <br /> Our Work
                            </Typography>
                        </div>
                    </Grid>

                    <Grid item sm={12} md={6}>
                        <Typography variant={"body1"} textAlign={"left"} pt={2} fontSize={"1.5rem"}>
                            SGEC has operations in more than 20 cities, take a glance at our top 3 sites!
                        </Typography>
                    </Grid>
                </Grid>

                <WorkCards />

            </div>
        </div>
    );
};

export default OurWork;
