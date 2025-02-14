export const example = {
  viewportWidth: 992,
  attributes: {
    isExample: true,
    title: 'The block title',
    exampleMenuItems: [
      {
        text: 'Title 1',
        anchor: 'Title 1',
        style: 'number',
        children: [],
        level: 2,
        shouldLink: true,
      },
      {
        text: 'Title 2',
        anchor: 'Title 2',
        style: 'number',
        level: 2,
        shouldLink: true,
        children: [
          {
            text: 'Title 2.1',
            anchor: 'Title 2.1',
            style: 'number',
            level: 3,
            shouldLink: true,
            children: [
              {
                text: 'Title 2.1.1',
                anchor: 'Title 2.1.1',
                style: 'bullet',
                children: [],
                level: 4,
                shouldLink: false,
              }
            ],
          },
          {
            text: 'Title 2.2',
            anchor: 'Title 2.2',
            style: 'number',
            level: 3,
            shouldLink: true,
            children: [
              {
                text: 'Title 2.2.1',
                anchor: 'Title 2.2.1',
                style: 'bullet',
                level: 4,
                shouldLink: false,
                children: [],
              },
              {
                text: 'Title 2.2.2',
                anchor: 'Title 2.2.2',
                style: 'bullet',
                level: 4,
                shouldLink: false,
                children: [],
              }
            ],
          },
          {
            text: 'Title 2.3',
            anchor: 'Title 2.3',
            style: 'number',
            level: 3,
            shouldLink: true,
            children: [],
          },
          {
            text: 'Title 2.4',
            anchor: 'Title 2.4',
            style: 'number',
            level: 3,
            shouldLink: true,
            children: [
              {
                text: 'Title 2.4.1',
                anchor: 'Title 2.4.1',
                style: 'bullet',
                level: 4,
                shouldLink: false,
                children: [],
              }
            ],
          },
          {
            text: 'Title 2.5',
            anchor: 'Title 2.5',
            style: 'number',
            shouldLink: true,
            children: [],
            level: 3,
          }
        ],
      },
      {
        text: 'Title 3',
        anchor: 'Title 3',
        style: 'number',
        level: 2,
        shouldLink: true,
        children: [
          {
            text: 'Title 3.1',
            anchor: 'Title 3.1',
            style: 'number',
            level: 3,
            shouldLink: true,
            children: [],
          }
        ],
      }
    ],
  }
};
