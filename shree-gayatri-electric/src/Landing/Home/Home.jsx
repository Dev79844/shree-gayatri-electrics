import { Grid } from "@mui/material";
import ContentText from "./ContentText.jsx";
import Graphics from "./Graphics.jsx";
import styled from "styled-components";


const ParentDiv = styled.div`
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, #ffffff 80%, #F4F4F4 40%);
  //border: 2px solid red;
  padding-top: 20vh;
  overflow: hidden;
  padding-bottom: 5vh;
  @media (max-width: 900px){
    overflow: hidden;
    padding-top: 23vh;
  }
`;


const Home = () => {
    return (
        <ParentDiv>
            <Grid container spacing={2}>
                <Grid item sm={12} md={6} >
                    <ContentText />
                </Grid>
                <Grid item sm={12} md={6} >
                    <div style={{
                        display: "flex",
                        // border: "2px solid red",
                        paddingLeft: '6vw',
                        transform: 'translateY(-15vh)',
                    }}>
                        <Graphics/>
                    </div>
                </Grid>
            </Grid>
        </ParentDiv>
    );
};

export default Home;
