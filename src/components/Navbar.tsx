import '../styles/navbar.scss';
import data from '../Data/buttons.json';
import classNames from 'classnames';

type Props = {
  page: number;
  setPage: (page: number) => void;
};

export const Navbar: React.FC<Props> = ({ setPage, page }) => {
  return (
    <div className='navbar'>
      <div className='buttons'>
        {data.buttons.map((button) => (
          <button
            className={classNames('button', { active: page === button.id })}
            key={button.id}
            onClick={() => setPage(button.id)}>
            {button.title}
          </button>
        ))}
      </div>

      <section className='socials'>
        <a
          href='https://www.linkedin.com/in/janiszurilo/'
          target='_blank'
          rel='noopener noreferrer'>
          <button className='logoBtn linkedin'></button>
        </a>
        <a
          href='https://github.com/JzSol'
          target='_blank'
          rel='noopener noreferrer'>
          <button className='logoBtn github'></button>
        </a>
      </section>
    </div>
  );
};
