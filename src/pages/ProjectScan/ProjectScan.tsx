import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProjectScan.css'

const ProjectScan: React.FC = () => {
  const [project, setProject] = useState({});
  const createProject = () => {
    axios.post('http://localhost:1000/v1/projects', {
      name: 'Test project',
      folders: 2,
      files: 3
    }).then((res) => setProject(res.data))
  };

  useEffect(() => {
    axios.get('http://localhost:1000/v1/projects').then((res) => res.data)
      .then(value => {
        console.log(value); // TODO remove console.log
        setProject(value);
      })
  }, []);
  return (
    <React.Fragment>
      <section className="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">Project vulnerabilities detector</h1>
          <p>
            Check your project for vulnerabilities
          </p>
          <p>
            <button onClick={() => createProject()} className="btn btn-dark">Upload Project</button>
          </p>
        </div>
      </section>
      <section>
        <div className="container">
          <h3>Project name</h3>
          <table className="table table-striped table-dark">
            <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Folders</th>
              <th scope="col">Files</th>
              <th scope="col">Count of data</th>
              <th scope="col">See sours file</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <th scope="row">1</th>
              <td>2</td>
              <td>23</td>
              <td>1200</td>
              <td><a href="/">File name</a></td>
            </tr>
            </tbody>
          </table>
        </div>
      </section>
    </React.Fragment>
  )
};

export default ProjectScan;
