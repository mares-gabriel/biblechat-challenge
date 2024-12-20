interface PaginationProps {
   currentPage: number;
   totalPages: number;
   switchPage: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, switchPage }: PaginationProps) {
   return (
      <div className="flex flex-row gap-[10px]">
         {Array.from({ length: totalPages }, (_, page) => (
            <div
               key={page}
               onClick={() => switchPage(page + 1)}
               className="cursor-pointer"
               style={{
                  fontSize: currentPage === page + 1 ? "20px" : "16px",
               }}
            >
               {page + 1}
            </div>
         ))}
      </div>
   );
}
