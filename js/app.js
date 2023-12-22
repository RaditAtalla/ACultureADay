const suku = [
  {
    name: "Batak",
    introduction:
      "Batak people are speakers of Austronesian languages, but it is not known when the ancestors of the Batak people first settled in Tapanuli and East Sumatra. Language and archaeological evidence shows that Austronesian-speaking people from Taiwan moved to the Philippines and Indonesia around 2,500 years ago, namely during the Young Stone Age (Neolithic). Because until now no Neolithic (Young Stone Age) artifacts have been found in the Batak region, it can be assumed that the Batak ancestors only migrated to North Sumatra during the metal age. The Batak tribe is the third largest ethnic group in Indonesia, based on the 2010 census from the Central Statistics Agency. This name is a collective theme to identify several ethnic groups that live and originate from the West Coast and East Coast in the province of North Sumatra. The ethnic groups categorized as Batak are Angkola, Karo, Mandailing, Pakpak-Dairi, Simalungun, Toba and Pardembanan. Batak is a group of tribes that inhabit most of North Sumatra.",
    food: "The Batak tribe also has a special type of noodle food called Mie Gomak. The main characteristic of Mie Gomak is the spices poured on top of the noodles, namely the spicy taste that comes from andaliman. Andaliman is a small spice that is the pride of the Batak people. It's not surprising that gomak noodles are also mixed with andaliman and spices to make it have a thick texture to pour over the noodles.",
    clothing:
      "ulos literally means blanket. In accordance with the ancestors of the Batak tribe who were once mountain people. So they need ulos as a body warmer that is comfortable and easy to use. Until now, ulos is always used by Batak people in traditional ceremonies, weddings and even death. Uniquely, for the Batak people in the Lake Toba area, ulos is used as a traditional symbol that contains sacred values ​​and its traditions are still maintained today.",
    dance:
      "Tortor is an important part of traditional ceremonies (ulaon adat) of the Batak people. Through Tortor, the Batak people convey their hopes and prayers. The demonstration of attitudes and feelings through Tortor always describes the conditions and situations experienced. The name 'Tortor' comes from the sound of feet stomping on the floor of a traditional Batak house, which is made of wood, thus producing the sound 'tor, tor'.",
  },
  {
    name: "Nias",
    introduction:
      "A hoho says that the Nias people come from a tree of life called Sigaru Tora'a which is located in a place called Tetehöli Ana'a. The arrival of the first humans to Nias Island began during the time of King Sirao, who had 9 sons who were ordered out of Tetehöli Ana'a because they were fighting over the Sirao throne. The 9 sons are considered to be the first people to set foot on Nias Island. Another myth, Inada Sirici sent 6 children to Nias Island and became ancestors. There are still several other versions about the presence of humans on Nias.",
    food: "Niowuru is pickled preserved pork, but the marinated meat can also be substituted using beef, buffalo and chicken. The processing method is that meat that has been salted and preserved is fried or grilled. If you want to try this culinary delight, make sure to ask first what meat is prepared in it.",
    clothing: "Nias traditional clothing is called Baru Oholu for men's clothing and Õröba Si'öli for women's clothing. These traditional clothes are usually gold or yellow combined with other colors such as black, red and white.",
    dance:
      "Maena Dance is a traditional dance originating from Nias Island. Maena dance is a type of dance that is performed together. The Maena dance is usually performed at weddings to welcome guests and also in other activities. The Maena dance can be performed by men and women. The number of dancers is also not determined, especially at traditional wedding events. Maena Dance performances usually begin with Pantun spoken by Sanutuo Maena (tribal elder or traditional head). The rhymes spoken are usually adapted to the theme of the event. After the rhyme is spoken, it continues with chanting the Maena Poetry or in Nias language it is called Fanehe Maena. Maena's poetry is sung by all the dancers while following the dance movements.",
  },
  {
    name: "Dayak",
    introduction:
      "Bugis is a tribe belonging to the Deutero Malay tribes. Entered the archipelago after the first wave of migration from mainland Asia, specifically Yunan. The word 'Bugis' comes from the word To Ugi, which means Bugis people. The name 'ugi' refers to the first king of the Chinese kingdom in Pammana, Wajo Regency today, namely La Sattumpugi. When the people of La Sattumpugi named themselves, they were referring to their king. They nicknamed themselves To Ugi or people or followers of La Sattumpugi.",
    food: "Coto Makassar is a soupy dish that is rich in flavor and contains a mixture of offal. Before being mixed into the coto, the offal and beef are first boiled and given authentic Bugis spices. This typical Bugis culinary dish is usually served with ketupat.",
    clothing:
      "Bodo clothes are typical clothes of Bugis women. This typical Bugis traditional clothing is characterized by being rectangular in shape and having short sleeves. Bodo clothes have been around since ancient times and can be traced back decades or hundreds of years. This is what causes this clothing to be one of the oldest traditional clothing in Indonesia. According to the Bugis tribe, each shirt has its own meaning that shows the age and dignity of the wearer.",
    dance:
      "The Pa'dupa dance is a dance that shows that the Bugis people have guests or can be said to be a welcome dance from the Bugis tribe. The pa'duppa dance uses traditional Bodo clothing with complete decorations such as floral chain necklaces, bracelets, hair ornaments or headbands, earrings, and very glamorous wrist sleeves. The Pa'duppa dance is danced by beautiful girls. The music used is of course typical South Sulawesi music with Makassar drums, flutes, lutes and pui-pui.",
  },
];


let currIndex = 1

function showData() {
  const cultureName = document.getElementById('cultureName')
  const introData = document.getElementById('introData')
  const foodData = document.getElementById('foodData')
  const clothingData = document.getElementById('clothingData')
  const danceData = document.getElementById('danceData')
  
  cultureName.innerHTML = suku[currIndex]['name']
  introData.innerHTML = suku[currIndex]['introduction']
  foodData.innerHTML = suku[currIndex]['food']
  clothingData.innerHTML = suku[currIndex]['clothing']
  danceData.innerHTML = suku[currIndex]['dance']

  currIndex = (currIndex + 1) % suku.length
}

showData()

const interval = 24 * 60 * 60 * 1000
setInterval(showData, interval)