import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

const differentiators = [
  {
    title: "GUARANTEE",
    content: "We only win if you win. That's the basis for a good partnership. You won't carry all the risk, we'll share it."
  },
  {
    title: "LOCAL",
    content: "We are not tucked away in some anonymous call center. We're a local company, so you'll be able to reach us when you need us."
  },
  {
    title: "RESULT",
    content: "Our first priority is to get you results. Less talk, more walk."
  },
  {
    title: "SPECIALIZATION",
    content: "Jack of all trades... Master of none. Specialization works. That's why we work with industries we know, so we can guarantee results."
  }
];

const Differentiators = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">"OK... But What Makes You Different?"</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentiators.map((item, index) => (
            <Card key={index} className="bg-gray-200">
              <CardHeader>
                <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{item.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentiators;