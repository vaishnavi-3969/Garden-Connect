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
      
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/challenges' element={<Challenges/>}/>
        <Route path='/garden-list' element={<GardenList/>}/>
        <Route path='/garden-details' element={<GardenDetails/>}/>
        <Route path='/leader-board' element={<Leaderboard/>}/>
        <Route path='/progress-tracker' element={<ProgressTracker/>}/>
        <Route path='/social-feed' element={<SocialFeed/>}/>
        <Route path='/market-place' element={<Marketplace/>}/>
      </Routes>
    </BrowserRouter>
    <div>
    <Footer/>
    </div>
    </div>
  )
}

export default App
