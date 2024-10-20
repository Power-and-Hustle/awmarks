import React from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-gray-800 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">More Growth. More Clients.</h1>
        <p className="text-xl mb-2 text-red-500 font-semibold">Guaranteed.</p>
        <Link to="/contact">
          <Button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
            Yes, I Want That!!
          </Button>
        </Link>
        <p className="mt-8 italic">
          "Marketing is important... <br />
          However, there are already 100 things on your to-do list. <br />
          And they are all important!"
        </p>
        <h2 className="text-2xl font-semibold mt-8">
          So How Do You Get The Most Out Of Your Marketing?
        </h2>
      </div>
    </section>
  );
};

export default Hero;