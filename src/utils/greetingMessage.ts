const GREETINGS = [
  'Hello there',
  'Hi friend',
  'Howdy',
  'Hiya',
  'Welcome',
  'Good to see ya',
];

export const greetingMessage = `${
  GREETINGS[Math.floor(Math.random() * GREETINGS.length)]
}👋`;
