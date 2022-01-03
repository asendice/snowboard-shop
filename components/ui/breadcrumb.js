import classes from "./breadcrumb.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

function Breadcrumb() {
  const router = useRouter();
  const crumbs = router.asPath.split("/").filter((crumb) => crumb.length > 0);
  function editCrumb(crumble) {
    return crumble.replaceAll("%", "").replaceAll("20", " ");
  }

  return (
    <ul className={classes.list}>
      <li><Link href="/">Home</Link></li>
      {crumbs.map((crumb, index) => {
        const href = crumbs.slice(0, index + 1).join('/');
        const upCrumb = crumb.charAt(0).toUpperCase() + crumb.slice(1);
        return (
          <li key={crumb}>
            <Link href={`/${href}`}>{editCrumb(upCrumb)}</Link>
          </li>
        )
      })}

     
    </ul>
  );
}

export default Breadcrumb;
