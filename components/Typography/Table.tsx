type TableRow = {
  category: string;
  purpose: string;
  lawfulBasis: string;
};

const data: TableRow[] = [
  {
    category: "Account information",
    purpose: "User onboarding, Service access",
    lawfulBasis: "Legitimate use",
  },
  {
    category: "KYC data",
    purpose:
      "Identity verification, compliance, Bill Payments, Credit reports access, FD facilitation",
    lawfulBasis: "Legal obligation",
  },
  {
    category: "Payment data",
    purpose: "Bill payments, transaction processing",
    lawfulBasis: "Legitimate use",
  },
  {
    category: "Credit information",
    purpose: "Credit report access and analysis",
    lawfulBasis: "Explicit consent",
  },
  {
    category: "Nest Safe data",
    purpose: "Secure storage and retrieval",
    lawfulBasis: "Explicit consent",
  },
  {
    category: "Fraud and security logs",
    purpose: "Platform security, fraud prevention",
    lawfulBasis: "Legitimate use",
  },
  {
    category: "Regulatory records",
    purpose: "Statutory reporting",
    lawfulBasis: "Legal obligation",
  },
  {
    category: "Marketing communications",
    purpose: "Promotional messaging",
    lawfulBasis: "Consent",
  },
  {
    category: "Analytics and profiling",
    purpose: "Service improvement",
    lawfulBasis: "Consent",
  },
];

const PrivacyTable = () => {
  return (
    <div className="overflow-x-auto my-5">
      <table className="w-full border border-secondary border-collapse text-responsive">
        <thead>
          <tr className="text-legal">
            <th className="border border-secondary px-3 py-2 text-left">
              Category of Data
            </th>
            <th className="border border-secondary px-3 py-2 text-left">
              Purpose
            </th>
            <th className="border border-secondary px-3 py-2 text-left">
              Lawful Basis
            </th>
          </tr>
        </thead>

        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td className="border border-secondary px-3 py-2 align-top font-normal">
                {row.category}
              </td>
              <td className="border border-secondary px-3 py-2 align-top font-normal">
                {row.purpose}
              </td>
              <td className="border border-secondary px-3 py-2 align-top font-normal">
                {row.lawfulBasis}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PrivacyTable;
