import '../../styles/smallerComp/proj-info.scss';
import projInfoData from '../../Data/proj-info.json';

type Props = {
  setIsInfoOpened: (isInfoOpened: boolean) => void;
  selectedCard: number;

  id: number;
  title: string;
  link: string;
  description: string;
  github?: string;
  techStack: string[];
};

export const ProjInfo: React.FC<Props> = ({
  setIsInfoOpened,
  selectedCard,
}) => {
  const handleButtonClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section className='background'>
      <div className='proj-info'>
        <button
          className='closebtn'
          onClick={() => setIsInfoOpened(false)}></button>

        {projInfoData.info.map(
          (info) =>
            info.id === selectedCard && (
              <section className='info-section'>
                <h1 className='proj-title'>Project Name: {info.title}</h1>
                <h2 className='descr-title'>Description:</h2>
                <p className='description'>{info.description}</p>

                <section className='box'>
                  {info.techStack.map((tech: string, i: number) => (
                    <div className={`techinfo-${i + 1}`}>{tech}</div>
                  ))}
                </section>

                <section className='btn-section'>
                  <button
                    className='source page'
                    onClick={() => handleButtonClick(info.link)}>
                    Webpage
                    <div className='logo-webpage' />
                  </button>

                  {info.github && (
                    <button
                      className='source git'
                      onClick={() =>
                        info.github && handleButtonClick(info.github)
                      }>
                      Github
                      <div className='logo-github' />
                    </button>
                  )}

                  {info.github2 && (
                    <button
                      className='source git'
                      onClick={() =>
                        info.github && handleButtonClick(info.github2)
                      }>
                      Backend code
                      <div className='logo-github' />
                    </button>
                  )}
                </section>
              </section>
            )
        )}
      </div>
    </section>
  );
};
