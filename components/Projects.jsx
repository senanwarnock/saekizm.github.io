// components/Projects.jsx
import React from 'react';
import useGithubRepos from '../hooks/useGithubRepos';
import { motion } from 'framer-motion';

const Projects = () => {
  const { repos, loading } = useGithubRepos('saekizm');

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-8 bg-gradient-to-r from-black to-gray-900 h-screen text-white">
      <motion.h2 className="text-3xl font-semibold mb-4"
      initial={{ x: '100%', opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 2, ease: 'easeInOut', delay: 1, once: true }}
      >My GitHub Projects</motion.h2>
      <motion.div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3"
      initial={{ y: '100%', opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, ease: 'easeInOut', delay: 1, once: true }}
      >
        {repos.map((repo) => (
          <div
            key={repo.id}
            className="border rounded p-4 shadow hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{repo.name}</h3>
            <p className="text-sm mb-4">{repo.description}</p>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
