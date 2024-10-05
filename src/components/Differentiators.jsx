import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

const differentiators = [
  {
    title: "GUARANTEE",
    content: "Our first priority is to get you results. Love it or leave it."
  },
  {
    title: "RESULT",
    content: "We don't just do activities, we get results. You won't just have a nice website, but a website that converts."
  },
  {
    title: "SPECIALIZATION",
    content: "We only work with service-based businesses. We're not trying to be everything to everyone."
  },
  {
    title: "LOCAL",
    content: "We are not located overseas or across the country. We're in your neighborhood."
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