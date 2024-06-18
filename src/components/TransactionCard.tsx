export type TransactionProps = {
  area: string;
  type: string;
  coins: string;
  date: string;
};

export default function TransactionCard(props: TransactionProps) {
  return (
    <>
      <div className="flex flex-wrap justify-between gap-3">
        <section className="flex justify-between gap-3">
          <div className="text-md">
            <p className="font-semibold">{props.area}</p> <p>{props.type}</p>
            <div className="text-sm text-ellipsis overflow-hidden whitespace-nowrap w-[120px]">
              <p>{props.date}</p>
            </div>
          </div>
        </section>
        <p className="text-green-700">{props.coins}</p>
      </div>
    </>
  );
}
