import { Menubar } from "radix-ui";
import { HomeIcon } from "@radix-ui/react-icons";
import "../css/Nevbar.css";
import { Link } from "react-router-dom";

export default function Nevbar() {
  return (
    <Menubar.Root className="MenubarRoot">
      <Menubar.Menu>
        <Menubar.Trigger asChild>
          <Link to="/" className="MenubarTrigger" aria-label="Hem">
            <HomeIcon width={20} height={20} />
          </Link>
        </Menubar.Trigger>
      </Menubar.Menu>

      <Menubar.Menu>
        <Menubar.Trigger asChild>
          <Link to="/workexperience" className="MenubarTrigger">
            Arbetslivserfarenhet
          </Link>
        </Menubar.Trigger>
      </Menubar.Menu>

      <Menubar.Menu>
        <Menubar.Trigger asChild>
          <Link to="/education" className="MenubarTrigger">
            Utbildning
          </Link>
        </Menubar.Trigger>
      </Menubar.Menu>

      <Menubar.Menu>
        <Menubar.Trigger asChild>
          <Link to="/portfolio" className="MenubarTrigger">
            Portfolio
          </Link>
        </Menubar.Trigger>
      </Menubar.Menu>

      <Menubar.Menu>
        <Menubar.Trigger asChild>
          <Link to="/contact" className="MenubarTrigger">
            Kontakt
          </Link>
        </Menubar.Trigger>
      </Menubar.Menu>
    </Menubar.Root>
  );
}
