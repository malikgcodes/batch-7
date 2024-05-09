import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const drawerWidth = 240;

// Styled components
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    ...(open && {
      overflowX: 'hidden',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    }),
  })
);

// Menu items
const menuItems = [
  {
    text: 'Dashboard Overview',
    icon: <InboxIcon />,
    description: 'View overall statistics',
    subMenu: [
      { text: 'Sales summary', component: () => <div>Sales summary component</div> },
      { text: 'Total revenue', component: () => <div>Total revenue component</div> },
      { text: 'Number of orders', component: () => <div>Number of orders component</div> },
      { text: 'Number of customers', component: () => <div>Number of customers component</div> },
      { text: 'Top-selling products', component: () => <div>Top-selling products component</div> },
    ],
  },
  {
    text: 'Orders Management',
    icon: <MailIcon />,
    description: 'Manage orders and statuses',
    subMenu: [
      { text: 'List of orders', component: () => <div>List of orders component</div> },
      { text: 'Order details', component: () => <div>Order details component</div> },
      { text: 'Order status update', component: () => <div>Order status update component</div> },
      { text: 'Order filtering', component: () => <div>Order filtering component</div> },
      { text: 'Order search', component: () => <div>Order search component</div> },
    ],
  },
  {
    text: 'Products Management',
    icon: <InboxIcon />,
    description: 'Manage products and inventory',
    subMenu: [
      { text: 'List of products', component: () => <div>List of products component</div> },
      { text: 'Product details', component: () => <div>Product details component</div> },
      { text: 'Add/edit/delete products', component: () => <div>Add/edit/delete products component</div> },
      { text: 'Product categories', component: () => <div>Product categories component</div> },
      { text: 'Inventory management', component: () => <div>Inventory management component</div> },
      { text: 'Product search', component: () => <div>Product search component</div> },
    ],
  },
];

export default function Sidebar() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [subMenuComponent, setSubMenuComponent] = useState(null);

  // Handle opening the drawer
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  // Handle closing the drawer
  const handleDrawerClose = () => {
    setOpen(false);
  };

  // Handle clicking on a menu item
  const handleMenuClick = (index) => {
    setSelectedMenu(index);
    setOpenSubMenu(openSubMenu === index ? null : index);
    setSubMenuComponent(null); // Close any currently opened sub-menu component
  };

  // Handle clicking on a sub-menu item
  const handleSubMenuClick = (index, subIndex) => {
    setSelectedMenu(index);
    setOpenSubMenu(index);
    setSubMenuComponent(menuItems[index].subMenu[subIndex].component());
  };
  

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 2,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Mini variant drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {menuItems.map((item, index) => (
            <div key={index}>
   <ListItem
  button
  selected={selectedMenu === index}
  onClick={() => handleMenuClick(index)}
>
  <ListItemIcon>{item.icon}</ListItemIcon>
  <ListItemText primary={item.text} secondary={item.description} />
  {openSubMenu === index ? <ExpandLess /> : <ExpandMore />}
</ListItem>


              <Collapse in={openSubMenu === index} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.subMenu.map((subItem, subIndex) => (
                    <ListItem
                      key={subIndex}
                      button
                      sx={{ pl: 4 }}
                      onClick={() => handleSubMenuClick(index, subIndex)}
                    >
                      <ListItemText primary={subItem.text} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
              <Divider />
            </div>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {subMenuComponent}
      </Box>
    </Box>
  );
}