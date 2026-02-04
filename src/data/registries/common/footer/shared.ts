import type { FooterContact } from 'components/blocks/footer/Footer'
import type { RegistryFor } from 'types/transformer'

export const commonContact: RegistryFor<FooterContact, 'footer'> = {
  titleKey: 'contact.office.title',
  addressKey: 'contact.office.address',
  phoneKey: 'contact.office.phone',
  phoneRefKey: 'contact.office.phoneRef',
  emailKey: 'contact.office.email'
}
