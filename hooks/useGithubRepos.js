// hooks/useGithubRepos.js
import { useState, useEffect } from 'react';

const useGithubRepos = (username) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos`
        );
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error('Error fetching GitHub repositories:', error);
      }
      setLoading(false);
    };

    fetchRepos();
  }, [username]);

  return { repos, loading };
};

export default useGithubRepos;
