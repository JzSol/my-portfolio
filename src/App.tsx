import { useState } from 'react';
import './App.scss';
import { Body } from './components/Body';
import { Sidebar } from './components/Sidebar';

export const App = () => {
  const [page, setPage] = useState(2);

  return (
    <div className='App'>
      <Sidebar
        id={0}
        name={''}
        setPage={setPage}
      />
      <Body page={page} />
    </div>
  );
};
