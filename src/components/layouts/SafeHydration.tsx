import { type ReactNode, useEffect, useState } from 'react'

interface SafeHydrationProps {
  children: ReactNode
  fallback?: ReactNode
}

export default function SafeHydration({ children, fallback = null }: SafeHydrationProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <>{fallback}</>
  }

  return <>{children}</>
}
