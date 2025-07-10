import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Globe, 
  Users, 
  Shield, 
  Factory, 
  Zap,
  CheckCircle,
  Calendar,
  TrendingUp,
  Heart
} from 'lucide-react';

const About = () => {
  const milestones = [
    { year: '2010', title: 'Company Founded', description: 'Started with a vision to revolutionize smart card manufacturing' },
    { year: '2012', title: 'ISO Certification', description: 'Achieved ISO 9001 quality management certification' },
    { year: '2015', title: 'Global Expansion', description: 'Expanded operations to serve clients in 25+ countries' },
    { year: '2018', title: '5M Cards Milestone', description: 'Reached 5 million cards manufactured annually' },
    { year: '2020', title: 'Technology Innovation', description: 'Launched advanced NFC and contactless solutions' },
    { year: '2022', title: '10M Cards Achievement', description: 'Achieved 10+ million cards production capacity' },
    { year: '2024', title: 'Sustainability Focus', description: 'Introduced eco-friendly and biodegradable card options' }
  ];

  const certifications = [
    { name: 'ISO 9001:2015', description: 'Quality Management Systems', icon: Award },
    { name: 'EMV Level 1 & 2', description: 'Payment Card Certification', icon: Shield },
    { name: 'Common Criteria', description: 'Security Evaluation Standard', icon: Shield },
    { name: 'FIPS 140-2', description: 'Cryptographic Module Validation', icon: Shield },
    { name: 'GlobalPlatform', description: 'Smart Card Technology Standard', icon: Zap },
    { name: 'GSMA Security', description: 'Mobile Industry Certification', icon: Globe }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'We prioritize security in every aspect of our operations, from manufacturing to delivery.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'Committed to delivering products that exceed industry standards and customer expectations.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Our customers success is our success. We build lasting partnerships through exceptional service.',
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Continuously investing in R&D to stay ahead of technology trends and market demands.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients worldwide while maintaining local expertise and support.',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Heart,
      title: 'Sustainability',
      description: 'Committed to environmental responsibility and sustainable manufacturing practices.',
      color: 'from-green-400 to-blue-500'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      position: 'Chief Executive Officer',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: '15+ years in smart card industry, former VP at leading tech company'
    },
    {
      name: 'Michael Chen',
      position: 'Chief Technology Officer',
      image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'PhD in Computer Science, expert in cryptography and secure systems'
    },
    {
      name: 'Emma Rodriguez',
      position: 'VP of Operations',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Manufacturing excellence specialist with global operations experience'
    },
    {
      name: 'David Kim',
      position: 'Head of Quality Assurance',
      image: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Quality management expert with ISO certification and compliance background'
    }
  ];

  const stats = [
    { icon: Calendar, number: '14+', label: 'Years of Excellence' },
    { icon: Globe, number: '50+', label: 'Countries Served' },
    { icon: Factory, number: '10M+', label: 'Cards Manufactured' },
    { icon: Users, number: '500+', label: 'Satisfied Clients' },
    { icon: Award, number: '99.9%', label: 'Quality Rate' },
    { icon: TrendingUp, number: '24/7', label: 'Support Available' }
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
            Trusted Since 2010
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading the smart card industry with innovation, quality, and unwavering 
            commitment to customer success across the globe.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mb-3">
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
              <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Founded in 2010 with a vision to revolutionize the smart card industry, 
                SmartCard Pro has grown from a small startup to a global leader in smart 
                card manufacturing and personalization services. Our journey began with 
                a simple belief: that security, quality, and innovation should never be compromised.
              </p>
              <p>
                Over the past decade, we've built state-of-the-art manufacturing facilities, 
                assembled a world-class team of experts, and developed cutting-edge technologies 
                that have set new industry standards. Today, we proudly serve governments, 
                financial institutions, and enterprises across 50+ countries.
              </p>
              <p>
                Our commitment to excellence has earned us numerous certifications and 
                the trust of industry leaders worldwide. As we look to the future, we 
                continue to invest in research and development, sustainability initiatives, 
                and emerging technologies to stay ahead of evolving market needs.
              </p>
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
                src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="SmartCard Pro Facility"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  State-of-the-Art Facility
                </h3>
                <p className="text-blue-100">
                  Our ISO-certified manufacturing facility spans 50,000 sq ft with 
                  advanced clean room environments and automated production lines.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Company Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${value.color} rounded-xl mb-6`}>
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">
              Key milestones in our growth and evolution
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Certifications & Standards</h2>
            <p className="text-xl text-gray-600">
              Recognized for excellence and compliance with international standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100 hover:border-blue-200 transition-all duration-300"
              >
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                    <cert.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{cert.name}</h3>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Leadership Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600">
              Meet the experts driving our vision forward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-600/20 to-transparent"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white"
        >
          <h2 className="text-3xl font-bold mb-4">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trust SmartCard Pro for their 
            smart card manufacturing needs. Let's discuss your project today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Contact Our Team
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Download Company Profile
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;