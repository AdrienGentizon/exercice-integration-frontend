import qoveryPresentation from './../../assets/svg/qovery-presentation.svg';

export default function Presentation() {
  return (
    <div className="Presentation">
      <div className="container">
        <h2>How does it work ?</h2>
        <p>
          Qovery Engine is an open-source abstraction layer product that turns
          easy apps deployment on AWS, GCP, Azure and others Cloud providers.
          The Qovery Engine is coded in Rust and takes advantage of Terraform,
          Helm, Kubectl, Docker to manage resources.
        </p>
        <img src={qoveryPresentation} alt="" />
      </div>
    </div>
  );
}
