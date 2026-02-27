// Hero section: 6 thumbnail images (conference, social, concert, crowd, conference room, audience)
export const heroThumbnails = [
  'https://images.unsplash.com/photo-1540575467063-178bf50e2f0a?w=400&q=80',
  'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=400&q=80',
  'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&q=80',
  'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&q=80',
  'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&q=80',
  'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&q=80',
];

// How UPAM Events Works - 4 steps
export const howItWorksSteps = [
  {
    number: 1,
    title: 'Create Event',
    description: 'Share your event with a Pan-African audience by providing event details, dates, location, and ticket information.',
  },
  {
    number: 2,
    title: 'Publish & Promote',
    description: 'Once published, your event becomes visible on the platform where people can discover and share it.',
  },
  {
    number: 3,
    title: 'Sell Tickets',
    description: 'Set ticket prices, manage availability, and receive payments securely.',
  },
  {
    number: 4,
    title: 'Host & Connect',
    description: 'Host your event, connect with your audience, and build lasting impact.',
  },
];

// Shared event list for list and detail pages
export const events = [
  {
    id: 1,
    slug: 'get-high-on-ambitions-not-drugs',
    title: 'Get High on Ambitions Not Drugs (Health Awareness)',
    date: 'September 20th 2025',
    dateShort: 'Sept 20th 2025',
    location: 'Nigeria / Cameroon',
    description: "A Pan-African health awareness initiative challenging youth to channel their energy into ambition, purpose, and positive impact — not substance abuse.",
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    fullDescription: "The 'Get High on Ambitions Not Drugs' program is a Pan-African youth health and empowerment initiative launched by UPAM across Nigeria and Cameroon. The program is designed to challenge the narrative around substance abuse by offering young people a compelling alternative: ambition, purpose, and community.",
    overview: "This initiative brings together youth leaders, health professionals, community advocates, and educators to tackle one of Africa's most pressing social challenges — the rise of drug abuse and substance dependency among young people. Through interactive symposiums, mentorship sessions, and community engagements, the program empowers youth to discover their potential and pursue their goals with clarity and drive.",
    highlights: [
      {
        title: "Health Symposium: Rising Above Influence — The Power of Purpose",
        body: "The highlight of the program took place on Saturday with a Health Symposium titled 'Rising Above Influence: The Power of Purpose.' The symposium was an enlightening and impactful session led by Mrs. Venetta, who spoke passionately about the power of the mind and the importance of creating mental maps that guide individuals through life's challenges. Participants were encouraged to identify their core values and use them as a compass in moments of peer pressure and temptation."
      },
      {
        title: "Youth Mentorship & Career Conversations",
        body: "Young attendees engaged in one-on-one and group mentorship sessions with successful Pan-African professionals who shared their personal journeys. The conversations centered on goal-setting, resilience, and the real rewards of pursuing ambition over escapism."
      },
      {
        title: "Community Outreach & Awareness Campaigns",
        body: "UPAM teams carried out door-to-door awareness campaigns in local communities, distributing materials on the dangers of drug abuse and connecting families with counseling resources. Schools and youth centers in both Nigeria and Cameroon received visits from program coordinators."
      },
      {
        title: "Cultural & Creative Expression",
        body: "Participants showcased their talents through spoken word, music, art, and drama — all centered on the theme of ambition and purpose. This creative segment reinforced the message that there are healthy, fulfilling ways to experience elevation and joy."
      }
    ],
    objectives: [
      "Reduce substance abuse among youth aged 15–35 in target communities",
      "Equip young people with mental tools to resist peer pressure",
      "Connect youth to mentors, career guidance, and community support networks",
      "Promote Pan-African values of self-determination, discipline, and collective progress",
      "Build a movement of youth ambassadors committed to healthy living"
    ],
    status: 'upcoming',
  },
  {
    id: 2,
    slug: 'global-conference-ethiopia-2023',
    title: 'Global Conference Ethiopia 2023',
    date: 'February 27th - 4th March 2023',
    dateShort: 'Feb 27 - Mar 4 2023',
    location: 'Ethiopia',
    description: "The 2023 UPAM Conference will have a flurry of activity leading up to and including the final event with both Africa's biggest acts and local artists showing their support, which will attract both visitors and locals. We aim to encourage a sense of fun and opportunity to all who participate. The final night of the Conference will be a gala dinner and an awards ceremony.",
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80',
    fullDescription: "The 2023 UPAM Conference will have a flurry of activity leading up to and including the final event with both Africa's biggest acts and local artists showing their support, which will attract both visitors and locals. We aim to encourage a sense of fun and opportunity to all who participate. The final night of the Conference will be a gala dinner and an awards ceremony.",
    status: 'completed',
  },
  {
    id: 3,
    slug: 'upam-unity-conference',
    title: 'UPAM Unity Conference',
    date: 'November 28th 2026',
    dateShort: 'Nov 28th 2026',
    location: 'TBD',
    purpose: 'Celebration of Unity, Impact and sustainability',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80',
    fullDescription: 'A flagship conference celebrating Pan-African unity, impact, and sustainability. Join leaders and communities from across the continent and the diaspora.',
    status: 'upcoming',
  },
  {
    id: 4,
    slug: 'international-womens-day-empowerment',
    title: 'International Women\'s Day Empowerment Program',
    date: 'March 1st - 8th 2026',
    dateShort: 'Mar 1-8 2026',
    location: 'Multiple',
    theme: 'Empowering Her Hands',
    subtheme: 'Practical Skills for Sustainable Livelihoods.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80',
    fullDescription: 'A week-long program celebrating women and equipping them with practical skills for sustainable livelihoods.',
    status: 'upcoming',
  },
  {
    id: 5,
    slug: 'upam-academy-launch',
    title: 'UPAM Academy Launch',
    date: null,
    dateShort: null,
    location: 'TBD',
    description: "We're excited to announce the launch of Upam Academy, where learning meets innovation. Join us for an exclusive event as we unveil our programs and opportunities for growth.",
    image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&q=80',
    fullDescription: "We're excited to announce the launch of Upam Academy, where learning meets innovation. Join us for an exclusive event as we unveil our programs and opportunities for growth.",
    status: 'upcoming',
  },
  {
    id: 6,
    slug: 'pan-african-youth-summit-2025',
    title: 'UPAM Pan-African Youth Summit 2025',
    date: 'March 15–17, 2025',
    location: 'Nairobi, Kenya',
    description: 'A gathering of young leaders from across Africa and the diaspora to discuss unity, development, and collective action.',
    image: 'https://images.unsplash.com/photo-1540575467063-178bf50e2f0a?w=800&q=80',
    fullDescription: 'The Pan-African Youth Summit brings together young leaders from across the continent and the diaspora to share ideas, build networks, and advance the cause of African unity and development.',
    status: 'upcoming',
  },
];
