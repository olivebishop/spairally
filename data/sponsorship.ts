export const SPONSORSHIP_TIERS = [
  {
    name: "Supporter",
    price: "$250",
    description:
      "Perfect for individuals and small teams who want to back our mission.",
    features: [
      "Website recognition",
      "Social media shoutout",
      "Early feature updates",
      "Community access",
    ],
  },
  {
    name: "Technology Sponsor",
    price: "$1,000",
    description:
      "For companies that want meaningful recognition and early product access.",
    features: [
      "Logo on sponsor page",
      "Launch announcement feature",
      "Early beta access",
      "Priority support channel",
      "Quarterly product briefing",
    ],
    featured: true,
  },
  {
    name: "Security Partner",
    price: "$5,000",
    description:
      "Strategic partnership with premium visibility and direct collaboration access.",
    features: [
      "Premium branding placement",
      "Press release mention",
      "Direct engineering access",
      "Co-marketing opportunities",
      "Advisory board invitation",
      "Custom integration support",
    ],
  },
] as const;

export const SPONSORSHIP_BENEFITS = [
  {
    title: "Faster Development",
    description:
      "Funding accelerates our roadmap by allowing us to hire and ship without constraints.",
  },
  {
    title: "Real World Tests",
    description:
      "We invest in real world tests in order to improve our products' performance in real world scenarios.",
  },
  {
    title: "Global Reach",
    description:
      "Infrastructure funding helps us serve users reliably across 172 countries.",
  },
] as const;

export const SPONSORSHIP_LEGAL_NOTICE =
  "Sponsorship contributions are classified as business revenue and do not constitute equity, securities, profit-sharing agreements, or any form of ownership interest. Sponsors receive recognition and agreed-upon benefits only. All sponsorships are non-refundable once processed.";
