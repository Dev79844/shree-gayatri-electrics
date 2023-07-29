import Typography from "@mui/material/Typography";
import {Grid, useMediaQuery} from "@mui/material";
import footer1 from "../../assets/Images/footer1.png"
import footer2 from "../../assets/Images/footer2.png"
import footer3 from "../../assets/Images/footer3.png"
import footerUnderLine from "../../assets/Images/footerUnderLine.png"
import CallIcon from '@mui/icons-material/Call';


import styled from 'styled-components';

const Image = styled.img`
  padding: 4rem 1rem;
  max-width: ${({maxWidth}) => maxWidth};
  width: ${({width}) => width};

  @media (max-width: 600px) {
    padding: 1rem 1rem;
    max-width: 100px;
    width: 100px;
  }
`;

const Footer = () => {

    return (
        <div style={{
            color: "#fff", backgroundSize: "cover", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid red"
        }}
                 className="footer-container"
        >

            <div className={"footer-icons"}>
                <divv style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    border: "2px solid blue",
                    overflow: "auto",
                    paddingX: "2rem"// edit
                }}>
                    <Image src={footer1} alt="Certified"/>
                    <Image src={footer2} alt="Certified"/>
                    <Image src={footer3} alt="Certified"/>
                </divv>

                <Grid container maxWidth={"100%"} width={"100vw"} border={"2px solid red"}>
                    <Grid item xs={6} md={3}>
                        <Typography variant={"h4"} mb={2}>Contact Us</Typography>
                        <img src={footerUnderLine} alt="Footer Nav" align={"center"} style={{marginRight: "6rem"}}/>
                        <br/>
                        <div style={{display: "flex", justifyContent: "center", padding: "1rem"}}>
                            <Typography variant={"body1"}> Lorem ipsum.</Typography>
                        </div>
                        <div style={{display: "flex", justifyContent: "center", padding: "0rem 1rem"}}>
                            <Typography variant={"body1"}> Lorem ipsum.</Typography>
                        </div>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Typography variant={"h4"} mb={2}>Contact Us</Typography>
                        <img src={footerUnderLine} alt="Footer Nav" align={"center"} style={{marginRight: "6rem"}}/>
                        <br/>
                        <div style={{display: "flex", justifyContent: "center", padding: "1rem"}}>
                            <CallIcon/><Typography variant={"body1"}>+91 1234569670</Typography>
                        </div>
                        <div style={{display: "flex", justifyContent: "center", padding: "0rem 1rem"}}>
                            <CallIcon/> <Typography variant={"body1"}>+91 1234569670</Typography>
                        </div>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Typography variant={"h4"} mb={2}>Contact Us</Typography>
                        <img src={footerUnderLine} alt="Footer Nav" align={"center"} style={{marginRight: "6rem"}}/>
                        <br/>
                        <div style={{display: "flex", justifyContent: "center", padding: "1rem"}}>
                            <Typography variant={"body1"}>Lorem ipsum.</Typography>
                        </div>
                        <div style={{display: "flex", justifyContent: "center", padding: "0rem 1rem"}}>
                            <Typography variant={"body1"}>Lorem ipsum.</Typography>
                        </div>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Typography variant={"h4"} mb={2}>Contact Us</Typography>
                        <img src={footerUnderLine} alt="Footer Nav" align={"center"} style={{marginRight: "6rem"}}/>
                        <br/>
                        <div style={{display: "flex", justifyContent: "center", padding: "1rem"}}>
                            <Typography variant={"body1"}>Lorem ipsum.</Typography>
                        </div>
                        <div style={{display: "flex", justifyContent: "center", padding: "0rem 1rem"}}>
                            <Typography variant={"body1"}>Lorem ipsum.</Typography>
                        </div>
                    </Grid>

                </Grid>
            </div>

        </div>);
};

export default Footer;
