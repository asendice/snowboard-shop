import { useEffect, Fragment } from "react";
import classes from "./product-slider.module.css";
import Product from "./product";
import { BsCaretLeft, BsCaretRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Virtual, Pagination, Scrollbar, Navigation, Ally } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function ProductSlider(props) {

  const { items } = props;

  return (
    <Fragment>
      <div className={classes.container}>
        <Swiper
          style={{padding: "2rem 3rem"}}
          modules={[Navigation, Pagination, Scrollbar]}
          spaceBetween={50}
          slidesPerView={4}
          centeredSlides={false}
          navigation
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            "1400": {
              width: 1400,
              slidesPerView: 4,
              spaceBetween: 50
            },
            "1065": {
              width: 1065,
              slidesPerView: 3,
              spaceBetween: 20
            },
            "755": {
              width: 755,
              slidesPerView: 2,
              spaceBetween: 10
            },
            "0": {
              width: 0,
              slidesPerView: 1,
              spaceBetween: 0
            },
          }}
        >
          {items.map((item) => (
            <SwiperSlide>
              <Product key={item._id} item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <div className={classes.iconContainer}>
          <BsCaretLeft className={classes.icon} onClick={() => onLeftClick()} />
        </div>
        <ul style={{ transform: `translateX(-${activeIndex * 25}%)` }}>
          {items.map((item) => (
            <Product key={item._id} item={item} />
          ))}
        </ul>
        <div className={classes.iconContainer}>
          <BsCaretRight
            className={classes.icon}
            onClick={() => onRightClick()}
          />
        </div> */}
      </div>
    </Fragment>
  );
}

export default ProductSlider;
