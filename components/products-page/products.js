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
    const options = filters.map((item) => item.option)
    if (options.includes(filter.option)) {
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

  function sortProducts(products) {
    if (sortedBy === "Name: A-Z") {
      return products.sort((a, b) => a.title.localeCompare(b.title));
    }
    if (sortedBy === "Name: Z-A") {
      return products.sort((a, b) => b.title.localeCompare(a.title));
    }
    if (sortedBy === "Price: Low-High") {
      return products.sort((a, b) => a.price - b.price);
    }
    if (sortedBy === "Price: High-Low") {
      return products.sort((a, b) => b.price - a.price);
    }
  }

  function filterProducts() {
    const xdd = filters.map((filter) => {
      const { category, option } = filter;
      return props.products.filter(
        (item) => item[category] === option || item[category].includes(option)
      );
    });
    console.log(xdd, "xdd")
    return xdd;
  }

  function updateProducts() {
    let filtered = filterProducts().length > 0 ? filterProducts()[0] : props.products;
    let sorted = sortedBy.length > 0 ? sortProducts(filtered) : filtered;
    let start = activePage === 1 ? 0 : itemsPerPage * (activePage - 1);
    let end = start + itemsPerPage;
    const xdd = sorted.slice(start, end);
    return xdd;
  }

  useEffect(() => {
    updateProducts();
  }, [sortedBy, activePage, itemsPerPage, filters]);

  useEffect(() => {
    if (activePage > pages) {
      setActivePage(pages);
    }
  });

  useEffect(() => {
    setPages(Math.ceil(props.products.length / itemsPerPage));
  }, [sortedBy, activePage, props.products, itemsPerPage, setItemsPerPage]);

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
        sortedBy={sortedBy}
        setSortedBy={setSortedBy}
      />
      <ProductGrid products={updateProducts()} />
    </section>
  );
}

export default Products;
