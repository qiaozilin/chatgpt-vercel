import Header from "~/components/Header"
import type { JSXElement } from "solid-js"

export default function ({ children }: { children: JSXElement }) {
  return (
    <div id="root" class="sm:pt-8em py-2em before">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4690058608545443"
         crossorigin="anonymous"></script>
      <Header />
      {children}
    </div>
  )
}
