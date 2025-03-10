import { Link } from "react-router-dom";
import { LinkInfo } from "../../Lab";
import SeparatorSubmenu from "../utils/SeparatorSubmenu";

export const LinkList = ({ links }: { links: LinkInfo[] }) => {
  return (<ol className="link-list menu-left-font">
    {links.map((link, index) => {
      if (link === 'divider') {
        return <SeparatorSubmenu key={'divier' + index} />;
      }

      return (<li key={link.id}>
        <Link to={link.id.toLocaleLowerCase()}>{link.id.replaceAll('-', ' ')}</Link>
      </li>)
    })}
  </ol>);
}
export default LinkList;
