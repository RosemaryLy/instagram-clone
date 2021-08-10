export function seedDatabase(firebase) {
    const users = [
      {
        userId: 'HUKvAewEIuh9cJRvP5sFlIRdA2Q2',
        username: 'JessicaTravels',
        fullName: 'Jessica Cheung',
        emailAddress: 'Jessica@jessicatravels.com',
        following: ['2'],
        followers: ['2', '3', '4'],
        dateCreated: Date.now()
      },
      {
        userId: '2',
        username: 'TylerCaptures',
        fullName: 'Tyler Dunn',
        emailAddress: 'TylerDunn@tylercaptures.com',
        following: [],
        followers: ['HUKvAewEIuh9cJRvP5sFlIRdA2Q2'],
        dateCreated: Date.now()
      },
      {
        userId: '3',
        username: 'Soul_Healing_Therapy',
        fullName: 'Moira Zeina',
        emailAddress: 'Moira@soulhealingtherapy.com',
        following: [],
        followers: ['HUKvAewEIuh9cJRvP5sFlIRdA2Q2'],
        dateCreated: Date.now()
      },
      {
        userId: '4',
        username: 'SweetDelightCakes',
        fullName: 'Phoebe Richards',
        emailAddress: 'Phoebe@SweetDelightCakes.com',
        following: [],
        followers: ['HUKvAewEIuh9cJRvP5sFlIRdA2Q2'],
        dateCreated: Date.now()
      }
    ];
  
    // eslint-disable-next-line prefer-const
    for (let k = 0; k < users.length; k++) {
      firebase.firestore().collection('users').add(users[k]);
    }
  
    // eslint-disable-next-line prefer-const
    for (let i = 1; i <= 5; ++i) {
      firebase
        .firestore()
        .collection('photos')
        .add({
          photoId: i,
          userId: '2',
          imageSrc: `/images/users/tyler/${i}.jpg`,
          caption: 'Bali is more than a place...',
          likes: [],
          comments: [
            {
              displayName: 'Soul_Healing_Therapy',
              comment: 'Beautiful picture! I miss Bali'
            },
            {
              displayName: 'SweetDelightCakes',
              comment: 'Stunning'
            }
          ],
          userLatitude: '8.3405°',
          userLongitude: '115.0920°',
          dateCreated: Date.now()
        });
    }
  }