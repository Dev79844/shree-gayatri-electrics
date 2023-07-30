import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import People from "./People.jsx";
import styled from "styled-components";



const DivStyle = styled.div`
  border-radius: 4px;
  border-left: 8px solid black;
  padding-left: 1rem;
  margin-left: 1rem;
  position: relative; // Add position relative to the div with background
  z-index: 1; // Set a higher z-index for the div with background1 to overlap background2
  & > h3{
    font-size: 3.5rem;
  }
  @media (max-width: 900px) {
    & > h3 {
      font-size: 2.5rem;
    }
  }
`;

const HumanCapital = () => {



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
                                <DivStyle>
                                    <Typography variant={"h3"} textAlign={"left"}>
                                        Our Management <br/> Team
                                    </Typography>
                                </DivStyle>
                            </div>
                        </Grid>

                        <Grid item sm={12} md={6}>
                            <div className={"human-capital"}>
                            {/*<Typography variant={"body1"} textAlign={"left"} pt={2} fontSize={"1.5rem"}>*/}
                            {/*    Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit*/}
                            {/*    interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per*/}
                            {/*    conubia*/}
                            {/*    nostra, per inceptos himenaeos.*/}
                            {/*</Typography>*/}
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
