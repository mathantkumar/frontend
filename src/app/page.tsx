import BarChart from "@/components/BarChart";
import Card, { CardContent, CardProps } from "@/components/Card";
import PageTitle from "@/components/PageTitle";
import TransactionCard, {
  TransactionProps,
} from "@/components/TransactionCard";
import { HandPlatter, MapPin, Trash, Weight } from "lucide-react";

const cardData: CardProps[] = [
  {
    label: "Weight disposed",
    icon: Weight,
    weight: "12Kg",
    description: "You have done a great job!",
  },
  {
    label: "Active",
    icon: Trash,
    bin: "2 Active Bins",
    description: "Recent active bins",
  },
  {
    label: "Waste Collected",
    icon: HandPlatter,
    totalwaste: "10Kg",
    description: "You have reduced 6.02 gigatons of CO2",
  },
  {
    label: "Active Area",
    icon: MapPin,
    activeArea: "Khobar - 2 ",
    description: "Your most recent active area",
  },
];

const transactionData: TransactionProps[] = [
  {
    area: "Jubail",
    type: "Tetrapack",
    coins: "+30.00",
    date: "20-05-2024",
  },
  {
    area: "Khobar",
    type: "Plastic",
    coins: "+90.85",
    date: "08-06-2024",
  },
  {
    area: "Khobar",
    type: "Plastic",
    coins: "+66.39",
    date: "10-06-2024",
  },
  {
    area: "Downton Dubai",
    type: "Cans",
    coins: "+70.88",
    date: "14-06-2024",
  },
  {
    area: "Mecca",
    type: "Paper",
    coins: "+40.25",
    date: "16-06-2024",
  },
];

export default function Home() {
  return (
    <>
      <div className="fex flex-col gap-5 w-full">
        <p className="font-semibold"> Welcome back, Mark</p>
        <PageTitle title="Dashboard" />
        <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transistion-all sm:grid-cols-2 xl:grid-cols-4 pt-5 ">
          {cardData.map((data, i) => (
            <Card
              key={i}
              label={data.label}
              icon={data.icon}
              bin={data.bin}
              weight={data.weight}
              description={data.description}
              totalwaste={data.totalwaste}
              activeArea={data.activeArea}
            ></Card>
          ))}
        </section>
        <section className="grid grid-cols-1 gap-4 transistion-all lg:grid-cols-2 pt-5 ">
          <CardContent>
            <p className="p-4 font-semibold">Overview</p>
            <BarChart />
          </CardContent>
          <CardContent className="flex justify-between gap-4">
            <section>
              <h3 className="font-semibold">Recent Transactions</h3>
            </section>
            {transactionData.map((data, i) => (
              <TransactionCard
                key={i}
                area={data.area}
                type={data.type}
                coins={data.coins}
                date={data.date}
              ></TransactionCard>
            ))}
          </CardContent>
        </section>
      </div>
    </>
  );
}
