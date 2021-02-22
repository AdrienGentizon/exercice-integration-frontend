import iconGithubWhite from './../../assets/svg/icon-github-white.svg';

export default function ButtonGithub() {
  return (
    <a href="https://www.github.com" target="blank">
      <button className="github">
        <img src={iconGithubWhite} alt="Github icon" />
        See on Github
      </button>
    </a>
  );
}
