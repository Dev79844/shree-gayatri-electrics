import Typography from '@mui/material/Typography';
import MiniCards from "./MiniCards.jsx";
import styled from "styled-components";


const ServiceContainer = styled.div`
  align-items: center;
  background-size: cover;
  padding-top: 14rem;
  height: auto;
  @media (max-width: 900px) {
    padding-top: 7rem;
  }
`

const Service = () => {
    return (
        <ServiceContainer>
            <Typography variant="h3" component="span" sx={{ color: 'black' }} fontSize={"4rem"}>
                Our{' '}
            </Typography>
            <Typography variant="h3" component="span" sx={{ color: '#0D4497' }} fontSize={"4rem"}>
                Services
            </Typography>

            <Typography className={'service-text'} fontSize={"1.5rem"}>Shree Gayatri Electric Corporation has been a trusted name as government contractors specializing in the maintenance and repair of Air Circuit Breakers (ACBs)</Typography>
            <MiniCards />
        </ServiceContainer>
    );
};

export default Service;
