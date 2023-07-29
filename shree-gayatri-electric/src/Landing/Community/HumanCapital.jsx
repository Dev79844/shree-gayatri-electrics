import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import People from "./People.jsx";

const HumanCapital = () => {
    const divStyle = {
        borderRadius: "4px",
        borderLeft: "8px solid black",
        paddingLeft: "1rem",
        marginLeft: "1rem",
        position: "relative", // Add position relative to the div with background
        zIndex: 1, // Set a higher z-index for the div with background1 to overlap background2
    };


    return (
        <>
            <div
                style={{
                    height: "auto",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundSize: "cover", // Set the background size to cover
                    paddingTop: "5rem",
                    paddingBottom: "6rem"
                }}
                className={"human-capital-bg"}
            >

                    <Grid container spacing={2} mb={7}>
                        <Grid item sm={12} md={6}>
                            <div className={"human-capital"}>
                                <div style={divStyle}>
                                    <Typography variant={"h3"} textAlign={"left"} fontSize={"3.5rem"}>
                                        Our Capital is <br/>
                                        HUMAN
                                    </Typography>
                                </div>
                            </div>
                        </Grid>

                        <Grid item sm={12} md={6}>
                            <div className={"human-capital"}>
                            <Typography variant={"body1"} textAlign={"left"} pt={2} fontSize={"1.5rem"}>
                                Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
                                interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per
                                conubia
                                nostra, per inceptos himenaeos.
                            </Typography>
                            </div>
                        </Grid>

                        <Grid item sm={12} mt={"5rem"} style={{padding: "0 2rem", overflow: "auto"}}>
                            <People/>
                        </Grid>
                    </Grid>

            </div>
        </>
    );
};

export default HumanCapital;
