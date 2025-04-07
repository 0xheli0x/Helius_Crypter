import { motion } from 'framer-motion';

function App() {
  const OFFICIAL_WEBSITE = 'https://helius-crypter.com';
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const features = [
    {
      icon: '🔒',
      title: 'File Encryption',
      description: 'Encrypt your executables with AES-256 to bypass signature-based detection.',
      delay: 0.2
    },
    {
      icon: '📄',
      title: 'PDF Exploits',
      description: 'Convert your executables into PDF files with embedded exploits that bypass email filters.',
      delay: 0.4
    },
    {
      icon: '🔑',
      title: 'Secure Decryption',
      description: 'Easily decrypt your files when needed using the original encryption key.',
      delay: 0.6
    },
    {
      icon: '🛡️',
      title: 'Runtime Protection',
      description: 'Advanced anti-debugging and anti-VM techniques to protect your payloads.',
      delay: 0.8
    },
    {
      icon: '🔄',
      title: 'Signature Morphing',
      description: 'Dynamic code transformation to create unique file signatures every time.',
      delay: 1.0
    },
    {
      icon: '🔍',
      title: 'Antivirus Bypass',
      description: 'Advanced techniques to bypass modern detection systems including VirusTotal.',
      delay: 1.2
    }
  ];
  
  const stats = [
    { value: '4,500+', label: 'Security Researchers' },
    { value: '10,000+', label: 'Files Encrypted' },
    { value: '98%', label: 'Bypass Rate' },
    { value: '24/7', label: 'Customer Support' }
  ];
  
  return (
    <div className="min-h-screen bg-dark overflow-hidden">
      {/* Background Elements */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-primary opacity-10 rounded-full blur-[150px] -z-10"></div>
      <div className="fixed bottom-0 left-0 w-[400px] h-[400px] bg-secondary opacity-5 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute inset-0 bg-gradient-mesh opacity-5 -z-20"></div>
      
      {/* Header */}
      <header className="py-6 border-b border-dark-border backdrop-blur-sm bg-dark/80 sticky top-0 z-50">
        <div className="container flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <span className="text-primary text-2xl mr-2">⚡</span>
            <h1 className="text-xl font-bold gradient-text">HELIUS CRYPTER</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a 
              href={OFFICIAL_WEBSITE}
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Visit Official Website
            </a>
          </motion.div>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="section pt-20 md:pt-32">
        <div className="container">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <motion.h1 
              variants={fadeIn}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              <span className="gradient-text">Advanced Malware Crypter</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeIn}
              className="text-xl text-light-muted mb-8 max-w-2xl mx-auto"
            >
              Protect your executables from signature-based detection with military-grade
              encryption and obfuscation
            </motion.p>
            
            <motion.div 
              variants={fadeIn}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a 
                href={OFFICIAL_WEBSITE}
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Get Started Now
              </a>
              <a 
                href={`${OFFICIAL_WEBSITE}/about`}
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Learn More
              </a>
            </motion.div>
          </motion.div>
          
          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="bg-dark-lighter rounded-xl overflow-hidden border border-dark-border shadow-glow">
              <img 
                src="https://github.com/user-attachments/assets/d36c70e0-a867-4df8-9cc5-092785c71c65" 
                alt="Helius Crypter Dashboard"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-primary/10 backdrop-blur-md border border-primary/30 rounded-lg px-4 py-2 text-sm text-light-muted">
              <span className="text-primary font-medium">Note:</span> This is a demo landing page. Please visit the official website.
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="section" id="features">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
            <p className="text-light-muted max-w-2xl mx-auto">
              Powerful tools designed for security researchers and penetration testers
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(124, 77, 255, 0.3)' }}
                className="card card-hover"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-light-muted">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="section bg-dark-light">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-light-muted">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center bg-dark-light p-8 md:p-12 rounded-2xl border border-primary/20 shadow-glow"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Ready to Enhance Your Security Research?
            </h2>
            <p className="text-light-muted mb-8 max-w-2xl mx-auto">
              Start using our advanced encryption and exploit generation tools today.
              Join security professionals worldwide who trust Helius Crypter.
            </p>
            <a 
              href={OFFICIAL_WEBSITE}
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Visit Official Website
            </a>
          </motion.div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 border-t border-dark-border">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-light-muted text-sm">© 2025 Helius Crypter Security Tools</p>
              <p className="text-light-muted text-sm">For educational purposes only</p>
            </div>
            <div>
              <a 
                href={OFFICIAL_WEBSITE}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-light transition-colors"
              >
                Visit Official Website: helius-crypter.com
              </a>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Float Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <a 
          href={OFFICIAL_WEBSITE}
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-primary rounded-full flex items-center shadow-glow-strong"
        >
          <span className="mr-2">🚀</span>
          Official Site
        </a>
      </motion.div>
    </div>
  );
}

export default App;
