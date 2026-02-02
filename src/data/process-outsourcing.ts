import type { ProcessListItem } from 'components/reuseable/process/ProcessSection'
import { IconFolder } from 'types/icon'

// used in the process block
export const processOutsourcingList: ProcessListItem[] = [
  {
    id: 1,
    iconConfig: { icon: 'TeleMarketer', folder: IconFolder.LINEAL },
    title: 'Consult with Us',
    description: 'Meet with your dedicated account manager to discuss your needs.'
  },
  {
    id: 2,
    iconConfig: { icon: 'Browser', folder: IconFolder.LINEAL },
    title: 'Onboarding',
    description: 'We’ll onboard you and set up the necessary processes.'
  },
  {
    id: 3,
    iconConfig: { icon: 'CheckList', folder: IconFolder.LINEAL },
    title: 'Task Allocations',
    description: 'Tasks are assigned and managed according to your specifications.'
  },
  {
    id: 4,
    iconConfig: { icon: 'Loading', folder: IconFolder.LINEAL },
    title: 'Task Execution',
    description:
      'Our team completes, reviews, and ensures accuracy in your financial services, including bookkeeping, payroll, tax preparation, and more.'
  },
  {
    id: 5,
    iconConfig: { icon: 'Rocket', folder: IconFolder.LINEAL },
    title: 'Timely Delivery',
    description:
      'Receive precise and timely delivery of your outsourced financial tasks, letting you focus on your core business.'
  }
]
