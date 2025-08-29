import React, { useState } from 'react';
import { Terminal, Mail, Github, Linkedin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import InstagramIcon from './InstagramIcon';

const ContactSection: React.FC = () => {
  const [command, setCommand] = useState('');
  const [output, setOutput] = useState<string[]>(['Type "help" for available commands']);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);

  const getLineClass = (line: string) => {
    if (line.startsWith('$')) return 'text-green-400 font-bold';
    if (line.startsWith('>')) return 'text-cyan-400 font-bold';
    if (line.includes('✅')) return 'text-green-400';
    if (line.includes('🔐') || line.includes('🛡️')) return 'text-yellow-400';
    if (line.includes('Error')) return 'text-red-400';
    return 'text-gray-300';
  };

  const handleCommand = (cmd: string) => {
    const cmdNormalized = cmd.toLowerCase().trim();
    const newOutput = [...output, `$ ${cmd}`];

    switch (cmdNormalized) {
      case 'help':
        newOutput.push(
          '> Available Commands:',
          '  📧 whois denny    - Show identity & contact info',
          '  🔍 socials        - Display social media links', 
          '  📄 resume         - Download resume',
          '  🧹 clear          - Clear terminal',
          '  💬 message        - Send encrypted message',
          '  🔐 security       - Show security status'
        );
        break;

      case 'whois denny':
      case 'whois':
        newOutput.push(
          '> Identity Scan Complete:',
          '  📧 Email: dennyjobindaniel@gmail.com',
          '  🌍 Location: Kerala, India',
          '  🎯 Status: Available for cybersecurity opportunities',
          '  🔐 Clearance: Ethical Hacker | Security Enthusiast'
        );
        break;

      case 'socials':
        newOutput.push(
          '> Social Network Analysis:',
          '  🐱 GitHub: github.com/dennyjobindaniel',
          '  💼 LinkedIn: linkedin.com/in/dennyjobindaniel',
          '  🔗 Portfolio: dennysec.dev',
          '  📊 Status: All channels secure ✅'
        );
        break;

      case 'resume':
        newOutput.push(
          '> Initiating secure download...',
          '  📄 File: Cybersecurity_Engineer_Denny_Jobin_Daniel.pdf',
          '  🔐 Encryption: AES-256',
          '  ✅ Download complete'
        );
        break;

      case 'clear':
        setOutput(['> Terminal cleared. Type "help" for available commands']);
        setCommand('');
        return;

      case 'message':
        newOutput.push(
          '> Initializing encrypted communication channel...',
          '  🔐 Encryption: End-to-end',
          '  📨 Channel: Secure',
          '  ✅ Ready to receive message'
        );
        break;

      case 'security':
        newOutput.push(
          '> Security Status Report:',
          '  🛡️  Firewall: ACTIVE',
          '  🔐 Encryption: AES-256',
          '  👁️  Monitoring: ENABLED',
          '  ✅ All systems secure'
        );
        break;

      default:
        newOutput.push(`> Error: Command "${cmd}" not recognized. Type "help" for available commands.`);
    }

    setOutput(newOutput);
    setCommand('');
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;

    setSending(true);
    const serviceId = 'service_yqjoa0c';
    const templateId = 'template_50db4rg';
    const publicKey = 'Rb3hueYTab-XB8W15';
    const templateParams = { from_name: name, from_email: email, message };

    try {
      const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setOutput(prev => [...prev, '> Message sent successfully!']);
      setName('');
      setEmail('');
      setMessage('');
      console.log('SUCCESS!', response.status, response.text);
    } catch (error) {
      setOutput(prev => [...prev, '> Error: Failed to send message. Check console for details.']);
      console.error('FAILED...', error);
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 font-mono">
          <span className="text-green-400 drop-shadow-[0_0_10px_rgba(0,255,65,0.5)]">
            $ init contact
          </span>
        </h2>

        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-8">
          {/* Terminal */}
          <div className="relative bg-gray-900/90 border border-green-500/30 rounded-lg p-6 backdrop-blur-sm hover:border-green-500/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,65,0.2)]">
            {/* Header */}
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-700">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex items-center text-gray-400">
                <Terminal className="h-4 w-4 mr-2" />
                <span className="font-mono text-sm animate-pulse">denny@cybersec:~</span>
              </div>
            </div>

            {/* Output */}
            <div className="h-64 overflow-y-auto mb-4 font-mono text-sm space-y-1">
              {output.map((line, index) => (
                <div key={index} className={getLineClass(line)}>
                  {line}
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="flex items-center">
              <span className="text-green-400 font-mono mr-2 animate-pulse">root@denny:~$</span>
              <input
                type="text"
                value={command}
                onChange={(e) => setCommand(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleCommand(command)}
                className="flex-1 bg-transparent text-gray-300 font-mono focus:outline-none focus:text-green-400 transition-colors"
                placeholder="Type command..."
              />
            </div>

            {/* Floating icons */}
            <div className="absolute top-2 right-2 flex space-x-2 opacity-20 pointer-events-none">
              <div className="animate-float">🔒</div>
              <div className="animate-float-delayed">🛡️</div>
              <div className="animate-float">🔐</div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900/80 border border-blue-500/30 rounded-lg p-6 backdrop-blur-sm hover:border-blue-500/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.2)]">
            <h3 className="text-2xl font-bold mb-6 font-mono text-blue-400">
              🔐 Encrypted Message
            </h3>

            <form className="space-y-4" onSubmit={sendEmail}>
              <div>
                <label className="block font-mono text-sm text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full bg-gray-800/50 border border-gray-600 rounded px-3 py-2 text-gray-300 font-mono focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label className="block font-mono text-sm text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-gray-800/50 border border-gray-600 rounded px-3 py-2 text-gray-300 font-mono focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label className="block font-mono text-sm text-gray-300 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-gray-800/50 border border-gray-600 rounded px-3 py-2 text-gray-300 font-mono focus:border-blue-500 focus:outline-none transition-colors resize-none"
                  placeholder="Your message here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full flex items-center justify-center px-6 py-3 bg-blue-500 text-black font-bold rounded font-mono hover:bg-blue-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,212,255,0.5)] group"
              >
                <Send className="h-4 w-4 mr-2 group-hover:animate-pulse" />
                &gt; execute send --encrypted
              </button>
            </form>

            {/* Quick Contact */}
            <div className="mt-8 grid grid-cols-4 gap-3 justify-center">
              <a
                href="mailto:dennyjobindaniel@gmail.com"
                className="flex items-center justify-center p-3 bg-green-500/10 border border-green-500/30 rounded text-green-400 hover:bg-green-500/20 transition-all duration-300"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/dennydenny777"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-3 bg-purple-500/10 border border-purple-500/30 rounded text-purple-400 hover:bg-purple-500/20 transition-all duration-300"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/denny-jobin-daniel-a04bb5308/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-3 bg-blue-500/10 border border-blue-500/30 rounded text-blue-400 hover:bg-blue-500/20 transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/its_den_ny_/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-3 bg-pink-500/10 border border-pink-500/30 rounded text-pink-400 hover:bg-pink-500/20 transition-all duration-300"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
