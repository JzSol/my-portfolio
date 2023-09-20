import { Home } from './Home';
import { Projects } from './Projects';
import '../styles/body.scss';
import { MyCv } from './MyCv';

interface Props {
  page: number;
  isInfoOpened: boolean;
  setIsInfoOpened: (isInfoOpened: boolean) => void;
  selectedCard: number;
  setSelectedCard: (selectedCard: number) => void;
}

export const Body: React.FC<Props> = ({
  page,
  isInfoOpened,
  setIsInfoOpened,
  setSelectedCard,
}) => {
  return (
    <div className='body'>
      {page === 1 ? (
        <Home />
      ) : page === 2 ? (
        <Projects
          id={0}
          title={''}
          img={''}
          techStack={[]}
          isInfoOpened={isInfoOpened}
          setIsInfoOpened={setIsInfoOpened}
          setSelectedCard={setSelectedCard}
        />
      ) : page === 3 ? (
        <MyCv />
      ) : null}
    </div>
  );
};
