"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Instagram, Music, Store, Shield, TrendingUp, Sparkles, Users, DollarSign, ArrowRight } from "lucide-react";

const VendorRegistration = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    ownerName: "",
    email: "",
    phone: "",
    businessType: "",
    instagramHandle: "",
    tiktokHandle: "",
    description: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsRegistered(true);
  };

  const features = [
    {
      icon: Shield,
      title: "Established Expertise",
      description: "Join Kenya's most trusted social commerce platform with blockchain-powered escrow services",
      stat: "15+ years"
    },
    {
      icon: TrendingUp,
      title: "Market Validation",
      description: "Access to Kenya's $900M e-commerce market growing at 12.86% annually",
      stat: "$900M+"
    },
    {
      icon: Users,
      title: "Mission-Driven",
      description: "Help eliminate fraud and build trust in Africa's rapidly growing digital marketplace",
      stat: "200+ merchants"
    },
    {
      icon: Store,
      title: "Innovation Culture",
      description: "Seamless integration with M-Pesa and existing mobile money systems",
      stat: "56% of GDP"
    }
  ];

  const stats = [
    { label: "Active Vendors", value: "200+", icon: Users },
    { label: "Transactions Protected", value: "$33B", icon: DollarSign },
    { label: "Market Growth", value: "12.86%", icon: TrendingUp },
    { label: "Trust Score", value: "99.2%", icon: Shield }
  ];

  if (isRegistered) {
    return (
      <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 flex items-center justify-center p-6 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <Card className="max-w-md w-full text-center border-green-500/30 bg-gradient-to-br from-green-900/90 via-green-800/80 to-slate-900/90 backdrop-blur-2xl shadow-2xl shadow-green-500/20 relative z-10">
          <CardContent className="pt-12 pb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <div className="space-y-2 mb-6">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">
                Welcome Aboard! 🎉
              </h2>
              <p className="text-green-200/80 leading-relaxed">
                Your application is being reviewed by our team. You'll hear from us within 24 hours!
              </p>
            </div>
            <Button
              onClick={() => setIsRegistered(false)}
              className="bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 hover:from-green-700 hover:via-emerald-700 hover:to-green-800 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/30"
            >
              Register Another Business
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Dynamic background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-emerald-400 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-32 left-16 w-1.5 h-1.5 bg-green-300 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-emerald-300 rounded-full animate-ping delay-1000"></div>

        {/* Mouse follower gradient */}
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-green-500/5 to-emerald-500/5 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
      </div>

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-green-600/20 via-emerald-500/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="text-center mb-20">
            {/* Logo with animation */}
            <div className="flex items-center justify-center mb-8">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 via-emerald-400 to-green-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-green-500/30 transform rotate-3 hover:rotate-0 transition-all duration-300">
                  <span className="text-3xl font-black text-white">A</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-400 rounded-full flex items-center justify-center animate-bounce">
                  <Sparkles className="w-3 h-3 text-white" />
                </div>
              </div>
            </div>

            {/* Main heading with staggered animation */}
            <div className="space-y-4 mb-8">
              <h1 className="text-6xl lg:text-7xl font-black text-white tracking-tight leading-none">
                <span className="block animate-slide-up">JOIN</span>
                <span className="block bg-gradient-to-r from-green-400 via-emerald-300 to-green-500 bg-clip-text text-transparent animate-slide-up delay-200">
                  AMINIA'S
                </span>
                <span className="block text-5xl lg:text-6xl animate-slide-up delay-400">VENDOR NETWORK</span>
              </h1>
            </div>

            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12 animate-fade-in delay-600">
              Transform your social presence into <span className="text-green-400 font-semibold">profitable commerce</span>.
              Connect Instagram & TikTok to Kenya's most trusted blockchain-powered marketplace protecting
              <span className="text-emerald-400 font-semibold"> $33 billion</span> in annual transactions.
            </p>

            {/* Stats bar */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-xl p-4 border border-slate-700/50 hover:border-green-500/30 transition-all duration-300 group">
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Features Grid with enhanced design */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-slate-700/50 bg-gradient-to-br from-slate-800/60 via-slate-900/40 to-slate-800/60 backdrop-blur-sm hover:border-green-500/50 transition-all duration-500 group relative overflow-hidden hover:scale-105 transform"
              >
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <CardContent className="p-8 text-center relative z-10">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 via-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-green-500/20">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 bg-emerald-400 text-white text-xs font-bold px-2 py-1 rounded-full opacity-90">
                      {feature.stat}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Registration Form with enhanced styling */}
      <div className="max-w-5xl mx-auto px-6 pb-20 relative z-10">
        <Card className="border-slate-700/50 bg-gradient-to-br from-slate-800/95 via-slate-900/90 to-slate-800/95 backdrop-blur-2xl shadow-2xl shadow-black/20 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-green-600"></div>
          <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full blur-xl"></div>

          <CardHeader className="text-center pb-8 pt-12 relative">
            <CardTitle className="text-4xl font-bold bg-gradient-to-r from-white via-green-100 to-emerald-100 bg-clip-text text-transparent mb-2">
              Register Your Business
            </CardTitle>
            <p className="text-slate-400 text-lg">Connect your social media and unlock Kenya's digital marketplace</p>
            <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mt-4 rounded-full"></div>
          </CardHeader>

          <CardContent className="px-12 pb-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Business Information Section */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                    <Store className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Business Information</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">
                      Business Name *
                    </label>
                    <Input
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      required
                      className="bg-slate-900/50 border-2 border-slate-600/50 focus:border-green-500 text-white rounded-xl py-3 transition-all duration-300 focus:shadow-green-500/20 focus:shadow-lg"
                      placeholder="Your Business Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">
                      Owner Name *
                    </label>
                    <Input
                      name="ownerName"
                      value={formData.ownerName}
                      onChange={handleInputChange}
                      required
                      className="bg-slate-900/50 border-2 border-slate-600/50 focus:border-green-500 text-white rounded-xl py-3 transition-all duration-300 focus:shadow-green-500/20 focus:shadow-lg"
                      placeholder="Your Full Name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-slate-900/50 border-2 border-slate-600/50 focus:border-green-500 text-white rounded-xl py-3 transition-all duration-300 focus:shadow-green-500/20 focus:shadow-lg"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="bg-slate-900/50 border-2 border-slate-600/50 focus:border-green-500 text-white rounded-xl py-3 transition-all duration-300 focus:shadow-green-500/20 focus:shadow-lg"
                      placeholder="+254 XXX XXX XXX"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">
                    Business Type *
                  </label>
                  <select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-slate-900/50 border-2 border-slate-600/50 focus:border-green-500 text-white rounded-xl px-4 py-3 transition-all duration-300 focus:shadow-green-500/20 focus:shadow-lg"
                  >
                    <option value="">Select Business Type</option>
                    <option value="fashion">Fashion & Apparel</option>
                    <option value="electronics">Electronics</option>
                    <option value="beauty">Beauty & Cosmetics</option>
                    <option value="home">Home & Living</option>
                    <option value="food">Food & Beverages</option>
                    <option value="services">Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Social Media Section */}
              <div className="border-t border-slate-700/50 pt-8 space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">📱</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Social Media Integration</h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-green-500/50 to-transparent"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-white flex items-center gap-2">
                      <Instagram className="w-4 h-4 text-pink-500" />
                      Instagram Business Handle
                    </label>
                    <Input
                      name="instagramHandle"
                      value={formData.instagramHandle}
                      onChange={handleInputChange}
                      className="bg-slate-900/50 border-2 border-slate-600/50 focus:border-pink-500 text-white rounded-xl py-3 transition-all duration-300 focus:shadow-pink-500/20 focus:shadow-lg"
                      placeholder="@yourbusiness"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-white flex items-center gap-2">
                      <Music className="w-4 h-4 text-purple-500" />
                      TikTok Handle
                    </label>
                    <Input
                      name="tiktokHandle"
                      value={formData.tiktokHandle}
                      onChange={handleInputChange}
                      className="bg-slate-900/50 border-2 border-slate-600/50 focus:border-purple-500 text-white rounded-xl py-3 transition-all duration-300 focus:shadow-purple-500/20 focus:shadow-lg"
                      placeholder="@yourbusiness"
                    />
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <label className="block text-sm font-medium bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">
                  Business Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  // rows="4"
                  className="w-full bg-slate-900/50 border-2 border-slate-600/50 focus:border-green-500 text-white rounded-xl px-4 py-3 resize-none transition-all duration-300 focus:shadow-green-500/20 focus:shadow-lg"
                  placeholder="Tell us about your business, what you sell, and your goals..."
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 hover:from-green-700 hover:via-emerald-700 hover:to-green-800 text-white font-bold py-5 rounded-xl shadow-lg hover:shadow-green-500/30 transition-all duration-300 transform hover:scale-[1.02] text-lg relative overflow-hidden group"
              >
                {/* Button background animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-400/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>

                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-3 relative z-10">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Processing Registration...
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-3 relative z-10">
                    Join Aminia's Vendor Network
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-slide-up { animation: slide-up 0.8s ease-out forwards; }
        .animate-fade-in { animation: fade-in 1s ease-out forwards; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-600 { animation-delay: 0.6s; }
      `}</style>
    </div>
  );
};

export default VendorRegistration;