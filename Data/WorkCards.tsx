import { ReactNode } from "react"

export interface CatalogueItem {
  title: string
  steps: string[]
  iconBg: string
  svg: ReactNode
  active: boolean
  buttonColor: string
}

export const catalogueData: CatalogueItem[] = [
  {
    title: 'Restoration',
    steps: [
      'Initial Assessment and site inspection',
      'Client consultation and Scope Definition',
      'Structural repair and Reinforcement',
      'Finishing Touch and Quality Checks',
      'Client Handover and Maintenance Guidance',
    ],
    iconBg: 'bg-white',
    buttonColor: 'bg-green-600',
    svg: (
      <>
        <rect x="5" y="6" width="14" height="12" rx="2"></rect>
        <circle cx="9" cy="12" r="1"></circle>
        <circle cx="15" cy="12" r="1"></circle>
      </>
    ),
    active: false,
  },
  {
    title: 'Renovation',
    steps: [
      'Client Consultation and Need Assessment',
      'Site Survey and Existing Condition Analysis',
      'Cost Estimation and Budget Approval',
      'Interior and Exterior Finishing',
      'Final Inspection and Project Handover',
    ],
    iconBg: 'bg-white/20',
    buttonColor: 'bg-',
    svg: (
      <>
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12" y2="18"></line>
        <line x1="8" y1="6" x2="16" y2="6"></line>
        <line x1="8" y1="10" x2="16" y2="10"></line>
        <line x1="8" y1="14" x2="16" y2="14"></line>
      </>
    ),
    active: true,
  },
  {
    title: 'Retrofitting',
    buttonColor: 'bg-blue-600',
    steps: [
      'Preliminary Assessment and Feasibility Study',
      'Structural Analysis and Design Evaluation',
      'Strengthening of Structural components',
      'Quality Control and Testing',
      'Final Inspection, Certification and Handover',
    ],
    iconBg: 'bg-gray-200',
    
    svg: (
      <>
        <rect x="5" y="6" width="14" height="12" rx="2"></rect>
        <circle cx="9" cy="12" r="1"></circle>
        <circle cx="15" cy="12" r="1"></circle>
      </>
    ),
    
    active: false,
  
  },
]
