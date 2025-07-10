import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Wifi, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Clock,
  Globe,
  Award,
  Users,
  Smartphone,
  CreditCard
} from 'lucide-react';

const NFCCards = () => {
  const features = [
    {
      icon: Wifi,
      title: 'High-Frequency Technology',
      description: '13.56 MHz frequency for optimal performance and compatibility',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Advanced Security',
      description: 'AES encryption and secure authentication protocols',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Zap,
      title: 'Fast Data Transfer',
      description: 'Lightning-fast communication up to 424 kbps',
      color: 'from-pink-500 to-red-500'
    },
    {
      icon: Globe,
      title: 'Global Standards',
      description: 'ISO 14443 Type A/B compliant for worldwide compatibility',
      color: 'from-red-600 to-orange-500'
    }
  ];

  const applications = [
    { name: 'Access Control Systems', icon: Shield },
    { name: 'Payment Solutions', icon: CreditCard },
    { name: 'Transportation Cards', icon: Globe },
    { name: 'Loyalty Programs', icon: Users },
    { name: 'Mobile Payments', icon: Smartphone },
    { name: 'Event Ticketing', icon: Clock }
  ];

  const specifications = [
    { label: 'Operating Frequency', value: '13.56 MHz' },
    { label: 'Communication Protocol', value: 'ISO 14443 Type A/B' },
    { label: 'Memory Capacity', value: '1KB - 8KB' },
    { label: 'Operating Temperature', value: '-25°C to +85°C' },
    { label: 'Data Retention', value: '10 years minimum' },
    { label: 'Write/Erase Cycles', value: '100,000+ cycles' },
    { label: 'Read Range', value: 'Up to 10cm' },
    { label: 'Data Transfer Rate', value: 'Up to 424 kbps' }
  ];

  const cardTypes = [
    {
      name: 'NTAG213',
      memory: '180 bytes',
      description: 'Perfect for basic NFC applications and URL sharing',
      price: 'From $0.25'
    },
    {
      name: 'NTAG215',
      memory: '924 bytes',
      description: 'Ideal for gaming applications and larger data storage',
      price: 'From $0.35'
    },
    {
      name: 'NTAG216',
      memory: '924 bytes',
      description: 'Premium option with enhanced security features',
      price: 'From $0.45'
    },
    {
      name: 'MIFARE Classic',
      memory: '1KB/4KB',
      description: 'Industry standard for access control and payments',
      price: 'From $0.40'
    }
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
          <span className="text-red-600 font-medium">NFC Cards</span>
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
                <Wifi className="h-8 w-8 text-white" />
              </motion.div>
              <div>
                <h1 className="text-4xl font-bold text-gray-900">NFC Cards</h1>
                <p className="text-red-600 font-semibold">Near Field Communication Technology</p>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 leading-relaxed"
            >
              Experience the future of contactless technology with our premium NFC cards. 
              Engineered for reliability, security, and seamless integration across multiple platforms.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <div className="flex items-center space-x-2 bg-red-50 px-4 py-2 rounded-full">
                <CheckCircle className="h-5 w-5 text-red-600" />
                <span className="text-red-700 font-medium">ISO Certified</span>
              </div>
              <div className="flex items-center space-x-2 bg-orange-50 px-4 py-2 rounded-full">
                <Award className="h-5 w-5 text-orange-600" />
                <span className="text-orange-700 font-medium">Premium Quality</span>
              </div>
              <div className="flex items-center space-x-2 bg-pink-50 px-4 py-2 rounded-full">
                <Globe className="h-5 w-5 text-pink-600" />
                <span className="text-pink-700 font-medium">Global Standards</span>
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
                Download Specs
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
                src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="NFC Cards"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/50 to-transparent"></div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute bottom-6 left-6 right-6 text-white"
              >
                <h3 className="text-2xl font-bold mb-2">Premium NFC Technology</h3>
                <p className="text-red-100">Advanced contactless solutions for modern applications</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Features</h2>
            <p className="text-xl text-gray-600">Cutting-edge technology for superior performance</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Available Card Types</h2>
            <p className="text-xl text-gray-600">Choose the perfect NFC solution for your needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cardTypes.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-white to-red-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-red-100"
              >
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{card.name}</h3>
                  <div className="text-2xl font-bold text-red-600 mb-3">{card.memory}</div>
                  <p className="text-gray-600 mb-4 text-sm">{card.description}</p>
                  <div className="text-lg font-semibold text-gray-900 mb-4">{card.price}</div>
                  <button className="w-full bg-gradient-to-r from-red-600 to-pink-600 text-white py-2 rounded-lg font-medium hover:from-red-700 hover:to-pink-700 transition-all duration-300">
                    Select Option
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Applications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Applications</h2>
            <p className="text-xl text-gray-600">Versatile solutions for diverse industries</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <app.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-gray-900">{app.name}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl p-12 text-white">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Technical Specifications</h2>
              <p className="text-xl text-red-100">Detailed technical information for our NFC cards</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {specifications.map((spec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="text-red-200 text-sm font-medium mb-1">{spec.label}</div>
                  <div className="text-white font-bold">{spec.value}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center bg-white rounded-2xl p-12 shadow-lg"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Order NFC Cards?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get started with our premium NFC card solutions. Contact our experts for 
            custom requirements and bulk pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:from-red-700 hover:to-pink-700"
            >
              Request Quote
            </Link>
            <button className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-600 hover:text-white transition-all duration-300">
              Download Catalog
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NFCCards;