import React from 'react'
import TechnologyBlock from './TechnologyBlock'
import { Box, Grid } from '@mui/material'
import { info } from '../../info/Info'

export default function Technology ({ innerRef }) {
  return (
    <Box id={'portfolio'} ref={innerRef}>
      <Grid container display={'flex'} justifyContent={'center'}>
        {info.tech.map((tech, index) => (
          <Grid item xs={12} md={4} key={index}>
            <TechnologyBlock
              image={tech.image}
              live={tech.live}
              source={tech.source}
              title={tech.title}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
