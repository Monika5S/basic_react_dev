import React from 'react';
import './App.css';


const users = [
    {
        id: 1,
        Ques: 'What do they prey on?',
        Ans: 'Insects, Dust, Dung',
    },
    {
        id: 2,
        Ques: 'What do they eat?',
        Ans: 'Omnivores',
    },
    {
        id: 3,
        Ques: 'What are their main threats?',
        Ans: 'Bats, Reptiles, Frogs',
    },
   {
        id: 4,
        Ques: 'Where you will find them',
        Ans: 'Freshwater Habitats, Most Countries',
    },
   {
        id: 5,
        Ques: 'How tall are they?',
        Ans: '4.3 in (11 cm)',
    },
    {
        id: 6,
        Ques: 'What do they look like?',
        Ans: 'Brown, Yellow, Red, Blue, Black, Green',
    },
  
];

function App() {
  return (
    <main>
      <br></br>
      <h1>Hello Friends</h1>
      <h2>🪲 Its Weeble the Beetle 🐞</h2>
      <img src="https://cdn.pixabay.com/photo/2021/03/02/04/24/bee-6061458__480.png"/>

      <h2>Let Me Tell You Some Quick Facts About Beetle</h2>
      <div>
        {users.map(user => (
            <div key={user.id}>
                <div> <h2> {user.id} {user.Ques}</h2>
                <h3>{user.Ans}</h3>
                </div>
            </div>
        ))}
    </div>
      
      
      <h4>Made By Mon💕</h4>
      <h4>ヽ(✿ﾟ▽ﾟ)ノ</h4>
      <h5>With React⚛️ + Replit🌀</h5>
      <br></br>
    </main>
  );
}

export default App;