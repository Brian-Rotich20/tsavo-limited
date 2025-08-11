"use client";
import { useEffect, useState } from "react";
import LoadingSpinner from "./components/LoadingSpinner";
import { usePathname } from "next/navigation";

export default function Loading() {
  const [startTime] = useState(Date.now());
  const [showSpinner, setShowSpinner] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let isMounted = true;

    const checkReady = setInterval(() => {
      const elapsed = Date.now() - startTime;
      if (elapsed >= 3000 && isMounted) {
        setFadeOut(true); // Start fading out
        setTimeout(() => {
          setShowSpinner(false); // Remove from DOM after fade
        }, 500); // Matches CSS transition time
        clearInterval(checkReady);
      }
    }, 100);

    return () => {
      isMounted = false;
      clearInterval(checkReady);
    };
  }, [pathname, startTime]);

  return showSpinner ? (
    <div
      className={`transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <LoadingSpinner />
    </div>
  ) : null;
}
