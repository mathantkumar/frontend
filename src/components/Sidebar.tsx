"use client";
import { useState } from "react";
import { Nav } from "./ui/nav";
import {
  ChevronRight,
  LayoutDashboard,
  ReceiptIcon,
  Settings,
  User,
} from "lucide-react";
import { Button } from "./ui/button";
import { useWindowWidth } from "@react-hook/window-size";

export default function Sidebar() {
  const [collapse, setCollapse] = useState(false);
  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 750;

  function handleToggle() {
    setCollapse(!collapse);
  }
  return (
    <div className="relative min-w-[80px] border-r px-3 pb-10 pt-24">
      {!mobileWidth && (
        <div className="absolute right-[-20px] top-7">
          <Button
            onClick={handleToggle}
            variant="secondary"
            className="rounded-full p-2"
          >
            <ChevronRight />
          </Button>
        </div>
      )}

      <Nav
        isCollapsed={mobileWidth ? true : collapse}
        links={[
          {
            title: "Dashboard",
            href: "/",
            icon: LayoutDashboard,
            variant: "default",
          },
          {
            title: "Transactions",
            icon: ReceiptIcon,
            href: "/transactions",
            variant: "ghost",
          },
          {
            title: "Profile",
            icon: User,
            variant: "ghost",
            href: "/profile",
          },

          {
            title: "Settings",
            icon: Settings,
            href: "/settings",
            variant: "ghost",
          },
        ]}
      />
    </div>
  );
}
