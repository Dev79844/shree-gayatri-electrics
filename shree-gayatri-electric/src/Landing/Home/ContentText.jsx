import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const ContentText = () => {
    return (
        <div className="content-text" style={{ textAlign: 'left' }}>
            <Typography variant="h1">TRANSFORMER <br/> COMPANY</Typography>
            <br/>
            <Typography variant="p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur ea labore minima nihil obcaecati sequi veniam! Architecto impedit nesciunt quasi.</Typography>
            <br/>
            <Box sx={{ display: 'flex', gap: '1rem', marginY: '1rem' }}>
                <Button variant="outlined" sx={{ borderRadius: '8px', bgcolor: "#fff"}} size="large">About Us</Button>
                <Button variant="contained" sx={{ borderRadius: '8px', color: 'rgba(255,255,255,0.91)'}} size="large">View Product</Button>
            </Box>
        </div>
    );
};

export default ContentText;
