import TodoList from "./components/TodoList"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Todos</h1>
      <TodoList>
      </TodoList>    
      </main>
  )
}
