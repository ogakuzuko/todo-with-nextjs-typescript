import type { ReactNode, VFC } from "react"
import { Footer } from "src/components/Footer"
import { Header } from "src/components/Header"

export const Layout: VFC<{ children: ReactNode }> = (props) => {
  return (
    <div className="grid grid-rows-[auto,1fr,auto] min-h-screen">
      <Header />
      <main className="bg-red-300">{props.children}</main>
      <Footer />
    </div>
  )
}
