import classes from "./footer.module.css";
import { BsTwitter, BsYoutube, BsInstagram, BsC } from "react-icons/bs";

function Footer() {
  return (
    <div className={classes.container}>
      <div className={classes.connect}>
        <p>Conect with us</p>
        <div className={classes.socials}>
          <BsTwitter className={classes.icon}/>
          <BsYoutube className={classes.icon}/>
          <BsInstagram className={classes.icon}/>
        </div>
      </div>
      <div className={classes.grid}>
        <ul className={classes.gridItem}>
          <li>Snowboarding</li>
          <li>Snowboarding</li>
          <li>Snowboarding</li>
          <li>Snowboarding</li>
        </ul>
        <ul className={classes.gridItem}>
          <li>Snowboarding</li>
          <li>Snowboarding</li>
          <li>Snowboarding</li>
          <li>Snowboarding</li>
        </ul>
        <ul className={classes.gridItem}>
          <li>Snowboarding</li>
          <li>Snowboarding</li>
          <li>Snowboarding</li>
          <li>Snowboarding</li>
        </ul>
        <ul className={classes.gridItem}>
          <li>Snowboarding</li>
          <li>Snowboarding</li>
          <li>Snowboarding</li>
          <li>Snowboarding</li>
        </ul>
      </div>
      <p className={classes.copyright}>@2022 Dylan Travis</p>
    </div>
  );
}

export default Footer;
