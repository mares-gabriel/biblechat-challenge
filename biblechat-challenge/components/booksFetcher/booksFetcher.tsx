"use client";

// Utilities
import { useBookFetcher } from "@/hooks/useBookFetcher";

// Components
import Filters from "../filters";
import Pagination from "../pagination";
import Book from "../book/book";
import Loading from "../loading";

export default function BooksFetcher() {
   const {
      currentBooks,
      currentFilter,
      changeFilter,
      isLoading,
      switchPage,
      currentPage,
      totalPages,
      filters,
   } = useBookFetcher();

   return (
      <div>
         <h1>Books</h1>
         <div className="flex flex-row">
            <Filters filters={filters} changeFilter={changeFilter} />
            <div className="flex flex-col">
               <p>{currentFilter && `Current filter: ${currentFilter}`}</p>
               <div className="flex flex-col">
                  {currentFilter ? (
                     isLoading ? (
                        <Loading />
                     ) : currentBooks.length === 0 ? (
                        <>There are no books matching this criteria</>
                     ) : (
                        <>
                           {currentBooks
                              .map((book: any) => {
                                 return <Book key={book.id} title={book.title} />;
                              })
                              .slice((currentPage - 1) * 10, currentPage * 10)}
                           <Pagination
                              currentPage={currentPage}
                              totalPages={totalPages}
                              switchPage={switchPage}
                           />
                        </>
                     )
                  ) : (
                     <>Please select a filter</>
                  )}
               </div>
            </div>
         </div>
      </div>
   );
}
