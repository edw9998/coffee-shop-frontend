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
              <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                <MenuIcon />
              </IconButton>
              <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                <h1>Mr.X's Coffee Shop and Bar</h1>
              </Typography>
              <Button>Login</Button>
            </Toolbar>
          </AppBar>
        </Box>
      <header className='App-header'>
        <Typography variant="h2" component="div" sx={{ flexGrow: 1 }}>
               Welcome to Mr.X's Coffee Shop and Bar
        </Typography>
        <img src='https://asset.kompas.com/crops/4C69KtNeLU0m6ErZGAn_DOqi3IQ=/312x108:1608x972/750x500/data/photo/2021/03/05/6042200d4e753.jpg' style={{height:500, width:1000}}/>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
               Contact Info: (+62)87781080074
        </Typography>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
               Working Hours: 09.00 A.M. - 09:00 P.M.
        </Typography>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
               Location : Jl. Pelepah Hijau 10 Blok TS-3 No.19, RT.03/RW.15, Kecamatan Kelapa Gading, Kota Jakarta Utara, Daerah Khusus Ibukota Jakarta, 14240
        </Typography>
        <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
               Our Menu:
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
              To Make Orders, Please Press The Button :
    </Typography>
    <Button variant='contained' color="primary">Order Online</Button>
    <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              Our Social Media Platforms :
    </Typography>
    
    <Button variant='contained' color="secondary">
      Visit Instagram
    </Button>
    
    <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              Please Enter To Submit Feedback:
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
    title: 'Salted Caramel Macchiato(Hot / Ice)',
  },
  {
    img: 'https://awsimages.detik.net.id/community/media/visual/2019/07/01/844ad4d1-38e3-4d89-b45f-f2fb172dcacc.jpeg?w=700&q=90',
    title: 'Cappucino(Hot)',
  },
  {
    img: 'https://i.pinimg.com/originals/0b/66/5f/0b665fc1a1fff8ef331f57315cf7740f.jpg',
    title: 'Ice Blend Cappucino',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG',
    title: 'Black Coffee(Hot / Ice)',
  },
  {
    img: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/iced-latte-30188f7.jpg',
    title: 'Iced Latte',
  },
  {
    img: 'https://www.baristainstitute.com/sites/default/files/styles/some_share/public/images/Tazza_Ice_Latte.jpg?itok=V-dEBL6t',
    title: 'Iced Chocolate Latte',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2019/10/21/00/16/coffee-4564897_960_720.jpg',
    title: 'Espresso / Piccolo(Hot)',
  },
];
export default App;
