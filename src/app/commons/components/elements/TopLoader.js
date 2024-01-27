"use client";
import "../../style/nprogress.css";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import NProgress from "nprogress";

NProgress.configure({
  minimum: 0.3,
  easing: "ease",
  speed: 500,
  showSpinner: false,
});

function NProgressDone() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  useEffect(() => {
    NProgress.start();
    setTimeout(() => {
      NProgress.done();
    }, [pathname, searchParams]);
  }, [pathname, searchParams]);
  return;
}

export default function TopLoader() {
  return <>{NProgressDone()}</>;
}
