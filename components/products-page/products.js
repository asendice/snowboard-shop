import { useState } from "react";
import classes from "./products.module.css";
import CategorySidebar from "./category-sidebar";
import ProductNavigation from "./product-navigation";
import ProductGrid from "./product-grid";

function Products(props) {
  const [filters, setFilters] = useState([]);
  
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

  return (
    <section className={classes.container}>
      <CategorySidebar
        categories={SideBarCategories()}
        updateFilters={updateFilters}
        filters={filters}
      />
      <ProductNavigation />
      <ProductGrid products={props.products}/>
    </section>
  );
}

export default Products;
