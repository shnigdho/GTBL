import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CreditCard, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Lock,
  Globe,
  Award,
  Users,
  Smartphone,
  Eye,
  Fingerprint
} from 'lucide-react';

const BankingCards = () => {
  const features = [
    {
      icon: Shield,
      title: 'EMV Compliance',
      description: 'Level 1 & 2 certified for maximum security and global acceptance',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Contactless Payment',
      description: 'Tap-to-pay technology for fast and convenient transactions',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Lock,
      title: 'Advanced Security',
      description: 'Multiple authentication methods and fraud protection',
      color: 'from-pink-500 to-red-500'
    },
    {
      icon: Globe,
      title: 'Global Acceptance',
      description: 'Compatible with Visa, Mastercard, and UnionPay networks',
      color: 'from-red-600 to-orange-500'
    }
  ];

  const cardTypes = [
    {
      name: 'Credit Cards',
      description: 'Premium credit cards with advanced security features',
      features: ['EMV chip technology', 'Contactless payment', 'Fraud protection', 'Rewards integration'],
      applications: ['Consumer banking', 'Premium services', 'Travel benefits', 'Cashback programs'],
      price: 'From $1.25'
    },
    {
      name: 'Debit Cards',
      description: 'Secure debit cards for everyday banking transactions',
      features: ['PIN verification', 'ATM access', 'Online banking', 'Mobile payments'],
      applications: ['Daily transactions', 'ATM withdrawals', 'Online shopping', 'Bill payments'],
      price: 'From $0.95'
    },
    {
      name: 'Prepaid Cards',
      description: 'Flexible prepaid solutions for various use cases',
      features: ['Reloadable balance', 'Spending controls', 'Gift card options', 'Corporate solutions'],
      applications: ['Gift cards', 'Employee benefits', 'Travel cards', 'Budget management'],
      price: 'From $0.75'
    },
    {
      name: 'Corporate Cards',
      description: 'Business-focused cards with expense management features',
      features: ['Expense tracking', 'Spending limits', 'Reporting tools', 'Multi-user access'],
      applications: ['Business expenses', 'Employee cards', 'Travel management', 'Procurement'],
      price: 'From $1.50'
    }
  ];

  const securityFeatures = [
    { name: 'EMV Chip', icon: Shield, description: 'Dynamic authentication for each transaction' },
    { name: 'Contactless NFC', icon: Zap, description: 'Secure tap-to-pay technology' },
    { name: 'Holographic Security', icon: Eye, description: 'Visual security elements' },
    { name: 'Biometric Support', icon: Fingerprint, description: 'Fingerprint authentication ready' },
    { name: 'Tokenization', icon: Lock, description: 'Secure payment token generation' },
    { name: 'CVV/CVC', icon: Award, description: 'Card verification codes' }
  ];

  const specifications = [
    { label: 'Card Dimensions', value: '85.60 × 53.98 mm' },
    { label: 'Thickness', value: '0.76mm (±0.08mm)' },
    { label: 'Material', value: 'PVC, PET, or Eco-friendly' },
    { label: 'Chip Standard', value: 'ISO 7816, EMV' },
    { label: 'Contactless', value: 'ISO 14443 Type A/B' },
    { label: 'Operating Temperature', value: '-25°C to +85°C' },
    { label: 'Durability', value: '5-10 years lifespan' },
    { label: 'Certifications', value: 'EMV, Visa, Mastercard' }
  ];

  const paymentNetworks = [
    { name: 'Visa', description: 'Global payment network with worldwide acceptance' },
    { name: 'Mastercard', description: 'Secure payment solutions for consumers and businesses' },
    { name: 'UnionPay', description: 'Leading payment network in Asia-Pacific region' },
    { name: 'American Express', description: 'Premium payment services and rewards programs' }
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
          <span className="text-red-600 font-medium">Banking Cards</span>
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
                <CreditCard className="h-8 w-8 text-white" />
              </motion.div>
              <div>
                <h1 className="text-4xl font-bold text-gray-900">Banking Cards</h1>
                <p className="text-red-600 font-semibold">Secure Payment Solutions</p>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 leading-relaxed"
            >
              Empower your financial institution with our premium banking cards. From traditional 
              credit and debit cards to innovative contactless solutions, we deliver security, 
              reliability, and customer satisfaction.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <div className="flex items-center space-x-2 bg-red-50 px-4 py-2 rounded-full">
                <CheckCircle className="h-5 w-5 text-red-600" />
                <span className="text-red-700 font-medium">EMV Certified</span>
              </div>
              <div className="flex items-center space-x-2 bg-orange-50 px-4 py-2 rounded-full">
                <Award className="h-5 w-5 text-orange-600" />
                <span className="text-orange-700 font-medium">PCI Compliant</span>
              </div>
              <div className="flex items-center space-x-2 bg-pink-50 px-4 py-2 rounded-full">
                <Globe className="h-5 w-5 text-pink-600" />
                <span className="text-pink-700 font-medium">Global Networks</span>
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
                src="https://images.pexels.com/photos/6801650/pexels-photo-6801650.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Banking Cards"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/50 to-transparent"></div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute bottom-6 left-6 right-6 text-white"
              >
                <h3 className="text-2xl font-bold mb-2">Premium Banking Solutions</h3>
                <p className="text-red-100">Secure, reliable, and globally accepted</p>
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
            <p className="text-xl text-gray-600">Cutting-edge technology for secure banking</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Card Types</h2>
            <p className="text-xl text-gray-600">Comprehensive banking card solutions</p>
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
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Features:</h4>
                    <ul className="space-y-2">
                      {card.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Applications:</h4>
                    <ul className="space-y-2">
                      {card.applications.map((app, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <ArrowRight className="h-4 w-4 text-red-500 mr-2 flex-shrink-0" />
                          {app}
                        </li>
                      ))}
                    </ul>
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

        {/* Security Features */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Security Features</h2>
            <p className="text-xl text-gray-600">Multi-layered protection against fraud</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {securityFeatures.map((security, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <security.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-1">{security.name}</h3>
                <p className="text-xs text-gray-600">{security.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Payment Networks */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Supported Payment Networks</h2>
            <p className="text-xl text-gray-600">Global acceptance and compatibility</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {paymentNetworks.map((network, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{network.name}</h3>
                <p className="text-gray-600 text-sm">{network.description}</p>
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
              <p className="text-xl text-red-100">Detailed specifications for our banking cards</p>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Launch Your Banking Cards?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Partner with us for secure, reliable banking card solutions. From design to 
            deployment, we handle every aspect of your card program.
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

export default BankingCards;