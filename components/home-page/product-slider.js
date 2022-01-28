import { Fragment } from "react";
import classes from "./product-slider.module.css";
import Product from "./product";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import { Pagination, Scrollbar, Navigation } from "swiper";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function ProductSlider(props) {
  const { items, category } = props;

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1350 },
      items: 4,
      slidesToSlide: 2, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1350, min: 1025 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    tinytablet: {
      breakpoint: { max: 1025, min: 700 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: {max: 700, min: 0},
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <Fragment>
      <div className={classes.container}>
        {/* <Swiper
          // style={{ padding: "2rem 3rem" }}
          modules={[Navigation, Pagination, Scrollbar]}
          spaceBetween={50}
          slidesPerView={4}
          centeredSlides={true}
          // breakpoints={{
          //   1400: {
          //     width: 1400,
          //     slidesPerView: 4,
          //     spaceBetween: 50,
          //   },
          //   1065: {
          //     width: 1065,
          //     slidesPerView: 3,
          //     spaceBetween: 20,
          //   },
          //   755: {
          //     width: 755,
          //     slidesPerView: 2,
          //     spaceBetween: 10,
          //   },
          //   0: {
          //     width: 0,
          //     slidesPerView: 1,
          //     spaceBetween: 0,
          //   },
          // }}
        >
          {items.map((item) => (
            <SwiperSlide key={item._id} >
              <Product key={item.title} item={item} category={category} />
            </SwiperSlide>
          ))}
        </Swiper> */}
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          // centerMode={true}
          // partialVisibile={true}
          // means to render carousel on server-side.
          infinite={true}
          // autoPlay={props.deviceType !== "mobile" ? true : false}
          // autoPlaySpeed={5000}
          keyBoardControl={true}
          customTransition="all .5s"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass={classes.item}
        >
          {items.map((item) => (
            <Product key={item.title} item={item} category={category} />
          ))}
        </Carousel>
        ;
      </div>
    </Fragment>
  );
}

export default ProductSlider;
