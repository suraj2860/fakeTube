import { Typography } from "@mui/material";
import { Stack, Box } from "@mui/system";
import { VideoCard, ChannelCard } from './';

const Videos = ({videos, direction}) => {
    //console.log(videos);

    if(!videos) return 'Loading....';

  return (
    <Stack direction={direction || 'row'} flexWrap='wrap' justifyContent='start' gap={1.5} >
        {videos.map((item, idx) => (
            <Box key={idx}>
                {item.id.videoId && <VideoCard video={item} /> }
                {item.id.channelId && <ChannelCard channel={item} /> }
            </Box>
        ))}
    </Stack>
  )
}

export default Videos