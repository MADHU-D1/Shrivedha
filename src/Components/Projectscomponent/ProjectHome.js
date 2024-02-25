import React from 'react'

import { Box} from '@chakra-ui/react'

import Shrivedhaafooter from '../Shrivedhadashbord/Shrivedhaafooter'
import ProjectsList from './ProjectsList'
import ProjectsNavbar from './ProjectsNavbar'
export const ProjectHome = () => {
  return (
    <Box>
       <ProjectsNavbar/>
      
       <ProjectsList/>
     <Box mt={{base:"0px", lg:"10px"}}>
     <Shrivedhaafooter/>
     </Box>
      
    </Box>
    
  )
}
