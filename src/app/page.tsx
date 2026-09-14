import ThemeToggle from "@/components/theme-toggle"
export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <nav className="flex justify-between p-6 border-b">
        <h1 className="font-bold text-xl">XPLUS SHOP GLOBAL</h1>
        <div className="flex gap-4 items-center">
          <ThemeToggle />
          <a href="/login" className="text-sm">Login</a>
          <a href="/register" className="text-sm bg-black text-white dark:bg-white dark:text-black px-4 py-1 rounded-full">Register</a>
        </div>
      </nav>
      <div className="p-10 text-center mt-20">
        <h2 className="text-5xl font-bold mb-4">Your Global Shop</h2>
        <p className="text-gray-500 mb-8">Theme + Login + Register ready</p>
        <a href="/login" className="bg-black text-white px-8 py-3 rounded-full">Shop Now</a>
      </div>
    </main>
  )
}
