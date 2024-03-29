import React, { useState } from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.css";

function App() {
  const affirmations = [
    "You got this",
    "You'll figure it out",
    "You're a smart cookie",
    "I believe in you",
    "Sucking at something is the first step towards being good at something",
    "Struggling is part of learning",
    "Everything has cracks - that's how the light gets in",
    "Mistakes don't make you less capable",
    "We are all works in progress",
    "You are a capable human",
    "You know more than you think",
    "10x engineers are a myth",
    "If everything was easy you'd be bored",
    "I admire you for taking this on",
    "You're resourceful and clever",
    "You'll find a way",
    "I know you'll sort it out",
    "Struggling means you're learning",
    "You're doing a great job",
    "It'll feel magical when it's working",
    "I'm rooting for you",
    "Your mind is full of brilliant ideas",
    "You make a difference in the world by simply existing in it",
    "You are learning valuable lessons from yourself every day",
    "You are worthy and deserving of respect",
    "You know more than you knew yesterday",
    "You're an inspiration",
    "Your life is already a miracle of chance waiting for you to shape its destiny",
    "Your life is about to be incredible",
    "Nothing is impossible. The word itself says 'I’m possible!'",
    "Failure is just another way to learn how to do something right",
    "I give myself permission to do what is right for me",
    "You can do it",
    "It is not a sprint, it is a marathon. One step at a time",
    "Success is the progressive realization of a worthy goal",
    "People with goals succeed because they know where they’re going",
    "All you need is the plan, the roadmap, and the courage to press on to your destination",
    "The opposite of courage in our society is not cowardice... it is conformity",
    "Whenever we’re afraid, it’s because we don’t know enough. If we understood enough, we would never be afraid",
    "The past does not equal the future",
    "The path to success is to take massive, determined action",
    "It’s what you practice in private that you will be rewarded for in public",
    "Small progress is still progress",
    "Don't worry if you find flaws in your past creations, it's because you've evolved",
    "Starting is the most difficult step - but you can do it",
    "Don't forget to enjoy the journey",
    "It's not a mistake, it's a learning opportunity",

    "I am successful.",
    "I am confident.",
    "I am powerful.",
    "I am strong.",
    "I am getting better and better every day.",
    "All I need is within me right now.",
    "I wake up motivated.",
    "I am an unstoppable force of nature.",
    "I am a living, breathing example of motivation.",
    "I am living with abundance.",
    "I am having a positive and inspiring impact on the people I come into contact with",
    "I am inspiring people through my work.",
    "I’m rising above the thoughts that are trying to make me angry or afraid.",
    "Today is a phenomenal day.",
    "I am turning DOWN the volume of negativity in my life, while simultaneously turning UP the volume of positivity.",
    "I am filled with focus.",
    "I am not pushed by my problems; I am led by my dreams.",
    "I am grateful for everything I have in my life.",
    "I am independent and self-sufficient.",
    "I can be whatever I want to be.",
    "I am not defined my by past; I am driven by my future.",
    "I use obstacles to motivate me to learn and grow.",
    "Today will be a productive day.",
    "I am intelligent and focused.",
    "I feel more grateful each day.",
    "I am getting healthier every day.",
    "Each and every day, I am getting closer to achieving my goals.",
    "Through the power of my thoughts and words, incredible transformations are happening in me and within my life right now.",
    "I am constantly growing and evolving into a better person.",
    "I’m freeing myself from all destructive doubt and fear.",
    "I accept myself for who I am and create peace, power and confidence of mind and of heart.",
    "I am going to forgive myself and free myself. I deserve to forgive and be forgiven.",
    "I am healing and strengthening every day.",
    "I’ve made it through hard times before, and I’ve come out stronger and better because of them. I’m going to make it through this.",
    "I do not waste away a single day of my life. I squeeze every ounce of value out of each of my days on this planet—today, tomorrow, and everyday.",
    "I must remember the incredible power I possess within me to achieve anything I desire.",
    "I do not engage with people who try to penetrate my mind with unhelpful thoughts and ideas—I walk away when a person or a situation isn’t healthy for me.",
    "I belong in this world; there are people that care about me and my worth.",
    "My past might be ugly, but I am still beautiful.",
    "I have made mistakes, but I will not let them define me.",
    "My soul radiates from the inside and warms the souls of others.",
    "I don’t compare myself to others. The only person I compare myself to is the person I was yesterday. And as long as the person I am today is even the tiniest bit better than the person I was yesterday—I’m meeting my own definition of success.",
    "Note to self: I am going to make you so proud.",
    "I finish what matters and let go of what does not.",
    "I feed my spirit. I train my body. I focus my mind. This is my time.",
    "My life has meaning. What I do has meaning. My actions are meaningful and inspiring.",
    "What I have done today was the best I was able to do today. And for that, I am thankful.",
    "One small positive thought in the morning can change my whole day. So, today I rise with a powerful thought to set the tone and allow success to reverberate through every moment of my day.",
    "I set goals and go after them with all the determination I can muster. When I do this, my own skills and talents will take me to places that amaze me.",
    "Happiness is a choice, and today I choose to be happy.",
  ];
  const [index, setindex] = useState(0);
  return (
    <div className="App">
      <p className="text-center lead mb-0">
        {index + 1}/{affirmations.length}
      </p>
      <div className="d-flex flex-row h-93 w-100 justify-content-between">
        <div
          className="d-flex flex-column justify-content-center h-100"
          onClick={() => setindex(index - 1)}
        >
          <i
            className={
              "fas fa-2x fa-chevron-left py-4 px-3" +
              (index > 0 ? " d-block" : " d-none")
            }
          ></i>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center h-100">
          <h1 className="text-center">{affirmations[index]}</h1>
        </div>
        <div
          className="d-flex flex-column justify-content-center h-100"
          onClick={() => setindex(index + 1)}
        >
          <i
            className={
              "fas fa-2x fa-chevron-right py-4 px-3" +
              (index < affirmations.length - 1 ? " d-block" : " d-none")
            }
          ></i>
        </div>
      </div>
    </div>
  );
}

export default App;
