import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle2, Star, Zap, Shield, X } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl font-bold mb-4">Revolutionize Your Workflow</h1>
            <p className="text-xl mb-8">Streamline processes, boost productivity, and drive growth with our SaaS solution.</p>
            <div className="space-x-4">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">Get Started</Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-purple-600">Learn More</Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src="/placeholder.svg" alt="SaaS Illustration" className="mx-auto object-cover w-full h-[400px]" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-purple-100 rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`text-center ${plan.featured ? 'border-purple-500 border-2' : ''}`}>
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.title}</CardTitle>
                  <p className="text-4xl font-bold my-4">${plan.price}<span className="text-base font-normal">/mo</span></p>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{plan.description}</p>
                  <Button className={plan.featured ? 'bg-purple-600 hover:bg-purple-700' : ''}>
                    Sign Up
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers Comparison Section */}
      <section id="pricing-comparison" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Compare Pricing Tiers</h2>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">Feature</TableHead>
                  {pricingPlans.map((plan) => (
                    <TableHead key={plan.title} className="text-center">{plan.title}</TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {pricingFeatures.map((feature, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{feature.name}</TableCell>
                    {pricingPlans.map((plan) => (
                      <TableCell key={plan.title} className="text-center">
                        {feature[plan.title.toLowerCase()] ? (
                          <CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-red-500 mx-auto" />
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>
          <p className="text-center max-w-2xl mx-auto mb-12">
            We are a passionate team of innovators dedicated to revolutionizing workflow management. 
            Our mission is to empower businesses with cutting-edge SaaS solutions that drive efficiency and growth.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <img src="/placeholder.svg" alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.role}</p>
                  <p className="mt-2">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <form className="max-w-md mx-auto">
            <div className="space-y-4">
              <Input placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
              <Input placeholder="Subject" />
              <Textarea placeholder="Your Message" />
              <Button type="submit" className="w-full">Send Message</Button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2024 SaaS Startup. All rights reserved.</p>
            </div>
            <nav className="mb-4 md:mb-0">
              <ul className="flex space-x-4">
                <li><a href="#" className="hover:text-purple-400">Terms of Service</a></li>
                <li><a href="#" className="hover:text-purple-400">Privacy Policy</a></li>
              </ul>
            </nav>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-purple-400"><i className="fab fa-twitter"></i></a>
              <a href="#" className="hover:text-purple-400"><i className="fab fa-facebook"></i></a>
              <a href="#" className="hover:text-purple-400"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const features = [
  {
    icon: <Zap className="h-8 w-8 text-purple-600" />,
    title: "Lightning Fast",
    description: "Experience unparalleled speed and efficiency in your workflow."
  },
  {
    icon: <Shield className="h-8 w-8 text-purple-600" />,
    title: "Secure & Reliable",
    description: "Your data is protected with state-of-the-art security measures."
  },
  {
    icon: <CheckCircle2 className="h-8 w-8 text-purple-600" />,
    title: "Easy Integration",
    description: "Seamlessly integrate with your existing tools and platforms."
  }
];

const pricingPlans = [
  {
    title: "Basic",
    price: 29,
    description: "Perfect for small teams and startups.",
    featured: false
  },
  {
    title: "Pro",
    price: 79,
    description: "Ideal for growing businesses and organizations.",
    featured: true
  },
  {
    title: "Enterprise",
    price: 199,
    description: "Custom solutions for large-scale operations.",
    featured: false
  }
];

const pricingFeatures = [
  { name: "Core Features", basic: true, pro: true, enterprise: true },
  { name: "Team Members", basic: "Up to 5", pro: "Up to 20", enterprise: "Unlimited" },
  { name: "Storage", basic: "10GB", pro: "100GB", enterprise: "Unlimited" },
  { name: "API Access", basic: false, pro: true, enterprise: true },
  { name: "Custom Integrations", basic: false, pro: false, enterprise: true },
  { name: "24/7 Support", basic: false, pro: true, enterprise: true },
  { name: "Analytics", basic: "Basic", pro: "Advanced", enterprise: "Enterprise-grade" },
  { name: "Data Export", basic: false, pro: true, enterprise: true },
  { name: "White Labeling", basic: false, pro: false, enterprise: true },
];

const teamMembers = [
  {
    name: "Jane Doe",
    role: "CEO & Founder",
    bio: "Visionary leader with 10+ years in SaaS innovation."
  },
  {
    name: "John Smith",
    role: "CTO",
    bio: "Tech guru passionate about cutting-edge solutions."
  },
  {
    name: "Alice Johnson",
    role: "Head of Customer Success",
    bio: "Dedicated to ensuring the best user experience."
  }
];

export default Index;