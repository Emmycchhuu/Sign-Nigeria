
export type Section = {
  id: string
  title: string
  content?: string
  subsections?: Subsection[]
  list?: string[]
}

export type Subsection = {
  title?: string
  content?: string
  list?: string[]
  items?: { title: string; desc?: string; features?: string[] }[]
}

export const whitepaperContent: Section[] = [
  {
    id: "executive-summary",
    title: "1. Executive Summary",
    subsections: [
      {
        title: "Introduction to SIGNigeria",
        content:
          "SIGNigeria🧡🇳🇬 is a community-driven Web3 initiative designed to bring Nigeria on-chain merging blockchain innovation with the country’s socio-economic, cultural, and developmental fabric. The platform will leverage decentralized systems, tokenized incentives, and community governance to foster a digital ecosystem where Nigerians can build, earn, trade, and preserve their heritage transparently.",
      },
      {
        title: "The Vision: Bringing Nigeria On-Chain",
        content:
          "The goal is to connect Nigeria’s businesses, education, healthcare, entertainment, culture, and economy through blockchain. By tokenizing assets, creating on-chain records for culture and identity, and enabling decentralized participation, SIGNigeria will position Nigeria as Africa’s blockchain leader.",
      },
      {
        title: "Why Now: The Urgency & Opportunity",
        content:
          "Nigeria has one of the world’s youngest, most tech-curious populations and leads Africa in crypto adoption. Yet, socio-economic inequalities persist due to lack of access, education, and infrastructure. Blockchain presents an opportunity to restructure the system, empower individuals, and connect the grassroots to global finance and innovation.",
      },
    ],
  },
  {
    id: "mission-vision",
    title: "2. Mission & Vision",
    subsections: [
      {
        title: "Mission",
        content:
          "To create a decentralized platform that empowers Nigerian communities by integrating their socio-economic, cultural, and historical assets into the blockchain economy enabling transparent governance, digital inclusion, and financial freedom.",
      },
      {
        title: "Vision",
        content:
          "A fully decentralized Nigeria where blockchain connects businesses, education, healthcare, entertainment and heritage to global opportunities, powered by the @SIGN Project and community participation.",
      },
    ],
  },
  {
    id: "core-values",
    title: "3. Core Values",
    subsections: [
      {
        items: [
          {
            title: "Community Driven",
            desc: "Every initiative starts with and is owned by the people.",
          },
          {
            title: "Decentralization",
            desc: "Power distributed to participants, not institutions.",
          },
          {
            title: "Transparency",
            desc: "Open governance, auditable data, and clear communication.",
          },
          {
            title: "Cultural Sovereignty",
            desc: "Preserving Nigerian identity and heritage on-chain.",
          },
          {
            title: "Innovation through Web3",
            desc: "Using blockchain to solve real problems.",
          },
          {
            title: "Inclusion & Education",
            desc: "Every Nigerian, regardless of background, can participate.",
          },
        ],
      },
    ],
  },
  {
    id: "implementation-framework",
    title: "4. Implementation Framework",
    subsections: [
      {
        title: "Phase 1: Foundation Building",
        content: "Objective: Establish the ecosystem and community structure.",
        items: [
          {
            title: "1. Launch SIGNigeria DAO (Decentralized Autonomous Organization)",
            features: [
              "Create governance model for community voting and proposals.",
              "Develop a membership system using the community participation through @SIGN project activities, building and support.",
              "Introduce community moderators, regional ambassadors, and sectoral leads (Business, Education, Culture, Health, Entertainment).",
            ],
          },
          {
            title: "2. Build with SIGN Token Ecosystem",
            features: [
              "Design the project with the mother project native utility token ($SIGN).",
              "Functions: staking, voting, rewards, governance, and on-chain reputation.",
              "Smart contract deployment on a scalable blockchain (ETH, Base, or BNB Chain).",
            ],
          },
          {
            title: "3. Community Onboarding",
            features: [
              "Create “@SIGN Bootcamp” to educate Nigerians about blockchain, DeFi, and Web3 literacy.",
              "Launch ambassador programs in schools, universities, and local communities.",
              "Partner with tech hubs, NGOs, and cultural organizations.",
            ],
          },
        ],
      },
      {
        title: "Phase 2: Infrastructure Development",
        content: "Objective: Build the tools and systems for socio-economic integration.",
        items: [
          {
            title: "1. SIGNigeria🧡🇳🇬 Marketplace",
            features: [
              "A decentralized platform for Nigerian products, services, and cultural artifacts (NFTs, crafts, art, literature).",
              "Enable $SIGN token payments and peer-to-peer transactions.",
            ],
          },
          {
            title: "2. SIGNigeria🧡🇳🇬 EduChain",
            features: [
              "On-chain credentialing system for institutions and students.",
              "Courses on blockchain, financial literacy, and entrepreneurship.",
              "Reward learners and educators with $SIGN tokens.",
            ],
          },
          {
            title: "3. SIGNigeria 🧡🇳🇬 HealthNet",
            features: [
              "Blockchain-based healthcare identity system.",
              "Decentralized medical record storage accessible across hospitals.",
              "Incentives for verified health practitioners.",
            ],
          },
          {
            title: "4. SIGNigeria🧡🇳🇬 CultureChain",
            features: [
              "On-chain archive for Nigerian history, languages, and culture.",
              "Digital collectibles representing cultural artifacts.",
              "Collaborations with historians, artists, and museums.",
            ],
          },
          {
            title: "SIGNigeria🧡🇳🇬 Entertainment Platform",
            features: [
              "Token-gated access to concerts, films, and creative showcases",
              "Creator tools for musicians, actors, and artists",
            ],
          },
        ],
      },
      {
        title: "Phase 3: Expansion & Adoption",
        content: "Objective: Scale participation, partnerships, and utility.",
        items: [
          {
            title: "1. Government & Institutional Partnerships",
            features: [
              "Engage ministries (Youth, Tech, Culture, and Education) for pilot projects.",
              "Work with universities for blockchain certifications.",
              "Support startups integrating SIGN APIs or wallets.",
            ],
          },
          {
            title: "2. Financial Inclusion Programs",
            features: [
              "Microcash and community savings pools on-chain.",
              "DeFi-powered yield systems for local entrepreneurs.",
              "Mobile-friendly dApp for rural accessibility.",
            ],
          },
          {
            title: "3. National Onboarding Campaign: “Nigeria On-Chain Movement”",
            features: [
              "Nationwide sensitization on Web3 and SIGNigeria🧡🇳🇬.",
              "Regional events, radio programs, and online campaigns.",
            ],
          },
        ],
      },
      {
        title: "Phase 4: Global Integration",
        content: "Objective: Export Nigeria’s on-chain model to the world.",
        items: [
          {
            title: "Actions",
            features: [
              "Create cross-border cultural NFT exchanges between African nations.",
              "Enable global investors to participate in the projects via SIGN tokens and international-community collaboration",
              "Form the SIGN Africa Alliance extending SIGNigeria’s model across the continent.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "governance-model",
    title: "5. Governance Model",
    subsections: [
      {
        items: [
          {
            title: "DAO Framework",
            desc: "Every token holder participates in voting.",
          },
          {
            title: "Community Councils",
            desc: "Education, Health, Business, Entertainment and Heritage councils propose initiatives.",
          },
          {
            title: "Transparency Tools",
            desc: "On-chain dashboards showing fund allocations, votes, and outcomes.",
          },
        ],
      },
    ],
  },
  {
    id: "long-term-impact",
    title: "Long-Term Impact",
    list: [
      "Empower 10+ million Nigerians with blockchain literacy and economic inclusion.",
      "Preserve Nigeria’s culture digitally for generations.",
      "Create thousands of decentralized job opportunities.",
      "Establish a model for Africa’s blockchain sovereignty.",
    ],
  },
  {
    id: "conclusion",
    title: "Conclusion",
    content:
      "SIGNigeria🧡🇳🇬 stands as a movement of empowerment, where decentralization meets culture, and innovation meets inclusion. It’s not just a project; it’s Nigeria’s digital rebirth; one community, one culture, one blockchain. A place where we create a Nigeria of the people, for the people and by the people.",
  },
]
