import ButtonDiscord from '../ButtonDiscord/ButtonDiscord';
import ButtonGithub from '../ButtonGithub/ButtonGithub';
import CodeSnippet from './CodeSnippet/CodeSnippet';

export default function Usage() {
  return (
    <div className="Usage">
      <div className="container container--flex">
        <h2>Usage</h2>
        <p>
          Initialize EKS (AWS Kubernetes) and ECR (AWS container registry) on
          AWS
        </p>
        <CodeSnippet />
        <div className="social-links">
          <ButtonGithub />
          <ButtonDiscord />
        </div>
      </div>
    </div>
  );
}
