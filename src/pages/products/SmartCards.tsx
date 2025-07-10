import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Shield, 
  Cpu, 
  CheckCircle, 
  ArrowRight, 
  Lock,
  Globe,
  Award,
  Smartphone,
  CreditCard,
  Building,
  Users
} from 'lucide-react';

const SmartCards = () => {
  const features = [
    {
      icon: Cpu,
      title: 'Advanced Microprocessor',
      description: 'High-performance chips with secure data processing capabilities',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Cryptographic Security',
      description: 'Hardware-based encryption and secure key management',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Zap,
      title: 'Multi-Application Support',
      description: 'Single card supporting multiple applications and services',
      color: 'from-pink-500 to-red-500'
    },
    {
      icon: Globe,
      title: 'Interoperability',
      description: 'Compatible with global standards and existing infrastructure',
      color: 'from-red-600 to-orange-500'
    }
  ];

  const smartCardTypes = [
    {
      name: 'Contact Smart Cards',
      description: 'Traditional smart cards with physical contact interface',
      features: ['ISO 7816 compliant', 'Secure chip technology', 'High memory capacity', 'Tamper-resistant'],
      applications: ['Banking cards', 'SIM cards', 'Healthcare cards', 'Employee ID'],
      specifications: {
        'Interface': 'Contact (ISO 7816)',
        'Memory': '32KB - 512KB',
        'Security': 'EAL5+ certified',
        'Durability': '100,000+ insertions'
      }
    },
    {
      name: 'Contactless Smart Cards',
      description: 'RFID/NFC enabled cards for wireless communication',
      features: ['ISO 14443 compliant', 'Fast transactions', 'No physical wear', 'Mobile integration'],
      applications: ['Transit cards', 'Access control', 'Payment cards', 'Loyalty programs'],
      specifications: {
        'Interface': 'Contactless (ISO 14443)',
        'Frequency': '13.56 MHz',
        'Range': 'Up to 10cm',
        'Speed': 'Up to 424 kbps'
      }
    },
    {
      name: 'Dual Interface Cards',
      description: 'Hybrid cards supporting both contact and contactless interfaces',
      features: ['Dual interface support', 'Maximum flexibility', 'Future-proof design', 'Cost-effective'],
      applications: ['Banking cards', 'Government ID', 'Corporate cards', 'Multi-purpose cards'],
      specifications: {
        'Interface': 'Contact + Contactless',
        'Standards': 'ISO 7816 + ISO 14443',
        'Security': 'Common Criteria certified',
        'Applications': 'Multiple concurrent'
      }
    },
    {
      name: 'Java Cards',
      description: 'Programmable smart cards with Java Card technology',
      features: ['Java Card OS', 'Applet support', 'Post-issuance loading', 'Flexible programming'],
      applications: ['Multi-application cards', 'Enterprise solutions', 'Secure platforms', 'Custom applications'],
      specifications: {
        'OS': 'Java Card 3.x',
        'Runtime': 'Java Card Runtime',
        'Memory': 'Up to 1MB',
        'Applets': 'Multiple concurrent'
      }
    }
  ];

  const applications = [
    { name: 'Financial Services', icon: CreditCard, description: 'Banking, payments, and financial applications' },
    { name: 'Government & ID', icon: Building, description: 'National ID, passports, and official documents' },
    { name: 'Healthcare', icon: Shield, description: 'Patient records, insurance, and medical applications' },
    { name: 'Transportation', icon: Globe, description: 'Transit cards, toll collection, and mobility' },
    { name: 'Access Control', icon: Lock, description: 'Building access, security, and authentication' },
    { name: 'Telecommunications', icon: Smartphone, description: 'SIM cards, mobile services, and connectivity' }
  ];

  const securityFeatures = [
    'Hardware-based cryptography',
    'Secure key generation and storage',
    'Tamper-resistant design',
    'Side-channel attack protection',
    'Secure boot and authentication',
    'Data encryption and integrity',
    'Access control mechanisms',
    'Audit trail and logging'
  ];

  const specifications = [
    { label: 'Card Dimensions', value: '85.60 × 53.98 mm' },
    { label: 'Thickness', value: '0.76mm (±0.08mm)' },
    { label: 'Operating Voltage', value: '1.8V, 3V, 5V' },
    { label: 'Operating Temperature', value: '-25°C to +85°C' },
    { label: 'Memory Types', value: 'EEPROM, Flash, RAM' },
    { label: 'Processor', value: '8-bit to 32-bit' },
    { label: 'Standards', value: 'ISO 7816, ISO 14443' },
    { label: 'Certifications', value: 'Common Criteria, FIPS' }
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
          <span className="text-red-600 font-medium">Smart Cards</span>
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
                <Zap className="h-8 w-8 text-white" />
              </motion.div>
              <div>
                <h1 className="text-4xl font-bold text-gray-900">Smart Cards</h1>
                <p className="text-red-600 font-semibold">Intelligent Secure Solutions</p>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 leading-relaxed"
            >
              Experience the power of intelligent card technology with our comprehensive smart card 
              solutions. From contact to contactless, single to multi-application cards, we deliver 
              secure, flexible, and future-ready solutions.
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
                <span className="text-orange-700 font-medium">EAL5+ Security</span>
              </div>
              <div className="flex items-center space-x-2 bg-pink-50 px-4 py-2 rounded-full">
                <Globe className="h-5 w-5 text-pink-600" />
                <span className="text-pink-700 font-medium">Multi-Application</span>
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
                src="https://images.pexels.com/photos/6801658/pexels-photo-6801658.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Smart Cards"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/50 to-transparent"></div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute bottom-6 left-6 right-6 text-white"
              >
                <h3 className="text-2xl font-bold mb-2">Intelligent Card Technology</h3>
                <p className="text-red-100">Secure, flexible, and future-ready solutions</p>
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
            <p className="text-xl text-gray-600">Cutting-edge technology for intelligent applications</p>
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

        {/* Smart Card Types */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Smart Card Technologies</h2>
            <p className="text-xl text-gray-600">Comprehensive range of intelligent card solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {smartCardTypes.map((card, index) => (
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
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-2">
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
                    <h4 className="font-semibold text-gray-900 mb-3">Specifications:</h4>
                    <div className="space-y-2">
                      {Object.entries(card.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between text-sm">
                          <span className="text-gray-600">{key}:</span>
                          <span className="text-gray-900 font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <button className="w-full bg-gradient-to-r from-red-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-red-700 hover:to-pink-700 transition-all duration-300">
                    Learn More
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Areas</h2>
            <p className="text-xl text-gray-600">Smart cards across diverse industries</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, index) => (
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
                    <app.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{app.name}</h3>
                    <p className="text-gray-600 text-sm">{app.description}</p>
                  </div>
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
          <div className="bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl p-12 text-white">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Security Features</h2>
              <p className="text-xl text-red-100">Advanced security mechanisms for maximum protection</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 text-center"
                >
                  <Shield className="h-8 w-8 text-white mx-auto mb-3" />
                  <div className="text-white font-medium text-sm">{feature}</div>
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
            <p className="text-xl text-gray-600">Detailed specifications for smart cards</p>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready for Intelligent Solutions?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover the power of smart card technology for your applications. 
            From simple authentication to complex multi-application platforms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:from-red-700 hover:to-pink-700"
            >
              Request Consultation
            </Link>
            <button className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-600 hover:text-white transition-all duration-300">
              Download Technical Guide
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SmartCards;