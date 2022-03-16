import './App.css';
import UserList from './components/UserList';
// import Grandparent from './components/Grandparent';
// import { UserProvider } from './components/userContext';

function App() {
  return (
    <div className="App">
      {/* <UserProvider value="Nabendu">
        <Grandparent />
      </UserProvider> */}
      <UserList />
    </div>
  );
}

export default App;
