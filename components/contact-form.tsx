// components/ContactForm.jsx
"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  MoveUpRight,
} from "lucide-react";
import { toast } from "sonner";
import { useTranslations } from "next-intl";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    agreeToEmails: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const handleInputChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          subject: "",
          message: "",
          agreeToEmails: false,
        });
        toast.success("Message Sent Successfully!", {
          description:
            "Thank you for your message. We'll get back to you soon.",
        });
      } else {
        throw new Error(result.error || "Failed to send message");
      }
    } catch (error) {
      setSubmitStatus("error");
      toast.error("Error", {
        description: "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const t = useTranslations("Contact");

  return (
    <div className='max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen'>
      <div className='grid lg:grid-cols-2 gap-8'>
        {/* Left Section - Contact Info */}
        <Card className='bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden'>
          <CardContent className='p-8 h-full flex flex-col justify-between'>
            <div className='space-y-12'>
              <h1 className='text-4xl mb-4 leading-tight'>{t("title")}</h1>
              <p className='text-gray-300 leading-relaxed'>
                {t("description")}
              </p>

              <div className='space-y-6'>
                <h2 className='text-xl mb-4'>{t("subtagline")}</h2>

                <div className='flex items-center space-x-4'>
                  <div className='bg-blue-500 p-2 rounded-full'>
                    <Phone className='w-5 h-5' />
                  </div>
                  <span className='text-lg'>+62 851 6369 7397</span>
                </div>

                <div className='flex items-center space-x-4'>
                  <div className='bg-blue-500 p-2 rounded-full'>
                    <Mail className='w-5 h-5' />
                  </div>
                  <span className='text-lg'>hello@trials.id</span>
                </div>

                <div className='flex items-center space-x-4'>
                  <div className='bg-blue-500 p-2 rounded-full'>
                    <MapPin className='w-5 h-5' />
                  </div>
                  <span className='text-lg'>Salatiga, Indonesia</span>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className='absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full opacity-10 -translate-y-16 translate-x-16'></div>
            <div className='absolute bottom-0 left-0 w-24 h-24 bg-blue-400 rounded-full opacity-10 translate-y-12 -translate-x-12'></div>
          </CardContent>
        </Card>

        {/* Right Section - Contact Form */}
        <Card className='bg-white shadow-lg'>
          <CardContent className='p-8'>
            <div className='flex items-center space-x-2 mb-6'>
              <h2 className='text-2xl font-bold text-gray-800'>{t("cta")}</h2>
              <MoveUpRight />
            </div>

            <form onSubmit={handleSubmit} className='space-y-6'>
              <div className='grid md:grid-cols-2 gap-4'>
                <div className='space-y-2'>
                  <Label htmlFor='name' className='text-sm font-medium'>
                    {t("form.name")}*
                  </Label>
                  <Input
                    id='name'
                    name='name'
                    type='text'
                    placeholder='Enter your name'
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className='border-gray-300 focus:border-blue-500'
                  />
                </div>

                <div className='space-y-2'>
                  <Label htmlFor='email' className='text-sm font-medium'>
                    {t("form.email")}*
                  </Label>
                  <Input
                    id='email'
                    name='email'
                    type='email'
                    placeholder='Enter your email'
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className='border-gray-300 focus:border-blue-500'
                  />
                </div>
              </div>

              <div className='grid md:grid-cols-2 gap-4'>
                <div className='space-y-2'>
                  <Label htmlFor='phone' className='text-sm font-medium'>
                    {t("form.phone")}*
                  </Label>
                  <Input
                    id='phone'
                    name='phone'
                    type='tel'
                    placeholder='Enter your phone number'
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className='border-gray-300 focus:border-blue-500'
                  />
                </div>

                <div className='space-y-2'>
                  <Label htmlFor='company' className='text-sm font-medium'>
                    {t("form.company")}
                  </Label>
                  <Input
                    id='company'
                    name='company'
                    type='text'
                    placeholder='Enter your company name'
                    value={formData.company}
                    onChange={handleInputChange}
                    className='border-gray-300 focus:border-blue-500'
                  />
                </div>
              </div>

              <div className='space-y-2'>
                <Label htmlFor='subject' className='text-sm font-medium'>
                  {t("form.subject")}
                </Label>
                <Input
                  id='subject'
                  name='subject'
                  type='text'
                  placeholder='Enter subject email'
                  value={formData.subject}
                  onChange={handleInputChange}
                  className='border-gray-300 focus:border-blue-500'
                />
              </div>

              <div className='space-y-2'>
                <Label htmlFor='message' className='text-sm font-medium'>
                  {t("form.message")}
                </Label>
                <Textarea
                  id='message'
                  name='message'
                  placeholder='Enter your messages'
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className='border-gray-300 focus:border-blue-500 resize-none'
                />
              </div>

              <div className='flex items-center space-x-2'>
                <Checkbox
                  id='agreeToEmails'
                  name='agreeToEmails'
                  checked={formData.agreeToEmails}
                  onCheckedChange={(checked) =>
                    setFormData((prev) => ({
                      ...prev,
                      agreeToEmails: Boolean(checked),
                    }))
                  }
                />
                <Label
                  htmlFor='agreeToEmails'
                  className='text-sm text-gray-600'
                >
                  {t("agree")}
                </Label>
              </div>

              <Button
                type='submit'
                disabled={isSubmitting}
                className='w-full bg-slate-800 hover:bg-slate-700 text-white py-3 text-lg font-medium transition-all duration-200'
              >
                {isSubmitting ? (
                  <div className='flex items-center space-x-2'>
                    <div className='animate-spin rounded-full h-4 w-4 border-b-2 border-white'></div>
                    <span>Sending...</span>
                  </div>
                ) : (
                  <div className='flex items-center justify-center space-x-2'>
                    <span>{t("form.submit")}</span>
                    <Send className='w-4 h-4' />
                  </div>
                )}
              </Button>

              {submitStatus === "success" && (
                <div className='flex items-center space-x-2 text-green-600 bg-green-50 p-3 rounded-lg'>
                  <CheckCircle className='w-5 h-5' />
                  <span>Message sent successfully!</span>
                </div>
              )}

              {submitStatus === "error" && (
                <div className='flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg'>
                  <AlertCircle className='w-5 h-5' />
                  <span>Failed to send message. Please try again.</span>
                </div>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactForm;
