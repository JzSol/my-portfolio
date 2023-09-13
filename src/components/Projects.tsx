import '../styles/projects.scss';
import projectsData from '../Data/projects.json';

interface Technologies {
  id: number;
  title: string;
  img: string;
  techStack: string[];
}

export const Projects: React.FC<Technologies> = () => {
  return (
    <div>
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
              <div className='tech tech-1'>React</div>
            </button>
          ))}
        </section>
      </div>
    </div>
  );
};
