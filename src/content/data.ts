import publicationsData from './publications.json';
import type { Publication } from './schemas';

export interface ProjectItem {
  slug: string;
  title: string;
  summary: string;
  pillar: 'rf' | 'energy' | 'wsn';
  tools: string[];
  featured: boolean;
  year: number;
  specs: { label: string; value: string }[];
  problem: string;
  approach: string;
  design: string;
  results: string;
  links: { label: string; url: string }[];
  status: 'published' | 'draft';
}

export interface NoteItem {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  pillar: 'rf' | 'energy' | 'wsn';
  readingTime: string;
  content: string;
  status: 'published' | 'draft';
}

export const publications: Publication[] = publicationsData as Publication[];

export const projects: ProjectItem[] = [
  {
    slug: 'dual-band-cp-swipt-rectenna',
    title: 'Dual-Band Circularly Polarised SWIPT Rectenna',
    summary: 'A compact 4-port antenna harvesting and communicating at 3.5 and 5.8 GHz without matching network insertion loss.',
    pillar: 'wsn',
    tools: ['CST Studio Suite', 'Keysight ADS', 'Python'],
    featured: true,
    year: 2025,
    specs: [
      { label: 'Operating Bands', value: '3.5 GHz & 5.8 GHz' },
      { label: 'Port Isolation', value: '~ -30 dB' },
      { label: 'PCE Peak', value: '>60% @ -10 dBm' },
      { label: 'Polarisation', value: 'Circular (RHCP/LHCP)' }
    ],
    problem: 'Simultaneous Wireless Information and Power Transfer (SWIPT) nodes traditionally require separate antennas or bulky diplexers and impedance matching networks, which introduce severe insertion loss (often 1.5–3 dB) that devastates RF-to-DC conversion efficiency at sub-milliwatt levels.',
    approach: 'Engineered an integrated 4-port circularly polarized antenna where impedance matching is achieved natively through geometry rather than external lumped elements. Two dedicated ports handle data communication while two ports couple directly into zero-bias Schottky diode rectifiers.',
    design: 'Employed a defected ground structure (DGS) with asymmetrical orthogonal slots to generate circular polarization and decouple transmit/receive and power harvesting channels. Simulated across both CST Microwave Studio and Keysight ADS with harmonic balance co-simulation.',
    results: 'Demonstrated inter-port isolation near -30 dB across both 3.5 GHz (5G n78) and 5.8 GHz (ISM). Reached power conversion efficiency exceeding 60% at -10 dBm (100 µW) input power, verified in harmonic-balance simulations.',
    links: [
      { label: 'Napier Research Output', url: 'https://napier.ac.uk/research-and-innovation/research-search/outputs/compact-dual-band-circularly-polarized-rectenna-for-swipt-in-low-power-iot-and-wsns' }
    ],
    status: 'published'
  },
  {
    slug: 'three-port-harmonic-swipt-healthcare',
    title: 'Three-Port Harmonic-Rejecting SWIPT Front-End for Healthcare WSN',
    summary: 'Integrated 3-port front-end that suppresses harmonic re-radiation while powering wearable biometric sensors.',
    pillar: 'wsn',
    tools: ['Keysight ADS', 'CST Studio Suite', 'MATLAB'],
    featured: true,
    year: 2025,
    specs: [
      { label: 'Ports', value: '3-Port Integrated' },
      { label: 'Harmonic Suppression', value: '>35 dB (2nd & 3rd)' },
      { label: 'Application', value: 'Smart Healthcare Sensors' },
      { label: 'Input Power Target', value: '-20 to 0 dBm' }
    ],
    problem: 'Nonlinear diode rectifiers generate harmonic energy (2f₀, 3f₀) that radiates back out of the harvesting antenna, violating spectral compliance and wasting harvested DC power.',
    approach: 'Integrated a bandstop harmonic-rejecting filter directly into the multi-port front-end feedline, trapping higher harmonics within the circuit to be re-rectified into usable DC.',
    design: 'Designed coupled-line resonators with transmission zeros tuned exactly to 2nd and 3rd harmonics, co-integrated with a biomedical telemetry channel.',
    results: 'Measured >35 dB harmonic rejection without degrading fundamental RF-to-DC conversion, ensuring medical telemetry safety compliance.',
    links: [
      { label: 'ICAC 2025 Listing', url: 'https://napier.ac.uk' }
    ],
    status: 'published'
  },
  {
    slug: 'triple-band-transmission-matching',
    title: 'Triple-Band Rectifier with Harmonic Suppression Matching',
    summary: 'Multi-stage uniform transmission line network providing simultaneous matching across three harvesting bands.',
    pillar: 'rf',
    tools: ['Keysight ADS', 'Python', 'Smith Chart'],
    featured: true,
    year: 2024,
    specs: [
      { label: 'Matching Bands', value: 'Triple-Band' },
      { label: 'Topology', value: 'Multi-stage Uniform TL' },
      { label: 'Dynamic Range', value: '-25 dBm to +5 dBm' },
      { label: 'Harmonic Traps', value: '2f₀ / 3f₀ Suppressed' }
    ],
    problem: 'Ambient RF power is scattered across multiple disparate cellular and Wi-Fi bands. Standard single-band rectifiers leave available environmental electromagnetic power uncollected.',
    approach: 'Developed an analytical synthesis method for multi-stage uniform transmission lines that solves complex input impedance matching simultaneously across three target frequency bands.',
    design: 'Stepped-impedance microstrip stubs configured as dual-function matching and harmonic suppression blocks, verified through automated Python-ADS optimization scripts.',
    results: 'Maintains >50% PCE across three discrete ambient spectrum bands while attenuating second harmonic radiation by >28 dB.',
    links: [
      { label: 'Conference Presentation', url: 'https://napier.ac.uk' }
    ],
    status: 'published'
  },
  {
    slug: 'nonlinear-energy-storage-modelling',
    title: 'Nonlinear Energy Storage & Power Management Modelling',
    summary: 'State-space and equivalent circuit formulations for battery and supercapacitor storage in micro-power harvesters.',
    pillar: 'energy',
    tools: ['COMSOL Multiphysics', 'Python', 'State-Space'],
    featured: false,
    year: 2026,
    specs: [
      { label: 'Journal', value: 'Journal of Power Sources (2026)' },
      { label: 'DOI', value: '10.1016/j.jpowsour.2026.240059' },
      { label: 'Modelling', value: 'Nonlinear State-Space' },
      { label: 'Focus', value: 'Low-power Energy Storage' }
    ],
    problem: 'Pulsed power demands of IoT microcontrollers (wake-up vs sleep) cause severe degradation and efficiency collapse in small-scale storage cells if power management does not model nonlinear impedance dynamics.',
    approach: 'Formulated continuous-time state-space models capturing charge transfer kinetics and equivalent series resistance (ESR) variations during intermittent micropower charging.',
    design: 'Validated through experimental battery cycling data co-simulated with finite-element models in COMSOL Multiphysics.',
    results: 'Predicts micro-power charging profiles within 3% of measured electrochemical cells under irregular RF energy burst conditions.',
    links: [
      { label: 'Journal DOI', url: 'https://doi.org/10.1016/j.jpowsour.2026.240059' }
    ],
    status: 'published'
  }
];

export const notes: NoteItem[] = [
  {
    slug: 'rectifier-basics',
    title: 'RF Power Conversion Efficiency, and Why It Collapses at Low Power',
    date: '2026-11-16',
    summary: 'A short derivation of RF-to-DC conversion efficiency and why diode nonlinearity dominates below about -10 dBm.',
    tags: ['rectifier', 'rf-energy-harvesting', 'fundamentals'],
    pillar: 'rf',
    readingTime: '3 min read',
    content: `A short derivation of RF-to-DC conversion efficiency and why diode nonlinearity dominates below about -10 dBm.`,
    status: 'published'
  },
  {
    slug: 'smith-chart-matching-basics',
    title: 'Smith Chart Impedance Matching Basics for RF Rectifiers',
    date: '2026-11-10',
    summary: 'Navigating constant resistance and conductance circles to match a power-dependent complex diode impedance.',
    tags: ['smith-chart', 'impedance-matching', 'rf-circuits'],
    pillar: 'rf',
    readingTime: '4 min read',
    content: `Navigating constant resistance and conductance circles to match a power-dependent complex diode impedance.`,
    status: 'published'
  },
  {
    slug: 'harmonics-in-rectifiers',
    title: 'Harmonics in Diode Rectifiers: Why Suppression Matters',
    date: '2026-10-28',
    summary: 'How diode nonlinearity generates 2nd and 3rd harmonics, and how defected ground structures trap them for recycling.',
    tags: ['harmonics', 'rectenna', 'em-design'],
    pillar: 'wsn',
    readingTime: '3 min read',
    content: `How diode nonlinearity generates 2nd and 3rd harmonics, and how defected ground structures trap them for recycling.`,
    status: 'published'
  }
];
