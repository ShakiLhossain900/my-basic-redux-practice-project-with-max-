import {Fragment} from 'react'
import Auth from './components/Auth';
import Header from './components/Header'
import UserProfile from './components/UserProfile';
function App() {
  return (
    <Fragment>
      <Header/>
      <Auth/>
      <UserProfile/>
    </Fragment>
  )
}

export default App;
