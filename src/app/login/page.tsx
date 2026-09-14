export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-black p-4">
      <div className="w-full max-w-md bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold mb-6">Welcome Back to Xplus Shop</h1>
        <input placeholder="Email" className="w-full p-3 border rounded-lg mb-3 dark:bg-zinc-800" />
        <input type="password" placeholder="Password" className="w-full p-3 border rounded-lg mb-4 dark:bg-zinc-800" />
        <button className="w-full bg-black text-white p-3 rounded-lg font-semibold">Login</button>
        <p className="text-sm mt-4 text-center">No account? <a href="/register" className="underline">Register</a></p>
      </div>
    </div>
  )
}
