import {  Route, Routes } from "react-router-dom"

import { Home } from "./Components/Home/Home"
import AboutusNavbar from "./Components/Aboutcomponent/AboutusNavbar"
import Contactnavbar from './Components/Contactuscomponent/Contactnavbar'
import Productsnavbar from './Components/Productscomponent/Productsnavebar'
import {RectangularductHomepage} from './Components/DuctfabProductsListComponent/RectangularductHomepage'
import {SpiralflatovalductHome} from './Components/DuctfabProductsListComponent/SpiralflatovalductHome'
import {SpiralRoundductHome} from './Components/DuctfabProductsListComponent/SpiralRoundductHome'
import {MsflangeDuctHome} from './Components/DuctfabProductsListComponent/MsflangeDuctHome'
import {SliponFlangeDuctHome} from './Components/DuctfabProductsListComponent/SliponFlangeDuctHome'
import {RoundtoSquareDuctHome} from './Components/DuctfabProductsListComponent/RoundtoSquareDuctHome'
import {OvalvcdHome} from './Components/DuctfabProductsListComponent/OvalvcdHome'
import {LpplenumterminalBoxHome} from './Components/DuctfabProductsListComponent/LpplenumterminalLBOXHome'
import {ProjectHome} from './Components/Projectscomponent/ProjectHome'
import React from 'react'
import { Box } from "@chakra-ui/react"
const App = () => {
  return (
   <Box className="appjs">
<Routes> 
<Route path="/" Component={Home} />
<Route path="/aboutus" Component={AboutusNavbar}/>
<Route path="/contactus" Component={Contactnavbar}/>
<Route path="/products" Component={Productsnavbar}/>
<Route path="/rectangular" Component={RectangularductHomepage} />
<Route path="/spiralflatovalduct" Component={SpiralflatovalductHome} />
<Route path="/spiralroundduct" Component={SpiralRoundductHome} />
<Route path="/msflangeduct" Component={MsflangeDuctHome} />
<Route path="/sliponflangeduct" Component={SliponFlangeDuctHome} />
<Route path="/roundtoaquareduct" Component={RoundtoSquareDuctHome} />
<Route path="/ovalvcd" Component={OvalvcdHome} />
<Route path="/lpplenumterminalbox" Component={LpplenumterminalBoxHome} />
<Route path="/PROJECTS" Component={ProjectHome} />

</Routes>
</Box>
  )
}

export default App





