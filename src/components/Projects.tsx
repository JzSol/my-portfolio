import '../styles/projects.scss';
import '../styles/projects2.scss';
import projectsData from '../Data/projects.json';

interface Technologies {
  id: number;
  title: string;
  img: string;
  techStack: string[];
  isInfoOpened: boolean;
  setIsInfoOpened: (isInfoOpened: boolean) => void;
  setSelectedCard: (selectedCard: number) => void;
}

export const Projects: React.FC<Technologies> = ({
  isInfoOpened,
  setIsInfoOpened,
  setSelectedCard,
}) => {
  const handleCLick = (id: number) => {
    setSelectedCard(id);
    setIsInfoOpened(true);
  };

  return (
    <div className='projetcs-box'>
      <section className='allcontainer'>
        <h2 className='project-title'>FrontEnd Projects:</h2>
        <section className='card-container'>
          {projectsData.Frontend.map((project, index) => (
            <button
              className='card'
              key={project.id}
              onClick={() => handleCLick(project.id)}>
              <div className={`card-img ${project.img}`}></div>
              <h3 className='card-title'>{project.title}</h3>
              <section className='tech-box'>
                {project.techStack.map((tech, i) => (
                  <div className={`tech-${i + 1}`}>{tech}</div>
                ))}
              </section>
            </button>
          ))}
        </section>
      </section>

      <section className='allcontainer2'>
        <h2 className='project-title'>Full-Stack Projects:</h2>
        <section className='card-container2'>
          {projectsData['Full-Stack'].map((project, index) => (
            <button
              className='card'
              key={project.id}
              onClick={() => handleCLick(project.id)}>
              <div className={`card-img ${project.img}`}></div>
              <h3 className='card-title'>{project.title}</h3>
              <section className='tech-box'>
                {project.techStack.map((tech, i) => (
                  <div className={`tech tech-${i + 1}`}>{tech}</div>
                ))}
              </section>
            </button>
          ))}
        </section>
      </section>

      <section className='allcontainer3'>
        <h2 className='project-title'>Freelance Project:</h2>
        <section className='card-container3'>
          {projectsData.Freelance.map((project, index) => (
            <button
              className='card'
              key={project.id}
              onClick={() => handleCLick(project.id)}>
              <div className={`card-img ${project.img}`}></div>
              <h3 className='card-title'>{project.title}</h3>
              <section className='tech-box'>
                {project.techStack.map((tech, i) => (
                  <div className={`tech tech-${i + 1}`}>{tech}</div>
                ))}
              </section>
            </button>
          ))}
        </section>
      </section>
    </div>
  );
};
