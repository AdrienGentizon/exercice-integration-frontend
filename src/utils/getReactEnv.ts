import dotenv from 'dotenv';

dotenv.config();

interface ReactEnv {
  REACT_APP_GITHUB_ACCESS_TOKEN: string;
}

let reactEnv: undefined | ReactEnv = undefined;

function getEnvVar(
  key: string,
  defaultValue = '',
  errorIfUndefined = true
): string {
  if (!process.env[key] && errorIfUndefined)
    throw new Error(`${key} is missing in your React env.`);
  return process.env[key] || defaultValue;
}

export default function getReactEnv(): ReactEnv {
  if (!reactEnv) {
    reactEnv = {
      REACT_APP_GITHUB_ACCESS_TOKEN: getEnvVar('REACT_APP_GITHUB_ACCESS_TOKEN'),
    };
  }
  return reactEnv;
}
