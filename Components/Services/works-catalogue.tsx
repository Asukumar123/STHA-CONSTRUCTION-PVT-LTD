export default function WorksCatalogue() {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-center text-xl font-medium mb-8">Works Catalogue</h2>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Restoration Card */}
          <div className="border rounded-lg p-6 flex flex-col">
            <h3 className="text-center font-medium text-lg mb-4">Restoration</h3>
            <div className="flex justify-center mb-4">
              <div className="bg-purple-700 p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
            </div>
            <ul className="list-disc pl-6 space-y-2 mb-auto">
              <li className="text-sm">Initial Assessment and site inspection</li>
              <li className="text-sm">Client consultation and Scope Definition</li>
              <li className="text-sm">Structural repair and Reinforcement</li>
              <li className="text-sm">Finishing Touch and Quality Checks</li>
              <li className="text-sm">Client Handover and Maintenance Guidance</li>
            </ul>
            <div className="mt-6">
              <button className="w-full py-2 border border-gray-300 rounded text-center">Button</button>
            </div>
          </div>
  
          {/* Renovation Card - Active */}
          <div className="bg-blue-600 text-white rounded-lg p-6 flex flex-col">
            <h3 className="text-center font-medium text-lg mb-4">Renovation</h3>
            <div className="flex justify-center mb-4">
              <div className="bg-white/20 p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                  <line x1="12" y1="18" x2="12" y2="18"></line>
                  <line x1="8" y1="6" x2="16" y2="6"></line>
                  <line x1="8" y1="10" x2="16" y2="10"></line>
                  <line x1="8" y1="14" x2="16" y2="14"></line>
                </svg>
              </div>
            </div>
            <ul className="list-disc pl-6 space-y-2 mb-auto">
              <li className="text-sm">Client Consultation and Need Assessment</li>
              <li className="text-sm">Site Survey and Existing Condition Analysis</li>
              <li className="text-sm">Cost Estimation and Budget Approval</li>
              <li className="text-sm">Interior and Exterior Finishing</li>
              <li className="text-sm">Final Inspection and Project Handover</li>
            </ul>
            <div className="mt-6">
              <button className="w-full py-2 bg-white/20 border border-white/30 rounded text-center">Button</button>
            </div>
          </div>
  
          {/* Retrofitting Card */}
          <div className="border rounded-lg p-6 flex flex-col">
            <h3 className="text-center font-medium text-lg mb-4">Retrofitting</h3>
            <div className="flex justify-center mb-4">
              <div className="bg-gray-200 p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="5" y="6" width="14" height="12" rx="2"></rect>
                  <circle cx="9" cy="12" r="1"></circle>
                  <circle cx="15" cy="12" r="1"></circle>
                </svg>
              </div>
            </div>
            <ul className="list-disc pl-6 space-y-2 mb-auto">
              <li className="text-sm">Preliminary Assessment and Feasibility Study</li>
              <li className="text-sm">Structural Analysis and Design Evaluation</li>
              <li className="text-sm">Strengthening of Structural components</li>
              <li className="text-sm">Quality Control and Testing</li>
              <li className="text-sm">Final Inspection, Certification and Handover</li>
            </ul>
            <div className="mt-6">
              <button className="w-full py-2 border border-gray-300 rounded text-center">Button</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
  