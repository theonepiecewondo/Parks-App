import { Injectable } from '@angular/core';

export interface Message {
  id: number;
  name: string;
  createDate: string;
  lat: number;
  long: number;
  distance: number;
  image: string;
  header: string;
  state: string;
  details: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public messages: Message[] = [
    {
      id: 0,
      name: "Acadia",
      createDate: "February 26, 1919",
      lat: 44.35,
      long: -68.21,
      distance: 0,
      image: "assets/img/thumbs/acadia.jpg",
      header: "acadia.jpg",
      state: "Maine",
      details: "Covering most of Mount Desert Island and other coastal islands, Acadia preserves the tallest mountain on the Atlantic coast, granite peaks, ocean shoreline, woodlands, and lakes. There are freshwater, estuary, forest, and intertidal habitats."
    },
    {
      id: 1,
      name: "American Samoa",
      createDate: "October 31, 1988",
      lat: -14.25,
      long: -170.68,
      distance: 0,
      image: "assets/img/thumbs/americansamoa.jpg",
      header: "americansamoa.jpg",
      state: "American Samoa",
      details: "The southernmost national park is on three Samoan islands and protects coral reefs, rainforests, volcanic mountains, and white beaches. The area is also home to flying foxes, brown boobies, sea turtles, and 900 species of fish."
    },
    {
      id: 2,
      name: "Arches",
      createDate: "November 12, 1971",
      lat: 38.68,
      long: -109.57,
      distance: 0,
      image: "assets/img/thumbs/arches.jpg",
      header: "arches.jpg",
      state: "Utah",
      details: "This site features more than 2,000 natural sandstone arches, including the Delicate Arch. In a desert climate millions of years of erosion have led to these structures, and the arid ground has life-sustaining soil crust and potholes, natural water-collecting basins. Other geologic formations are stone columns, spires, fins, sand towers."
    },
    {
      id: 3,
      name: "Badlands",
      createDate: "November 10, 1978",
      lat: 43.75,
      long: -102.50,
      distance: 0,
      image: "assets/img/thumbs/badlands.jpg",
      header: "badlands.jpg",
      state: "South Dakota",
      details: "The Badlands are a collection of buttes, pinnacles, spires, and grass prairies. It has the world's richest fossil beds from the Oligocene epoch, and there is wildlife including bison, bighorn sheep, black-footed ferrets, and swift foxes."
    },
    {
      id: 4,
      name: "Big Bend",
      createDate: "June 12, 1944",
      lat: 29.25,
      long: -103.25,
      distance: 0,
      image: "assets/img/thumbs/bigbend.jpg",
      header: "bigbend.jpg",
      state: "Texas",
      details: "Named for the Bend of the Rio Grande along the US-Mexico border, this park includes a part of the Chihuahuan Desert. A wide variety of Cretaceous and Tertiary fossils as well as cultural artifacts of Native Americans exist within its borders."
    },
    {
      id: 5,
      name: "Biscayne",
      createDate: "June 28, 1980",
      lat: 25.65,
      long: -80.08,
      distance: 0,
      image: "assets/img/thumbs/biscayne.jpg",
      header: "biscayne.jpg",
      state: "Florida",
      details: "Located in Biscayne Bay, this park at the north end of the Florida Keys has four interrelated marine ecosystems: mangrove forest, the Bay, the Keys, and coral reefs. Threatened animals include the West Indian Manatee, American crocodile, various sea turtles, and peregrine falcon."
    },
    {
      id: 6,
      name: "Black Canyon of the Gunnison",
      createDate: "October 21, 1999",
      lat: 38.57,
      long: -107.72,
      distance: 0,
      image: "assets/img/thumbs/blackcanyon.jpg",
      header: "blackcanyon.jpg",
      state: "Colorado",
      details: "The park protects a quarter of the Gunnison River, which has dark canyon walls from the Precambrian era. The canyon has very steep descents, and it is a site for river rafting and rock climbing. The narrow, steep canyon, made of gneiss and schist, is often in shadow, appearing black."
    },
    {
      id: 7,
      name: "Bryce Canyon",
      createDate: "February 25, 1928",
      lat: 37.57,
      long: -112.18,
      distance: 0,
      image: "assets/img/thumbs/brycecanyon.jpg",
      header: "brycecanyon.jpg",
      state: "Utah",
      details: "Bryce Canyon is a giant natural amphitheatre along the Paunsaugunt Plateau. The unique area has hundreds of tall hoodoos formed by erosion. The region was originally settled by Native Americans and later by Mormon pioneers."
    },
    {
      id: 8,
      name: "Canyonlands",
      createDate: "September 12, 1964",
      lat: 38.2,
      long: -109.93,
      distance: 0,
      image: "assets/img/thumbs/canyonlands.jpg",
      header: "canyonlands.jpg",
      state: "Utah",
      details: "This landscape was eroded into canyons, buttes, and mesas by the Colorado River, Green River, and their tributaries, which divide the park into four districts. There are rock pinnacles and other naturally sculpted rock, as well as artifacts from Ancient Pueblo Peoples."
    },
    {
      id: 9,
      name: "Capitol Reef",
      createDate: "December 18, 1971",
      lat: 38.20,
      long: -111.17,
      distance: 0,
      image: "assets/img/thumbs/capitolreefnationalpark.jpg",
      header: "capitolreefnationalpark.jpg",
      state: "Utah",
      details: "The park's Waterpocket Fold is a 100-mile (160 km) monocline that shows the Earth's geologic layers. Other natural features are monoliths and sandstone domes and cliffs shaped like the United States Capitol."
    },
    {
      id: 10,
      name: "Carlsbad Caverns",
      createDate: "May 14, 1930",
      lat: 32.17,
      long: -104.44,
      distance: 0,
      image: "assets/img/thumbs/carlsbadcavern.jpg",
      header: "carlsbadcavern.jpg",
      state: "New Mexico",
      details: "Carlsbad Caverns has 117 caves, the longest of which is over 120 miles (190 km) long. The Big Room is almost 4,000 feet (1,200 m) long, and the caves are home to over 400,000 Mexican Free-tailed Bats and sixteen other species. Above ground are the Chihuahuan Desert and Rattlesnake Springs."
    },
    {
      id: 11,
      name: "Channel Islands",
      createDate: "March 5, 1980",
      lat: 34.01,
      long: -119.42,
      distance: 0,
      image: "assets/img/thumbs/channelislands.jpg",
      header: "channelislands.jpg",
      state: "California",
      details: "Five of the eight Channel Islands are protected, and half of the park's area is underwater. The islands have a unique Mediterranean ecosystem. They are home to over 2,000 species of land plants and animals, and 145 are unique to them. The islands were originally settled by the Chumash people."
    },
    {
      id: 12,
      name: "Congaree",
      createDate: "November 10, 2003",
      lat: 33.78,
      long: -80.78,
      distance: 0,
      image: "assets/img/thumbs/congaree.jpg",
      header: "congaree.jpg",
      state: "South Carolina",
      details: "On the Congaree River, this park is the largest portion of old-growth floodplain forest left in North America. Some of the trees are the tallest in the Eastern US, and the Boardwalk Loop is an elevated walkway through the swamp."
    },
    {
      id: 13,
      name: "Crater Lake",
      createDate: "May 22, 1902",
      lat: 42.94,
      long: -122.1,
      distance: 0,
      image: "assets/img/thumbs/craterlake.jpg",
      header: "craterlake.jpg",
      state: "Oregon",
      details: "Crater Lake lies in the caldera of Mount Mazama formed 7,700 years ago after an eruption. It is the deepest lake in the United States and is known for its blue color and water clarity. There are two islands in the lake, and, with no inlets or outlets, all water comes through precipitation."
    },
    {
      id: 14,
      name: "Cuyahoga Valley",
      createDate: "October 11, 2000",
      lat: 41.24,
      long: -81.55,
      distance: 0,
      image: "assets/img/thumbs/cuyahogavalley.jpg",
      header: "cuyahogavalley.jpg",
      state: "Ohio",
      details: "This park along the Cuyahoga River has waterfalls, hills, trails, and displays about early rural living. The Ohio and Erie Canal Towpath Trail follows the Ohio and Erie Canal, where mules towed canal boats. The park has numerous historic homes, bridges, and structures. The park also offers a scenic train ride with various trips available."
    },
    {
      id: 15,
      name: "Death Valley",
      createDate: "October 31, 1994",
      lat: 36.24,
      long: -116.82,
      distance: 0,
      image: "assets/img/thumbs/deathvalley.jpg",
      header: "deathvalley.jpg",
      state: "California, Nevada",
      details: "Death Valley is the hottest, lowest, and driest place in the United States. Daytime temperatures have topped 130 F (54 C) and it is home to Badwater Basin, the lowest point in the Western Hemisphere. There are canyons, colorful badlands, sand dunes, mountains, and over 1,000 species of plants in this graben on a fault line. Further geologic points of interest are salt flats, springs, and buttes."
    },
    {
      id: 16,
      name: "Denali",
      createDate: "February 26, 1917",
      lat: 63.33,
      long: -150.50,
      distance: 0,
      image: "assets/img/thumbs/denali.jpg",
      header: "denali.jpg",
      state: "Alaska",
      details: "Centered around Denali, the tallest mountain in North America, Denali is serviced by a single road leading to Wonder Lake. Denali and other peaks of the Alaska Range are covered with long glaciers and boreal forest. Wildlife includes grizzly bears, Dall sheep, caribou, and gray wolves."
    },
    {
      id: 17,
      name: "Dry Tortugas",
      createDate: "October 26, 1992",
      lat: 24.63,
      long: -82.87,
      distance: 0,
      image: "assets/img/thumbs/drytortugas.jpg",
      header: "drytortugas.jpg",
      state: "Florida",
      details: "The Dry Tortugas on the west end of the Florida Keys are the site of Fort Jefferson, the largest masonry structure in the Western Hemisphere. With most of the park being water, it is the home of coral reefs and shipwrecks and is only accessible by plane or boat."
    },
    {
      id: 18,
      name: "Everglades",
      createDate: "May 30, 1934",
      lat: 25.32,
      long: -80.93,
      distance: 0,
      image: "assets/img/thumbs/everglades.jpg",
      header: "everglades.jpg",
      state: "Florida",
      details: "The Everglades are the largest subtropical wilderness in the United States. This mangrove ecosystem and marine estuary is home to 36 protected species, including the Florida panther, American crocodile, and West Indian manatee. Some areas have been drained and developed; restoration projects aim to restore the ecology."
    },
    {
      id: 19,
      name: "Gates of the Arctic",
      createDate: "December 2, 1980",
      lat: 67.78,
      long: -153.30,
      distance: 0,
      image: "assets/img/thumbs/gatesofthearctic.jpg",
      header: "gatesofthearctic.jpg",
      state: "Alaska",
      details: "This northernmost park protects part of the Brooks Range and has no park facilities. The land is home to Alaska natives, who have relied on the land and caribou for 11,000 years."
    },
    {
      id: 20,
      name: "Glacier",
      createDate: "May 11, 1910",
      lat: 48.80,
      long: -114.00,
      distance: 0,
      image: "assets/img/thumbs/glacier.jpg",
      header: "glacier.jpg",
      state: "Montana",
      details: "Part of Waterton Glacier International Peace Park, this park has 26 remaining glaciers and 130 named lakes under the tall Rocky Mountain peaks. There are historic hotels and a landmark road in this region of rapidly receding glaciers. These mountains, formed by an overthrust, have the world's best sedimentary fossils from the Proterozoic era."
    },
    {
      id: 21,
      name: "Glacier Bay",
      createDate: "December 2, 1980",
      lat: 58.50,
      long: -137.00,
      distance: 0,
      image: "assets/img/thumbs/glacierbay.jpg",
      header: "glacierbay.jpg",
      state: "Alaska",
      details: "Glacier Bay has numerous tidewater glaciers, mountains, and fjords. The temperate rainforest and the bay are home to grizzly bears, mountain goats, whales, seals, and eagles. When discovered in 1794 by George Vancouver, the entire bay was covered by ice, but the glaciers have receded over 65 miles (105 km)."
    },
    {
      id: 22,
      name: "Grand Canyon",
      createDate: "February 26, 1919",
      lat: 36.06,
      long: -112.14,
      distance: 0,
      image: "assets/img/thumbs/grandcanyon.jpg",
      header: "grandcanyon.jpg",
      state: "Arizona",
      details: "The Grand Canyon, carved out by the Colorado River, is 277 miles (446 km) long, up to 1 mile (1.6 km) deep, and up to 15 miles (24 km) wide. Millions of years of exposure has formed colorful layers of the Colorado Plateau in mesas and canyon walls."
    },
    {
      id: 23,
      name: "Grand Teton",
      createDate: "February 26, 1929",
      lat: 43.73,
      long: -110.80,
      distance: 0,
      image: "assets/img/thumbs/grandteton.jpg",
      header: "grandteton.jpg",
      state: "Wyoming",
      details: "Grand Teton is the tallest mountain in the Teton Range. The park's Jackson Hole valley and reflective piedmont lakes contrast with the tall mountains, which abruptly rise from the glacial sage-covered valley."
    },
    {
      id: 24,
      name: "Great Basin",
      createDate: "October 27, 1986",
      lat: 38.98,
      long: -114.30,
      distance: 0,
      image: "assets/img/thumbs/greatbasin.jpg",
      header: "greatbasin.jpg",
      state: "Nevada",
      details: "Based around Wheeler Peak, the Great Basin has 5,000-year-old bristlecone pines, glacial moraines, and the limestone Lehman Caves. It has some of the country's darkest night skies, and there are animal species including Townsend's big-eared bat, Pronghorn, and Bonneville cutthroat trout."
    },
    {
      id: 25,
      name: "Great Sand Dunes",
      createDate: "September 13, 2004",
      lat: 37.73,
      long: -105.51,
      distance: 0,
      image: "assets/img/thumbs/greatsanddunes.jpg",
      header: "greatsanddunes.jpg",
      state: "Colorado",
      details: "The tallest dunes in North America are up to 750 feet (230 m) tall and neighbor grasslands, shrub lands and wetlands. They were formed by sand deposits of the Rio Grande on the San Luis Valley. The park also has alpine lakes, six 13,000-foot mountains, and ancient forests."
    },
    {
      id: 26,
      name: "Great Smoky Mountains",
      createDate: "June 15, 1934",
      lat: 35.68,
      long: -83.53,
      distance: 0,
      image: "assets/img/thumbs/greatsmokymountains.jpg",
      header: "greatsmokymountains.jpg",
      state: "North Carolina, Tennessee",
      details: "The Great Smoky Mountains, part of the Appalachian Mountains, have a wide range of elevations, making them home to over 400 vertebrate species, 100 tree species, and 5000 plant species. Hiking is the park's main attraction, with over 800 miles (1,300 km) of trails, including 70 miles (110 km) of the Appalachian Trail. Other activities are fishing, horseback riding, and visiting some of nearly 80 historic structures."
    },
    {
      id: 27,
      name: "Guadalupe Mountains",
      createDate: "October 15, 1966",
      lat: 31.92,
      long: -104.87,
      distance: 0,
      image: "assets/img/thumbs/guadalupemountains.jpg",
      header: "guadalupemountains.jpg",
      state: "Texas",
      details: "This park has Guadalupe Peak, the highest point in Texas, the scenic McKittrick Canyon full of Bigtooth Maples, part of the Chihuahuan Desert, and a fossilized reef from the Permian."
    },
    {
      id: 28,
      name: "Haleakal",
      createDate: "August 1, 1916",
      lat: 20.72,
      long: -156.17,
      distance: 0,
      image: "assets/img/thumbs/haleakala.jpg",
      header: "haleakala.jpg",
      state: "Hawaii",
      details: "The Haleakal volcano on Maui has a very large crater with many cinder cones, Hosmer's Grove of alien trees, and the native Hawaiian Goose. The Kipahulu section has numerous pools with freshwater fish. This National Park has the greatest number of endangered species."
    },
    {
      id: 29,
      name: "Hawaii Volcanoes",
      createDate: "August 1, 1916",
      lat: 19.38,
      long: -155.20,
      distance: 0,
      image: "assets/img/thumbs/hawaiivolcanoes.jpg",
      header: "hawaiivolcanoes.jpg",
      state: "Hawaii",
      details: "This park on the Big Island protects the Klauea and Mauna Loa volcanoes, two of the world's most active. Diverse ecosystems of the park range from those at sea level to 13,000 feet (4,000 m)."
    },
    {
      id: 30,
      name: "Hot Springs",
      createDate: "March 4, 1921",
      lat: 34.51,
      long: -93.05,
      distance: 0,
      image: "assets/img/thumbs/hotsprings.jpg",
      header: "hotsprings.jpg",
      state: "Arkansas",
      details: "The only National Park in an urban area, this smallest National Park is based around the natural hot springs that have been managed for public use. Bathhouse Row preserves 47 of these with many beneficial minerals."
    },
    {
      id: 31,
      name: "Isle Royale",
      createDate: "March 3, 1931",
      lat: 48.10,
      long: -88.55,
      distance: 0,
      image: "assets/img/thumbs/isleroyale.jpg",
      header: "isleroyale.jpg",
      state: "Michigan",
      details: "The largest island in Lake Superior, this park is a site of isolation and wilderness. It has many shipwrecks, waterways, and hiking trails. The park also includes over 400 smaller islands in the waters up to 4.5 miles (7.2 km) from the island. There are only 20 mammal species and it is known for its wolf and moose relationship."
    },
    {
      id: 32,
      name: "Joshua Tree",
      createDate: "October 31, 1994",
      lat: 33.79,
      long: -115.90,
      distance: 0,
      image: "assets/img/thumbs/joshuatree.jpg",
      header: "joshuatree.jpg",
      state: "California",
      details: "Covering parts of the Colorado and Mojave Deserts and the Little San Bernardino Mountains, this is the home of the Joshua tree. Across great elevation changes are sand dunes, dry lakes, rugged mountains, and granite monoliths."
    },
    {
      id: 33,
      name: "Katmai",
      createDate: "December 2, 1980",
      lat: 58.50,
      long: -155.00,
      distance: 0,
      image: "assets/img/thumbs/katmai.jpg",
      header: "katmai.jpg",
      state: "Alaska",
      details: "This park on the Alaska Peninsula protects the Valley of Ten Thousand Smokes, an ash flow formed by the 1912 eruption of Novarupta, as well as Mount Katmai. Over 2,000 brown bears come here to catch spawning salmon."
    },
    {
      id: 34,
      name: "Kenai Fjords",
      createDate: "December 2, 1980",
      lat: 59.92,
      long: -149.65,
      distance: 0,
      image: "assets/img/thumbs/kenaifjords.jpg",
      header: "kenaifjords.jpg",
      state: "Alaska",
      details: "Near Seward on the Kenai Peninsula, this park protects the Harding Icefield and at least 38 glaciers and fjords stemming from it. The only area accessible to the public by road is Exit Glacier, while the rest can only be viewed by boat tours."
    },
    {
      id: 35,
      name: "Kings Canyon",
      createDate: "March 4, 1940",
      lat: 36.80,
      long: -118.55,
      distance: 0,
      image: "assets/img/thumbs/kingscanyon.jpg",
      header: "kingscanyon.jpg",
      state: "California",
      details: "Home to several Giant sequoia groves and the General Grant Tree, the world's second largest, this park also has part of the Kings River, site of the granite Kings Canyon, and San Joaquin River, as well as the Boyden Cave."
    },
    {
      id: 36,
      name: "Kobuk Valley",
      createDate: "December 2, 1980",
      lat: 67.55,
      long: -159.28,
      distance: 0,
      image: "assets/img/thumbs/kobukvalley.jpg",
      header: "kobukvalley.jpg",
      state: "Alaska",
      details: "Kobuk Valley has 61 miles (98 km) of the Kobuk River and three regions of sand dunes. Created by glaciers, the Great Kobuk, the Little Kobuk, and the Hunt River Sand Dunes can reach 100 feet (30 m) high and 100 F (38 C), and they are the largest dunes in the arctic. Twice a year, half a million caribou migrate through the dunes and across river bluffs that contain ice age fossils. This is the least-visited National Park."
    },
    {
      id: 37,
      name: "Lake Clark",
      createDate: "December 2, 1980",
      lat: 60.97,
      long: -153.42,
      distance: 0,
      image: "assets/img/thumbs/lakeclark.jpg",
      header: "lakeclark.jpg",
      state: "Alaska",
      details: "The region around Lake Clark has four active volcanoes, including Mount Redoubt, rivers, glaciers, and waterfalls. There are temperate rainforests, a tundra plateau, and three mountain ranges."
    },
    {
      id: 38,
      name: "Lassen Volcanic",
      createDate: "August 9, 1916",
      lat: 40.49,
      long: -121.51,
      distance: 0,
      image: "assets/img/thumbs/lassenvolcanic.jpg",
      header: "lassenvolcanic.jpg",
      state: "California",
      details: "Lassen Peak, the largest plug dome volcano in the world, is joined by all three other types of volcanoes in this park: shield, cinder dome, and composite. Other than the volcano, which last erupted in 1915, the park has hydrothermal areas, including fumaroles, boiling pools, and steaming ground, heated by molten rock under the peak."
    },
    {
      id: 39,
      name: "Mammoth Cave",
      createDate: "July 1, 1941",
      lat: 37.18,
      long: -86.10,
      distance: 0,
      image: "assets/img/thumbs/mammothcave.jpg",
      header: "mammothcave.jpg",
      state: "Kentucky",
      details: "With 392 miles (631 km) of passageways mapped, Mammoth Cave is by far the world's longest cave system. Cave animals include eight bat species, Kentucky cave shrimp, Northern cavefish, and cave salamanders. Above ground, the park contains Green River (Kentucky), 70 miles of hiking trails, sinkholes, and springs. "
    },
    {
      id: 40,
      name: "Mesa Verde",
      createDate: "June 29, 1906",
      lat: 37.18,
      long: -108.49,
      distance: 0,
      image: "assets/img/thumbs/mesaverde.jpg",
      header: "mesaverde.jpg",
      state: "Colorado",
      details: "This area has over 4,000 archaeological sites of the Ancestral Pueblo, who lived here for 700 years. Cliff dwellings built in the 12th and 13th centuries include Cliff Palace, which has 150 rooms and 23 kivas, and the Balcony House, with passages and tunnels."
    },
    {
      id: 41,
      name: "Mount Rainier",
      createDate: "March 2, 1899",
      lat: 46.85,
      long: -121.75,
      distance: 0,
      image: "assets/img/thumbs/mountrainier.jpg",
      header: "mountrainier.jpg",
      state: "Washington",
      details: "Mount Rainier, an active volcano, is the most prominent peak in the Cascades, and it is covered by 26 named glaciers including Carbon Glacier and Emmons Glacier, the largest in the continental United States. The mountain is popular for climbing, and more than half of the park is covered by subalpine and alpine forests. Paradise on the south slope is one of the snowiest places in the world, and the Longmire visitor center is the start of the Wonderland Trail, which encircles the mountain."
    },
    {
      id: 42,
      name: "North Cascades",
      createDate: "October 2, 1968",
      lat: 48.70,
      long: -121.20,
      distance: 0,
      image: "assets/img/thumbs/northcascades.jpg",
      header: "northcascades.jpg",
      state: "Washington",
      details: "This complex includes the two units of the National Park and the Ross Lake and Lake Chelan National Recreation Areas. There are numerous glaciers, and popular hiking and climbing areas are Cascade Pass, Mount Shuksan, Mount Triumph, and Eldorado Peak."
    },
    {
      id: 43,
      name: "Olympic",
      createDate: "June 29, 1938",
      lat: 47.97,
      long: -123.50,
      distance: 0,
      image: "assets/img/thumbs/olympic.jpg",
      header: "olympic.jpg",
      state: "Washington",
      details: "Situated on the Olympic Peninsula, this park ranges from Pacific shoreline with tide pools to temperate rainforests to Mount Olympus. The glaciated Olympic Mountains overlook the Hoh Rain Forest and Quinault Rain Forest, the wettest area of the continental United States."
    },
    {
      id: 44,
      name: "Petrified Forest",
      createDate: "December 9, 1962",
      lat: 35.07,
      long: -109.78,
      distance: 0,
      image: "assets/img/thumbs/petrifiedforest.jpg",
      header: "petrifiedforest.jpg",
      state: "Arizona",
      details: "This portion of the Chinle Formation has a great concentration of 225-million-year-old petrified wood. The surrounding region, the Painted Desert, has eroded red-hued volcanic rock called bentonite. There are also dinosaur fossils and over 350 Native American sites."
    },
    {
      id: 45,
      name: "Pinnacles",
      createDate: "January 10, 2013",
      lat: 36.48,
      long: -121.16,
      distance: 0,
      image: "assets/img/thumbs/pinnacles.jpg",
      header: "pinnacles.jpg",
      state: "California",
      details: "Known for the namesake eroded leftovers of half of an extinct volcano, it is popular for its rock climbing."
    },
    {
      id: 46,
      name: "Redwood",
      createDate: "October 2, 1968",
      lat: 41.30,
      long: -124.00,
      distance: 0,
      image: "assets/img/thumbs/redwood.jpg",
      header: "redwood.jpg",
      state: "California",
      details: "This park and the co-managed state parks protect almost half of all remaining Coastal Redwoods, the tallest trees on Earth. There are three large river systems in this very seismically active area, and the 37 miles (60 km) of protected coastline have tide pools and seastacks. The prairie, estuary, coast, river, and forest ecosystems have varied animal and plant species."
    },
    {
      id: 47,
      name: "Rocky Mountain",
      createDate: "January 26, 1915",
      lat: 40.40,
      long: -105.58,
      distance: 0,
      image: "assets/img/thumbs/rockymountain.jpg",
      header: "rockymountain.jpg",
      state: "Colorado",
      details: "This section of the Rocky Mountains has ecosystems varying in elevation from the over 150 riparian lakes to Montane and subalpine forests to the alpine tundra. Large wildlife including mule deer, bighorn sheep, black bears, and cougars inhabit these igneous mountains and glacier valleys. The fourteener Longs Peak and Bear Lake are popular destinations."
    },
    {
      id: 48,
      name: "Saguaro",
      createDate: "October 14, 1994",
      lat: 32.25,
      long: -110.50,
      distance: 0,
      image: "assets/img/thumbs/saguaro.jpg",
      header: "saguaro.jpg",
      state: "Arizona",
      details: "Split into the separate Rincon Mountain and Tucson Mountain Districts, the dry Sonoran Desert is still home to much life in six biotic communities. Beyond the namesake Giant Saguaro cacti, there are barrel cacti, cholla cacti, and prickly pears, as well as Lesser Long-nosed Bats, Spotted Owls, and javelinas."
    },
    {
      id: 49,
      name: "Sequoia",
      createDate: "September 25, 1890",
      lat: 36.43,
      long: -118.68,
      distance: 0,
      image: "assets/img/thumbs/sequoia.jpg",
      header: "sequoia.jpg",
      state: "California",
      details: "This park protects the Giant Forest, which has the world's largest tree, General Sherman, as well as four of the next nine. It also has over 240 caves, the tallest mountain in the lower 48 states, Mount Whitney, and the granite dome Moro Rock."
    },
    {
      id: 50,
      name: "Shenandoah",
      createDate: "May 22, 1926",
      lat: 38.53,
      long: -78.35,
      distance: 0,
      image: "assets/img/thumbs/shenandoah.jpg",
      header: "shenandoah.jpg",
      state: "Virginia",
      details: "Shenandoah's Blue Ridge Mountains are covered by hardwood forests that are home to tens of thousands of animals. The Skyline Drive and Appalachian Trail run the entire length of this narrow park that has more than 500 miles (800 km) of hiking trails along scenic overlooks and waterfalls of the Shenandoah River."
    },
    {
      id: 51,
      name: "Theodore Roosevelt",
      createDate: "November 10, 1978",
      lat: 46.97,
      long: -103.45,
      distance: 0,
      image: "assets/img/thumbs/theodoreroosevelt.jpg",
      header: "theodoreroosevelt.jpg",
      state: "North Dakota",
      details: "This region that enticed and influenced President Theodore Roosevelt is now a park of three units in the badlands. Besides Roosevelt's historic cabin, there are scenic drives and backcountry hiking opportunities. Wildlife includes American Bison, pronghorns, Bighorn sheep, and wild horses."
    },
    {
      id: 52,
      name: "Virgin Islands",
      createDate: "August 2, 1956",
      lat: 18.33,
      long: -64.73,
      distance: 0,
      image: "assets/img/thumbs/virginislands.jpg",
      header: "virginislands.jpg",
      state: "United States Virgin Islands",
      details: "The island of Saint John has rich human and natural history. There are Taino archaeological sites and ruins of sugar plantations from Columbus's time. Past the pristine beaches are mangroves, seagrass beds, coral reefs and algal plains."
    },
    {
      id: 53,
      name: "Voyageurs",
      createDate: "January 8, 1971",
      lat: 48.50,
      long: -92.88,
      distance: 0,
      image: "assets/img/thumbs/voyageurs.jpg",
      header: "voyageurs.jpg",
      state: "Minnesota",
      details: "This park on four main lakes, a site for canoeing, kayaking, and fishing, has a history of Ojibwe Native Americans, French fur traders called voyageurs, and a gold rush. Formed by glaciers, this region has tall bluffs, rock gardens, islands and bays, and historic buildings."
    },
    {
      id: 54,
      name: "Wind Cave",
      createDate: "January 9, 1903",
      lat: 43.57,
      long: -103.48,
      distance: 0,
      image: "assets/img/thumbs/windcave.jpg",
      header: "windcave.jpg",
      state: "South Dakota",
      details: "Wind Cave is distinctive for its calcite fin formations called boxwork and needle-like growths called frostwork. The cave, which was discovered by the sound of wind coming from a hole in the ground, is the world's densest cave system. Above ground is a mixed-grass prairie with animals such as bison, black-footed ferrets, and prairie dogs, and Ponderosa pine forests home to cougars and elk."
    },
    {
      id: 55,
      name: "Wrangell-St. Elias",
      createDate: "December 2, 1980",
      lat: 61.00,
      long: -142.00,
      distance: 0,
      image: "assets/img/thumbs/wrangell-stelias.jpg",
      header: "wrangell-stelias.jpg",
      state: "Alaska",
      details: "This mountainous land has the convergence of the Alaska, Chugach, and Wrangell-Saint Elias Ranges, which have many of the continent's tallest mountains over 16,000 feet (4,900 m), including Mount Saint Elias. More than 25% of this park of volcanic peaks is covered with glaciers, including the tidewater Hubbard Glacier, piedmont Malaspina Glacier, and valley Nabesna Glacier."
    },
    {
      id: 56,
      name: "Yellowstone",
      createDate: "March 1, 1872",
      lat: 44.60,
      long: -110.50,
      distance: 0,
      image: "assets/img/thumbs/yellowstone.jpg",
      header: "yellowstone.jpg",
      state: "Wyoming, Montana, Idaho",
      details: "Situated on the Yellowstone Caldera, the first national park in the world has vast geothermal areas such as hot springs and geysers, the best-known being Old Faithful and Grand Prismatic Spring. The yellow-hued Grand Canyon of the Yellowstone River has numerous waterfalls, and four mountain ranges run through the park. There are almost 60 mammal species, including the gray wolf, grizzly bear, lynx, bison, and elk."
    },
    {
      id: 57,
      name: "Yosemite",
      createDate: "October 1, 1890",
      lat: 37.83,
      long: -119.50,
      distance: 0,
      image: "assets/img/thumbs/yosemite.jpg",
      header: "yosemite.jpg",
      state: "California",
      details: "Yosemite has towering cliffs, waterfalls, and sequoias in a diverse area of geology and hydrology. Half Dome and El Capitan rise from the central glacier-formed Yosemite Valley, as does Yosemite Falls, North America's tallest waterfall. Three Giant Sequoia groves and vast wilderness are home to diverse wildlife."
    },
    {
      id: 58,
      name: "Zion",
      createDate: "November 19, 1919",
      lat: 37.30,
      long: -113.05,
      distance: 0,
      image: "assets/img/thumbs/zion.jpg",
      header: "zion.jpg",
      state: "Utah",
      details: "This geologically unique area has colorful sandstone canyons, high plateaus, and rock towers. Natural arches and exposed formations of the Colorado Plateau make up a large wilderness of four ecosystems."
    }
  ];

  constructor() { }

  public getMessages(): Message[] {
    return this.messages;
  }

  public getMessageById(id: number): Message {
    return this.messages[id];
  }
}
