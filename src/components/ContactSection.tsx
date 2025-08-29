import React, { useState, useRef, useEffect } from 'react';
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

  const outputRef = useRef<HTMLDivElement>(null);

  // Auto-scroll terminal to bottom
  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

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
          '  💬 message        - Send encrypted message',
          '  🧹 clear          - Clear terminal',
          '  🔐 security       - Show security status'
        );
        break;

      case 'whois denny':
      case 'whois':
        newOutput.push(
          '> Identity Scan Complete:',
          '  📧 Email: dennydaniel321@gmail.com',
          '  🌍 Location: Kerala, India',
          '  🎯 Status: Available for cybersecurity opportunities',
          '  🔐 Clearance: Ethical Hacker | Security Enthusiast'
        );
        break;
        
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
          '  🛡️ Firewall: ACTIVE',
          '  🔐 Encryption: AES-256',
          '  👁️ Monitoring: ENABLED',
          '  ✅ All systems secure'
        );
        break;

      case 'clear':
        setOutput(['> Terminal cleared. Type "help" for available commands']);
        setCommand('');
        return;

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
      setOutput(prev => [...prev, '> Message sent successfully! ✅']);
      setName('');
      setEmail('');
      setMessage('');
      console.log('SUCCESS!', response.status, response.text);
    } catch (error) {
      setOutput(prev => [...prev, '> Error: Failed to send message ❌']);
      console.error('FAILED...', error);
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 font-mono">
          <span className="text-green-400 drop-shadow-[0_0_10px_rgba(0,255,65,0.5)]">
            $ init contact
          </span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Terminal */}
          <div className="relative bg-gray-900/95 border border-green-500/40 rounded-xl p-6 backdrop-blur-sm hover:border-green-500/70 transition-all duration-300 hover:shadow-[0_0_35px_rgba(0,255,65,0.25)] flex flex-col h-[420px]">
            {/* Header */}
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-700">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex items-center text-gray-400">
                <Terminal className="h-4 w-4 mr-2" />
                <span className="font-mono text-xs sm:text-sm animate-pulse">denny@cybersec:~</span>
              </div>
            </div>

            {/* Output */}
            <div
              ref={outputRef}
              className="flex-1 overflow-y-auto mb-4 font-mono text-xs sm:text-sm space-y-1 pr-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent"
            >
              {output.map((line, index) => (
                <div key={index} className={getLineClass(line)}>
                  {line}
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="flex items-center">
              <span className="text-green-400 font-mono mr-2">root@denny:~$</span>
              <input
                type="text"
                value={command}
                onChange={(e) => setCommand(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleCommand(command)}
                className="flex-1 bg-transparent text-gray-300 font-mono focus:outline-none focus:text-green-400 text-sm"
                placeholder="Type command..."
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900/95 border border-blue-500/40 rounded-xl p-6 backdrop-blur-sm hover:border-blue-500/70 transition-all duration-300 hover:shadow-[0_0_35px_rgba(0,212,255,0.25)]">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 font-mono text-blue-400">
              🔐 Encrypted Message
            </h3>

            <form className="space-y-4" onSubmit={sendEmail}>
              <input
                type="text"
                className="w-full bg-gray-800/60 border border-gray-600 rounded px-3 py-2 text-gray-300 font-mono focus:border-blue-500 focus:outline-none transition-colors text-sm sm:text-base"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                type="email"
                className="w-full bg-gray-800/60 border border-gray-600 rounded px-3 py-2 text-gray-300 font-mono focus:border-blue-500 focus:outline-none transition-colors text-sm sm:text-base"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <textarea
                rows={4}
                className="w-full bg-gray-800/60 border border-gray-600 rounded px-3 py-2 text-gray-300 font-mono focus:border-blue-500 focus:outline-none transition-colors resize-none text-sm sm:text-base"
                placeholder="Your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />

              <button
                type="submit"
                disabled={sending}
                className="w-full flex items-center justify-center px-6 py-3 bg-blue-500 text-black font-bold rounded font-mono hover:bg-blue-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,212,255,0.5)] text-sm sm:text-base"
              >
                <Send className="h-4 w-4 mr-2" />
                &gt; execute send --encrypted
              </button>
            </form>

            {/* Quick Contact */}
            <div className="mt-8 grid grid-cols-4 gap-4 justify-center">
              <a
                href="mailto:dennyjobindaniel@gmail.com"
                className="flex items-center justify-center p-3 bg-green-500/10 border border-green-500/30 rounded text-green-400 hover:bg-green-500/20 transition-all"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/dennydenny777"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-3 bg-purple-500/10 border border-purple-500/30 rounded text-purple-400 hover:bg-purple-500/20 transition-all"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/denny-jobin-daniel-a04bb5308/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-3 bg-blue-500/10 border border-blue-500/30 rounded text-blue-400 hover:bg-blue-500/20 transition-all"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/its_den_ny_/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-3 bg-pink-500/10 border border-pink-500/30 rounded text-pink-400 hover:bg-pink-500/20 transition-all"
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
