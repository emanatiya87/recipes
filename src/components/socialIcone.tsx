import {
  FaFacebook,
  FaTwitter,
  FaGooglePlay,
  FaInstagramSquare,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
export default function SocialIcone() {
  return (
    <>
      <li>
        <a href="#" className="text-dark me-4 ">
          <FaFacebook className="rotateY180" />
        </a>
      </li>
      <li>
        <a href="#" className="text-dark me-4">
          <FaTwitter className="rotateY180" />
        </a>
      </li>
      <li>
        {" "}
        <a href="#" className="text-dark me-4">
          <FaGooglePlay className="rotateY180" />
        </a>
      </li>
      <li>
        {" "}
        <a href="#" className="text-dark me-4">
          <FaInstagramSquare className="rotateY180" />
        </a>
      </li>
      <li>
        {" "}
        <a
          href="https://www.linkedin.com/in/eman-atiya-6245b0294/"
          target="_blank"
          className="text-dark me-4"
        >
          <FaLinkedin className="rotateY180" />
        </a>
      </li>
      <li>
        {" "}
        <a
          href="https://github.com/emanatiya87"
          target="_blank"
          className="text-dark me-4"
        >
          <FaGithub className="rotateY180" />
        </a>
      </li>
    </>
  );
}
