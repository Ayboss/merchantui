interface RadioButtonOption {
  title: string;
  description: string;
  statements: string[];
}

export const options: RadioButtonOption[] = [
  {
    title: 'My Wallet',
    description: 'This is an account we have provided for you at no extra cost.',
    statements: [
      'No limits on amount you can receive.',
      'Seamless withdrawals at any time.',
      'Zero Charges.'
    ]
  },
  {
    title: 'My Bank Account',
    description: 'This is a your personal business account.',
    statements: [
      'Origin bank charges for transactions still apply.',
      'No need for withdrawals.',
      'Any Issue that may arise will be resolved with your bank.'
    ]
  }
];
