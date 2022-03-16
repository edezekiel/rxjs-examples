import { User } from '../models';

export const users: User[] = [
  { name: 'Rick Sanchez', catchphrase: 'Get Schwifty', id: 0 },
  {
    name: 'Morty Smith',
    catchphrase:
      "Hey, Dad? Nobody's smarter than Rick, but nobody else is my dad. You're a genius at that.",
    id: 1,
  },
  {
    name: 'Summer Smith',
    catchphrase: 'Ok... But not because you told me to',
    id: 2,
  },
  { name: 'Jerry Smith', catchphrase: 'Why am I so mediocre?', id: 3 },
  {
    name: 'Beth Smith',
    catchphrase:
      'If Morty even gives up on a single dream, it had better be because of his own disillusionment',
    id: 4,
  },
  {
    name: 'Squanchy',
    catchphrase: 'Rick Sanchez! You psycho bag of squanch!',
    id: 5,
  },
  { name: 'Birdperson', catchphrase: 'The Beacon was activated.', id: 6 },
];
