import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { LeafMotif } from '@/components/Illustrations';
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  message: z.string().min(10, "Tell us a bit about your project"),
});
export function ContactPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast.success("Quote Request Sent!", {
      description: "We'll get back to you within 24 hours to discuss your project.",
    });
    form.reset();
  }
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Side: Info */}
        <div className="space-y-12">
          <div className="space-y-6">
            <h1 className="text-display text-5xl md:text-7xl text-brand-forest">Let's grow together.</h1>
            <p className="text-lg text-muted-foreground">
              Ready to transform your outdoor space? Fill out the form or reach out directly. 
              We're excited to hear about your vision.
            </p>
          </div>
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-brand-sand/10 p-3 rounded-2xl">
                <MapPin className="text-brand-sand" />
              </div>
              <div>
                <h4 className="font-bold text-brand-forest">Service Area</h4>
                <p className="text-muted-foreground">Grants Pass, Medford, and surrounding Rogue Valley areas.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-brand-sand/10 p-3 rounded-2xl">
                <Phone className="text-brand-sand" />
              </div>
              <div>
                <h4 className="font-bold text-brand-forest">Phone</h4>
                <p className="text-muted-foreground">(541) 555-0123</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-brand-sand/10 p-3 rounded-2xl">
                <Mail className="text-brand-sand" />
              </div>
              <div>
                <h4 className="font-bold text-brand-forest">Email</h4>
                <p className="text-muted-foreground">hello@roguevalleylandscapes.com</p>
              </div>
            </div>
          </div>
          <div className="relative pt-12">
            <div className="absolute -z-10 top-0 left-0 w-full h-full opacity-5">
              <LeafMotif className="w-full h-full" />
            </div>
            <div className="p-8 illustrative-border bg-brand-cream shadow-soft">
              <h5 className="font-display font-bold text-xl mb-2 italic">Family Owned & Operated</h5>
              <p className="text-sm text-muted-foreground italic">
                Supporting the local beauty of Southern Oregon, one garden at a time.
              </p>
            </div>
          </div>
        </div>
        {/* Right Side: Form */}
        <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-muted">
          <h2 className="text-3xl font-display font-bold text-brand-forest mb-8">Request a Quote</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} className="rounded-xl border-muted bg-brand-cream/30" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="john@example.com" {...field} className="rounded-xl border-muted bg-brand-cream/30" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="(541) 555-0000" {...field} className="rounded-xl border-muted bg-brand-cream/30" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Details</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell us about your yard... (e.g. routine maintenance, new hardscaping project)" 
                        className="min-h-[120px] rounded-xl border-muted bg-brand-cream/30"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full bg-brand-forest hover:bg-brand-sage h-14 rounded-full text-lg font-bold transition-all active:scale-95 group">
                Send Request <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}