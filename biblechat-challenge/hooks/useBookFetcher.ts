import { useEffect, useState } from "react";

export function useBookFetcher() {
   const [currentBooks, setCurrentBooks] = useState([]);
   const [currentFilter, setCurrentFilters] = useState();
   const [isLoading, setIsLoading] = useState<boolean>(true);
   const [currentPage, setCurrentPage] = useState<number>(1);
   const [totalPages, setTotalPages] = useState<number>(0);

   const switchPage = (number: number) => {
      setCurrentPage(number);
   };

   const booksPerPage = 10;

   useEffect(() => {
      const fetchData = async () => {
         if (currentFilter) {
            setIsLoading(true);
            const response = await fetch(`http://localhost:3000/books?genre=${currentFilter}`);
            const data = await response.json();
            setCurrentBooks(data.books);
            setIsLoading(false);
            setCurrentPage(1);
            setTotalPages(data.books.length / booksPerPage);
         }
      };

      fetchData();
   }, [currentFilter]);

   const changeFilter = (event: any) => {
      setCurrentFilters(event.target.value);
   };

   return {
      currentBooks,
      currentFilter,
      changeFilter,
      isLoading,
      currentPage,
      switchPage,
      totalPages,
   };
}
