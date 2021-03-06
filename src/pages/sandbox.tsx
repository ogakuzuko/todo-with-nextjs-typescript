{
  /* eslint-disable arrow-body-style, @typescript-eslint/no-unused-vars, no-console */
}
import type { VFC } from "react"
import { useState } from "react"
import { BaseButton } from "src/components/atoms/BaseButton"
import { Layout } from "src/components/Layout"
import {
  SampleComponent1,
  SampleComponent2,
  SampleComponent3,
  SampleComponent4,
  SampleComponent5,
  SampleComponent6,
  SampleComponent7,
  SampleComponent8,
} from "src/components/SampleComponent"

type User = {
  id: number
  name: string
}

const Sandbox: VFC = () => {
  type Todo = {
    id: number
    body: string
  }

  const [animals, setAnimals] = useState(["dog", "cat"])
  const [numbers, setNumbers] = useState<number[]>([])
  const [incompleteTodos, setIncompleteTodos] = useState<(string | number)[]>([])
  const [count, setCount] = useState(1)
  const [text, setText] = useState("")
  const [isBool, setIsBool] = useState(false)
  const [inputText, setInputText] = useState("")
  const [user, setUser] = useState<User>({ id: 1122, name: "aiko" })
  const [todos, setTodos] = useState<Todo[]>([{ id: 0, body: "初期値" }])
  const [currentUser, setCurrentUser] = useState({ name: "aiko", age: 45, isMarried: false })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value)
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log("ボタンが押されたよ")
  }

  return (
    <Layout>
      <h1 className="text-xl text-center">{count}</h1>
      <h1 className="text-xl text-center">{inputText}</h1>
      <h1 className="text-xl text-center">{user.id}</h1>
      <h1 className="text-xl text-center">{user.name}</h1>
      <ul className="bg-blue-300">
        {todos.map((item: Todo) => {
          return <li key={Math.random()}>{item.id}</li>
        })}
      </ul>
      <div className="text-center bg-green-300">
        <button
          className="py-0.5 pr-1 pl-1 ml-2 bg-purple-300 rounded-sm border shadow-sm cursor-pointer focus:outline-none"
          onClick={() => setTodos((prev) => [...prev, { id: 10, body: "aiko" }])}
        >
          +1
        </button>
        <button
          onClick={() => setTodos([])}
          className="py-0.5 pr-1 pl-1 ml-2 bg-yellow-300 rounded-sm border shadow-sm cursor-pointer focus:outline-none"
        >
          てすとだ
        </button>
        <button className="py-0.5 pr-1 pl-1 ml-2 bg-yellow-300 rounded-sm border shadow-sm cursor-pointer focus:outline-none">
          ボタン
        </button>
        <button
          onClick={handleClick}
          className="py-0.5 pr-1 pl-1 ml-2 rounded-sm border shadow-sm cursor-pointer focus:outline-none"
        >
          logボタン
        </button>
        <input type="text" value={inputText} onChange={handleChange} className="border" />
      </div>
      {/* タスク入力部 */}
      <div className="flex p-2 m-2 w-80 h-12 bg-blue-100 rounded">
        <input
          type="text"
          value={inputText}
          onChange={(e) => {
            return setInputText(e.target.value)
          }}
          className="py-0.5 rounded-sm border border-gray-500 shadow-sm cursor-pointer"
        />
        <button
          type="button"
          className="py-0.5 pr-1 pl-1 ml-2 rounded-sm border border-gray-500 shadow-sm cursor-pointer focus:outline-none"
        >
          追加
        </button>
      </div>

      <SampleComponent1 />
      <SampleComponent2 />
      <SampleComponent3 text="TypeScript" />
      <SampleComponent4 text="TypeScript" />
      <SampleComponent5 text="TypeScript">ちるどれん</SampleComponent5>
      <SampleComponent6 text="分割代入props propsに直接" />
      <SampleComponent7 text="分割代入props ジェネリクス" />
      <SampleComponent8 text="分割代入 children含む版">絶対可憐チルドレン</SampleComponent8>
      <BaseButton text="サンプルボタン" />
    </Layout>
  )
}

export default Sandbox
