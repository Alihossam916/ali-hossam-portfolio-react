import { Button } from "@/components/ui/button"

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button>Click me</Button>
      <button className="text-red-500 font-bold text-xl bg-yellow-500 border-4 border-black hover:text-white">Click me</button>
    </div>
  )
}

export default App