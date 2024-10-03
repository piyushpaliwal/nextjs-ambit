import User from 'icons/lineal/User'
import Analytics from 'icons/lineal/Analytics'
import Target from 'icons/lineal/Target'
import TeleMarketer from 'icons/lineal/TeleMarketer'

export type StaffingDetail = {
  Icon: React.ElementType
  role: string
  keySkillsets: string[][] | null
  softwareProficiency: string[][] | null
  experienceLevel?: string[][] | null
  techSavvy?: string[][] | null
}

export const staffingDetails: StaffingDetail[] = [
  {
    Icon: User,
    role: "Bookkeeper",
    keySkillsets: [
      ["Financial Bookkeeping", "Accounts Payable & Receivable", "Bank Reconciliation", "Financial Reporting"],
      ["Data Entry & Management", "Expense Tracking", "Regulatory Compliance"],
    ],
    softwareProficiency: [["QuickBooks"], ["Xero"]],
    experienceLevel: [["1-3 Years"]],
  },
  {
    Icon: Analytics,
    role: "Accountant",
    keySkillsets: [
      ["Financial Reporting", "General Ledger Management", "Accounts Payable & Receivable", "Budgeting & Forecasting", "Cash Flow Management", "Cost Accounting"],
      ["Financial Analysis", "Data Analysis", "Regulatory Knowledge", "Problem-Solving", "Attention to Detail"],
    ],
    softwareProficiency: [
      ["QuickBooks", "Xero", "Sage Intacct", "FreshBooks"],
      ["Wave Accounting", "Zoho Books", "NetSuite", "Microsoft Dynamics 365 Business"],
    ],
    experienceLevel: null,
    techSavvy: null,
  },
  {
    Icon: Target,
    role: "Tax Specialist",
    keySkillsets: [
      ["Tax Preparation & Filing", "Tax Law Knowledge", "Financial Statement Analysis", "Deductions & Credits Expertise", "Income Tax Reporting"],
      ["Tax Planning Strategies", "Compliance with IRS Regulations", "Detail-Oriented", "Problem-Solving"],
    ],
    softwareProficiency: [
      ["TurboTax", "TaxAct", "TaxSlayer", "Jackson Hewitt"],
      ["FreeTaxUSA", "eSmart Tax", "Intuit ProConnect", "Drake Tax"],
    ],
    experienceLevel: null,
    techSavvy: null,
  },
  {
    Icon: TeleMarketer,
    role: "Virtual Assistant",
    keySkillsets: [
      ["Administrative Support", "Email and Calendar Management", "Data Entry and Management", "Customer Service", "Scheduling and Appointment Coordination", "Document Preparation and Editing", "Research and Information Gathering", "Social Media Management"],
      ["Travel Arrangements", "Project Management", "Communication Skills (written and verbal)", "Time Management", "Problem-Solving", "Confidentiality and Discretion", "Multi-Tasking", "Attention to Detail"],
    ],
    softwareProficiency: null,
    experienceLevel: null,
    techSavvy: [["Proficiency with office software"], ["Proficiency with office tools"]],
  },
];
