import { AppBar, Toolbar, IconButton, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function GlobalNavbar({ filled = false }: { filled?: boolean }) {
  const navigate = useNavigate();

  const iconButtonStyles = {
    p: 0,
    backgroundColor: 'transparent',
    '&:hover': { backgroundColor: 'transparent' },
    '& img': {
      height: 60,
      transition: 'transform 0.2s ease',
      scale: 1.5,
    },
    '&:hover img': { transform: 'scale(1.05)' },
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: filled ? '#511e43' : 'transparent',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'right', alignItems: 'center' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: 6,
            p: 2,
          }}
        >
          <IconButton
            disableRipple
            disableFocusRipple
            onClick={() => navigate('/')}
            sx={iconButtonStyles}
          >
            <img src="/assets/HomeButton.png" alt="Home" />
          </IconButton>
          <IconButton
            disableRipple
            disableFocusRipple
            onClick={() => navigate('/about')}
            sx={iconButtonStyles}
          >
            <img src="/assets/AboutButton.png" alt="About" />
          </IconButton>

          <IconButton
            disableRipple
            disableFocusRipple
            onClick={() => navigate('/web')}
            sx={iconButtonStyles}
          >
            <img src="/assets/WebButton.png" alt="Web" />
          </IconButton>

          <IconButton
            disableRipple
            disableFocusRipple
            onClick={() => navigate('/games')}
            sx={iconButtonStyles}
          >
            <img src="/assets/GamesButton.png" alt="Games" />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
