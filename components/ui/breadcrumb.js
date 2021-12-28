import classes from "./breadcrumb.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsArrowRight } from "react-icons/bs";

function Breadcrumb() {
  const router = useRouter();
  const crumb = router.asPath.split("/").filter((crumb) => crumb.length > 0);
  return (
    <ul className={classes.list}>
      <li>
        <Link href="/">home</Link>
      </li>
      <li>
        <Link href="/products">products</Link>
      </li>
      {crumb.slice(1).map((crb) => {
        let crumble = crb.replaceAll('%', ' ')
        return (
          <li>
            <Link href={`/products/${crb}`}>{crumble}</Link>
          </li>
        );
      })}
      <li></li>
    </ul>
  );
}

export default Breadcrumb;
