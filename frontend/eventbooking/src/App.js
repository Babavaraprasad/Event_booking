import EventList from './components/EventList.tsx';

import './App.css';

export default function App() {

  return (
    <div style={{maxWidth:600, margin:"0 auto"}}>
      <h1>Event Booking system</h1>
    <EventList/>
    </div>
  );
}
