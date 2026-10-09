/**
 * Road2Care - Central Site & Business Configuration
 * 
 * IMPORTANT FOR OWNER / DEVELOPER:
 * Update this file with genuine business details prior to public launch.
 * All contact details, operating areas, NDIS registration status, and service
 * categories can be updated or toggled on/off here without modifying page components.
 */

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: 'core' | 'capacity' | 'capital' | 'coordination';
  iconName: string;
  enabled: boolean;
  whoItSuits: string[];
  sampleActivities: string[];
  ndisSupportCategory: string;
}

export interface OperatingArea {
  region: string;
  suburbs: string[];
  status: 'confirmed' | 'pending_enquiry';
}

export interface SiteConfig {
  business: {
    name: string;
    legalName: string;
    tagline: string;
    subTagline: string;
    phone: string;
    phoneDisplay: string;
    email: string;
    abn: string;
    serviceAreaSummary: string;
    operatingHours: string;
    officialDomain: string;
  };
  compliance: {
    // Set to true only once official NDIS Commission registration is verified
    isRegisteredProvider: boolean;
    registrationNotice: string;
    workerScreeningCommitment: string;
  };
  socialLinks: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
  services: ServiceItem[];
  areas: OperatingArea[];
  acknowledgementOfCountry: string;
}

export const siteConfig: SiteConfig = {
  business: {
    name: 'Road2Care',
    legalName: 'Road2Care (ABN to be confirmed)',
    tagline: 'Empowering Abilities. Enriching Lives',
    subTagline: 'Support That Helps You Move Forward',
    phone: '+61400000000',
    phoneDisplay: '0400 000 000 (Placeholder)',
    email: 'info@road2care.com',
    abn: 'XX XXX XXX XXX (To be provided)',
    serviceAreaSummary: 'Melbourne, Victoria (Contact us to confirm local availability)',
    operatingHours: 'Monday – Friday: 8:30 AM – 5:30 PM | Support Services 7 Days by Arrangement',
    officialDomain: 'https://road2care.com',
  },

  compliance: {
    isRegisteredProvider: false,
    registrationNotice:
      'Road2Care currently supports Self-Managed and Plan-Managed NDIS participants. Provider registration is under review. We do not claim official NDIS Commission endorsement.',
    workerScreeningCommitment:
      'All Road2Care support workers undergo Australian NDIS Worker Screening Checks, National Police Checks, Working with Children Checks, and maintain current First Aid & CPR certifications.',
  },

  socialLinks: {
    facebook: '#',
    instagram: '#',
    linkedin: '#',
  },

  areas: [
    {
      region: 'Western Melbourne',
      suburbs: ['Sunshine', 'Footscray', 'Altona', 'Point Cook', 'Werribee', 'Tarneit', 'Truganina'],
      status: 'pending_enquiry',
    },
    {
      region: 'Northern Melbourne',
      suburbs: ['Craigieburn', 'Broadmeadows', 'Epping', 'Reservoir', 'Coburg', 'Brunswick'],
      status: 'pending_enquiry',
    },
    {
      region: 'Inner & Eastern Melbourne',
      suburbs: ['Richmond', 'Hawthorn', 'Box Hill', 'Ringwood', 'Glen Waverley'],
      status: 'pending_enquiry',
    },
    {
      region: 'South Eastern Melbourne',
      suburbs: ['Dandenong', 'Clayton', 'Oakleigh', 'Berwick', 'Cranbourne', 'Frankston'],
      status: 'pending_enquiry',
    },
  ],

  services: [
    {
      id: 'personal-care-daily-living',
      title: 'Personal Care & Daily Living Support',
      shortDescription:
        'Respectful, one-on-one assistance with personal routines, hygiene, meal preparation, and everyday living in the comfort of your home.',
      fullDescription:
        'Our dedicated support workers provide sensitive, dignified assistance tailored to your individual preferences and morning/evening routines. We prioritise your privacy, independence, and comfort at all times.',
      category: 'core',
      iconName: 'UserCheck',
      enabled: true,
      whoItSuits: [
        'Participants seeking compassionate assistance with morning and bedtime routines',
        'Individuals needing support with showering, dressing, and personal hygiene',
        'Participants wanting hands-on help with nutritious meal planning and prep',
      ],
      sampleActivities: [
        'Assistance with showering, grooming, and dressing',
        'Support with mobility and transfers around the home',
        'Nutritious meal preparation and feeding assistance if required',
        'Medication prompting and adherence assistance',
      ],
      ndisSupportCategory: 'Core - Assistance with Daily Life (01)',
    },
    {
      id: 'community-participation',
      title: 'Community Participation & Social Support',
      shortDescription:
        'Engage in your community, connect with social clubs, pursue hobbies, and build meaningful friendships with tailored 1-on-1 support.',
      fullDescription:
        'We believe life is richer when you are connected to the people and places you enjoy. Road2Care supports you to explore recreational activities, attend local community events, pursue personal passions, and gain confidence out and about.',
      category: 'core',
      iconName: 'Users',
      enabled: true,
      whoItSuits: [
        'Participants wanting to make new friends and connect with community groups',
        'Individuals looking for accompanied support to sports, arts, or hobby clubs',
        'Participants building confidence in unfamiliar social settings',
      ],
      sampleActivities: [
        'Attending local sports clubs, gyms, swimming, or community classes',
        'Visiting cafes, libraries, museums, and local community markets',
        'Joining social hobby groups, volunteering, or creative arts workshops',
        'Building interpersonal confidence and community safety awareness',
      ],
      ndisSupportCategory: 'Core - Assistance with Social, Economic and Community Participation (04)',
    },
    {
      id: 'supported-independent-living',
      title: 'Supported Independent Living (SIL) Support',
      shortDescription:
        'Support to live independently in shared or individual accommodation with round-the-clock or scheduled assistance.',
      fullDescription:
        'Supported Independent Living enables you to enjoy home life with the exact level of support you need. We help create safe, nurturing home environments that encourage independence, shared responsibilities, and personal growth.',
      category: 'core',
      iconName: 'Home',
      enabled: true,
      whoItSuits: [
        'Participants transitioning to independent living or shared living arrangements',
        'Individuals with SIL funding in their NDIS plan looking for reliable support staff',
        'Participants who require overnight or continuous daily support',
      ],
      sampleActivities: [
        'Developing home management routines and domestic chores',
        'Support with overnight care, active night support, or sleepovers',
        'Fostering respectful coexistence with housemates and community',
        'Budgeting, grocery shopping, and healthy living management',
      ],
      ndisSupportCategory: 'Core - Supported Independent Living (SIL)',
    },
    {
      id: 'household-tasks',
      title: 'Assistance with Household Tasks',
      shortDescription:
        'Practical help to keep your living space clean, tidy, safe, and comfortable, lightening the load for you and your family.',
      fullDescription:
        'A clean and organised home is essential for wellbeing. We assist with regular domestic duties, light cleaning, laundry, grocery shopping, and household organization, working with you or on your behalf based on your goals.',
      category: 'core',
      iconName: 'Sparkles',
      enabled: true,
      whoItSuits: [
        'Participants who need physical assistance to manage home maintenance',
        'Families and carers looking to ease daily domestic pressure',
        'Individuals building their own household management skills',
      ],
      sampleActivities: [
        'Vacuuming, mopping, dusting, and wiping down surfaces',
        'Washing, hanging, folding, and ironing clothing',
        'Dishwashing and kitchen sanitisation',
        'Pantry restocking, grocery shopping, and domestic organisation',
      ],
      ndisSupportCategory: 'Core - Assistance with Daily Life: Household Tasks',
    },
    {
      id: 'transport-access',
      title: 'Transport & Access to Community',
      shortDescription:
        'Reliable transport assistance to medical appointments, educational facilities, workplaces, and social outings.',
      fullDescription:
        'Getting from A to B shouldn’t be a barrier to living a full life. Our workers provide safe, punctual transport assistance in safe vehicles or companion support on public transport to help you travel independently.',
      category: 'core',
      iconName: 'Car',
      enabled: true,
      whoItSuits: [
        'Participants who cannot independently drive or use public transport',
        'Individuals attending frequent medical or allied health appointments',
        'Participants needing reliable travel to education, TAFE, or employment',
      ],
      sampleActivities: [
        'Door-to-door transport to doctors, therapists, and specialist appointments',
        'Travel to day programmes, workshops, classes, or employment',
        'Public transport training (bus, train, tram route familiarisation and Myki use)',
        'Transport to family gatherings, shopping centres, and weekend outings',
      ],
      ndisSupportCategory: 'Core - Transport Support',
    },
    {
      id: 'daily-living-skills',
      title: 'Development of Daily Living Skills',
      shortDescription:
        'Goal-oriented capacity building to develop essential life skills, boost self-reliance, and make independent choices.',
      fullDescription:
        'We believe in your potential. Our capacity-building support focuses on practical learning and confidence building, empowering you to manage daily tasks, make personal decisions, and achieve your NDIS goals.',
      category: 'capacity',
      iconName: 'GraduationCap',
      enabled: true,
      whoItSuits: [
        'Young adults and participants striving towards greater autonomy',
        'Participants eager to learn cooking, money management, or digital literacy',
        'Individuals wanting to build problem-solving and self-advocacy skills',
      ],
      sampleActivities: [
        'Step-by-step cooking instruction and meal planning',
        'Personal budgeting, banking, and shopping calculations',
        'Using smartphones, computers, and online portals safely',
        'Self-advocacy, communication, and decision-making development',
      ],
      ndisSupportCategory: 'Capacity Building - Increased Social and Community Participation',
    },
    {
      id: 'respite-short-term-accommodation',
      title: 'Respite & Short-Term Accommodation (STA)',
      shortDescription:
        'Comfortable, caring short breaks for participants that give families and primary carers time to rest and recharge.',
      fullDescription:
        'Respite care offers a positive change of scenery for participants to experience new activities, socialise, and relax in a supportive setting, while primary carers receive well-deserved time to recharge.',
      category: 'core',
      iconName: 'BedDouble',
      enabled: true,
      whoItSuits: [
        'Participants wanting a refreshing short getaway or holiday break',
        'Carers needing temporary relief or scheduled respite',
        'Individuals preparing for future independent living transitions',
      ],
      sampleActivities: [
        'Supported weekend getaways and recreational activities',
        '24/7 attentive, friendly care in accessible environments',
        'Engaging community outings, dining experiences, and relaxation',
        'Routine maintenance and medication support while away from home',
      ],
      ndisSupportCategory: 'Core - Assistance with Daily Life: Short Term Accommodation',
    },
    {
      id: 'support-coordination',
      title: 'Support Coordination',
      shortDescription:
        'Expert guidance to understand your NDIS plan, connect with quality service providers, and maximise your funding.',
      fullDescription:
        'Navigating the NDIS can be complex. A dedicated Support Coordinator helps you decode your plan, coordinate varied service providers, resolve service challenges, and prepare for annual plan reviews.',
      category: 'coordination',
      iconName: 'Compass',
      enabled: true,
      whoItSuits: [
        'Participants with Support Coordination included in their NDIS plan',
        'Families seeking clarity on budgets, service agreements, and funding rules',
        'Participants navigating major life transitions or complex support networks',
      ],
      sampleActivities: [
        'Connecting with allied health, day programmes, and community supports',
        'Reviewing and negotiating service agreements with chosen providers',
        'Addressing service delivery issues and monitoring budget utilisation',
        'Preparing comprehensive progress reports for NDIS plan reviews',
      ],
      ndisSupportCategory: 'Capacity Building - Support Coordination (07)',
    },
    {
      id: 'employment-education-support',
      title: 'Employment & Education Support',
      shortDescription:
        'Practical coaching and on-site support to pursue higher education, training courses, and meaningful employment opportunities.',
      fullDescription:
        'We support you to discover your vocational interests, prepare resumes, build workplace skills, and maintain steady employment or study routines with tailored assistance.',
      category: 'capacity',
      iconName: 'Briefcase',
      enabled: true,
      whoItSuits: [
        'Participants seeking open employment or supported work opportunities',
        'Students attending university, TAFE, or secondary vocational training',
        'Job seekers wanting to boost resume skills and interview readiness',
      ],
      sampleActivities: [
        'Assistance with job applications, resume building, and interview practise',
        'Workplace orientation and on-the-job companion support',
        'Study support, note-taking assistance, and educational scheduling',
        'Transport coordination and daily work routine management',
      ],
      ndisSupportCategory: 'Capacity Building - Finding and Keeping a Job (10)',
    },
  ],

  acknowledgementOfCountry:
    'Road2Care acknowledges the Traditional Custodians of the lands across Australia on which we live and work. We recognise their continuing connection to land, water, and community, and pay our respects to Elders past, present, and emerging.',
};
