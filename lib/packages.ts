// File: app/data/packages.ts
export type Package = {
  title: string;
  target_audience: string;
  goal: string;
  details: string[];
  price: string;
  duration: string;
  format: string;
  session_length: string;
};
export const oneOnOnePackages: Package[] = [
  {
    title: 'Inflammation-Free Lifestyle',
    target_audience:
      'Women experiencing chronic fatigue, bloating, skin issues, joint pain, or low energy due to hidden inflammation.',
    goal: '',
    details: [
      'Reduce chronic inflammation naturally',
      'Rebalance body systems with holistic practices',
      'Empower long-term sustainable anti-inflammatory habits',
    ],
    price: '$850',
    duration: '6 weeks (1 session per week)',
    format: 'Online 1-on-1',
    session_length: '90 Minutes per Session',
  },
  {
    title: 'Graceful Confidence – Strong Core & Posture',
    target_audience: '',
    goal: 'Build confidence by aligning your posture, strengthening your core, and deepening your inner presence.',
    details: [
      'Core & posture training (NeuroPilates based principles).',
      'Breath & body awareness techniques',
      'Mental resilience tools',
      'Posture-power coaching for presence and self-trust',
      'Home-based movement rituals',
    ],
    price: '$850',
    duration: '6 weeks (1 session per week)',
    session_length: '90 Minutes per Session',
    format: 'Online 1-on-1',
  },
  {
    title: 'Chain of Clarity – Holistic Alignment Program',
    target_audience: '',
    goal: 'Uncover and strengthen the weak links in your life’s structure—health, mindset, energy, or direction.',
    details: [
      'Life chain analysis & holistic life wheel',
      'Guided journaling and self-reflection',
      'Techniques to shift limiting beliefs',
      'Personalized realignment map',
      'Mind-body practices for sustainable  change.',
    ],
    price: '$850',
    duration: '6 weeks (1 session per week)',
    format: 'Online 1-on-1',
    session_length: '90 Minutes per Session',
  },
  {
    title: 'Empowered Within – Self-Reliance Path',
    target_audience: '',
    goal: 'Trust your own wisdom, stand on your own feet, and live from inner certainty.',
    details: [
      'Identity & boundary coaching',
      'Emotional independence tools',
      'Journaling + self-assessments',
      'Weekly empowerment challenges',
      'Steps to act from clarity, not fear.',
    ],
    price: '$850',
    duration: '6 weeks (1 session per week)',
    format: 'Online 1-on-1',
    session_length: '90 Minutes per Session',
  },
];

export const groupPackages: Package[] = [
  {
    title: 'Inflammation-Free Lifestyle',
    target_audience:
      'Women experiencing chronic fatigue, bloating, skin issues, joint pain, or low energy due to hidden inflammation.',
    goal: '',
    details: [
      'Reduce chronic inflammation naturally',
      'Rebalance body systems with holistic practices',
      'Empower long-term sustainable anti-inflammatory habits',
    ],
    price: '$350',
    duration: '6 weeks (1 session per week)',
    format: 'Online Group Session (up to 6 participants)',
    session_length: '90 Minutes per Session',
  },
  {
    title: 'Graceful Confidence – Strong Core & Posture',
    target_audience: '',
    goal: 'Build confidence by aligning your posture, strengthening your core, and deepening your inner presence.',
    details: [
      'Core & posture training (NeuroPilates based principles).',
      'Breath & body awareness techniques',
      'Mental resilience tools',
      'Posture-power coaching for presence and self-trust',
      'Home-based movement rituals',
    ],
    price: '$350',
    duration: '6 weeks (1 session per week)',
    format: 'Online Group Session (up to 6 participants)',
    session_length: '90 Minutes per Session',
  },
  {
    title: 'Chain of Clarity – Holistic Alignment Program',
    target_audience: '',
    goal: 'Uncover and strengthen the weak links in your life’s structure—health, mindset, energy, or direction.',
    details: [
      'Life chain analysis & holistic life wheel',
      'Guided journaling and self-reflection',
      'Techniques to shift limiting beliefs',
      'Personalized realignment map',
      'Mind-body practices for sustainable  change.',
    ],
    price: '$350',
    duration: '6 weeks (1 session per week)',
    format: 'Online Group Session (up to 6 participants)',
    session_length: '90 Minutes per Session',
  },
  {
    title: 'Empowered Within – Self-Reliance Path',
    target_audience: '',
    goal: 'Trust your own wisdom, stand on your own feet, and live from inner certainty.',
    details: [
      'Identity & boundary coaching',
      'Emotional independence tools',
      'Journaling + self-assessments',
      'Weekly empowerment challenges',
      'Steps to act from clarity, not fear.',
    ],
    price: '$350',
    duration: '6 weeks (1 session per week)',
    format: 'Online Group Session (up to 6 participants)',
    session_length: '90 Minutes per Session',
  },
];
