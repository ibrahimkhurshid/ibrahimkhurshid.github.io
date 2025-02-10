import React from 'react'
import { Box } from '@mui/material'
import Style from '../home/Home.module.scss'
import classNames from 'classnames'
import { info } from '../../info/Info'

function TechnologyBlock (props) {
  const { image, title } = props
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Box
        src={image}
        alt={'mockup'}
        className={classNames(Style.avatar)}
        style={{ background: info.gradient }}
        component={'img'}
        width={{ xs: '25vh', md: '20vh' }}
        height={{ xs: '25vh', md: '20vh' }}
        // borderRadius={'50%'}
        p={'0.65rem'}
        mb={{ xs: '1rem', sm: 0 }}
        mr={{ xs: 0, md: '2rem' }}
      />
      <h1 style={{ fontSize: '2rem' }}>{title}</h1>
      <Box
        className={'portfolio'}
        display={'flex'}
        flexDirection={'column'}
        gap={'0.5rem'}
        alignItems={'center'}
        fontSize={'1.5rem'}
        py={'2rem'}
      >
        {/* <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
          <IconLink link={live} title={'Live Demo'} icon={'fa fa-safari'} />
        </Box>
        <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
          <IconLink link={source} title={'Source Code'} icon={'fa fa-code'} />
        </Box> */}
      </Box>
    </Box>
  )
}

export default TechnologyBlock
