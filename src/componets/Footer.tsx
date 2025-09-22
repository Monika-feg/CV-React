import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import "../css/Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <p>Håll kontakten med mig via GitHub och LinkedIn</p>
      <a href="https://github.com/Monika-feg">
        <GitHubLogoIcon
          width={36}
          height={36}
          style={{ color: "black", marginTop: "1%" }}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/monika-engstr%C3%B6m-81a872131/"
        style={{ color: "rgb(3, 3, 255)" }}
      >
        <LinkedInLogoIcon width={36} height={36} />
      </a>
    </div>
  );
}
