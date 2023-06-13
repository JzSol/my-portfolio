import './App.scss';
import { Body } from './components/Body';
import { Sidebar } from './components/Sidebar';

export const App = () => {
  return (
    <div className='App'>
      <Sidebar />
      <Body />
    </div>
  );
};
