import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import IosShareIcon from '@mui/icons-material/IosShare';
import RecommendIcon from '@mui/icons-material/Recommend';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { Box, Divider, Typography } from '@mui/material';

import Button from '../button';

interface FeedCardProps {
  title: string;
  body: string;
  reactions: number;
}

const FeedCard = ({ title, body, reactions }: FeedCardProps) => (
  <Box
    width='60%'
    display='flex'
    flexDirection='column'
    textAlign='left'
    bgcolor='white'
    marginBottom={1}
    borderRadius={4}
    padding={2}
  >
    <Typography variant='h5' fontWeight={500} gutterBottom>
      {title}
    </Typography>
    <Typography>{body}</Typography>
    <Box display='flex' paddingY={1}>
      <RecommendIcon
        fontSize='medium'
        color='primary'
        sx={{ paddingRight: '3px' }}
      />
      {reactions}
    </Box>
    <Divider />
    <Box display='flex' marginTop='4px'>
      <Button text='Like' icon={<ThumbUpIcon />} />
      <Button text='Comment' icon={<ChatBubbleOutlineOutlinedIcon />} />
      <Button text='Share' icon={<IosShareIcon />} />
    </Box>
  </Box>
);

export default FeedCard;
