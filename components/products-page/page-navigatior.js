import classes from "./page-navigator.module.css";
import {
  BsChevronDoubleLeft,
  BsChevronDoubleRight,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";

function PageNavigator(props){

  const {activePage, setActivePage, pages } = props;

  function genPages() {
    let arr = [];
    for (let i = 0; i < pages; i++) {
      arr.push(i + 1);
    }
    return arr;
  }

  function leftClick() {
    if(activePage > 1){
      setActivePage((currentValue) => currentValue - 1);
    }
  }

  function rightClick() {
    if(activePage < pages) {
      setActivePage((currentValue) => currentValue + 1)
    }
  }
return (
  <div className={classes.pages}>
  <a href="#" className={classes.pageIcon} onClick={() => setActivePage(1)}>
    <BsChevronDoubleLeft />
  </a>
  <a href="#" className={classes.pageIcon}  onClick={() => leftClick()}>
    <BsChevronLeft />
  </a>

  {genPages().map((num) => (
    <a key={num * 5} className={classes.pageNumber} onClick={() => setActivePage(num)} style={num === activePage ? {textDecoration: "underline"} : {}}>{num}</a>
  ))}

  <a href="#" className={classes.pageIcon} onClick={() => rightClick()}>
    <BsChevronRight />
  </a>
  <a href="#" className={classes.pageIcon} onClick={() => setActivePage(pages)}>
    <BsChevronDoubleRight />
  </a>
</div>
)
}

export default PageNavigator;