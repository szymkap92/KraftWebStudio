"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type SafeImageProps = Omit<ImageProps, "onError"> & {
  fallbackText?: string;
};

export function SafeImage({ fallbackText, className, alt, ...props }: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={cn(
          "flex flex-col items-center justify-center gap-2 bg-muted text-muted-foreground",
          className
        )}
        role="img"
        aria-label={alt}
      >
        <ImageIcon className="h-10 w-10 opacity-40" />
        {fallbackText && (
          <span className="text-xs text-center px-4 opacity-60">{fallbackText}</span>
        )}
      </div>
    );
  }

  return (
    <Image
      {...props}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
    />
  );
}
