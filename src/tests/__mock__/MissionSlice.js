const fetchMission = () => {
  const missions = {
    data: [
      {
        id: 1,
        name: 'ElonX',
        description: 'Shall we go to Mars?',
        reserved: false,
      },
      {
        id: 2,
        name: 'Dodge KillerX',
        description: 'We rock to the moon and back',
        reserved: false,
      },
      {
        id: 3,
        name: 'MindPrep Expo',
        description: 'Together, we make Nigeria great again',
        reserved: false,
      },
      {
        id: 4,
        name: 'AndySupra',
        description: "Let's go appreciate Andrea for her matchless patience",
        reserved: false,
      },
    ],
  };
  return missions.data;
};

export default fetchMission;
