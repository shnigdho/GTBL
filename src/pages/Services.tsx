import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Factory, 
  Palette, 
  Shield, 
  Truck, 
  HeadphonesIcon, 
  Award,
  CheckCircle,
  ArrowRight,
  Zap,
  Globe,
  Clock,
  Users
} from 'lucide-react';

const Services = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      title: 'Card Manufacturing',
      icon: Factory,
      description: 'State-of-the-art manufacturing facilities producing high-quality smart cards using premium materials and cutting-edge technology.',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: [
        'PVC and PET card substrates',
        'Dual interface technology (contact and contactless)',
        'Eco-friendly and biodegradable options',
        'Custom sizes and formats',
        'ISO 9001 certified processes',
        'Capacity: 10M+ cards annually'
      ],
      processes: [
        'Material Selection & Quality Control',
        'Lamination & Card Formation',
        'Chip Embedding & Testing',
        'Quality Assurance & Packaging'
      ],
      benefits: [
        'Consistent quality across all batches',
        'Scalable production capacity',
        'Environmental compliance',
        'Cost-effective solutions'
      ]
    },
    {
      id: 2,
      title: 'Card Personalization',
      icon: Palette,
      description: 'Advanced personalization services to customize cards according to your exact specifications with precision and security.',
      image: 'https://images.pexels.com/photos/6801647/pexels-photo-6801647.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: [
        'Laser engraving and embossing',
        'Magnetic stripe encoding',
        'Chip programming and data loading',
        'Digital printing and photo ID',
        'Variable data printing',
        'Secure data handling'
      ],
      processes: [
        'Data Preparation & Validation',
        'Personalization Programming',
        'Quality Control Testing',
        'Secure Packaging & Delivery'
      ],
      benefits: [
        'High-speed personalization',
        'Data security compliance',
        'Flexible customization options',
        'Reduced time-to-market'
      ]
    },
    {
      id: 3,
      title: 'Security Features',
      icon: Shield,
      description: 'Comprehensive security solutions to protect against counterfeiting and fraud with multiple layers of protection.',
      image: 'https://images.pexels.com/photos/6801649/pexels-photo-6801649.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: [
        'Holographic overlays and security foils',
        'QR codes and barcodes',
        'Biometric data embedding',
        'Tamper-evident features',
        'UV-visible inks',
        'Microtext and guilloche patterns'
      ],
      processes: [
        'Security Assessment & Design',
        'Feature Integration & Testing',
        'Validation & Certification',
        'Implementation & Training'
      ],
      benefits: [
        'Multi-layer security protection',
        'Compliance with international standards',
        'Reduced fraud risk',
        'Enhanced brand protection'
      ]
    },
    {
      id: 4,
      title: 'Logistics & Fulfillment',
      icon: Truck,
      description: 'Global logistics network ensuring secure, timely delivery of your smart card orders with full tracking and insurance.',
      image: 'https://images.pexels.com/photos/6801650/pexels-photo-6801650.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: [
        'Global shipping network',
        'Secure packaging solutions',
        'Real-time tracking',
        'Insurance coverage',
        'Express delivery options',
        'Customs clearance support'
      ],
      processes: [
        'Order Processing & Verification',
        'Secure Packaging & Labeling',
        'Shipping & Transit Monitoring',
        'Delivery Confirmation & Support'
      ],
      benefits: [
        'Worldwide delivery capability',
        'Secure chain of custody',
        'Flexible delivery options',
        'Complete shipment visibility'
      ]
    },
    {
      id: 5,
      title: 'Technical Support',
      icon: HeadphonesIcon,
      description: '24/7 technical support and consultation services to ensure optimal performance and integration of your smart card solutions.',
      image: 'https://images.pexels.com/photos/6801651/pexels-photo-6801651.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: [
        '24/7 technical helpdesk',
        'Integration consulting',
        'Training and documentation',
        'Remote diagnostics',
        'On-site support available',
        'Multi-language support'
      ],
      processes: [
        'Issue Assessment & Triage',
        'Technical Analysis & Resolution',
        'Implementation Support',
        'Follow-up & Documentation'
      ],
      benefits: [
        'Rapid issue resolution',
        'Expert technical guidance',
        'Reduced downtime',
        'Continuous improvement'
      ]
    },
    {
      id: 6,
      title: 'Quality Assurance',
      icon: Award,
      description: 'Rigorous quality assurance processes ensuring every card meets the highest standards of performance and reliability.',
      image: 'https://images.pexels.com/photos/6801652/pexels-photo-6801652.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: [
        'ISO 9001 quality management',
        'Statistical process control',
        'Automated testing systems',
        'Batch tracking and traceability',
        'Performance validation',
        'Compliance certification'
      ],
      processes: [
        'Incoming Material Inspection',
        'In-Process Quality Control',
        'Final Product Testing',
        'Documentation & Certification'
      ],
      benefits: [
        '99.9% quality assurance rate',
        'Consistent product performance',
        'Regulatory compliance',
        'Customer satisfaction guarantee'
      ]
    }
  ];

  const stats = [
    { icon: Globe, number: '50+', label: 'Countries Served' },
    { icon: Factory, number: '10M+', label: 'Cards Produced' },
    { icon: Clock, number: '24/7', label: 'Support Available' },
    { icon: Users, number: '500+', label: 'Satisfied Clients' }
  ];

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
            End-to-End Smart Card Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial design to final delivery, we provide comprehensive smart card 
            services that ensure quality, security, and performance at every step.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mb-4">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center mb-2">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center mr-3">
                      <service.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-4 mb-6">
                  <h4 className="font-semibold text-gray-900 flex items-center">
                    <Zap className="h-5 w-5 text-blue-600 mr-2" />
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setActiveService(activeService === service.id ? null : service.id)}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center group"
                >
                  {activeService === service.id ? 'Hide Details' : 'View Details'}
                  <ArrowRight className={`ml-2 h-4 w-4 transition-transform duration-300 ${activeService === service.id ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
                </button>

                {/* Expanded Details */}
                <AnimatePresence>
                  {activeService === service.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-6 pt-6 border-t border-gray-200"
                    >
                      <div className="space-y-6">
                        {/* All Features */}
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Complete Feature Set</h4>
                          <div className="grid grid-cols-1 gap-2">
                            {service.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center text-sm text-gray-600">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Process */}
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Our Process</h4>
                          <div className="space-y-2">
                            {service.processes.map((process, idx) => (
                              <div key={idx} className="flex items-center text-sm text-gray-600">
                                <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0">
                                  {idx + 1}
                                </div>
                                {process}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Benefits */}
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Key Benefits</h4>
                          <div className="grid grid-cols-1 gap-2">
                            {service.benefits.map((benefit, idx) => (
                              <div key={idx} className="flex items-center text-sm text-gray-600">
                                <Award className="h-4 w-4 text-orange-500 mr-2 flex-shrink-0" />
                                {benefit}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Service Process</h2>
            <p className="text-xl text-blue-100">
              A streamlined approach to delivering exceptional smart card solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'Understanding your requirements and objectives' },
              { step: '02', title: 'Design & Planning', description: 'Creating detailed specifications and timelines' },
              { step: '03', title: 'Production', description: 'Manufacturing with quality control at every step' },
              { step: '04', title: 'Delivery & Support', description: 'Secure delivery with ongoing technical support' }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">{phase.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                <p className="text-blue-100">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center bg-white rounded-2xl p-12 shadow-lg"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our team of experts is ready to help you design and implement the perfect 
            smart card solution for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Free Consultation
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Download Brochure
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;