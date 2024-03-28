import { useState } from 'react';
import Book1 from '../../assets/books/book1.jpg';
import Book2 from '../../assets/books/book2.jpg';
import Book3 from '../../assets/books/book3.jpg';
import Vector from '../../assets/website/blue-pattern.png';

const ImageList = [
  {
    id: 1,
    img: Book2,
    title: 'His Life will forever be changed',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias molestiae, placeat tempore veniam nobis doloribus minus culpa porro eaque commodi assumenda reprehenderit. Veritatis a neque laboriosam error facere, aliquid veniam.',
  },
  {
    id: 2,
    img: Book1,
    title: "Who's there",
    description:
      ' Who there Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias molestiae, placeat tempore veniam nobis doloribus minus culpa porro eaque commodi assumenda reprehenderit. Veritatis a neque laboriosam error facere, aliquid veniam.',
  },
  {
    id: 3,
    img: Book3,
    title: 'Lost boy',
    description:
      'Lost Boy Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias molestiae, placeat tempore veniam nobis doloribus minus culpa porro eaque commodi assumenda reprehenderit. Veritatis a neque laboriosam error facere, aliquid veniam.',
  },
];

const Hero = () => {
  const [imageId, setImageId] = useState(Book2);
  const [title, setTitle] = useState('His Life will forever be Changed');
  const [description, setDescription] = useState(
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloreaccusamus amet molestiae a ea suscipit tempore iure debitis corrupti veritatis atque distinctio? Lorem ipsu',
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
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                {title}
              </h1>
              <p className="bg-clip-text text-transparent text-right text-sm bg-gradient-to-r from-primary to-secondary">
                by Author
              </p>
              <p className="text-sm">{description}</p>
              <div>
                <button className="bg-gradient-to-r from-primary to-secondary rounded-full p-2 mt-4 hover:scale-105 duration-200">
                  Order Now
                </button>
              </div>
            </div>
            {/* image section */}
            <div className="min-h-[450px] flex justify-center items-center relative order-1 sm:order-2">
              {/* main image */}

              <div className=" h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
                <img
                  src={imageId}
                  alt="book2"
                  className=" h-[300px] w-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-containt mx-auto"
                />
              </div>
              {/* other images */}
              <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 justify-center gap-4 absolute -bottom-[40px] lg:right-1 bg-white rounded-full">
                {ImageList.map((data) => (
                  <img
                    key={data.id}
                    src={data.img}
                    className="max-w-[100px] h-[100px] object-contain inline-block hover:scale-110 duration-200"
                    onClick={() => {
                      setImageId(
                        data.id === 1 ? Book1 : data.id === 2 ? Book2 : Book3,
                      );
                      setTitle(data.title);
                      setDescription(data.description);
                    }}
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
