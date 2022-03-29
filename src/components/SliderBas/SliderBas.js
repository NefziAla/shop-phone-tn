import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../node_modules/swiper/swiper.min.css";
import "../../../node_modules/swiper/modules/effect-coverflow/effect-coverflow.min.css";
import "../../../node_modules/swiper/modules/navigation/navigation.min.css";
import "../../../node_modules/swiper/modules/pagination/pagination.min.css";
import "./style.css";
import apple from "./images/apple.jpg";
import samsung from "./images/samsung.jpg";
import redmi from "./images/redmi.jpg";
import hawei from "./images/hawei.jpg";
import xiaomi from "./images/xiaomi.jpg";

import { Pagination, Navigation, Autoplay } from "swiper";
import SwiperCore from "swiper/core";
import { useHistory } from "react-router-dom";
SwiperCore.use([Navigation, Pagination, Autoplay]);
const SliderBas = () => {
    const history=useHistory()
    return (
        <div className="container">
          <Swiper
            spaceBetween= {30}
            navigation={true}

            autoplay={{
                delay: 2000,
                disableOnInteraction:false
              }}
          
        
           
            pagination={{
              clickable: true
            }}
            grabCursor={true}
            slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
            centeredSlides={true}
            loop= {true}
        
          




            className="mySwiper"
          >
            <SwiperSlide >
              <img src={apple} alt="" onClick={()=>history.push('/products/iphone')}/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={samsung} alt="" onClick={()=>history.push('/products/sumsung')}/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={xiaomi} alt=""onClick={()=>history.push('/products/redmi')}/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={hawei} alt="" onClick={()=>history.push('/products/huawei')}/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={redmi} alt="" onClick={()=>history.push('/products/redmi')}/>
            </SwiperSlide>
          </Swiper>
        </div>
      );
}

export default SliderBas