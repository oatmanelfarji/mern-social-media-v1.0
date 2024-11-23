import * as React from 'react';
import { 
    IconButton,
    Avatar,
    Menu,
    MenuItem,
    Badge,
    styled,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import { 
    Logout,
    Person,
    Help
} from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import { setLogout } from "state";


const AvatarMenu = () => {
  const { user } = useSelector((state) => state.authReducer);
  const Fullname = `${user.firstName} ${user.lastName}`;
  const PicturePath = user.picturePath;
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 3s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));

  return (
    <div>
      <IconButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant="dot"
        >
            <Avatar alt={Fullname} src={PicturePath} />
        </StyledBadge>
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon><Person /></ListItemIcon>
          <ListItemText>Profile</ListItemText> 
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon><Help /></ListItemIcon>
          <ListItemText>Help</ListItemText> 
        </MenuItem>
        <MenuItem onClick={ () => dispatch(setLogout()) }>
          <ListItemIcon><Logout /></ListItemIcon> 
          <ListItemText>Logout</ListItemText> 
        </MenuItem>
      </Menu>
    </div>
  );
}

export default AvatarMenu