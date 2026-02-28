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
    title: 'Get High on Ambitions not Drugs (Mental Health & Drug Abuse Awareness Campaign)',
    date: 'October 12th 2025',
    dateShort: 'Oct 12th 2025',
    location: 'Nigeria',
    description: "The Global Health Program has been an immense success, blending education, inspiration, and community service. From Mrs. Venetta's dynamic arrival to the impactful symposium and heartfelt outreach, the event demonstrated the power of purpose-driven leadership and collective action in promoting global health and well-being.",
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    fullDescription: "The Global Health Program has been an immense success, blending education, inspiration, and community service. From Mrs. Venetta's dynamic arrival to the impactful symposium and heartfelt outreach, the event demonstrated the power of purpose-driven leadership and collective action in promoting global health and well-being.",
    overview: "The Global Health Program has been an immense success, blending education, inspiration, and community service. From Mrs. Venetta's dynamic arrival to the impactful symposium and heartfelt outreach, the event demonstrated the power of purpose-driven leadership and collective action in promoting global health and well-being.",
    highlights: [
      {
        title: 'DAY 1 : HEALTH SYMPOSIUM – "Rising Above Influence: The Power of Purpose"',
        body: 'The highlight of the program took place on Saturday with a Health Symposium titled "Rising Above Influence: The Power of Purpose." The symposium was an enlightening and impactful session led by Mrs. Venetta, who spoke passionately about the power of the mind and the importance of creating mental maps that guide individuals through life\'s challenges. Participants were encouraged to identify their core values and use them as a compass in moments of peer pressure and temptation. The symposium featured participants and representatives from: Skillful Mind Initiative, YALI (Young African Leaders Initiative), and Upam Academy students. The engagement was interactive, featuring question-and-answer sessions, group reflections, and networking opportunities. Many attendees described the experience as "transformational" and "power-packed." Following the symposium, the day concluded with a visitation to an African Art Gallery.'
      },
      {
        title: 'DAY 2: CORRECTIONAL CENTER VISIT',
        body: "The second day, Sunday, was devoted to community outreach. The team visited a Correctional Center, where participants interacted with inmates in a compassionate and motivational session. Discussions centered on the dangers of drug abuse, the importance of self-development, and the need to channel energy into ambitions and positive goals rather than harmful substances. Lectures and personal testimonies shared during the visit inspired hope and reinforced the message that transformation is possible for everyone, regardless of past mistakes. Mrs. Venetta's empathetic communication and encouragement left a lasting impression on both the inmates and volunteers."
      },
      {
        title: 'DAY 3: SCHOOL OUTREACH',
        body: "On the final day, Mrs Venetta alongside the team visited two schools — African Child Academy and Freedom International School to enlighten students on the importance of focusing on their future and avoiding drug abuse. During the interactive sessions, Mrs Venetta encouraged students to set meaningful goals, stay disciplined, and make positive choices that support their personal and academic growth. The discussions highlighted the dangers of drug use and the value of education in building a successful future. Both schools welcomed the team warmly, and the students showed great enthusiasm and engagement throughout the program. As a gesture of support, books, pens, and jotters were distributed to students and teachers as souvenirs."
      }
    ],
    objectives: [
      "Reduce substance abuse among youth aged 15–35 in target communities",
      "Equip young people with mental tools to resist peer pressure",
      "Connect youth to mentors, career guidance, and community support networks",
      "Promote Pan-African values of self-determination, discipline, and collective progress",
      "Build a movement of youth ambassadors committed to healthy living"
    ],
    status: 'completed',
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
