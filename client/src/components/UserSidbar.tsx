'use client'
import { Home, LogOut, MoreHorizontal, HeartHandshake, LayoutList, BringToFront, Bot, BookHeart } from "lucide-react";
import { SidebarDesktop } from "./SidebarDesktop";
import { SidebarItems } from "@/types/sidebar";
import { SidbarButton } from "./SidebarButton";

const sidebarItems: SidebarItems = {
  links: [{
    label: "الرئيسية",
    href: "/user",
    icon: Home
  },
  {
    label: "تبرع",
    href: "/user/donate",
    icon: HeartHandshake
  },
  {
    label: "تطوع",
    href: "/user/volunteer",
    icon: Home
  },
  {
    label: "اطلب خدمة",
    href: "/user/help",
    icon: LayoutList
  },

  {
    label: "الطلبات",
    href: "/user/orders",
    icon: BringToFront
  },
  {
    label: "تواصل مع AI",
    href: "/user/ai-chat",
    icon: Bot
  },

  {
    label: "خدمة خاصة",
    href: "/user/requests",
    icon: BookHeart
  },

  ],
  extra: (
    <div className="flex flex-col gap-3">

      <SidbarButton variant="outline" icon={LogOut} className="w-full">
        تسجيل الخروج
      </SidbarButton>
    </div>
  )
}

export function Sidbar() {

  return (
    <SidebarDesktop sidebarItems={sidebarItems} />
  )
}