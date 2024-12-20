type FiltersProps = {
   filters: string[];
   changeFilter: (event: any) => void;
};

export default function Filters({ filters, changeFilter }: FiltersProps) {
   return (
      <form className="bg-red-300 flex flex-col">
         {filters.map((filter) => {
            return (
               <label htmlFor="filter" key={filter}>
                  <span>{filter}</span>
                  <input
                     type="radio"
                     defaultChecked={filter === "Fiction"}
                     value={filter}
                     name="filter"
                     onChange={changeFilter}
                  />
               </label>
            );
         })}
      </form>
   );
}
