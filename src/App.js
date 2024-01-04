
import React, { useState } from 'react';
import Search from './Search';
import UserCard from './UserCard';

const App = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const getUser = async (username) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
        setError(null);
      } else {
        setUser(null);
        setError('User not found'); // Set error message for user not found
     
        // Handle error (user not found, API error, etc.)
      }
    } catch (error) {
      console.error('Error fetching user:', error);
      setUser(null);
      setError('API error');
    }
  };

  return (
    <div className='main_sec'>
       <h1>GitHub User Search</h1>
      <Search getUser={getUser} />
      {user && !error && <UserCard user={user} />}
      {error && !user && <p>Error: {error}</p>}
      {/* <h1>GitHub User Search</h1>
      <Search getUser={getUser} />
      {error && <p>Error: {error}</p>}
      <UserCard user={user} /> */}
      
    </div>
  );
};

export default App;























// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
