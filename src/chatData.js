export const contactsById = {
    1 : {
        "id": 1,
        "name": "Steven Rogers",
        "icon_URL": "https://image.flaticon.com/icons/png/128/892/892759.png",
        "online": true
    },
    2 : {
        "id": 2,
        "name": "Bruce Wayne",
        "icon_URL": "https://image.flaticon.com/icons/png/128/892/892699.png",
        "online": true
    },
    3 : {
        "id": 3,
        "name": "Peter Parker",
        "icon_URL": "https://image.flaticon.com/icons/png/128/1090/1090806.png",
        "online": true
    },
    4 : {
      "id": 4,
      "name": "Fisher Cabrera",
      "icon_URL": "https://image.flaticon.com/icons/png/128/2210/2210023.png",
      "online": true
    },
    5 : {
      "id": 5,
      "name": "Gabrielle Barlow",
      "icon_URL": "https://image.flaticon.com/icons/png/128/634/634772.png",
      "online": false
    },
    6 : {
      "id": 6,
      "name": "Faulkner Marquez",
      "icon_URL": "https://image.flaticon.com/icons/png/128/663/663086.png",
      "online": true
    },
    7 : {
      "id": 7,
      "name": "Trina Sampson",
      "icon_URL": "https://image.flaticon.com/icons/png/128/773/773355.png",
      "online": true
    },
    8 : {
      "id": 8,
      "name": "Raquel Nelson",
      "icon_URL": "https://image.flaticon.com/icons/png/128/892/892799.png",
      "online": false
    },
    9 : {
      "id": 9,
      "name": "Annabelle Johnston",
      "icon_URL": "https://image.flaticon.com/icons/png/128/2503/2503245.png",
      "online": false
    },
    10 : {
      "id": 10,
      "name": "Tony Stark",
      "icon_URL": "https://image.flaticon.com/icons/png/128/892/892776.png",
      "online": true
    }
};

export const currentUser = {
  "id": 0,
  "name": "Me",
  "icon_URL": "https://image.flaticon.com/icons/png/128/181/181549.png",
  "online": true
};

export const messagesByContactId = {
    1 : [
      {'contactId': 0, 'msg': 'Hi!', 'date': '020.6.2020', 'time': '15:44'},
      {'contactId': 1, 'msg': 'Hey man!', 'date': '02.06.2020', 'time': '15:45'},
      {'contactId': 1, 'msg': 'How are you?', 'date': '02.06.2020', 'time': '15:46'}
    ],

    2 : [
      {'contactId': 2, 'msg': 'Good afternoon!', 'date': '02.08.2020', 'time': '20:20'},
      {'contactId': 0, 'msg': 'Hey man!', 'date': '02.08.2020', 'time': '20:25'},
      {'contactId': 2, 'msg': 'How are you?', 'date': '02.08.2020', 'time': '20:27'}
    ],
    3 : [
      {'contactId': 3, 'msg': 'Hello there. Thanks for the follow. Did you notice, that I am an egg? A talking egg? Damn!', 'date': '02.08.2020', 'time': '21:20'},
      {'contactId': 0, 'msg': 'Yeah that is crazy, but people can change their own picture and build their own Twitter conversation with this generator, so it does not matter that you are an egg', 'date': '02.08.2020', 'time': '21:25'},
      {'contactId': 3, 'msg': 'Thanks mate! Feel way better now. Oh, and guys, these messages will be removed once your add your own :-)', 'date': '02.08.2020', 'time': '21:27'}
    ],
    4 : [],
    5 : [],
    6 : [],
    7 : [],
    8 : [],
    9 : [],
    10 : []

};
