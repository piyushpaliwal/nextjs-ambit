import type { FooterContact, FooterProps } from 'components/blocks/footer/Footer'
import type { RegistryFor } from 'types/transformer'
import { commonContact } from './shared'

const footer: RegistryFor<FooterProps, 'footer'> = { contactKey: commonContact as unknown as FooterContact }

export default footer
