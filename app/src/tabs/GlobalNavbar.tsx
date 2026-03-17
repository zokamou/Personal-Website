import { AppBar, Toolbar, IconButton, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function GlobalNavbar({ filled = false }: { filled?: boolean }) {
  const navigate = useNavigate();

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
            onClick={() => navigate('/')}
            sx={{
              p: 0,
              '& img': {
                height: 60,
                transition: 'transform 0.2s ease',
                scale: 1.5,
              },
              '&:hover img': { transform: 'scale(1.05)' },
            }}
          >
            <img src="/assets/HomeButton.png" alt="Home" />
          </IconButton>
          <IconButton
            onClick={() => navigate('/about')}
            sx={{
              p: 0,
              '& img': {
                height: 60,
                transition: 'transform 0.2s ease',
                scale: 1.5,
              },
              '&:hover img': { transform: 'scale(1.05)' },
            }}
          >
            <img src="/assets/AboutButton.png" alt="About" />
          </IconButton>

          <IconButton
            onClick={() => navigate('/web')}
            sx={{
              p: 0,
              '& img': {
                height: 60,
                transition: 'transform 0.2s ease',
                scale: 1.5,
              },
              '&:hover img': { transform: 'scale(1.05)' },
            }}
          >
            <img src="/assets/WebButton.png" alt="Web" />
          </IconButton>

          <IconButton
            onClick={() => navigate('/games')}
            sx={{
              p: 0,
              '& img': {
                height: 60,
                transition: 'transform 0.2s ease',
                scale: 1.5,
              },
              '&:hover img': { transform: 'scale(1.05)' },
            }}
          >
            <img src="/assets/GamesButton.png" alt="Games" />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
