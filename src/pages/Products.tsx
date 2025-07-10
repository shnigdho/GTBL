import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wifi, Smartphone, CreditCard, Building, Users, Zap, Shield, Award, CheckCircle, ArrowRight } from 'lucide-react';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Products', count: 12 },
    { id: 'nfc', name: 'NFC Cards', count: 3 },
    { id: 'banking', name: 'Banking Cards', count: 2 },
    { id: 'government', name: 'Government IDs', count: 3 },
    { id: 'membership', name: 'Membership', count: 2 },
    { id: 'sim', name: 'SIM Cards', count: 2 },
  ];

  const products = [
    {
      id: 1,
      name: 'Premium NFC Cards',
      category: 'nfc',
      icon: Wifi,
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'High-frequency contactless smart cards with advanced NFC technology',
      features: ['13.56 MHz frequency', 'ISO 14443 Type A/B', 'Up to 8KB memory', 'Custom printing'],
      applications: ['Access Control', 'Payment Systems', 'Transportation', 'Loyalty Programs'],
      specifications: {
        'Operating Frequency': '13.56 MHz',
        'Communication Protocol': 'ISO 14443 Type A/B',
        'Memory Capacity': '1KB - 8KB',
        'Operating Temperature': '-25°C to +85°C',
        'Data Retention': '10 years',
        'Write/Erase Cycles': '100,000 cycles'
      }
    },
    {
      id: 2,
      name: 'Dual Interface Cards',
      category: 'nfc',
      icon: Zap,
      image: 'https://images.pexels.com/photos/6801647/pexels-photo-6801647.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Cards supporting both contact and contactless interfaces',
      features: ['Dual interface technology', 'EMV compliant', 'High security', 'Flexible applications'],
      applications: ['Banking', 'Government ID', 'Corporate Access', 'Multi-purpose Cards'],
      specifications: {
        'Interface': 'Contact + Contactless',
        'Chip': 'Java Card compatible',
        'Security': 'EAL5+ certified',
        'Standards': 'EMV, ISO 7816, ISO 14443'
      }
    },
    {
      id: 3,
      name: 'RFID Tags & Labels',
      category: 'nfc',
      icon: Shield,
      image: 'https://images.pexels.com/photos/6801649/pexels-photo-6801649.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Flexible RFID solutions for inventory and tracking',
      features: ['Various form factors', 'Long read range', 'Durable materials', 'Custom encoding'],
      applications: ['Inventory Management', 'Asset Tracking', 'Supply Chain', 'Retail'],
      specifications: {
        'Frequency': 'LF, HF, UHF',
        'Read Range': 'Up to 10 meters',
        'Form Factor': 'Labels, Tags, Cards',
        'Durability': 'IP65 rated'
      }
    },
    {
      id: 4,
      name: 'EMV Banking Cards',
      category: 'banking',
      icon: CreditCard,
      image: 'https://images.pexels.com/photos/6801650/pexels-photo-6801650.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Secure payment cards with EMV chip technology',
      features: ['EMV Level 1 & 2 certified', 'Contactless payment', 'Advanced security', 'Global acceptance'],
      applications: ['Credit Cards', 'Debit Cards', 'Prepaid Cards', 'Corporate Cards'],
      specifications: {
        'Chip': 'EMV certified',
        'Security': 'DDA, SDA, CDA',
        'Contactless': 'PayWave, PayPass',
        'Certification': 'Visa, Mastercard, UnionPay'
      }
    },
    {
      id: 5,
      name: 'Contactless Payment Cards',
      category: 'banking',
      icon: Wifi,
      image: 'https://images.pexels.com/photos/6801651/pexels-photo-6801651.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Tap-to-pay cards for seamless transactions',
      features: ['Instant payments', 'No PIN required', 'Secure encryption', 'Wide acceptance'],
      applications: ['Retail Payments', 'Transit Systems', 'Vending Machines', 'Quick Service'],
      specifications: {
        'Payment Limit': 'Configurable',
        'Transaction Time': '<500ms',
        'Security': 'Tokenization',
        'Standards': 'EMVCo, PCI DSS'
      }
    },
    {
      id: 6,
      name: 'National ID Cards',
      category: 'government',
      icon: Building,
      image: 'https://images.pexels.com/photos/6801652/pexels-photo-6801652.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Secure identification cards for government programs',
      features: ['Biometric data storage', 'High security features', 'Tamper-evident', 'Long lifespan'],
      applications: ['National Identity', 'Voter Registration', 'Social Services', 'Border Control'],
      specifications: {
        'Security Level': 'EAL5+',
        'Biometrics': 'Fingerprint, Photo, Iris',
        'Durability': '10+ years',
        'Features': 'Hologram, UV printing'
      }
    },
    {
      id: 7,
      name: 'Driver License Cards',
      category: 'government',
      icon: Shield,
      image: 'https://images.pexels.com/photos/6801653/pexels-photo-6801653.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Secure driver licenses with advanced security features',
      features: ['REAL ID compliant', 'RFID blocking', 'Tamper-proof', 'Digital signature'],
      applications: ['Driver Licensing', 'Age Verification', 'Identity Proof', 'Access Control'],
      specifications: {
        'Compliance': 'REAL ID Act',
        'Security': 'Multiple layers',
        'Validity': '5-10 years',
        'Features': 'Barcodes, Magnetic stripe'
      }
    },
    {
      id: 8,
      name: 'Transit Cards',
      category: 'government',
      icon: Zap,
      image: 'https://images.pexels.com/photos/6801654/pexels-photo-6801654.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Smart cards for public transportation systems',
      features: ['Fast transactions', 'Multi-modal transport', 'Reloadable', 'Offline capability'],
      applications: ['Bus Systems', 'Metro/Subway', 'Parking', 'Bike Sharing'],
      specifications: {
        'Transaction Speed': '<300ms',
        'Capacity': 'Multiple trips',
        'Interoperability': 'Multi-operator',
        'Battery': 'Battery-free'
      }
    },
    {
      id: 9,
      name: 'Loyalty Cards',
      category: 'membership',
      icon: Users,
      image: 'https://images.pexels.com/photos/6801655/pexels-photo-6801655.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Customer loyalty and rewards program cards',
      features: ['Points tracking', 'Personalized offers', 'Mobile integration', 'Analytics'],
      applications: ['Retail Loyalty', 'Restaurant Programs', 'Hotel Rewards', 'Airline Miles'],
      specifications: {
        'Data Storage': 'Customer profile',
        'Integration': 'POS systems',
        'Analytics': 'Purchase behavior',
        'Personalization': 'Custom branding'
      }
    },
    {
      id: 10,
      name: 'Access Control Cards',
      category: 'membership',
      icon: Shield,
      image: 'https://images.pexels.com/photos/6801656/pexels-photo-6801656.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Secure access cards for buildings and facilities',
      features: ['Multi-level access', 'Time restrictions', 'Audit trails', 'Integration ready'],
      applications: ['Office Buildings', 'Hospitals', 'Universities', 'Industrial Sites'],
      specifications: {
        'Access Levels': 'Configurable',
        'Encryption': 'AES 256-bit',
        'Integration': 'Multiple systems',
        'Audit': 'Complete logging'
      }
    },
    {
      id: 11,
      name: 'Telecom SIM Cards',
      category: 'sim',
      icon: Smartphone,
      image: 'https://images.pexels.com/photos/6801657/pexels-photo-6801657.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Secure SIM cards for mobile network operators',
      features: ['Global roaming', 'OTA updates', 'Multi-application', 'High security'],
      applications: ['Mobile Networks', 'IoT Devices', 'M2M Communication', 'eSIM Solutions'],
      specifications: {
        'Form Factor': 'Mini, Micro, Nano',
        'Generation': '2G, 3G, 4G, 5G',
        'Security': 'UICC certified',
        'Capacity': 'Up to 512KB'
      }
    },
    {
      id: 12,
      name: 'IoT SIM Cards',
      category: 'sim',
      icon: Zap,
      image: 'https://images.pexels.com/photos/6801658/pexels-photo-6801658.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Specialized SIM cards for Internet of Things devices',
      features: ['Low power consumption', 'Extended temperature range', 'Global connectivity', 'Remote management'],
      applications: ['Smart Meters', 'Vehicle Tracking', 'Industrial IoT', 'Smart Cities'],
      specifications: {
        'Temperature': '-40°C to +105°C',
        'Lifespan': '10+ years',
        'Power': 'Ultra-low consumption',
        'Management': 'Remote provisioning'
      }
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Smart Card Products
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive range of smart card solutions engineered for security, 
            reliability, and performance across every industry vertical.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md hover:shadow-lg'
              }`}
            >
              {category.name}
              <span className="ml-2 text-sm opacity-75">({category.count})</span>
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer"
                onClick={() => setSelectedProduct(selectedProduct === product.id ? null : product.id)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <product.icon className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.slice(0, 2).map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                    {product.features.length > 2 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full font-medium">
                        +{product.features.length - 2} more
                      </span>
                    )}
                  </div>

                  <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center group">
                    {selectedProduct === product.id ? 'Hide Details' : 'View Details'}
                    <ArrowRight className={`ml-2 h-4 w-4 transition-transform duration-300 ${selectedProduct === product.id ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
                  </button>
                </div>

                {/* Expanded Details */}
                <AnimatePresence>
                  {selectedProduct === product.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-200 bg-gray-50"
                    >
                      <div className="p-6">
                        <div className="grid grid-cols-1 gap-6">
                          {/* Applications */}
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                              <Award className="h-5 w-5 text-blue-600 mr-2" />
                              Applications
                            </h4>
                            <div className="grid grid-cols-2 gap-2">
                              {product.applications.map((app, idx) => (
                                <div key={idx} className="flex items-center text-sm text-gray-600">
                                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                  {app}
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Specifications */}
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                              <Shield className="h-5 w-5 text-blue-600 mr-2" />
                              Key Specifications
                            </h4>
                            <div className="space-y-2">
                              {Object.entries(product.specifications).map(([key, value]) => (
                                <div key={key} className="flex justify-between text-sm">
                                  <span className="text-gray-600">{key}:</span>
                                  <span className="text-gray-900 font-medium">{value}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white"
        >
          <h2 className="text-3xl font-bold mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our engineering team can develop specialized smart card solutions 
            tailored to your specific requirements and industry needs.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Contact Our Experts
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;