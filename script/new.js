const initialCards = [
  {
    name: 'Marrakesh, Morocco',
    link: 'https://images.unsplash.com/photo-1528499640293-fe8fba1f28c4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    name: 'República, Brazil',
    link: 'https://images.unsplash.com/photo-1522036440821-525d53504f74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2135&q=80'
  },
  {
    name: 'Vienna, Austria',
    link: 'https://images.unsplash.com/photo-1507808973436-a4ed7b5e87c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80'
  },
  {
    name: 'Blue Mountains, Australia',
    link: 'https://images.unsplash.com/photo-1542605731-cf0169ad50e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1906&q=80'
  },
  {
    name: 'Havana is well know for its classic old American cars.',
    link: 'https://images.unsplash.com/photo-1530568595540-2b7554622f92?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80'
  },
  {
    name: 'Demons Dance, Barcelona',
    link: 'https://images.unsplash.com/photo-1563271834-46ce38124976?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1341&q=80'
  },
];
console.log(initialCards)
console.log(initialCards.name)
const xxx = initialCards.map(function (item){
  return `${item}`;
  
})
console.log(xxx);