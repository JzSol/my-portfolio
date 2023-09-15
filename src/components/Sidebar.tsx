import '../styles/sidebar.scss';

interface Buttons {
  id: number;
  name: string;
  setPage: (id: number) => void;
}

const calculateAge = (
  birthYear: number,
  birthMonth: number,
  birthDay: number
): number => {
  const today = new Date();
  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth() + 1;
  const todayDay = today.getDate();

  let age = todayYear - birthYear;

  // Check if the birth date has occurred this year
  if (
    todayMonth < birthMonth ||
    (todayMonth === birthMonth && todayDay < birthDay)
  ) {
    age -= 1;
  }

  return age;
};

export const Sidebar: React.FC<Buttons> = ({ setPage }) => {
  const birthYear = 2002;
  const birthMonth = 1;
  const birthDay = 24;

  const age = calculateAge(birthYear, birthMonth, birthDay);

  return (
    <div className='sidebar'>
      <div className='header'>
        <div className='about'>
          <div className='title'>about me</div>
          <div className='image'></div>
        </div>

        <section className='about'>
          <div className='name'>Name: Jānis Francis Žurilo</div>
          <div className='name'>Age: {age}</div>
          <div className='name'>Languages: Javascript (TS) </div>
        </section>
      </div>
    </div>
  );
};
