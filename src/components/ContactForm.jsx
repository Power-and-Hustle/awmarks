import React from 'react';
import { useForm } from 'react-hook-form';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Here you would typically send the data to your backend
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">Receive A Free Marketing Analysis:</h1>
      <p className="mb-4 text-center">Would you like to know what we can do for you?</p>
      <p className="mb-6 text-center">Fill out the form below and we will contact you within 48 hours for a free analysis.</p>
      <p className="mb-8 text-center">No costs, no obligations, no annoying sales pitch. Guaranteed.</p>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input placeholder="Name" {...register("name", { required: true })} className="bg-gray-800 text-white" />
        {errors.name && <span className="text-red-500">This field is required</span>}
        
        <Input placeholder="Email" type="email" {...register("email", { required: true })} className="bg-gray-800 text-white" />
        {errors.email && <span className="text-red-500">This field is required</span>}
        
        <Input placeholder="Phone Number" {...register("phone")} className="bg-gray-800 text-white" />
        
        <Input placeholder="Company Name" {...register("company")} className="bg-gray-800 text-white" />
        
        <Textarea placeholder="What is your most important question?" {...register("question")} className="bg-gray-800 text-white" />
        
        <Input placeholder="How did you find us?" {...register("source")} className="bg-gray-800 text-white" />
        
        <Input placeholder="What do you spend on advertising / month?" type="number" {...register("adSpend")} className="bg-gray-800 text-white" />
        
        <Input placeholder="Your company url" {...register("url")} className="bg-gray-800 text-white" />
        
        <Button type="submit" className="w-full bg-red-500 hover:bg-red-600">Submit</Button>
      </form>
    </div>
  );
};

export default ContactForm;