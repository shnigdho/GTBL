import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Gift, 
  Star, 
  CheckCircle, 
  ArrowRight, 
  Smartphone,
  Globe,
  Award,
  TrendingUp,
  Heart,
  ShoppingBag,
  CreditCard
} from 'lucide-react';

const MembershipCards = () => {
  const features = [
    {
      icon: Star,
      title: 'Loyalty Programs',
      description: 'Advanced point tracking and reward management systems',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Integration',
      description: 'Seamless integration with mobile apps and digital wallets',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: TrendingUp,
      title: 'Analytics & Insights',
      description: 'Detailed customer behavior analytics and reporting',
      color: 'from-pink-500 to-red-500'
    },
    {
      icon: Globe,
      title: 'Multi-Location Support',
      description: 'Works across multiple locations and franchise networks',
      color: 'from-red-600 to-orange-500'
    }
  ];

  const cardTypes = [
    {
      name: 'Retail Loyalty Cards',
      description: 'Customer loyalty programs for retail businesses',
      features: ['Points accumulation', 'Tier-based rewards', 'Purchase tracking', 'Personalized offers'],
      applications: ['Retail stores', 'Fashion brands', 'Electronics', 'Home improvement'],
      benefits: ['Increased customer retention', 'Higher average spend', 'Customer data insights'],
      price: 'From $0.45'
    },
    {
      name: 'Restaurant Cards',
      description: 'Dining loyalty and gift card solutions',
      features: ['Visit tracking', 'Menu preferences', 'Birthday rewards', 'Referral bonuses'],
      applications: ['Restaurants', 'Cafes', 'Food chains', 'Catering services'],
      benefits: ['Repeat visits', 'Customer preferences', 'Seasonal promotions'],
      price: 'From $0.35'
    },
    {
      name: 'Hotel Rewards Cards',
      description: 'Hospitality industry membership programs',
      features: ['Stay tracking', 'Room upgrades', 'Late checkout', 'Partner benefits'],
      applications: ['Hotels', 'Resorts', 'Travel agencies', 'Airlines'],
      benefits: ['Guest loyalty', 'Premium services', 'Cross-selling opportunities'],
      price: 'From $0.65'
    },
    {
      name: 'Fitness Membership',
      description: 'Health and fitness club membership cards',
      features: ['Access control', 'Class booking', 'Progress tracking', 'Personal training'],
      applications: ['Gyms', 'Yoga studios', 'Sports clubs', 'Wellness centers'],
      benefits: ['Member retention', 'Usage analytics', 'Health tracking'],
      price: 'From $0.55'
    }
  ];

  const industries = [
    { name: 'Retail & Shopping', icon: ShoppingBag, description: 'Customer loyalty and rewards programs' },
    { name: 'Hospitality', icon: Heart, description: 'Hotel and restaurant membership cards' },
    { name: 'Healthcare', icon: Award, description: 'Patient loyalty and wellness programs' },
    { name: 'Entertainment', icon: Star, description: 'Cinema, gaming, and event memberships' },
    { name: 'Financial Services', icon: CreditCard, description: 'Banking and credit union programs' },
    { name: 'Education', icon: Users, description: 'Student and alumni membership cards' }
  ];

  const specifications = [
    { label: 'Card Dimensions', value: '85.60 × 53.98 mm' },
    { label: 'Thickness', value: '0.76mm (±0.08mm)' },
    { label: 'Material Options', value: 'PVC, PET, Biodegradable' },
    { label: 'Printing', value: 'Full color, Variable data' },
    { label: 'Encoding Options', value: 'Magnetic stripe, Barcode' },
    { label: 'Security Features', value: 'Hologram, UV printing' },
    { label: 'Durability', value: '3-5 years typical use' },
    { label: 'Customization', value: 'Full design flexibility' }
  ];

  const designOptions = [
    'Custom logo and branding',
    'Variable data printing',
    'Photo ID integration',
    'Signature panels',
    'Scratch-off panels',
    'Embossed text and numbers',
    'Foil stamping',
    'Spot UV coating'
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center space-x-2 text-sm text-gray-600 mb-8"
        >
          <Link to="/" className="hover:text-red-600 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-red-600 transition-colors">Products</Link>
          <span>/</span>
          <span className="text-red-600 font-medium">Membership Cards</span>
        </motion.div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4 mb-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center"
              >
                <Users className="h-8 w-8 text-white" />
              </motion.div>
              <div>
                <h1 className="text-4xl font-bold text-gray-900">Membership Cards</h1>
                <p className="text-red-600 font-semibold">Customer Loyalty Solutions</p>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 leading-relaxed"
            >
              Build lasting customer relationships with our premium membership and loyalty cards. 
              From retail rewards to exclusive club memberships, we create cards that drive 
              engagement and increase customer lifetime value.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <div className="flex items-center space-x-2 bg-red-50 px-4 py-2 rounded-full">
                <CheckCircle className="h-5 w-5 text-red-600" />
                <span className="text-red-700 font-medium">Custom Design</span>
              </div>
              <div className="flex items-center space-x-2 bg-orange-50 px-4 py-2 rounded-full">
                <Award className="h-5 w-5 text-orange-600" />
                <span className="text-orange-700 font-medium">Loyalty Programs</span>
              </div>
              <div className="flex items-center space-x-2 bg-pink-50 px-4 py-2 rounded-full">
                <Globe className="h-5 w-5 text-pink-600" />
                <span className="text-pink-700 font-medium">Multi-Location</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex space-x-4"
            >
              <Link
                to="/contact"
                className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center group"
              >
                Get Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-all duration-300">
                View Samples
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/6801655/pexels-photo-6801655.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Membership Cards"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/50 to-transparent"></div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute bottom-6 left-6 right-6 text-white"
              >
                <h3 className="text-2xl font-bold mb-2">Premium Membership Solutions</h3>
                <p className="text-red-100">Building customer loyalty through innovative design</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Features</h2>
            <p className="text-xl text-gray-600">Advanced capabilities for customer engagement</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-center group"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Card Types */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Membership Card Solutions</h2>
            <p className="text-xl text-gray-600">Tailored solutions for every industry</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cardTypes.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-white to-red-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-red-100"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{card.name}</h3>
                  <p className="text-gray-600 mb-4">{card.description}</p>
                  <div className="text-xl font-bold text-red-600 mb-4">{card.price}</div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {card.features.map((feature, idx) => (
                        <div key={idx} className="text-sm text-gray-600 flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Applications:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {card.applications.map((app, idx) => (
                        <div key={idx} className="text-sm text-gray-600 flex items-center">
                          <ArrowRight className="h-4 w-4 text-red-500 mr-2 flex-shrink-0" />
                          {app}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                    <div className="space-y-1">
                      {card.benefits.map((benefit, idx) => (
                        <div key={idx} className="text-sm text-gray-600 flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <button className="w-full bg-gradient-to-r from-red-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-red-700 hover:to-pink-700 transition-all duration-300">
                    Select Option
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Industries */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600">Membership solutions across diverse sectors</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <industry.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{industry.name}</h3>
                    <p className="text-gray-600 text-sm">{industry.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Design Options */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl p-12 text-white">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Design & Customization Options</h2>
              <p className="text-xl text-red-100">Create cards that reflect your brand identity</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {designOptions.map((option, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 text-center"
                >
                  <CheckCircle className="h-8 w-8 text-white mx-auto mb-3" />
                  <div className="text-white font-medium">{option}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Specifications</h2>
            <p className="text-xl text-gray-600">Detailed specifications for membership cards</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specifications.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-red-600 text-sm font-medium mb-2">{spec.label}</div>
                <div className="text-gray-900 font-bold">{spec.value}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center bg-white rounded-2xl p-12 shadow-lg"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Build Customer Loyalty?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Create memorable membership experiences that keep customers coming back. 
            Let's design the perfect loyalty solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:from-red-700 hover:to-pink-700"
            >
              Start Your Program
            </Link>
            <button className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-600 hover:text-white transition-all duration-300">
              View Portfolio
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MembershipCards;