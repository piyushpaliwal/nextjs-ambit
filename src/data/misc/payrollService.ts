import Analytics from 'icons/lineal/Analytics'
import CloudComputing from 'icons/lineal/CloudComputing'
import Shield from 'icons/lineal/Shield'
import Telephone from 'icons/lineal/Telephone'
import color from 'utils/color'

export const payrollServicesList = [
  {
    id: 1,
    Icon: Telephone,
    color: color.yellow,
    title: '24/7 Support',
    cardColor: 'bg-pale-yellow',
    columnClass: 'col-md-5 offset-md-1 align-self-end',
    description: 'Ambit specialists are available 24/7 to answer any queries related to payroll'
  },
  {
    id: 2,
    Icon: Shield,
    color: color.red,
    title: 'Data Accuracy',
    cardColor: 'bg-pale-red',
    columnClass: 'col-md-6 align-self-end',
    description: 'Customer data is paramount to us, we are committed to it at every step of the process'
  },
  {
    id: 3,
    color: color.leaf,
    Icon: CloudComputing,
    title: 'Advanced Software',
    cardColor: 'bg-pale-leaf',
    columnClass: 'col-md-5',
    description: 'We use the most trusted, stable, and Advanced systems to manage Payroll'
  },
  {
    id: 4,
    Icon: Analytics,
    color: color.primary,
    title: 'Reporting',
    cardColor: 'bg-pale-primary',
    columnClass: 'col-md-6 align-self-start',
    description: 'We ensure to provide Payroll reports in a timely manner to aid you make business decisions'
  }
]
