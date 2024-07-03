import React, { useState, useEffect } from 'react';
import ProjectComponent from './ProjectComponent';
import { Project } from '../types/Project';
import { Task } from '../types/Task';
import { WBS } from '../types/WBS';

const App: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [wbss, setWbss] = useState<WBS[]>([]);

  useEffect(() => {
    // Simulating fetch from JSON files (replace with actual fetch calls)
    fetch('/project.json')
      .then(response => response.json())
      .then(data => setProjects(data));

    fetch('/task.json')
      .then(response => response.json())
      .then(data => setTasks(data));

    fetch('/wbs.json')
      .then(response => response.json())
      .then(data => setWbss(data));
  }, []);

  return (
    <div>
      {projects.map(project => (
        <ProjectComponent
          key={project.id}
          project={project}
          tasks={tasks}
          wbss={wbss.filter(wbs => wbs.projectId === project.id)}
        />
      ))}
    </div>
  );
};

export default App;
