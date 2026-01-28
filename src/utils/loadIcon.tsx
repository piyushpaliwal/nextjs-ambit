import dynamic from 'next/dynamic'
import type { FC } from 'react'
import type IconProps from 'types/icon'

export enum IconFolder {
  LINEAL = 'lineal',
  SOLID_DUO = 'solid-duo',
  SOLID_MONO = 'solid-mono',
  ROOT = ''
}

const loadIcon = (name: string, folderName: IconFolder = IconFolder.ROOT): FC<IconProps> => {
  const DynamicComponent = dynamic<IconProps>(() => import(`../icons/${folderName}/${name}`), {
    ssr: false,
    loading: () => <span style={{ width: '2.2rem', height: '2.2rem', display: 'inline-block' }} />
  })

  return DynamicComponent as unknown as FC<IconProps>
}

export default loadIcon
