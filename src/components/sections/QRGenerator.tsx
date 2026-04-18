import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';
import { Link, Image as ImageIcon, Download, Copy, X, Upload } from 'lucide-react';

export default function QRGenerator() {
  const [activeTab, setActiveTab] = useState<'link' | 'image' | null>(null);
  const [inputLink, setInputLink] = useState('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [qrValue, setQrValue] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleLinkGenerate = () => {
    if (inputLink) {
      setQrValue(inputLink);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        // In a real app, you'd upload this to a server and get a URL.
        // For this demo, we'll use a placeholder representing the uploaded file.
        setQrValue(`https://portfolio-storage.com/${file.name.replace(/\s+/g, '-')}`);
      };
      reader.readAsDataURL(file);
    }
  };

  const downloadQR = () => {
    const svg = document.getElementById('qr-code-svg');
    if (!svg) return;
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx?.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');
      downloadLink.download = 'asror-qr-code.png';
      downloadLink.href = pngFile;
      downloadLink.click();
    };
    img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
  };

  return (
    <section className="py-32 px-6 max-w-4xl mx-auto text-center" id="qr-generator">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight uppercase">QR KOD <span className="text-gray-500">GENERATORI</span></h2>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Tez va qulay tarzda havolalar yoki rasmlaringiz uchun professional QR kodlar yarating.
        </p>
      </div>

      {!activeTab ? (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <motion.button
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab('link')}
            className="flex-1 w-full max-w-[280px] group p-8 glass rounded-[2.5rem] border border-white/5 hover:border-neon-blue/40 transition-all flex flex-col items-center gap-4"
          >
            <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center group-hover:bg-neon-blue/10 transition-colors">
              <Link className="w-8 h-8 text-neon-blue" />
            </div>
            <span className="text-xl font-bold">Link QR Kod</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab('image')}
            className="flex-1 w-full max-w-[280px] group p-8 glass rounded-[2.5rem] border border-white/5 hover:border-neon-purple/40 transition-all flex flex-col items-center gap-4"
          >
            <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center group-hover:bg-neon-purple/10 transition-colors">
              <ImageIcon className="w-8 h-8 text-neon-purple" />
            </div>
            <span className="text-xl font-bold">Rasm QR Kod</span>
          </motion.button>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass p-8 md:p-12 rounded-[3rem] border border-white/10 relative overflow-hidden"
        >
          <button 
            onClick={() => { setActiveTab(null); setQrValue(''); setInputLink(''); setSelectedImage(null); }}
            className="absolute top-6 right-6 p-3 glass rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Input Side */}
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                {activeTab === 'link' ? (
                  <><Link className="text-neon-blue" /> Havola kiriting</>
                ) : (
                  <><ImageIcon className="text-neon-purple" /> Rasm yuklang</>
                )}
              </h3>

              {activeTab === 'link' ? (
                <div className="space-y-4">
                  <input
                    type="url"
                    placeholder="https://misol.uz"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-neon-blue/50 transition-all"
                    value={inputLink}
                    onChange={(e) => setInputLink(e.target.value)}
                  />
                  <button
                    onClick={handleLinkGenerate}
                    className="w-full py-4 bg-white text-black font-black rounded-2xl hover:bg-neon-blue hover:text-white transition-all transform active:scale-95"
                  >
                    Generatsiya qilish
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div 
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full aspect-video glass-dark border-2 border-dashed border-white/10 rounded-3xl flex flex-col items-center justify-center gap-4 cursor-pointer hover:bg-white/[0.02] transition-all group"
                  >
                    {selectedImage ? (
                      <img src={selectedImage} alt="Preview" className="w-full h-full object-cover rounded-3xl" />
                    ) : (
                      <>
                        <Upload className="w-10 h-10 text-gray-500 group-hover:text-neon-purple transition-colors" />
                        <span className="text-gray-500 font-medium">Rasmni tallang yoki bu yerga tashlang</span>
                      </>
                    )}
                  </div>
                  <input 
                    type="file" 
                    ref={fileInputRef} 
                    className="hidden" 
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                  {selectedImage && (
                    <p className="text-xs text-gray-500 italic text-center">
                      * Eslatma: Haqiqiy ilovada rasm serverga yuklanadi va uning havolasi QR kodga aylanadi.
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Output Side */}
            <div className="flex flex-col items-center justify-center gap-8">
              <div className="p-6 bg-white rounded-3xl shadow-[0_0_50px_rgba(255,255,255,0.1)]">
                {qrValue ? (
                  <QRCodeSVG
                    id="qr-code-svg"
                    value={qrValue}
                    size={200}
                    level="H"
                    includeMargin={false}
                    fgColor="#000000"
                  />
                ) : (
                  <div className="w-[200px] h-[200px] bg-gray-100 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300">
                    <span className="text-gray-400 font-mono text-xs text-center px-4">Ma'lumot kiriting...</span>
                  </div>
                )}
              </div>

              {qrValue && (
                <div className="flex gap-4">
                  <button 
                    onClick={downloadQR}
                    className="p-4 glass rounded-2xl border border-white/5 hover:border-white/20 transition-all flex items-center gap-2 group"
                  >
                    <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                  </button>
                  <button 
                    onClick={() => { navigator.clipboard.writeText(qrValue); }}
                    className="p-4 glass rounded-2xl border border-white/5 hover:border-white/20 transition-all flex items-center gap-2 group"
                  >
                    <Copy className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}
