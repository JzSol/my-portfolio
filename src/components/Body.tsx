import { Home } from './Home';
import { Projects } from './Projects';
import '../styles/body.scss';
import { MyCv } from './MyCv';

interface Props {
  page: number;
}

export const Body: React.FC<Props> = ({ page }) => {
  return (
    <div className='body'>
      {page === 1 ? (
        <Home />
      ) : page === 2 ? (
        <Projects />
      ) : page === 3 ? (
        <MyCv />
      ) : null}
    </div>
  );
};
