import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

const serviceItems = [
  {
    title: "DO EVERYTHING YOURSELF?",
    content: "You're a good marketer in addition to everything else you do. But is that really the best use of your time?"
  },
  {
    title: "HIRE NEW STAFF?",
    content: "If you have the budget for it, this is a good option. But what if you don't?"
  },
  {
    title: "HIRE AN AGENCY?",
    content: "Many agencies overpromise and underdeliver. Plus, they're expensive and want long-term contracts."
  }
];

const Services = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceItems.map((item, index) => (
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

export default Services;