import React from 'react'

type Props = {
  children: React.ReactNode
}

export default function Headline({ children }: Props) {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-5">{children}</h1>
  )
}
