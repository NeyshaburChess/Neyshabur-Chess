import Link from "next/link";
 
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-5 px-4 text-center">
      <h1 className="text-6xl font-bold">404</h1>
 
      <h2 className="text-2xl font-semibold">
        صفحه مورد نظر پیدا نشد
      </h2>
 
      <p className="text-gray-600">
        ممکن است آدرس اشتباه باشد یا صفحه حذف شده باشد.
      </p>
 
      <Link
        href="/"
        className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 transition"
      >
        بازگشت به صفحه اصلی
      </Link>
    </div>
  );
}