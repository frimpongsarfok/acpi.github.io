import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';

import SearchIcon from '@mui/icons-material/Search';
import { blue } from '@mui/material/colors';

import NavMenu from './Components/NavMenu';
import SearchResult from '../../Modules/SearchResults';
import { Link } from 'react-router-dom';
import { CardMedia } from '@mui/material';
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: 'white',
  color:'black',
  '&:hover': {
    backgroundColor: 'white',
  },
  marginLeft: 0,
  marginRight: 'auto',
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '100ch',
      '&:focus': {
        width: '110ch',
      },
    },
  },
}));

export default function AppNavBar(props) {
 
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{backgroundColor:"black",color:'white'}}>
          <Typography variant="h3">
             <Link to='/' style={{textDecoration:'none',color:'white'}}> ACNH <img width={80} height={40} src={process.env.PUBLIC_URL + '/icon.png'}/></Link>
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={(event)=>{props.object.handleSearchChange(event.target.value)}}
             
            />
             
          </Search>
          <NavMenu/>
          
        </Toolbar>
        {props.object.state.searchResult.length?<Box ><SearchResult  object={props.object}></SearchResult></Box>:<></> }
      </AppBar>
    </Box>
  );
}
