import React from 'react';
import styles from './app.scss';
import Header from './components/Header/Header';
import { MyTower } from './components/MyTower/MyTower';
import Menu from './Pages/Menu';

function App() {
  const [menuClicked, setMenuClicked] = React.useState(false);

  return (
    <div className="App">
      <Header setMenuClicked={(m) => setMenuClicked(m)} />
      {menuClicked ? <Menu setMenuClicked={(m) => setMenuClicked(m)} /> : <MyTower />}
    </div>
  );
}

export default App;
