"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

interface ToastProps {
  message: string;
  type: "success" | "error";
  onClose: () => void;
}

export function Toast({ message, type, onClose }: ToastProps) {
  React.useEffect(() => {
    const timer = setTimeout(onClose, 6000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      role="alert"
      aria-live="assertive"
      className={cn(
        "fixed bottom-6 right-6 z-50 max-w-sm rounded-lg border p-4 shadow-lg transition-all animate-slide-up",
        type === "success"
          ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
          : "border-red-500/30 bg-red-500/10 text-red-400"
      )}
    >
      <div className="flex items-start gap-3">
        <p className="text-sm flex-1">{message}</p>
        <button
          onClick={onClose}
          className="shrink-0 rounded-sm opacity-70 hover:opacity-100 cursor-pointer"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
