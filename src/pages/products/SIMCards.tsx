import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Smartphone, 
  Shield, 
  Globe, 
  CheckCircle, 
  ArrowRight, 
  Zap,
  Wifi,
  Award,
  Users,
  Settings,
  Lock
} from 'lucide-react';

const SIMCards = () => {
  const features = [
    {
      icon: Smartphone,
      title: 'Multi-Generation Support',
      description: 'Compatible with 2G, 3G, 4G, and 5G networks worldwide',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Advanced Security',
      description: 'UICC certified with robust authentication protocols',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Globe,
      title: 'Global Roaming',
      description: 'Seamless connectivity across international networks',
      color: 'from-pink-500 to-red-500'
    },
    {
      icon: Zap,
      title: 'OTA Updates',
      description: 'Over-the-air programming and remote management',
      color: 'from-red-600 to-orange-500'
    }
  ];

  const simTypes = [
    {
      name: 'Standard SIM',
      size: '25mm × 15mm',
      description: 'Traditional full-size SIM cards for legacy devices',
      applications: ['Older mobile phones', 'Industrial devices', 'M2M applications'],
      price: 'From $0.15'
    },
    {
      name: 'Micro SIM',
      size: '15mm × 12mm',
      description: 'Compact SIM cards for modern smartphones',
      applications: ['Smartphones', 'Tablets', 'Mobile hotspots'],
      price: 'From $0.18'
    },
    {
      name: 'Nano SIM',
      size: '12.3mm × 8.8mm',
      description: 'Ultra-compact SIM for latest generation devices',
      applications: ['Latest smartphones', 'Wearables', 'IoT devices'],
      price: 'From $0.20'
    },
    {
      name: 'eSIM',
      size: 'Embedded',
      description: 'Programmable embedded SIM technology',
      applications: ['Premium devices', 'IoT solutions', 'Connected cars'],
      price: 'From $0.35'
    }
  ];

  const networkSupport = [
    { name: '2G GSM', icon: Wifi, description: 'Voice and SMS services' },
    { name: '3G UMTS', icon: Globe, description: 'Data and multimedia services' },
    { name: '4G LTE', icon: Zap, description: 'High-speed data connectivity' },
    { name: '5G NR', icon: Settings, description: 'Next-generation ultra-fast networks' }
  ];

  const specifications = [
    { label: 'Operating Voltage', value: '1.8V / 3V' },
    { label: 'Operating Temperature', value: '-25°C to +85°C' },
    { label: 'Storage Temperature', value: '-40°C to +105°C' },
    { label: 'Memory Capacity', value: '32KB - 512KB' },
    { label: 'Insertion/Removal Cycles', value: '10,000+ cycles' },
    { label: 'Data Retention', value: '10+ years' },
    { label: 'ESD Protection', value: '±4000V' },
    { label: 'Certification', value: 'UICC, GCF, PTCRB' }
  ];

  const applications = [
    { name: 'Mobile Networks', icon: Smartphone, description: 'Consumer mobile services' },
    { name: 'IoT Devices', icon: Settings, description: 'Internet of Things connectivity' },
    { name: 'M2M Communication', icon: Globe, description: 'Machine-to-machine data' },
    { name: 'Connected Vehicles', icon: Zap, description: 'Automotive connectivity' },
    { name: 'Smart Meters', icon: Award, description: 'Utility monitoring systems' },
    { name: 'Security Systems', icon: Lock, description: 'Remote monitoring and alerts' }
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
          <span className="text-red-600 font-medium">SIM Cards</span>
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
                <Smartphone className="h-8 w-8 text-white" />
              </motion.div>
              <div>
                <h1 className="text-4xl font-bold text-gray-900">SIM Cards</h1>
                <p className="text-red-600 font-semibold">Secure Mobile Connectivity Solutions</p>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 leading-relaxed"
            >
              Power your mobile network with our premium SIM cards. From traditional GSM to 
              cutting-edge 5G and eSIM solutions, we provide secure, reliable connectivity 
              for telecom operators worldwide.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <div className="flex items-center space-x-2 bg-red-50 px-4 py-2 rounded-full">
                <CheckCircle className="h-5 w-5 text-red-600" />
                <span className="text-red-700 font-medium">UICC Certified</span>
              </div>
              <div className="flex items-center space-x-2 bg-orange-50 px-4 py-2 rounded-full">
                <Award className="h-5 w-5 text-orange-600" />
                <span className="text-orange-700 font-medium">5G Ready</span>
              </div>
              <div className="flex items-center space-x-2 bg-pink-50 px-4 py-2 rounded-full">
                <Globe className="h-5 w-5 text-pink-600" />
                <span className="text-pink-700 font-medium">Global Roaming</span>
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
                src="https://images.pexels.com/photos/6801657/pexels-photo-6801657.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="SIM Cards"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/50 to-transparent"></div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute bottom-6 left-6 right-6 text-white"
              >
                <h3 className="text-2xl font-bold mb-2">Advanced SIM Technology</h3>
                <p className="text-red-100">Secure connectivity for the mobile world</p>
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
            <p className="text-xl text-gray-600">Advanced capabilities for modern mobile networks</p>
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

        {/* SIM Types */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">SIM Card Types</h2>
            <p className="text-xl text-gray-600">Complete range of SIM form factors</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {simTypes.map((sim, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-white to-red-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-red-100"
              >
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{sim.name}</h3>
                  <div className="text-lg font-semibold text-red-600 mb-2">{sim.size}</div>
                  <p className="text-gray-600 text-sm mb-4">{sim.description}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Applications:</h4>
                  <ul className="space-y-1">
                    {sim.applications.map((app, idx) => (
                      <li key={idx} className="text-xs text-gray-600 flex items-center">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-900 mb-3">{sim.price}</div>
                  <button className="w-full bg-gradient-to-r from-red-600 to-pink-600 text-white py-2 rounded-lg font-medium hover:from-red-700 hover:to-pink-700 transition-all duration-300">
                    Select Option
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Network Support */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Network Support</h2>
            <p className="text-xl text-gray-600">Compatible with all major network technologies</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {networkSupport.map((network, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <network.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{network.name}</h3>
                <p className="text-gray-600 text-sm">{network.description}</p>
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
            <p className="text-xl text-gray-600">Versatile connectivity solutions</p>
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
              <p className="text-xl text-red-100">Detailed technical information for our SIM cards</p>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Launch Your Network?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Partner with us for reliable SIM card solutions. From traditional GSM to 
            cutting-edge 5G and eSIM technology.
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

export default SIMCards;