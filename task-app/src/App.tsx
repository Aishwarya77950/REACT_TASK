// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import ProjectComponent from './components/ProjectComponent';
import { Project } from './types/Project';
import { Task } from './types/Task';
import { WBS } from './types/WBS';

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
