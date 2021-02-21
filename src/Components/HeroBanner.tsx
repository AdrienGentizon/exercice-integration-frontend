import { useEffect, useState } from 'react';
import fetch from 'node-fetch';
import getReactEnv from '../utils/getReactEnv';

import logoQovery from './../assets/svg/qovery-engine-logo.svg';
import graphic from './../assets/svg/qovery-schematics.svg';
import iconGithubWhite from './../assets/svg/icon-github-white.svg';
import iconGithubBlack from './../assets/svg/icon-github-black.svg';
import iconDiscord from './../assets/svg/icon-discord.svg';

export default function HerroBanner() {
  const [githubInfos, setGithubInfos] = useState<undefined | any>(undefined);
  const [error, setError] = useState<undefined | string>(undefined);

  const fetchGithubInfos = async () => {
    const userName = 'AdrienGentizon';
    const repo = 'FallDown';
    const url = `https://api.github.com/repos/${userName}/${repo}`;
    const headers = {
      'Content-Type': 'application/json',
      authorization: `token ${getReactEnv().REACT_APP_GITHUB_ACCESS_TOKEN}`,
    };

    const response = await fetch(url, {
      method: 'GET',
      headers,
    });
    return response.status === 200 ? response.json() : undefined;
  };

  useEffect(() => {
    fetchGithubInfos()
      .then((infos) => {
        if (!infos) return setError('Fetching Github infos failed.');
        setGithubInfos(infos);
      })
      .catch((error) => console.error(error.message));
    // eslint-disable-next-line
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <header className="HeroBanner">
      <div className="container">
        <div className="text">
          <img src={logoQovery} alt="Qovery engine logo" />

          <div className="h1">
            <h1>Qovery Engine</h1>
            <div className="gitlab-stars">
              <div className="gitlab-stars__label">
                <img src={iconGithubBlack} alt="Github icon" />
                <span>Star</span>
              </div>
              {githubInfos && (
                <span className="gitlab-stars__count">
                  {githubInfos.stargazers_count}
                </span>
              )}
            </div>
          </div>
          <p className="headline">
            Abstraction layer to deploy microservices applications on any Cloud
            provider.
          </p>
          <p className="summary">
            Qovery Engine is an open-source abstraction layer product that turns
            easy apps deployment on AWS, GCP, Azure and others Cloud providers.
          </p>
          <div className="social-links">
            <a href="https://www.github.com" target="blank">
              <button className="github">
                <img src={iconGithubWhite} alt="Github icon" />
                See on Github
              </button>
            </a>
            <a href="https://www.discord.com" target="blank">
              <button className="discord">
                <img src={iconDiscord} alt="Discord icon" />
                Join us on Discord
              </button>
            </a>
          </div>
        </div>
        <div className="graphic">
          <img src={graphic} alt="" />
        </div>
      </div>
    </header>
  );
}
