import type React from "react"
export default function ProductLayout({
  children,
  related,
}: {
  children: React.ReactNode
  related: React.ReactNode
}) {
  return (
    <div>
      {children}
      {related}
    </div>
  )
}
