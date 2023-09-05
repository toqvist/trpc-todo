import TodoList from "./components/TodoList"
import { serverClient } from "./_trpc/serverClient"

export const dynamic = "force-dynamic";

export default async function Home() {

  const todos = await serverClient.getTodos()

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Todos</h1>
      <TodoList initialToodos={todos}>
      </TodoList>    
      </main>
  )
}
