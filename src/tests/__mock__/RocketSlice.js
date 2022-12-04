const fetchRocket = () => {
  const rockets = {
    data: [
      {
        id: 1,
        name: 'SharProp',
        description: 'Shall we go to Mars?',
        reserved: false,
      },
      {
        id: 2,
        name: 'KangoAfro-Xp',
        description: 'We rock to the moon and back',
        reserved: false,
      },
      {
        id: 3,
        name: 'AnyVerse Trip',
        description: 'Together, we make Nigeria great again',
        reserved: false,
      },
    ],
  };
  return rockets.data;
};

export default fetchRocket;
