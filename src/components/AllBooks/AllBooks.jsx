// import React from 'react'
import Book1 from '../../assets/books/book2.jpg';
import Book2 from '../../assets/books/book1.jpg';
import Book3 from '../../assets/books/book3.jpg';
import Book4 from '../../assets/books/book4.jpg';
import Book5 from '../../assets/books/book5.jpg';
import Book6 from '../../assets/books/book6.jpg';
import Book7 from '../../assets/books/book7.jpg';
import Book8 from '../../assets/books/book8.jpg';
import { FaStar } from 'react-icons/fa';



const BooksData = [
  {
    id: 1,
    img: Book1,
    title: "The famous five",
    rating: 5.0,
    author: 'G.Blyton',
  },
  {
    id: 2,
    img: Book2,
    title: "Salem's lot",
    rating: 4.5,
    author: 'S.King',
  },
  {
    id: 3,
    img: Book3,
    title: 'Hobbit',
    rating: 4.7,
    author: 'J.Tolkien',
  },
  {
    id: 4,
    img: Book4,
    title: 'Abroad in Japan',
    rating: 4.4,
    author: 'C.Broad',
  },
  {
    id: 5,
    img: Book5,
    title: "The Lost Bookshop",
    rating: 4.5,
    author: 'E.Woods',
  },
  {
    id: 6,
    img: Book6,
    title: 'Homecoming',
    rating: 4.7,
    author: 'K.Morton',
  },
  {
    id: 7,
    img: Book7,
    title: 'The Thursday Murder Club',
    rating: 4.7,
    author: 'R.Osman',
  },
  {
    id: 8,
    img: Book8,
    title: 'The Silent Patient',
    rating: 4.7,
    author: 'A.Michaelides',
  },
];

const AllBooks = () => {
  return (
    <>
      <div className="py-10">
        <div className="container placeholder-gray-400">
          {/* header */}
          <div
            data-aos="slide-up"
            className="text-center mb-20 max-w-[400px] mx-auto"
          >
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Best Books
            </p>
            <h1 className="text-3xl font-bold">Top Books</h1>
            <p className="text-xs text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
              itaque aspernatur mollitia sunt, hic corrupti nisi porro nulla
              distinctio facere adipisci deserunt iure, dolores inventore ullam
              suscipit molestias? Incidunt, ea!
            </p>
          </div>
          {/* card */}
          <div     data-aos='slide-up'>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 place-items-center ">
              {BooksData.map((data) => (
                <div key={data.id} className="space-y-3">
                  <img
                    src={data.img}
                    alt="bookImg1"
                    className="h-[220px] w-[150px] object-cover rounded-md"
                  />
                  <div>
                    <h2 className="font-semibold">{data.title}</h2>
                    <p className="text-sm text-gray-700 dark:text-gray-400">
                      {data.author}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="text-center cursor-pointer mt-10 bg-primary p-2 rounded-full tex-white"
              onClick={() => console.log('clicked')}
            >
              View All Books
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllBooks;
