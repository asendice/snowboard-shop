import classes from "./breadcrumb.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsArrowRight } from "react-icons/bs";

function Breadcrumb() {
  const router = useRouter();
  const crumb = router.pathname
    .split("/")
    .filter((crumb) => crumb.length > 0)[1];

  return (
    <ul className={classes.list}>
      <li>
        <Link href="/">home</Link>
      </li>
      <li>
        <Link href="/products">products</Link>
      </li>
      <li>
        <Link href={`/products/${crumb}`}>{crumb}</Link>
      </li>
    </ul>
  );
}

export default Breadcrumb;
