export default function CardPopuler() {
  return (
    <>
      <div className="mx-2 overflow-x-auto">
        <div className="grid grid-flow-col auto-cols-[130px] gap-x-3">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
            <div
              key={index}
              className="w-full h-[170px] bg-slate-200 rounded-lg mt-2 flex justify-center items-center"
            >{index + 1}</div>
          ))}
        </div>
      </div>
    </>
  );
}
