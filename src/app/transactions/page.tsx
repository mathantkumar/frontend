"use client";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/DataTable";
import PageTitle from "@/components/PageTitle";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import { Provider } from "react-redux";
import store from "@/store";
import Form from "@/components/Form";
interface Props {}

type Payment = {
  id: string;
  date: string;
  amount: number;
  balance: string;
  status: "Pending" | "Processing" | "Success" | "Failed";
};

export const payments: Payment[] = [
  {
    id: "728ed52f",
    amount: 16,
    balance: "120",
    status: "Pending",
    date: "10-05-2024",
  },
  {
    id: "489e1d42",
    date: "11-05-2024",
    amount: 10,
    balance: "150",
    status: "Processing",
  },
];

export default function TransactionsPage(props: Props) {
  const [showPayoutForm, setShowPayoutForm] = useState(false);

  const handleAddNew = () => {
    setShowPayoutForm(true);
  };

  const handleClosePayoutForm = () => {
    setShowPayoutForm(false);
  };
  return (
    <>
      <Provider store={store}>
        <div className="fex flex-col gap-5 w-full p-5">
          <PageTitle title="Recent Transactions" />
          <Button className="text-xs md:text-sm" onClick={handleAddNew}>
            <Plus className="mr-2 h-4 w-4" /> Create a Payout Request
          </Button>
          <DataTable columns={columns} data={payments} />
          {showPayoutForm && <Form onClose={handleClosePayoutForm} />}
        </div>
      </Provider>
    </>
  );
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "date",
    header: "Requested Date",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },

  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return (
        <div
          className={cn("font-medium w-fit px-4 py-2 rounded-lg", {
            "bg-red-200": row.getValue("status") === "Pending",
            "bg-orange-200": row.getValue("status") === "Processing",
            "bg-green-200": row.getValue("status") === "Completed",
          })}
        >
          {row.getValue("status")}
        </div>
      );
    },
  },

  {
    accessorKey: "balance",
    header: "Balance",
  },
];
