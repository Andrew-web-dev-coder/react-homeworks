import { arr } from '../resources/books';

function BookList() {
  return (
    <ul>
      {arr.map((title, index) => (
        <li key={index}>{title}</li>))}
    </ul>
  );
}

export default BookList;