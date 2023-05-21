// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"

// import required modules
import { Pagination } from "swiper";

import technologies   from './data'
import './technologies.css'
import TechnologyCard from "./Tecnology";


const Technologies = () => {
	return (
		<section id="technologies">
			<h2>Technologies I Work With</h2>
			<p>
				Here are some of the technologies I work with
			</p>
			<div className="container">
				<Swiper
					slidesPerView={2}
					spaceBetween={30}
					breakpoints={{
						601: {slidesPerView: 6},
						1025: {slidesPerView: 8}
					}}
					pagination={{
						clickable: true,
					}}
					modules={[Pagination, Autoplay]}
					autoplay={true}
					className="mySwiper"
				>
					{
						technologies.map(technology => (
							<SwiperSlide key={technology.id}>
								<TechnologyCard technology={technology}/>
							</SwiperSlide>
						))
					}
				</Swiper>
			</div>
		</section>
	)
}

export default Technologies
