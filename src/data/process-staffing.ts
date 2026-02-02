import type { ProcessListItem } from 'components/reuseable/process/ProcessSection'
import { IconFolder } from 'types/icon'

// used in the process block
export const processStaffingList: ProcessListItem[] = [
  {
    id: 1,
    iconConfig: { icon: 'Email', folder: IconFolder.LINEAL },
    title: 'Share Your Needs',
    description: 'Provide us with your detailed job description.'
  },
  {
    id: 2,
    iconConfig: { icon: 'IdCard', folder: IconFolder.LINEAL },
    title: 'Receive Resumes',
    description: ' We’ll send you resumes of carefully selected candidates.'
  },
  {
    id: 3,
    iconConfig: { icon: 'List', folder: IconFolder.LINEAL },
    title: 'Shortlist & Interview',
    description: 'You review, shortlist, interview, and test candidates.'
  },
  {
    id: 4,
    iconConfig: { icon: 'Medal', folder: IconFolder.LINEAL },
    title: 'Hire & Integrate',
    description: 'Select the best fit and integrate them into your team seamlessly.'
  },
  {
    id: 5,
    title: 'Team Integration',
    iconConfig: { icon: 'Puzzle', folder: IconFolder.LINEAL },
    description:
      'Enjoy a smooth transition with your new offshore team member working as an integral part of your organization.'
  }
]
