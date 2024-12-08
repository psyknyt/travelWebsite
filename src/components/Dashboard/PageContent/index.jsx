import { Routes, Route } from 'react-router-dom';
import UploadSliderImages from '../UploadSliderImage';
import Bookings from '../Bookings';
// import UploadUpcomingWinterTrack from './UploadUpcomingWinterTrack';
// import UploadMostPopularTour from './UploadMostPopularTour';
// import UploadTopSpots from './UploadTopSpots';
// import UploadBlogs from './UploadBlogs';
// import Booking from './Booking';

function App() {
  return (
    <div className="PageContent" style={{width:"100%"}}>
      <Routes>
        <Route path="/" element={<Bookings/>} />
        <Route path="/uploadsliderimage" element={<UploadSliderImages />} />
      </Routes>
    </div >
  );
}

export default App;
