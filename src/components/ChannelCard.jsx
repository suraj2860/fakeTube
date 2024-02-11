import { Typography, Box, CardMedia, CardContent } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";


const ChannelCard = ({ channel, marginTop }) => (
    <Box
        sx={{
            boxShadow: 'none',
            borderRadius: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: { xs: '356px', md: '430px' },
            height: '326px',
            margin: 'auto',
            marginTop
        }}
    >
        <Link to={`/channel/${channel?.id?.channelId}`}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' }}>
                <CardMedia image={channel?.snippet?.thumbnails?.high?.url || demoProfilePicture }
                    alt={channel?.snippet?.title}
                    sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}
                />
                <Typography variant="h6">
                    {channel?.snippet?.title}
                    <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} /> 
                </Typography>
                { channel?.statistics?.subscriberCount && (
                    <Typography>
                        {parseInt(channel?.statistics?.subscriberCount).toLocaleString()} Subscribers
                    </Typography>
                )}
            </CardContent>
        </Link>
    </Box>
)

export default ChannelCard