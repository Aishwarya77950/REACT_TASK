
import React from 'react';
import { Project } from '../types/Project';
import { Task } from '../types/Task';
import { WBS } from '../types/WBS';
import arrowImg from '../icons8-chevron-down-30.png';

interface ProjectProps {
  project: Project;
  tasks: Task[];
  wbss: WBS[];
}

const ProjectComponent: React.FC<ProjectProps> = ({ project, tasks, wbss }) => {
  // Function to filter tasks by WBS ID
  const getTasksByWBS = (wbsId: number) => {
    return tasks.filter(task => task.wbsId === wbsId);
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <h2 style={{ fontWeight: 'normal', display: 'flex', alignItems: 'center' }}>
        <img src={arrowImg} alt="Arrow" style={{ marginRight: '20px', width: '20px', height: '20px' , paddingLeft: '20px'}} /> {project.name}
      </h2>
      {wbss.map(wbs => (
        <div key={wbs.id} style={{ marginLeft: '20px' }}>
          <h3 style={{ fontWeight: 'normal', display: 'flex', alignItems: 'center' }}>
            <img src={arrowImg} alt="Arrow" style={{ marginRight: '20px', width: '20px', height: '20px',paddingLeft: '20px' }} /> {wbs.name}
          </h3>
          <ul style={{ listStyleType: 'none', paddingLeft: '5%' }}>
            {getTasksByWBS(wbs.id).map(task => (
              <li key={task.id}>
                {task.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ProjectComponent;
