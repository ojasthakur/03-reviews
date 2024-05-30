import { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const nextPerson = () => {
    setIndex((currenIndex) => {
      if (currenIndex === people.length - 1) {
        return 0;
      } else {
        return currenIndex + 1;
      }
    });
  };
  const prevPerson = () => {
    setIndex((currenIndex) => {
      if (currenIndex === 0) {
        return people.length - 1;
      } else {
        return currenIndex - 1;
      }
    });
  };
  const randomPerson = () => {
    setIndex((currenIndex) => {
      let randomNumber = Math.floor(Math.random() * people.length);
      while (randomNumber === currenIndex) {
        randomNumber = Math.floor(Math.random() * people.length);
      }
      return randomNumber;
    });
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button type="button" className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button type="button" className="prev-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button
          type="button"
          className="btn btn-hipster"
          onClick={randomPerson}
        >
          surprise me
        </button>
      </article>
    </main>
  );
};
export default App;
