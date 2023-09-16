import '../styles/navbar.scss';
import data from '../Data/buttons.json';

export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='buttons'>
        {data.buttons.map((button) => (
          <button
            className='button'
            key={button.id}
            onClick={() => button.id}>
            {button.title}
          </button>
        ))}
      </div>

      <section className='socials'>
        <button className='logoBtn linkedin'></button>
        <button className='logoBtn github'></button>
      </section>
    </div>
  );
};
