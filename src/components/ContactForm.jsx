import React from 'react';
import { useForm } from 'react-hook-form';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          to: 'a.burenstamlinder@gmail.com'
        }),
      });

      if (response.ok) {
        toast.success("Form submitted successfully!");
        reset();
      } else {
        toast.error("Failed to submit form. Please try again.");
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error("An error occurred. Please try again later.");
    }
  };

  const inputClasses = "bg-gray-50 border-3 border-gray-300 outline-black";

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-indigo-700">Receive A Free Marketing Analysis</h2>
      <p className="mb-4 text-center text-gray-600">Would you like to know what we can do for you?</p>
      <p className="mb-6 text-center text-gray-600">Fill out the form below and we will contact you within 48 hours for a free analysis.</p>
      <p className="mb-8 text-center text-gray-600">No costs, no obligations, no annoying sales pitch. Guaranteed.</p>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input placeholder="Name" {...register("name", { required: true })} className={inputClasses} />
        {errors.name && <span className="text-red-500">This field is required</span>}
        
        <Input placeholder="Email" type="email" {...register("email", { required: true })} className={inputClasses} />
        {errors.email && <span className="text-red-500">This field is required</span>}
        
        <Input placeholder="Phone Number" {...register("phone")} className={inputClasses} />
        
        <Input placeholder="Company Name" {...register("company")} className={inputClasses} />
        
        <Textarea placeholder="What is your most important question?" {...register("question")} className={inputClasses} />
        
        <Input placeholder="How did you find us?" {...register("source")} className={inputClasses} />
        
        <Input placeholder="What do you spend on advertising / month?" type="number" {...register("adSpend")} className={inputClasses} />
        
        <Input placeholder="Your company url" {...register("url")} className={inputClasses} />
        
        <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">Submit</Button>
      </form>
    </div>
  );
};

export default ContactForm;