
import { Program, Trainer, Product, Testimonial } from './types';

export const PROGRAMS: Program[] = [
  {
    id: '1',
    title: 'Powerlifting Foundations',
    description: 'Master the big three lifts with our specialized strength program designed for raw power.',
    difficulty: 'Intermediate',
    duration: '60 min',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'HIIT Performance',
    description: 'High-intensity interval training that incinerates fat and builds explosive endurance.',
    difficulty: 'Advanced',
    duration: '45 min',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    title: 'Zen Yoga Flow',
    description: 'Find your balance, improve flexibility, and recover like a pro with our athletic yoga.',
    difficulty: 'Beginner',
    duration: '75 min',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    title: 'Crossfit Ignite',
    description: 'Forging elite fitness through constantly varied functional movements at high intensity.',
    difficulty: 'Advanced',
    duration: '60 min',
    image: 'https://images.unsplash.com/photo-1534367507873-d2b7e2495992?auto=format&fit=crop&q=80&w=800'
  }
];

export const TRAINERS: Trainer[] = [
  {
    id: '1',
    name: 'Marcus Thorne',
    specialty: 'Powerlifting & Strength',
    bio: 'Former national record holder in deadlift. Marcus specializes in building raw strength and perfect technique.',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fe?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    name: 'Elena Vance',
    specialty: 'Mobility & Recovery',
    bio: 'Elite mobility specialist focused on keeping athletes injury-free and performing at their peak potential.',
    image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    name: 'Sarah Chen',
    specialty: 'Metabolic Conditioning',
    bio: 'HIIT expert known for high-energy sessions that push your cardiovascular limits to the extreme.',
    image: 'https://images.unsplash.com/photo-1548690312-e3b507d17a47?auto=format&fit=crop&q=80&w=800'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Prime Whey Isolate - Vanilla',
    price: 64.99,
    image: 'https://images.unsplash.com/photo-1593095191071-82b0c9ad6406?auto=format&fit=crop&q=80&w=800',
    category: 'Supplements'
  },
  {
    id: '2',
    name: 'Essential Training Tee',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800',
    category: 'Apparel'
  },
  {
    id: '3',
    name: 'Heavy Duty Lifting Straps',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=800',
    category: 'Equipment'
  },
  {
    id: '4',
    name: 'Performance Crew Socks',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1582966772640-31043401c857?auto=format&fit=crop&q=80&w=800',
    category: 'Apparel'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Jake Reynolds',
    role: 'Member since 2021',
    content: 'The best gym environment I have ever experienced. The trainers truly care about your progress and technique.',
    avatar: 'https://picsum.photos/id/1/200/200'
  },
  {
    id: '2',
    name: 'Amanda Brooks',
    role: 'Competitive Athlete',
    content: 'Prime Gym equipment is top-tier. Everything from the barbells to the recovery suite is premium quality.',
    avatar: 'https://picsum.photos/id/2/200/200'
  },
  {
    id: '3',
    name: 'David Kim',
    role: 'Executive',
    content: 'I love the classes. The energy in the HIIT performance sessions is unmatched in this city.',
    avatar: 'https://picsum.photos/id/3/200/200'
  }
];
