'use client'
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import toast from 'react-hot-toast';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = () => {
        if (email) {
            console.log('Subscribing email:', email);
            toast('Successfully subscribed!');
            setEmail('');
        }
    };

    return (
        <footer className="bg-linear-to-r from-[#E6EBF6] via-[#B1CCED] to-[#E6EBF6] text-black py-8 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info Section */}
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="bg-white rounded px-3 py-1">
                                <span className="text-2xl font-bold">
                                    <span className="text-pink-600">i</span>
                                    <span className="text-blue-600">T</span>
                                    <span className="text-orange-500">H</span>
                                    <span className="text-green-500">o</span>
                                    <span className="text-purple-600">s</span>
                                    <span className="text-pink-600">t</span>
                                </span>
                            </div>
                        </div>
                        <p className="text-sm">7th Floor, Fair Plaza</p>
                        <p className="text-sm">Mirpur-1, Dhaka-1216</p>
                        <p className="text-sm">Bangladesh</p>
                        <p className="text-sm">Call: +88 00638-787878</p>
                        <p className="text-sm">Call: +88 01765660506</p>
                        <p className="text-sm">Call: +88 02-58051155</p>
                        <p className="text-sm">Mail: info@financefinder.com</p>
                    </div>

                    {/* Information Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Information</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-sm hover:underline transition-all">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm hover:underline transition-all">
                                    Term & Service
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm hover:underline transition-all">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm hover:underline transition-all">
                                    Refund Policy
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                        <div className="space-y-2">
                            <Input
                                type="email"
                                placeholder="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSubscribe()}
                                className=""
                            />
                            <Button
                                onClick={handleSubscribe}
                                className="w-full btn"
                            >
                                Subscribe
                            </Button>
                        </div>
                    </div>

                    {/* App Download Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">App Download</h3>
                        <div className="bg-white/30 rounded-lg p-6 text-center">
                            <p className="text-xl font-bold text-primary">COMING SOON!!</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;