import { BrowserRouter, Route } from 'react-router-dom'

import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Result } from './pages/Result';
import { User } from './pages/User';

import './styles/global.css'

export default function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/result" exact component={Result} />
        <Route path="/user" exact component={User} />
      </BrowserRouter>
    </div>
  );
}

