import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const ContentText = () => {
    return (
        <div className="content-text" style={{textAlign: 'left'}}>
            <Typography variant="h1">Maintenance and Repair of Transformer</Typography>
            <br/>
            <Typography variant="p">Power System Services & L.T Switchgear Maintenance of L.T.B.D & A.C.B.S</Typography>
            <br/>
            <Box sx={{display: 'flex', gap: '1rem', marginY: '1rem'}}>
                <Button variant="outlined" sx={{borderRadius: '8px', bgcolor: "#fff"}} size="large"><a
                    href={"#about-us"} style={{textDecoration: "none", color: '#F39946'}}>About Us</a></Button>
                <Button variant="contained" sx={{borderRadius: '8px', color: 'rgba(255,255,255,0.91)'}} size="large"><a
                    href={"#business"} style={{textDecoration: "none", color: 'rgba(255,255,255,0.91)'}}>View
                    Services
                </a></Button>
            </Box>
        </div>
    );
};

export default ContentText;
