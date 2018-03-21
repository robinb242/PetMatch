// ===============================================================================
// DATA
// Below data will hold all of the animals.
// ===============================================================================

var animal = [
    {
      routeName: "cat",
      name: "cat",
      role: "greatest friend",
      compatability: 0,
      ChildFriendly: 1,
      Excr: 2,
      Loyalty: 1,
      Emotional: 1,
      Cuddly: 1,
      Backyard: 2,
      Size: 1,
      Energetic: 2,
      Clean: 1,
      catorDog: 1
    },
    {
      routeName: "dobberman",
      name: "dobberman",
      role: "best friend",
      compatability: 0,
      ChildFriendly: 1,
      Excr: 1,
      Loyalty: 1,
      Emotional: 1,
      Cuddly: 1,
      Backyard: 1,
      Size: 3,
      Energetic: 1,
      Clean: 2,
      catorDog: 1
    },
    {
      routeName: "snake",
      name: "Anaconda",
      role: "not a friend",
      compatability: 0,
      ChildFriendly: 1,
      Excr: 1,
      Loyalty: 1,
      Emotional: 2,
      Cuddly: 2,
      Backyard: 1,
      Size: 3,
      Energetic: 2,
      Clean: 2,
      catorDog: 2
    }
  ];

  //Note how we export the array. This makes it accessible to other files using require.
  module.exports = animal;