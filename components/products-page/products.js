import { useState, useEffect } from "react";
import classes from "./products.module.css";
import CategorySidebar from "./category-sidebar";
import ProductNavigation from "./product-navigation";
import ProductGrid from "./product-grid";

function Products(props) {
  const [filters, setFilters] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [sortedBy, setSortedBy] = useState("");
  const [pages, setPages] = useState(1);
  const [activePage, setActivePage] = useState(1);

  function updateFilters(filter) {
    if (filters.includes(filter)) {
      setFilters(filters.filter((item) => item !== filter));
    } else {
      setFilters((filters) => [...filters, filter]);
    }
  }

  function SideBarCategories() {
    const categories = Object.keys(props.products[0]).filter(
      (item) =>
        item !== "_id" &&
        item !== "title" &&
        item !== "images" &&
        item !== "featured"
    );
    const xdd = categories.map((item) => {
      const mapped = props.products.map((prod) => {
        return prod[item];
      });
      return {
        category: item,
        options: [...new Set(mapped.flat())],
      };
    });
    return xdd;
  }

  function updateProducts() {
    let start = activePage === 1 ? 1 : itemsPerPage * (activePage - 1);
    let end = start + itemsPerPage;
    const xdd = props.products.slice(start, end);
    return xdd;
  }

  useEffect(() => {
    setPages(Math.ceil(props.products.length / itemsPerPage));
    if(activePage > pages){
      setActivePage(pages);
    }
  }, [sortedBy, activePage, props.products, itemsPerPage]);

  return (
    <section className={classes.container}>
      <CategorySidebar
        categories={SideBarCategories()}
        updateFilters={updateFilters}
        filters={filters}
      />
      <ProductNavigation
        pages={pages}
        activePage={activePage}
        setActivePage={setActivePage}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
      />
      <ProductGrid products={updateProducts()} />
    </section>
  );
}

export default Products;
