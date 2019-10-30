import React, { useRef, useState } from 'react';
import axios from 'axios';
import './ProjectScan.css'
import Loading from './loading.gif';

const ProjectScan: React.FC = () => {

  const [file, setFile] = useState();
  const [loader, setLoader] = useState(false);
  const [projectScanData, setProjectScanData] = useState([]);
  const [error, setError] = useState();
  const inputEl = useRef<HTMLInputElement>(null);

  const scanProject = () => {
    const data = new FormData();
    data.append('file', file);

    setLoader(true);
    setError(null);

    axios.post("http://localhost:1000/v1/scan-project", data).then((res) => res.data)
      .then((res) => res.data)
      .then(value => {
        setLoader(false);
        setProjectScanData(value.filesName);
      }).catch((err) => {
      setError('Something wrong');
      setLoader(false);
    }).finally(() => {
      if (inputEl.current) {
        inputEl.current.value = "";
      }

    });
  };

  const onUploadFile = (event: any) => {
    setFile(event.target.files[0]);
  };

  return (
    <React.Fragment>
      <section className="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">Project vulnerabilities detector</h1>
          <p>
            Check your project for vulnerabilities
          </p>
          <p>
            <input ref={inputEl} type="file" name="file" onChange={onUploadFile}/>
            <button onClick={() => scanProject()} className="btn btn-dark">Scan Project</button>
          </p>
          <p>{loader ? <img alt={Loading} src={Loading}/> : ''}</p>
          {error ? <p style={{color: 'tomato'}}>ERROR: {error}</p> : null}
        </div>
      </section>
      <section>
        {projectScanData.length ? <div className="container">
          <h3>Scan data</h3>
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
            {projectScanData.map((value, index) => {
              return (
                <tr key={index}>
                  <th scope="row">1</th>
                  <td>2</td>
                  <td>23</td>
                  <td>1200</td>
                  <td><a href="/">{value}</a></td>
                </tr>
              )
            })}

            </tbody>
          </table>
        </div> : null}

      </section>
    </React.Fragment>
  )
};

export default ProjectScan;
