import featureResiliencyImg from './../../assets/svg/qovery-feature-resiliency.svg';
import featureOnTopImg from './../../assets/svg/qovery-feature-on-top.svg';
import featureExtensibleImg from './../../assets/svg/qovery-feature-extensible.svg';

export default function Features() {
  return (
    <div className="Features">
      <div className="container">
        <div className="single-feature">
          <img src={featureOnTopImg} alt="" />
          <h2>Deploy real world applications</h2>
          <p>
            Qovery Engine empowers you to deploy complex applications, such as a
            backend, a frontend, and a database in a very simple way. Servers,
            networking, security, all is done by the Engine for you.
          </p>
          <a href="/more">See more</a>
        </div>
        <div className="single-feature">
          <img src={featureResiliencyImg} alt="" />
          <h2>Resiliency is key</h2>
          <p>
            Qovery Engine knows when something goes wrong on the deployment of
            your applications. Qovery Engine is built with resiliency in mind. A
            transactional engine inspired by what is provided into ACID
            databases has been developed at the heart of the product to rollback
            on a consistent and working application version when something goes
            wrong.
          </p>
          <a href="/more">See more</a>
        </div>
        <div className="single-feature">
          <img src={featureOnTopImg} alt="" />
          <h2>On top of the best tools</h2>
          <p>
            Qovery Engine does not reinvent the wheel. It takes advantage of the
            best tools in the Cloud industry, such as Kubernetes, Terraform, and
            Helm to manage the deployment of the infrastructure and your
            applications. Servers, networking, security, all is done by the
            Engine for you.
          </p>
          <a href="/more">See more</a>
        </div>
        <div className="single-feature">
          <img src={featureExtensibleImg} alt="" />
          <h2>Extensible</h2>
          <p>
            Qovery Engine is built to be highly extensible. Adding the support
            of a Cloud provider or a Continuous Integration platform is as
            simple as implementing a simple programmatic interface.
          </p>
          <a href="/more">See more</a>
        </div>
      </div>
    </div>
  );
}
