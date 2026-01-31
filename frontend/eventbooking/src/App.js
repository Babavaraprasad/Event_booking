import EventList from './components/EventList.tsx';
import EventDetails from './components/EventDetails.tsx';
import { Routes, Route } from 'react-router-dom';
import './App.css';

export default function App() {

  return (
    <div style={{maxWidth:600, margin:"0 auto"}}>
      <h1>Event Booking system</h1>
      <Routes>
        <Route path='/' element={<EventList/>} />
        <Route path= "/events/:id" element={<EventDetails/>}/>
        </Routes>
    </div>
  );
}
