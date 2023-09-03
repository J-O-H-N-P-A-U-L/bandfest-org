import React, { useEffect, useState } from "react";
import Layout from "../components/layout"; // Import your layout component
import axios from "axios"; // Import Axios for making API requests

const Portfolio = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    // Fetch GitHub repository data
    axios
      .get("https://api.github.com/users/J-O-H-N-P-A-U-L/repos")
      .then((response) => {
        setRepos(response.data);
      })
      .catch((error) => {
        console.error("Error fetching GitHub repositories:", error);
      });
  }, []);

  return (
    <Layout>
      {/* You can place your header or navigation here */}
      
      <section className="portfolio-section">
        <div className="container">
          <h1>GitHub Portfolio</h1>
          <p>
            Explore some of my GitHub repositories below. Each project represents a different aspect of my work and interests.
          </p>
          <div className="portfolio-items">
            {repos.map((repo) => (
              <div className="portfolio-item" key={repo.id}>
                <h2>{repo.name}</h2>
                <p>{repo.description}</p>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  View on GitHub
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* You can include other sections or components below */}
    </Layout>
  );
};

export default Portfolio;
