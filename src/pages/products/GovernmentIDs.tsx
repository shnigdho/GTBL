import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Building, 
  Shield, 
  Eye, 
  CheckCircle, 
  ArrowRight, 
  Lock,
  Globe,
  Award,
  Users,
  Fingerprint,
  Camera,
  FileText
} from 'lucide-react';

const GovernmentIDs = () => {
  const features = [
    {
      icon: Shield,
      title: 'Maximum Security',
      description: 'Multi-layered security features to prevent counterfeiting and fraud',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Fingerprint,
      title: 'Biometric Integration',
      description: 'Support for fingerprint, facial recognition, and iris scanning',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Eye,
      title: 'Visual Security',
      description: 'Holographic overlays, UV inks, and tamper-evident features',
      color: 'from-pink-500 to-red-500'
    },
    {
      icon: Globe,
      title: 'ICAO Compliant',
      description: 'International standards compliance for travel documents',
      color: 'from-red-600 to-orange-500'
    }
  ];

  const idTypes = [
    {
      name: 'National ID Cards',
      description: 'Secure national identification cards with advanced security features',
      features: ['Biometric data storage', 'RFID/NFC technology', 'Digital signatures', 'Tamper-evident design'],
      applications: ['Citizen identification', 'Government services', 'Voting systems', 'Border control'],
      security: 'EAL5+ certified'
    },
    {
      name: 'Driver Licenses',
      description: 'REAL ID compliant driver licenses with enhanced security',
      features: ['REAL ID compliance', 'Magnetic stripe', 'Barcodes', 'Photo ID integration'],
      applications: ['Vehicle licensing', 'Age verification', 'Identity proof', 'Access control'],
      security: 'REAL ID Act compliant'
    },
    {
      name: 'Passport Cards',
      description: 'Travel documents with ICAO compliance and security features',
      features: ['ICAO 9303 standard', 'Machine readable zone', 'Digital photo', 'Security printing'],
      applications: ['International travel', 'Border crossing', 'Identity verification', 'Consular services'],
      security: 'ICAO compliant'
    },
    {
      name: 'Employee ID Cards',
      description: 'Government employee identification with access control features',
      features: ['Access control integration', 'Photo ID', 'Department coding', 'Security clearance'],
      applications: ['Building access', 'System login', 'Security clearance', 'Time tracking'],
      security: 'Custom security levels'
    }
  ];

  const securityFeatures = [
    { name: 'Holographic Overlays', icon: Eye, description: 'Multi-dimensional security holograms' },
    { name: 'UV Fluorescent Inks', icon: Shield, description: 'Invisible inks visible under UV light' },
    { name: 'Microtext Printing', icon: FileText, description: 'Extremely small text for security' },
    { name: 'RFID/NFC Chips', icon: Globe, description: 'Contactless data storage and verification' },
    { name: 'Biometric Templates', icon: Fingerprint, description: 'Encrypted biometric data storage' },
    { name: 'Digital Watermarks', icon: Camera, description: 'Invisible digital security marks' }
  ];

  const specifications = [
    { label: 'Card Dimensions', value: '85.60 × 53.98 mm' },
    { label: 'Thickness', value: '0.76mm - 1.2mm' },
    { label: 'Material', value: 'Polycarbonate/Teslin' },
    { label: 'Security Level', value: 'EAL5+ certified' },
    { label: 'Biometric Storage', value: 'ISO 19794 compliant' },
    { label: 'Operating Temperature', value: '-25°C to +85°C' },
    { label: 'Durability', value: '10+ years lifespan' },
    { label: 'Standards', value: 'ICAO, ISO 14443, FIPS' }
  ];

  const complianceStandards = [
    { name: 'ICAO 9303', description: 'International travel document standards' },
    { name: 'REAL ID Act', description: 'US federal identification standards' },
    { name: 'ISO 14443', description: 'Contactless smart card standards' },
    { name: 'FIPS 201', description: 'Federal employee identification standards' },
    { name: 'Common Criteria', description: 'International security evaluation' },
    { name: 'NIST Guidelines', description: 'Cybersecurity framework compliance' }
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
          <span className="text-red-600 font-medium">Government IDs</span>
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
                <Building className="h-8 w-8 text-white" />
              </motion.div>
              <div>
                <h1 className="text-4xl font-bold text-gray-900">Government IDs</h1>
                <p className="text-red-600 font-semibold">Secure Identity Solutions</p>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 leading-relaxed"
            >
              Trusted by governments worldwide, our secure identification cards provide the highest 
              level of security and compliance. From national IDs to driver licenses, we deliver 
              solutions that protect citizens and prevent fraud.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <div className="flex items-center space-x-2 bg-red-50 px-4 py-2 rounded-full">
                <CheckCircle className="h-5 w-5 text-red-600" />
                <span className="text-red-700 font-medium">EAL5+ Certified</span>
              </div>
              <div className="flex items-center space-x-2 bg-orange-50 px-4 py-2 rounded-full">
                <Award className="h-5 w-5 text-orange-600" />
                <span className="text-orange-700 font-medium">ICAO Compliant</span>
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
                src="https://images.pexels.com/photos/6801652/pexels-photo-6801652.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Government ID Cards"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/50 to-transparent"></div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute bottom-6 left-6 right-6 text-white"
              >
                <h3 className="text-2xl font-bold mb-2">Secure Government Solutions</h3>
                <p className="text-red-100">Trusted by governments worldwide</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Security Features</h2>
            <p className="text-xl text-gray-600">Maximum protection against fraud and counterfeiting</p>
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

        {/* ID Types */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Government ID Solutions</h2>
            <p className="text-xl text-gray-600">Comprehensive identification card programs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {idTypes.map((id, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-white to-red-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-red-100"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{id.name}</h3>
                  <p className="text-gray-600 mb-4">{id.description}</p>
                  <div className="inline-block bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
                    {id.security}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Features:</h4>
                    <ul className="space-y-2">
                      {id.features.map((feature, idx) => (
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
                      {id.applications.map((app, idx) => (
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
                    Learn More
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Security Technologies</h2>
            <p className="text-xl text-gray-600">Multi-layered protection systems</p>
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

        {/* Compliance Standards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Compliance Standards</h2>
            <p className="text-xl text-gray-600">Meeting international security requirements</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceStandards.map((standard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{standard.name}</h3>
                <p className="text-gray-600 text-sm">{standard.description}</p>
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
              <p className="text-xl text-red-100">Detailed specifications for government ID cards</p>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Secure Your Nation's Identity</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Partner with us for the most secure government identification solutions. 
            Trusted by governments worldwide for critical identity programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:from-red-700 hover:to-pink-700"
            >
              Request Consultation
            </Link>
            <button className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-600 hover:text-white transition-all duration-300">
              Download Security Brief
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GovernmentIDs;