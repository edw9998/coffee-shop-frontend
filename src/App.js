import * as React from 'react';
import './App.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
function App() {
  return (
    <div className='App'>
      <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                Mr.X Coffee Shop
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </Box>
      <header className='App-header'>
        <Typography variant="h2" component="div" sx={{ flexGrow: 1 }}>
               Welcome to Mr.X Coffee Shop
        </Typography>
        <img src='https://asset.kompas.com/crops/4C69KtNeLU0m6ErZGAn_DOqi3IQ=/312x108:1608x972/750x500/data/photo/2021/03/05/6042200d4e753.jpg' style={{height:500, width:1000}}/>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
               Contact Info: +628168927073
        </Typography>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
               Open Hours: 10:00AM - 10:00PM
        </Typography>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
               Location: Jl. Pesanggrahan No.168H, RT.2/RW.6, Kembangan Sel., Kec. Kembangan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11610
        </Typography>
        <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
               Menu:
        </Typography>
        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
          {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              To Order Online Press The Button:
    </Typography>
    <Button variant='contained' color="primary">Order Online</Button>
    <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              To Vist Our Social Media:
    </Typography>
    <Button variant='contained' color="secondary">Visit Instagram</Button>
    <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
              WEBAPP GRAND OPENING PROMOTION BUY 1 GET 1 FREE FOR LIMITED TIME ONLY!!!
    </Typography>
    <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              Please Enter For Feedback:
    </Typography>
    <box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField color='primary' id="standard-basic" label="Feedback" variant="standard" />
    </box>
      </header>
    </div>

  );
}
const itemData = [
  {
    img: 'https://assets-pergikuliner.com/uploads/bootsy/image/14027/medium_medium_Caramel_Macchiato__www.allfoodsrecipes.com_.jpg',
    title: 'Macchiato',
  },
  {
    img: 'https://awsimages.detik.net.id/community/media/visual/2019/07/01/844ad4d1-38e3-4d89-b45f-f2fb172dcacc.jpeg?w=700&q=90',
    title: 'cappucino',
  },
  {
    img: 'https://i.pinimg.com/originals/0b/66/5f/0b665fc1a1fff8ef331f57315cf7740f.jpg',
    title: 'ice blend cappucino',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG',
    title: 'black coffee',
  },
  {
    img: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/iced-latte-30188f7.jpg',
    title: 'iced latte',
  },
  {
    img: 'https://www.acouplecooks.com/wp-content/uploads/2021/08/Matcha-Latte-001s.jpg',
    title: 'matcha latte',
  },
  {
    img: 'https://www.baristainstitute.com/sites/default/files/styles/some_share/public/images/Tazza_Ice_Latte.jpg?itok=V-dEBL6t',
    title: 'iced chocolate latte',
  },
  {
    img: 'https://www.insidetherustickitchen.com/wp-content/uploads/2018/07/Affogat-step-4-740x1110-inside-the-rustic-kitchen.jpg',
    title: 'affogato',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2019/10/21/00/16/coffee-4564897_960_720.jpg',
    title: 'espresso',
  },
];
export default App;
