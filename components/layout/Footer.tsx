import React from 'react';
import { CONTACT_INFO } from '../../constants';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-footerBlack text-white pt-10 pb-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Contact Section */}
          <div>
            <h4 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2 inline-block">CONTACT US</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                <div>
                  {CONTACT_INFO.address.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                  <a href="#" className="text-primary hover:text-white transition-colors mt-1 inline-block">View on Google Maps</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <div className="flex flex-col">
                  {CONTACT_INFO.emails.map((email, i) => (
                    <a key={i} href={`mailto:${email}`} className="hover:text-primary transition-colors">{email}</a>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <div className="flex gap-3 flex-wrap">
                  {CONTACT_INFO.phones.map((phone, i) => (
                    <a key={i} href={`tel:${phone.replace(/\s/g, '')}`} className="hover:text-primary transition-colors">{phone}</a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Social Section */}
          <div>
            <h4 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2 inline-block">FOLLOW US ON</h4>
            <div className="flex gap-4 mb-6">
              <a href={CONTACT_INFO.social.facebook} className="bg-gray-800 p-3 rounded-full hover:bg-[#3b5998] transition-colors group">
                <Facebook className="w-6 h-6 group-hover:text-white" />
              </a>
              <a href={CONTACT_INFO.social.instagram} className="bg-gray-800 p-3 rounded-full hover:bg-[#E1306C] transition-colors group">
                <Instagram className="w-6 h-6 group-hover:text-white" />
              </a>
              <a href={CONTACT_INFO.social.youtube} className="bg-gray-800 p-3 rounded-full hover:bg-[#FF0000] transition-colors group">
                <Youtube className="w-6 h-6 group-hover:text-white" />
              </a>
              <a href={CONTACT_INFO.social.whatsapp} className="bg-gray-800 p-3 rounded-full hover:bg-[#25D366] transition-colors group">
                <MessageCircle className="w-6 h-6 group-hover:text-white" />
              </a>
            </div>
            <div className="p-4 bg-gray-900 rounded border border-gray-800">
              <p className="text-xs text-gray-400 mb-1">Maintained By:</p>
              <p className="font-semibold text-primary">MEDIA CELL, CSI MKD YOUTH MOVEMENT</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} CSI MKD Youth Movement. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};