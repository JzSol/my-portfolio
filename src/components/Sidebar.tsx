import '../styles/sidebar.scss';
import data from '../Data/buttons.json';

interface Buttons {
  id: number;
  name: string;
  setPage: (id: number) => void;
}

export const Sidebar: React.FC<Buttons> = ({ setPage }) => {
  return (
    <div className='sidebar'>
      <div className='header'>
        <div className='about'>
          <div className='title'>about me</div>
          <div className='image'></div>
        </div>

        <section className='about'>
          <div>Jānis Francis Žurilo</div>
          <div>age: 21</div>
        </section>

        <div className='navbar'>
          {data.buttons.map((button) => (
            <button
              className={button.class}
              key={button.id}
              onClick={() => setPage(button.id)}>
              {button.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
