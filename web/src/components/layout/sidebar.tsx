"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  ClipboardList,
  Activity,
  Settings,
  Mail,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/records", label: "Records", icon: ClipboardList },
  { href: "/status", label: "Status", icon: Activity },
  { href: "/settings", label: "Settings", icon: Settings },
  { href: "/contact", label: "Contact", icon: Mail },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r bg-sidebar text-sidebar-foreground flex flex-col">
      <div className="p-5 border-b space-y-3">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400 text-sm font-bold text-white shadow-lg shadow-violet-500/30">
            M
          </span>
          <div className="min-w-0">
            <h1 className="text-base font-semibold tracking-tight">MoeenDev</h1>
            <p className="text-xs text-muted-foreground truncate">
              Full-Stack Console
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-violet-500/15 to-cyan-400/15 px-2.5 py-1 text-[11px] font-medium text-primary ring-1 ring-primary/20">
            <Zap className="h-3 w-3" />
            Next.js 16 · FastAPI
          </span>
        </div>
      </div>
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
              pathname === item.href
                ? "bg-sidebar-accent text-sidebar-accent-foreground"
                : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
            )}
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="flex items-center justify-between border-t p-4">
        <p className="text-xs text-muted-foreground">MoeenDev v2.0</p>
        <ThemeToggle />
      </div>
    </aside>
  );
}