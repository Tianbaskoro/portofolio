"use client";
import { TypeAnimation } from 'react-type-animation';

const Type = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Hi,',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "Hi, I'm Tian Baskoro",
        1000,
        "Hi, I'm Programmer",
        1000,
        "Hi, I'm Designer",
        1000,
        // 'We produce food for Chinchillas',
        // 1000
      ]}
      wrapper="span"
      speed={20}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={10}
    />
  );
};

export default Type;