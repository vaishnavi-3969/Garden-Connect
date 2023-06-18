import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage'
import Header from './components/Header'
import Challenges from './components/Challenges'
import Footer from './components/Footer'
import GardenList from './components/GardenList'
import GardenDetails from './components/GardenDetails'
import Leaderboard from './components/Leaderboard'
import ProgressTracker from './components/ProgressTracker'
import SocialFeed from './components/SocialFeed'
import Marketplace from './components/VirtualMarketplace'

function App() {
  return (
    <div>
    <div>
      <Header/>
    </div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>} exact/>
        <Route path='/challenges' element={<Challenges/>} exact/>
        <Route path='/garden-list' element={<GardenList/>} exact/>
        <Route path='/garden-details' element={<GardenDetails/>} exact/>
        <Route path='/leaderboard' element={<Leaderboard/>} exact/>
        <Route path='/progressTracker' element={<ProgressTracker/>} exact/>
        <Route path='/socialFeed' element={<SocialFeed/>} exact/>
        <Route path='/marketplace' element={<Marketplace/>} exact/>
      </Routes>
    </BrowserRouter>
    <div>
    <Footer/>
    </div>
    </div>
  )
}

export default App
