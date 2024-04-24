// import React from 'react'
import Slider from 'react-slick';

const testimonialData = [
  {
    id: 1,
    name: 'Victor',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio',
    img: 'https://picsum.photos/101/101',
  },
  {
    id: 2,
    name: 'Satya Narayan',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio',
    img: 'https://picsum.photos/102/102',
  },
  {
    id: 3,
    name: 'Sachin Tendulkar',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio',
    img: 'https://picsum.photos/103/103',
  },
];
const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    // slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className='pb-10'>
        <div className="container">
          {/* header */}
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              What our customers says
            </p>
            <h1 className="text-3xl font-bold">Testimonials</h1>
            <p className="text-xs text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
              itaque aspernatur mollitia sunt, hic corrupti nisi porro nulla
              distinctio facere adipisci deserunt iure, dolores inventore ullam
              suscipit molestias? Incidunt, ea!
            </p>
          </div>
          {/* card */}
          <div     data-aos='zoom-in'>
            <Slider {...settings}>
              {testimonialData.map((data) => (
                <div key={data.id} className='my-6'>
                  <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-6 rounded-xl dark:bg-gray-800 bg-primary/10 relative hover:dark:bg-primary/30 hover:dark:text-white ">
                    <div>
                      <img
                        src={data.img}
                        alt="testImg"
                        className="rounded-full w-20 h-20"
                      />
                    </div>
                    <div className='flex items-center gap-4 '>
                      <div>
                        <p className="text-sm ">{data.text}</p>
                        <p className="text-xl font-bold text-black/80 dark:text-light ">
                          {data.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
