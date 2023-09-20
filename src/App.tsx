import { useState } from 'react';
import './App.scss';
import { Body } from './components/Body';
import { Sidebar } from './components/Sidebar';
import { Navbar } from './components/Navbar';
import { ProjInfo } from './components/smallerComp/ProjInfo';

export const App = () => {
  const [page, setPage] = useState(2);
  const [isInfoOpened, setIsInfoOpened] = useState(false);
  const [selectedCard, setSelectedCard] = useState<number>(0);

  return (
    <div className='App'>
      {isInfoOpened && (
        <ProjInfo
          setIsInfoOpened={setIsInfoOpened}
          selectedCard={selectedCard}
          id={0}
          title={''}
          link={''}
          description={''}
          techStack={[]}
        />
      )}
      <Navbar
        page={page}
        setPage={setPage}
      />
      <Sidebar
        id={0}
        name={''}
        setPage={setPage}
      />
      <Body
        page={page}
        isInfoOpened={isInfoOpened}
        setIsInfoOpened={setIsInfoOpened}
        selectedCard={selectedCard}
        setSelectedCard={setSelectedCard}
      />
    </div>
  );
};
