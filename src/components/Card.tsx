import { LucideIcon } from "lucide-react";
import React from "react";

export type CardProps = {
  label: string;
  icon: LucideIcon;
  weight?: string;
  description?: string;
  bin?: string;
  totalwaste?: string;
  activeArea?: string;
};

export default function Card(props: CardProps) {
  return (
    <CardContent>
      <section className="flex justify-between gap-2">
        <p className="text-sm">{props.label}</p>
        <props.icon className="h-8 w-8 text-gray-500" />
      </section>
      <section className="flex flex-col gap-1">
        <h2 className="text-2xl font-semibold">{props.weight}</h2>
        <h2 className="text-2xl font-semibold">{props.bin}</h2>
        <h2 className="text-2xl font-semibold">{props.totalwaste}</h2>
        <h2 className="text-2xl font-semibold">{props.activeArea}</h2>
        <p className="text-sm text-gray-500">{props.description}</p>
      </section>
    </CardContent>
  );
}

export function CardContent(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className="flex w-full flex-col gap-3 rounded-xl border p-5 shadow"
    ></div>
  );
}
