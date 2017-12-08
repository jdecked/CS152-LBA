import Prolog from 'jsprolog';

export default function recommend(maxPrice, maxDistance, languages, cuisines, restrictions) {
  let rules = Prolog.Parser.parse(
    "restaurant('Fritz', 7, 2, [english, korean], [coffee, bakery], []). " +
    "restaurant('Seoul Chicken', 8, 5, [english, korean], ['fried chicken'], [pescatarian]). " +
    "restaurant('Just Steak', 15, 6, [english, korean], [bbq],[]). " +
    "restaurant('Gyeongcheon Aein', 10, 3, [korean], [korean], []). " +
    "restaurant('Goldfish Dimsum Cuisine', 5, 2, [korean, chinese], [chinese], [vegetarian, pescatarian]). " +
    "restaurant('Tutto Bene', 10, 2, [english, korean], [italian], []). " +
    "restaurant('Rye Post', 9, 5, [english, korean], [burgers], []). " +
    "restaurant('Roya Toya', 9, 4, [korean, english], [korean], []). " +
    "restaurant('Louis Cinq', 14, 8, [french, english, korean], [french], []). " +
    "restaurant('Braai Republic', 10, 8, [english, korean], ['fine dining'], []). " +
    "restaurant('I Am A Burger', 9, 5, [english, korean], [burgers], ['nut allergy']). " +
    "restaurant('Itaewon The Burger', 11, 5, [english, korean], [burgers, salads], []). " +
    "restaurant('Gimbab Next Door', 4, 0, [english, korean], [korean, 'fast food'], []). " +
    "restaurant('Bean Brothers', 7, 1, [english, korean], [coffee, tea, dessert], [vegan, vegetarian, pescatarian]). " +
    "restaurant('Flower Cafe', 6, 1, [english, korean], [tea, coffee], [vegan, vegetarian, pescatarian]). " +
    "restaurant('Ichiban Ramen', 8, 2, [korean, japanese], [japanese], []). " +
    "restaurant('Firebell', 8, 10, [english, korean], [burgers], []). " +
    "restaurant('Nanumi Tteokbokki', 6, 11, [korean], [korean], [vegetarian, pescatarian]). " +
    "restaurant('Parkview', 20, 10, [english, korean], [brunch], []). " +
    "restaurant('McDonalds', 5, 1, [english, korean], ['fast food'], []). " +
    "restaurant('Dunkin Donuts', 2, 1, [english, korean], ['fast food', dessert], []). " +
    "restaurant('Original Pancake House', 15, 3, [english, korean], [brunch, 'american diner'], []). " +
    "restaurant('Coffee Bean', 5, 1, [english, korean], [coffee, tea, 'coffee chain'], [vegan, vegetarian, pescatarian]). " +
    "restaurant('Starbucks', 4, 1, [english, korean], [coffee, tea, 'coffee chain'], [vegan, vegetarian, pescatarian]). " +
    "restaurant('World of Beer', 8, 2, [english, korean], [brunch, beer, 'american diner', 'fast food'], []). " +
    "restaurant('Pizza School', 5, 2, [korean], [pizza], []). " +
    "restaurant('Jeju King BBQ Pork', 18, 4, [english, korean], [bbq], ['gluten-free']). " +
    "restaurant('Juicy', 5, 0, [english, korean], ['juices/smoothies', coffee], []). " +
    "restaurant('Cafe Mamas', 10, 2, [english, korean], [salads, coffee], [vegan, vegetarian, pescatarian]). " +
    "restaurant('Jung Sik', 75, 9, [korean], ['fine dining'], []). " +
    "restaurant('Cheezy Italiano',11, 2, [english, korean], [italian, beer], [vegetarian, pescatarian]). " +
    "restaurant('Mimi Myeonga', 20, 6, [english, korean], [korean], []). " +
    "restaurant('Mifendang', 12, 18, [english, korean], [korean], []). " +
    "restaurant('Bangkok Express', 17, 12, [english, chinese, korean], [chinese], []). " +
    "restaurant('Pizzeria d buzza', 14, 5, [english, korean], [italian], []). " +
    "restaurant('Samonim Donkatsu', 15, 4, [english, korean], [brunch], []). " +
    "restaurant('Burger King', 9, 1,  [english, korean], [burgers], []). " +
    "restaurant('New York Burger', 15, 2, [korean, english], [burgers, 'american diner'], []). " +
    "restaurant('Otsal', 13, 5, [english, korean], [indian], []). " +
    "restaurant('El Taco', 10, 4, [english, korean], [mexican], []). " +
    "restaurant('Kisara', 13, 3, [english, korean, japanese], [japanese], []). " +
    "restaurant('Pizzarium', 14, 2, [korean, english], [pizza], []). " +
    "restaurant('Caffe Pascucci', 5, 0, [english, korean], ['coffee chain', coffee], []). " +
    "restaurant('Melting Shop', 11, 3, [english, korean], [sandwiches], []). " +
    "restaurant('Butanchu', 13, 4, [english, korean], [english, korean, japanese], []). " +
    "restaurant('Brooklyn Burger', 15, 2, [english, korean], [burgers, brunch, 'american diner'], []). " +
    "restaurant('Naan Palace', 18, 12, [english, korean], [indian], [vegetarian, pescatarian]). " +
    "restaurant('Julio', 10, 4, [english, korean], [mexican], []). " +
    "restaurant('Linus BBQ', 15, 2, [english, korean], [bbq, 'fine dining', 'pub food'], []). " +
    "restaurant('Brick Oven', 14, 1, [english, korean], [pizza, 'pub food', beer, salads], []). " +
    "restaurant('Jacoby Burger', 11, 4, [english, korean], [burgers, salads, beer], []). " +
    "restaurant('Hoya Sushi', 9, 1, [japanese, korean, english], [japanese], []). " +
    "restaurant('Jamba Juice', 3, 0, [korean, english], ['juices/smoothies'], []). " +
    "restaurant('Smoothie King', 3, 3, [english, korean],  ['juices/smoothies'], [vegan, vegetarian, pescatarian]). " +
    "restaurant('Bonne Kitchen', 15, 0, [english, korean], [brunch], []). " +
    "member(X, [X | R]). " +
    "member(X, [Y | R]) :- member(X, R). " +
    "atLeastOneMember([X | _], List) :- member(X, List), !. " +
    "atLeastOneMember([_ | R], List) :- atLeastOneMember(R, List). " +
    "allMember([], _). " +
    "allMember([X | R], List) :- member(X, List), allMember(R, List)."
    // The parser couldn't handle these rules, so I edited the KB to make it have the same meaning
    // "vegetarian :- vegan; salads. " +
    // "pescatarian :- vegan; vegetarian."
  );

  // This is where this gets a bit funny.
  // jsprolog doesn't support less-than/greater-than comparison
  // so let's get around that using member(), since floats aren't supported
  // either by jsprolog anyway — or most built-in functions.
  // This only works because none of our prices or distances are floats.
  let lteMaxPrice = [...Array(Math.floor(maxPrice) + 1).keys()];
  let lteMaxDistance = [...Array(Math.floor(maxDistance) + 1).keys()];

  let queryString = `restaurant(Name, Cost, Distance, Language, Cuisine, Restriction), ` +
    `member(Cost, [${lteMaxPrice}]), member(Distance, [${lteMaxDistance}]), ` +
    `atLeastOneMember([${languages.map((language) => {return language.toLowerCase()})}], Language), ` +
    `atLeastOneMember([${cuisines.map((cuisine) => {
      return cuisine.includes(' ') || cuisine.includes('/') ?
        `'${cuisine.toLowerCase()}'` : cuisine.toLowerCase();
    })}], Cuisine), ` +
    `allMember([${restrictions.map((restriction) => {
      return restriction.includes('-') ?
        `'${restriction.toLowerCase()}'` : restriction.toLowerCase();
    })}], Restriction).`;

  let query = Prolog.Parser.parseQuery(queryString);
  let iter = Prolog.Solver.query(rules, query);

  let recommendations = []
  while(iter.next()){
      recommendations.push(iter.current.Name);
  }

  return (
    recommendations
  );
}
