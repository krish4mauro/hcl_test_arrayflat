
  const data = [
      {
        id: 1,

        text: 'line1',

        children: [
          {
            id: 2,

            text: 'line2',

            children: [
              {
                id: 3,

                text: 'line3',
              },

              {
                id: 4,

                text: 'line4',

                children: [
                  {
                    id: 5,

                    text: 'line5',
                  },
                ],
              },
            ],
          },

          {
            id: 6,

            text: 'line6',

            children: [
              {
                id: 7,

                text: 'line7',
              },
            ],
          },
        ],
      },
    ];

const nested = {
  id: 1,
  children: [
    { id: 2 },
    { id: 3,
      children: [{ id: 5 }, { id: 6 }]
    },
    { id: 4 }
  ]
}

const flatthearray = (obj) => {
  const array = Array.isArray(obj) ? obj : [obj];
  return array.reduce((acc, value) => {
    acc.push(value);
    if (value.children) {
      acc = acc.concat(flatthearray(value.children));
      delete value.children;
    }
    return acc;
  }, []);
}

var a = flatthearray(data);
console.log(a);
