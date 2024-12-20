type BookTypes = {
   title: string;
};

export default function Book({ title }: BookTypes) {
   return (
      <div>
         <p>{title}</p>
      </div>
   );
}
