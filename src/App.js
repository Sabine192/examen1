import react from 'react';
import profileImage from './img/hallo.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My react app</h1>
      <img src={profileImage} alt="profile-image" />
    </div>
  );
}

export default App;
