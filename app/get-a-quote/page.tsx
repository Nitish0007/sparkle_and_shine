"use client";

import { useState } from "react";
import Image from "next/image";
import { Hero } from "@/components/ui/Hero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { services, config } from "@/lib/data";
import { Icon } from "@/components/ui/Icon";
import { useToast } from "@/components/ui/Toast";

export default function GetAQuotePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    service: "",
    propertyType: "",
    bedrooms: "",
    bathrooms: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const { showToast, ToastContainer } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to submit");

      showToast("Thank you! Our team will reach out to you within one hour.", "success");
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        service: "",
        propertyType: "",
        bedrooms: "",
        bathrooms: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus("error");
      showToast("Something went wrong. Please try again or contact us directly.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Hero
        title="Get a Free Quote"
        hideButtons={true}
      />

      <section className="pb-20 pt-8 md:pt-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Request a Quote</CardTitle>
                <CardDescription>
                  Please provide us with some details about your cleaning needs, and we'll get back to you promptly.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+61 400 000 000"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Property Address *</Label>
                    <Input
                      id="address"
                      name="address"
                      type="text"
                      required
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Street address, Suburb, State, Postcode"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Required *</Label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) => handleSelectChange("service", value)}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.services.map((service) => (
                          <SelectItem key={service.id} value={service.id}>
                            {service.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="propertyType">Property Type *</Label>
                      <Select
                        value={formData.propertyType}
                        onValueChange={(value) => handleSelectChange("propertyType", value)}
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select property type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="apartment">Apartment</SelectItem>
                          <SelectItem value="house">House</SelectItem>
                          <SelectItem value="unit">Unit</SelectItem>
                          <SelectItem value="townhouse">Townhouse</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bedrooms">Bedrooms *</Label>
                      <Select
                        value={formData.bedrooms}
                        onValueChange={(value) => handleSelectChange("bedrooms", value)}
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select bedrooms" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="studio">Studio</SelectItem>
                          <SelectItem value="1">1 Bedroom</SelectItem>
                          <SelectItem value="2">2 Bedrooms</SelectItem>
                          <SelectItem value="3">3 Bedrooms</SelectItem>
                          <SelectItem value="4">4 Bedrooms</SelectItem>
                          <SelectItem value="5+">5+ Bedrooms</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bathrooms">Bathrooms *</Label>
                    <Select
                      value={formData.bathrooms}
                      onValueChange={(value) => handleSelectChange("bathrooms", value)}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select bathrooms" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0">0 Bathrooms</SelectItem>
                        <SelectItem value="1">1 Bathroom</SelectItem>
                        <SelectItem value="2">2 Bathrooms</SelectItem>
                        <SelectItem value="3">3 Bathrooms</SelectItem>
                        <SelectItem value="4+">4+ Bathrooms</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Details</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about any specific requirements or special instructions..."
                      rows={4}
                    />
                  </div>

                  {submitStatus === "success" && (
                    <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 flex items-center space-x-2">
                      <Icon name="CheckmarkCircle01" size={20} className="text-green-600 dark:text-green-400" />
                      <p className="text-sm text-green-800 dark:text-green-200">
                        Thank you! Your quote request has been submitted. We'll contact you within 24 hours.
                      </p>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 flex items-center space-x-2">
                      <Icon name="AlertCircle01" size={20} className="text-red-600 dark:text-red-400" />
                      <p className="text-sm text-red-800 dark:text-red-200">
                        Something went wrong. Please try again or contact us directly.
                      </p>
                    </div>
                  )}

                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Quote Request"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Icon name="PhoneCalling01" size={24} className="text-primary" />
                    <CardTitle className="text-lg">Call Us</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <a
                    href={`tel:${config.site.phone}`}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {config.site.phone}
                  </a>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Icon name="Mail01" size={24} className="text-primary" />
                    <CardTitle className="text-lg">Email Us</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <a
                    href={`mailto:${config.site.email}`}
                    className="text-muted-foreground hover:text-foreground transition-colors break-all"
                  >
                    {config.site.email}
                  </a>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock01" size={24} className="text-primary" />
                    <CardTitle className="text-lg">Working Hours</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{config.site.workingHours}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Image */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="relative w-full h-[450px] md:h-[600px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/assets/contact_us.png"
              alt="Get a free quote - Professional cleaning services"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
}
