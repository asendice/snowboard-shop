import { useState, useEffect } from "react";
import classes from "./products.module.css";
import CategorySidebar from "./category-sidebar";
import ProductNavigation from "./product-navigation";
import ProductGrid from "./product-grid";
import PageNavigator from "./page-navigatior";

function Products(props) {
  const [filters, setFilters] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [sortedBy, setSortedBy] = useState("");
  const [pages, setPages] = useState(1);
  const [activePage, setActivePage] = useState(1);

  console.log(filters, "filters");

  function updateFilters(filter) {
    const options = filters.map((item) => item.option);
    const categories = filters.map((item) => item.category);
    const filteredItem = filters.filter(
      (item) => item.category === filter.category
    )[0];
    const filteredOut = filters.filter(
      (item) => item.category !== filter.category
    );

    if (options.flat().includes(filter.option)) {
      const itemChanged = {
        category: filteredItem.category,
        option: options.flat().filter((opt) => opt !== filter.option),
      };
      if (itemChanged.option.length === 0) {
        setFilters([...filteredOut]);
        return;
      }
      setFilters([itemChanged, ...filteredOut]);
      return;
    }
    if (categories.includes(filter.category)) {
      const add = {
        category: filteredItem.category,
        option:
          typeof filteredItem.option === "string"
            ? [filter.option, ...[filteredItem.option]]
            : [filter.option, ...filteredItem.option],
      };
      setFilters([add, ...filteredOut]);
      return;
    }
    setFilters((filters) => [...filters, filter]);
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
    const filteredProducts = props.products.filter((product) => {
      const doesInclude = filters.every((element) => {
        const { category, option } = element;
        if (typeof product[category] === "string") {
          return option.includes(product[category]);
        } else {
          return product[category]
            .map((item) => option.includes(item))
            .includes(true);
        }
      });
      return doesInclude;
    });
    return filteredProducts;
  }

  const filtered = filterProducts();

  function updateProducts() {
    const sorted = sortedBy.length > 0 ? sortProducts(filtered) : filtered;
    const start = activePage === 1 ? 0 : itemsPerPage * (activePage - 1);
    const end = start + itemsPerPage;
    const xdd = sorted.slice(start, end);
    return xdd;
  }

  useEffect(() => {
    updateProducts();
  }, [sortedBy, activePage, itemsPerPage, filters]);

  useEffect(() => {
    if (activePage > pages || activePage === 0) {
      setActivePage(pages);
    }
  });

  useEffect(() => {
    setPages(Math.ceil(filtered.length / itemsPerPage));
  }, [
    sortedBy,
    activePage,
    props.products,
    itemsPerPage,
    setItemsPerPage,
    filters,
  ]);

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
      <div className={classes.pageNav}>

      <PageNavigator
        pages={pages}
        activePage={activePage}
        setActivePage={setActivePage}
      />
      </div>
    </section>
  );
}

export default Products;
