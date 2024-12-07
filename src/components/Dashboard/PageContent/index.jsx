import { Routes, Route } from 'react-router-dom';
import UploadSliderImage from '../UploadSliderImage';
// import UploadUpcomingWinterTrack from './UploadUpcomingWinterTrack';
// import UploadMostPopularTour from './UploadMostPopularTour';
// import UploadTopSpots from './UploadTopSpots';
// import UploadBlogs from './UploadBlogs';
// import Booking from './Booking';

function App() {
  return (
    <div className="PageContent">
      <h1>Page Content</h1>
      <Routes>
        <Route path="/" element={<UploadSliderImage />} />
      </Routes>
      
    
    </div >
  );
}

export default App;
