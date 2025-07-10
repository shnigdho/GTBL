import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Wifi, Smartphone, CreditCard, Building, Users, Zap, Shield, Award, Globe, ArrowRight, CheckCircle, Star } from 'lucide-react';
import Carousel from '../components/Carousel';

const Home = () => {
  const carouselItems = [
    {
      id: 1,
      title: "Premium Smart Cards",
      subtitle: "ISO-Certified Manufacturing Excellence",
      description: "Leading the industry with cutting-edge NFC, SIM, and banking card solutions. Trusted by governments and enterprises worldwide.",
      image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      cta: "Explore Products"
    },
    {
      id: 2,
      title: "Secure Solutions",
      subtitle: "Advanced Security Features",
      description: "State-of-the-art security with holographic overlays, biometric embedding, and tamper-evident features for maximum protection.",
      image: "https://images.pexels.com/photos/6801647/pexels-photo-6801647.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      cta: "Learn More"
    },
    {
      id: 3,
      title: "Global Reach",
      subtitle: "Serving 50+ Countries",
      description: "With over 10 million cards manufactured annually, we deliver excellence across continents with local support and global standards.",
      image: "https://images.pexels.com/photos/6801649/pexels-photo-6801649.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      cta: "Get Started"
    }
  ];

  const services = [
    { 
      icon: Wifi, 
      title: 'NFC Cards', 
      description: 'Contactless smart cards with advanced NFC technology for seamless interactions',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      icon: Smartphone, 
      title: 'SIM Cards', 
      description: 'Secure SIM cards for telecom providers with global compatibility',
      color: 'from-green-500 to-emerald-500'
    },
    { 
      icon: CreditCard, 
      title: 'Banking Cards', 
      description: 'EMV compliant payment cards with enhanced security features',
      color: 'from-purple-500 to-violet-500'
    },
    { 
      icon: Building, 
      title: 'Government IDs', 
      description: 'Official identification cards for national and municipal authorities',
      color: 'from-red-500 to-pink-500'
    },
    { 
      icon: Users, 
      title: 'Membership Cards', 
      description: 'Custom loyalty and membership solutions with personalized branding',
      color: 'from-orange-500 to-yellow-500'
    },
    { 
      icon: Zap, 
      title: 'Smart Solutions', 
      description: 'Innovative smart card technologies for emerging applications',
      color: 'from-indigo-500 to-blue-500'
    },
  ];

  const stats = [
    { number: '10M+', label: 'Cards Manufactured', icon: CreditCard },
    { number: '50+', label: 'Countries Served', icon: Globe },
    { number: '99.9%', label: 'Quality Assurance', icon: Award },
    { number: '14+', label: 'Years Experience', icon: Shield },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CTO, TechBank Solutions",
      content: "SmartCard Pro delivered exceptional quality banking cards that exceeded our security requirements. Their attention to detail is unmatched.",
      rating: 5
    },
    {
      name: "Michael Chen",
      position: "Director, National ID Program",
      content: "Working with SmartCard Pro on our national ID project was seamless. They handled millions of cards with perfect precision and timing.",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      position: "VP Operations, MobileNet",
      content: "Their SIM card manufacturing capabilities are world-class. We've been partners for 5 years and they never disappoint.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Carousel Section */}
      <section className="relative">
        <Carousel items={carouselItems} />
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600">
              Our numbers speak for our commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Smart Card Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From design to delivery, we provide end-to-end smart card manufacturing 
              and personalization services for every industry need.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500" 
                     style={{ backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))` }} />
                
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <Link
                  to="/products"
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group-hover:translate-x-2 transform duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose SmartCard Pro?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We combine cutting-edge technology with unmatched expertise to deliver 
                smart card solutions that exceed expectations.
              </p>
              
              <div className="space-y-6">
                {[
                  'ISO 9001 Quality Management Certification',
                  'EMV Compliance and Common Criteria Certified',
                  '24/7 Technical Support and Consultation',
                  'Custom Design and Branding Services',
                  'Eco-friendly and Sustainable Materials',
                  'Global Shipping and Local Support'
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <CheckCircle className="h-6 w-6 text-green-500 mr-4 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/6801650/pexels-photo-6801650.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Smart Card Manufacturing"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-blue-100">
              Trusted by industry leaders worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-white mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-blue-200 text-sm">{testimonial.position}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied clients who trust SmartCard Pro for their 
              smart card manufacturing needs. Get your free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="bg-white text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center"
                >
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/products"
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300"
                >
                  View Products
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;