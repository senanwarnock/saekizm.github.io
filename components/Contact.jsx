// components/Contact.jsx
import React from 'react';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  const socialMediaLinks = [
    { icon: FaTwitter, url: 'https://twitter.com/saekizm', name: 'Twitter' },
    { icon: FaFacebookF, url: 'https://facebook.com/yagerasemanresu', name: 'Facebook' },
    { icon: FaLinkedinIn, url: 'https://linkedin.com/in/senan-warnock-7732a0238', name: 'LinkedIn' },
    { icon: FaInstagram, url: 'https://instagram.com/sendizzy', name: 'Instagram' },
    { icon: FaEnvelope, url: 'mailto:senanw95@gmail.com', name: 'Email' },
  ];

  return (
    <div className="p-8 bg-gradient-to-r from-black to-gray-900 h-screen text-white"    >
      <motion.h2 className="text-3xl font-semibold mb-4"
      initial={{ opacity : 0}}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, ease: 'easeInOut', delay: 1, once: true }}
      >Contact</motion.h2>
      <motion.div className="flex space-x-4 "
      initial={{ opacity : 0}}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, ease: 'easeInOut', delay: 1, once: true }}
      >
        {socialMediaLinks.map(({ icon: Icon, url, name }, index) => (
          <a
            key={index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            className="text-2xl hover:text-blue-500 transition-colors duration-300"
          >
            <Icon size={32}/>
          </a>
        ))}
      </motion.div>
    </div>
  );
};

export default Contact;
