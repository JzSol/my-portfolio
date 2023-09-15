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
        <Projects
          id={0}
          title={''}
          img={''}
          techStack={[]}
        />
      ) : page === 3 ? (
        <MyCv />
      ) : null}
      {/* <div className='navbar'>
          {data.buttons.map((button) => (
            <button
              className={button.class}
              key={button.id}
              onClick={() => setPage(button.id)}>
              {button.title}
            </button>
          ))} */}
      {/* </div> */}
    </div>
  );
};
