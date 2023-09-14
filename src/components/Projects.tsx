import '../styles/projects.scss';
import '../styles/projects2.scss';
import projectsData from '../Data/projects.json';

interface Technologies {
  id: number;
  title: string;
  img: string;
  techStack: string[];
}

export const Projects: React.FC<Technologies> = () => {
  return (
    <div className='projetcs-bg'>
      <h2 className='proj-title'>My Projects :</h2>
      <section className='card-container'>
        <h2 className='project-title'>FrontEnd Projects:</h2>
        {projectsData.Frontend.map((project, index) => (
          <button
            className='card'
            key={project.id}>
            <h3 className='card-title'>{project.title}</h3>
            <div className={`card-img ${project.img}`}></div>
            <section className='tech-box'>
              {project.techStack.map((tech, i) => (
                <div className={`tech tech-${i + 1}`}>{tech}</div>
              ))}
            </section>
          </button>
        ))}
      </section>

      <section className='card-container2'>
        <h2 className='project-title2'>Full-Stack Projects:</h2>
        {projectsData['Full-Stack'].map((project, index) => (
          <button
            className='card2'
            key={project.id}>
            <h3 className='card-title'>{project.title}</h3>
            <div className={`card-img ${project.img}`}></div>
            <section className='tech-box'>
              {project.techStack.map((tech, i) => (
                <div className={`tech tech-${i + 1}`}>{tech}</div>
              ))}
            </section>
          </button>
        ))}
      </section>

      <section className='card-container3'>
        <h2 className='project-title3'>Freelance Project:</h2>
        {projectsData.Freelance.map((project, index) => (
          <button
            className='card3'
            key={project.id}>
            <h3 className='card-title'>{project.title}</h3>
            <div className={`card-img ${project.img}`}></div>
            <section className='tech-box'>
              {project.techStack.map((tech, i) => (
                <div className={`tech tech-${i + 1}`}>{tech}</div>
              ))}
            </section>
          </button>
        ))}
      </section>
    </div>
  );
};
