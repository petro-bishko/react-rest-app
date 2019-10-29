import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <section className="jumbotron text-center">
      <div className="container">
        <h1 className="jumbotron-heading">Check your project for vulnerabilities</h1>
        <p className="lead text-muted">
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book.
        </p>
        <p>
          <Link to="/project-analysis" className="btn btn-primary">Try for free</Link>
        </p>
      </div>
    </section>
  )
};

export default Home;
