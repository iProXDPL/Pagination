const PaginationFooter = ({ currentPage, totalPages, setCurrentPage }) => {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <button
        key={i}
        onClick={() => setCurrentPage(i)}
        style={{
          margin: "0 2px",
        }}
        disabled={currentPage === i}
      >
        {i}
      </button>
    );
  }

  return (
    <div>
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Poprzednia
      </button>
      {pages}
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Następna
      </button>
    </div>
  );
};

export default PaginationFooter;
