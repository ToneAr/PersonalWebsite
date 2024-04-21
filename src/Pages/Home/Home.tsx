import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { Box, Grid, Paper, Stack, Typography, useTheme } from '@mui/material';
import { useSpring, animated, useSprings } from "react-spring";

import {
  PageBox,
  DisplayPanel,
  PageStack,
  OutlinedPaper
} from '../Common/CommonElements';

function Home() {

  const theme = useTheme();
  
  const [displayText, setDisplayText] = useState("Adapting to");

  function incrementInline () {
    setDisplayText({
      'Adapting to': 'Learning in',
      'Learning in': 'Growing despite',
      'Growing despite' : 'Adapting to',
    }[displayText] ?? 'Adapting');
  };

  const props = useSpring({ 
    from:{ 
      opacity: 0,
      y: -50 },
    to: [{
      opacity: 1,
      y: 0
    },{
      opacity: 0,
      y: 30
    },],
    reset: true,
    onRest: () => {
      incrementInline();
    },
    
    config: {
      mass: 5,
      friction: 200,
      tension: 500
    }
  });

  const AnimatedTypography = animated(Typography);

  useEffect(() => {
    document.title = "TONE";
    window.scrollBy(0, 100);
  }, []);

  return (
    <PageBox>
        <PageStack>
          
          <Paper/>

          <DisplayPanel>
            
            <AnimatedTypography variant='h1' >
              Pursuing Perfection
            </AnimatedTypography>

            <br />
            <Box
              sx={{

              }}
            >
              <Grid container spacing={1} justifyContent='center' sx={{ maxWidth:'80vw', textAlign: 'center'}} >
                <Grid item xs={4} sx={{padding: 0, width: '20px'}}>
                  <AnimatedTypography variant='h5'
                    sx={{
                      color:theme.palette.text.secondary,
                      textAlign: 'right'
                    }}
                    style={props}
                  >
                    {displayText}
                  </AnimatedTypography>
                </Grid>
                <Grid item xs={8} sx={{padding: 0, width: '1000px'}}>
                  <Typography variant='h6' sx={{color:theme.palette.text.secondary, textAlign: 'left' }}>a turbulent today, in the pursuit of a peaceful tomorrow</Typography>
                </Grid>
              </Grid>
            </Box>

            <br />
            
            <Typography variant='body1' sx={{justifyContent:'center', textAlign:'center', maxWidth: '70vw'}}>
              The world is in constant flux. Knowledge allows the traversal of its ever changing landscapes,
              shining a light at it's darkest corners.
            </Typography>
            
            <br />

          </DisplayPanel>

        </PageStack>

    </PageBox>
  );
}

export default Home;
