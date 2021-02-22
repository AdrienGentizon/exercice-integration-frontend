import iconDiscord from './../../assets/svg/icon-discord.svg';

export default function ButtonDiscord() {
  return (
    <a href="https://www.discord.com" target="blank">
      <button className="discord">
        <img src={iconDiscord} alt="Discord icon" />
        Join us on Discord
      </button>
    </a>
  );
}
