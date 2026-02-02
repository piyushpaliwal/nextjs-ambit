// components/IconRenderer.tsx
import dynamic from 'next/dynamic'
import { useEffect, useMemo, useState } from 'react'
import type IconProps from 'types/icon'
import { IconFolder } from 'types/icon'

export interface IconRendererProps extends IconProps {
  icon: string
  folder?: IconFolder
}

const IconError = () => <span className="text-xs text-red-500">Icon Error</span>
IconError.displayName = 'IconError'

const IconSkeleton = () => (
  <div className="animate-pulse bg-gray rounded" style={{ width: '2.2rem', height: '2.2rem' }} />
)
IconSkeleton.displayName = 'IconSkeleton'

export default function IconRenderer({ icon, folder = IconFolder.ROOT, ...props }: IconRendererProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const DynamicIcon = useMemo(
    () =>
      dynamic<IconProps>(() => import(`icons/${folder}/${icon}`).catch(() => IconError), {
        ssr: false,
        loading: () => <IconSkeleton />
      }),
    [icon, folder]
  )

  if (!isMounted) {
    return <IconSkeleton />
  }

  return <DynamicIcon {...props} />
}
