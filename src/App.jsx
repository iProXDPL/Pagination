import { useState, useEffect } from "react";
import PaginationFooter from "./components/Pagination";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Przykładowe dane do paginacji
    const arr = Array.from({ length: 5000 }, (_, i) => ({
      id: i + 1,
      title: `Tytuł ${i + 1}`,
      body: `To jest przykładowy opis dla elementu ${i + 1}.`,
    }));
    setData(arr);
    /*
    // Pobieranie danych z API
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((d) => {
        const users = d.users.map((user) => ({
          id: user.id,
          title: `${user.firstName} ${user.lastName}`,
          body: user.email,
        }));
        setData(users);
      });
      */
  }, []);
  /*
  //bez paginacji
  return (
    <>
      <h1>Przykład stronicowania</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <b>{item.title}</b>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </>
  );
  */

  //z paginacja
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 100;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const currentItems = data.slice(startIdx, startIdx + itemsPerPage);
  return (
    <>
      <h1>Przykład stronicowania</h1>
      <ul>
        {currentItems.map((item) => (
          <li key={item.id}>
            <b>{item.title}</b>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
      <PaginationFooter
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}

export default App;
