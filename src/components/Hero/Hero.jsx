import { useState } from 'react';
import Book1 from '../../assets/books/book1.jpg';
import Book2 from '../../assets/books/book2.jpg';
import Book3 from '../../assets/books/book3.jpg';
import Vector from '../../assets/website/blue-pattern.png';

const ImageList = [  {
    id: 1,
    img: Book1,
    title: "Salem's lot",
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias molestiae, placeat tempore veniam nobis doloribus minus culpa porro eaque commodi assumenda reprehenderit. Veritatis a neque laboriosam error facere, aliquid veniam.',
  },
  {
    id: 2,
    img: Book2,
    title: 'The famous five',
    description:
      "The holidays are always full of excitement for the Five, whether they're rowing out to Kirrin Island, exploring dungeons or going camping. There are bound to be smugglers to catch, secrets to uncover and enemies to outwit.",
  },

  {
    id: 3,
    img: Book3,
    title: 'Hobbit',
    description:
      'Lost Boy Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias molestiae, placeat tempore veniam nobis doloribus minus culpa porro eaque commodi assumenda reprehenderit. Veritatis a neque laboriosam error facere, aliquid veniam.',
  },
];

const Hero = ({handleOrderPopup}) => {
  const [imageId, setImageId] = useState(Book1);
  const [title, setTitle] = useState("Salem's Lot");
  const [description, setDescription] = useState(
    "Thousands of miles away from the small township of 'Salem's Lot, two terrified people, a man and a boy, still share the secrets of those clapboard houses and tree-lined streets. They must return to 'Salem's Lot for a final confrontation with the unspeakable evil that lives on in the town.",
  );
  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
  };
  return (
    <>
      <div
        className="min-h-[500px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200"
        style={bgImage}
      >
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
              <h1
                data-aos="zoom-out"
                data-aos-duration="500"
                className="text-5xl sm:text-6xl lg:text-7xl font-bold"
              >
                {title}
              </h1>
              <p
                data-aos="slide-up"
                data-aos-duration="500"
                data-aos-delay="100"
                className="  text-right text-sm bg-primary-800 p-3"
              >
                S.King
              </p>
              <p
                data-aos="zoom-out"
                data-aos-duration="500"
                data-aos-delay="100"
                className="text-sm"
              >
                {description}
              </p>
              <div>
                <button
                onClick={handleOrderPopup}
                  data-aos="zoom-in"
                  className="bg-gradient-to-r from-primary to-secondary rounded-full p-2 mt-4 hover:scale-105 duration-200"
                >
                  Order Now
                </button>
              </div>
            </div>
            {/* image section */}
            <div className="min-h-[450px] flex justify-center items-center relative order-1 sm:order-2">
              {/* main image */}

              <div className=" h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
                <img
                  data-aos="zoom-in"
                  data-aos-once="true"
                  src={imageId}
                  alt="book2"
                  className=" h-[300px] w-[250px] sm:h-[450px] sm:w-[400px] sm:scale-125 object-containt mx-auto"
                />
              </div>
              {/* other images */}
              <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 justify-center gap-4 absolute -bottom-[40px] lg:right-1 bg-white rounded-full">
                {ImageList.map((data) => (
                  <img
                    
                    key={data.id}
                    data-aos="zoom-in"
                    data-aos-once="true"
                    src={data.img}
                    onClick={() => {
                      setImageId(
                        data.id === 1 ? Book1 : data.id === 2 ? Book2 : Book3
                      );
                      setTitle(data.title);
                      setDescription(data.description);
                    }}
                    alt="biryani img"
                    className="max-w-[100px] h-[100px] object-contain inline-block hover:scale-110 duration-200"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
