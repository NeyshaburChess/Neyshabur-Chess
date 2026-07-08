"use client";
 
import { useEffect } from "react";
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);
 
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="text-3xl font-bold text-red-600">
        خطایی رخ داده است
      </h1>
 
      <p className="text-gray-600">
        متأسفانه هنگام بارگذاری این صفحه مشکلی پیش آمده است.
      </p>
 
      <button
        onClick={() => reset()}
        className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700 transition"
      >
        تلاش مجدد
      </button>
    </div>
  );
}