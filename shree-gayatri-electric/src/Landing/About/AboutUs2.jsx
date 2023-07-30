import styled from "styled-components";
import DigitalTransformer from "../../assets/Images/digitaltransformator-keyvisual-rgb-removebg-preview 1.png";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

const AboutUsContainer = styled.div`
  height: auto;
  padding: 10rem 0 5rem 0;
  background-color: rgba(0,0,0,255);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 900px) {
    height: auto;
    padding-top: 5rem;
  }
`;

const Heading = styled.div`
  align-items: start;
  padding-left: 8em;

  @media (max-width: 900px) {
    padding-left: 1rem;
    margin-bottom: 2rem;
  }

  & > div {
    border-radius: 4px;
    border-left: 8px solid white;
    padding-left: 2rem;
    margin-left: 1rem;
    align-items: start;
  }
`;

const ImageWrapper = styled.div`
  max-width: 99%;
  height: auto;
  transform: translate(0, 0);

  @media (min-width: 900px) {
    transform: translate(100px, -100px);
  }
`;

const GridContainers = styled.div`
  padding: 0 6rem 2rem 9rem;
  @media (max-width: 900px) {
    padding: 2rem;
  }
`;

const AboutUs2 = () => {
    return (
        <>
            <AboutUsContainer>
                <div style={{ alignSelf: "start" }}>
                    <Heading>
                        <div>
                            <Typography variant={"h3"} textAlign={"left"} fontSize={"4rem"}>
                                About Us
                            </Typography>
                        </div>
                    </Heading>
                </div>

                <Grid container alignItems={"center"}>
                    <Grid item xs={12} md={6} >
                        <GridContainers>
                            <Typography variant={"h4"} textAlign={"left"} fontSize={"3rem"}>
                                Foundation
                            </Typography>
                            <Typography variant={"body1"} textAlign={"left"} fontSize={"1.5rem"} color={"rgba(161,161,161,0.88)"}>
                                Founded in 1995 by the late Mr. Balubhai Rajabhai Gajera, a highly skilled Electrical Engineering graduate, Shree Gayatri Electric Corporation has made significant contributions to the industry. Operating in more than 20 cities across Gujarat, the company has become a go-to solution provider for electrical needs in the region
                            </Typography>
                        </GridContainers>
                    </Grid>
                    <Grid item xs={12} md={6} style={{ overflowX: "hidden"}}>
                        <ImageWrapper>
                            <img
                                src={DigitalTransformer}
                                alt="DigitalTransformer"
                                style={{ maxWidth: "100%", height: "auto" }}
                            />
                        </ImageWrapper>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <GridContainers>
                            <Typography variant={"h4"} textAlign={"left"} fontSize={"3rem"}>
                                Area of expertise
                            </Typography>
                            <Typography variant={"body1"} textAlign={"left"} fontSize={"1.5rem"} color={"rgba(161,161,161,0.88)"}>
                                The Company's expertise lies in the restoration of ACBs. When faulty or damaged ACBs arrive from manufacturers, Shree Gayatri Electric Corporation revitalizes them to perform within 20% of the cost of a new ACB. By employing advanced techniques and utilizing high-quality components, the company effectively provides cost-effective solutions to its customers
                            </Typography>
                        </GridContainers>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <GridContainers>
                            <Typography variant={"h4"} textAlign={"left"} fontSize={"3rem"}>
                                Our commitment
                            </Typography>
                            <Typography variant={"body1"} textAlign={"left"} fontSize={"1.5rem"} color={"rgba(161,161,161,0.88)"}>
                                Shree Gayatri Electric Corporation's commitment to excellence, combined with their wide-reaching presence, has earned them a reputable standing in the industry. Clients can rely on their expertise to ensure uninterrupted electrical performance and maximize productivity
                            </Typography>
                        </GridContainers>
                    </Grid>
                </Grid>
            </AboutUsContainer>
        </>
    );
};

export default AboutUs2;
