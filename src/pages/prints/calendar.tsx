import React, { useState } from 'react';
import { Sparkles, Moon, Sun, Cloud, Star, Palette } from 'lucide-react';

export default function Calendar() {
  const colorStyles = {
    indigo: {
      name: "Indigo Dream ✨",
      gradient: "bg-gradient-to-br from-blue-50 to-purple-50",
      primary: "text-indigo-800",
      secondary: "text-indigo-600",
      border: "border-indigo-200",
      dayBorder: "border-indigo-100",
      weekendBg: "bg-pink-50",
      weekendBorder: "border-pink-200",
      weekendText: "text-pink-600",
      accent: "bg-indigo-500",
      hoverBg: "hover:bg-indigo-50"
    },
    emerald: {
      name: "Forest Magic 🌿",
      gradient: "bg-gradient-to-br from-green-50 to-teal-50",
      primary: "text-emerald-800",
      secondary: "text-emerald-600",
      border: "border-emerald-200",
      dayBorder: "border-emerald-100",
      weekendBg: "bg-yellow-50",
      weekendBorder: "border-yellow-200",
      weekendText: "text-yellow-600",
      accent: "bg-emerald-500",
      hoverBg: "hover:bg-emerald-50"
    },
    amber: {
      name: "Sunset Vibes 🌅",
      gradient: "bg-gradient-to-br from-orange-50 to-amber-50",
      primary: "text-amber-800",
      secondary: "text-amber-600",
      border: "border-amber-200",
      dayBorder: "border-amber-100",
      weekendBg: "bg-purple-50",
      weekendBorder: "border-purple-200",
      weekendText: "text-purple-600",
      accent: "bg-amber-500",
      hoverBg: "hover:bg-amber-50"
    },
    rose: {
      name: "Cotton Candy 🍬",
      gradient: "bg-gradient-to-br from-rose-50 to-pink-50",
      primary: "text-rose-800",
      secondary: "text-rose-600",
      border: "border-rose-200",
      dayBorder: "border-rose-100",
      weekendBg: "bg-sky-50",
      weekendBorder: "border-sky-200",
      weekendText: "text-sky-600",
      accent: "bg-rose-500",
      hoverBg: "hover:bg-rose-50"
    }
  };

  // Fun emoji combinations for each day
  const dailyEmojis = {
    1: ["🌅", "Rise & Shine"],
    2: ["🌿", "Growth Day"],
    3: ["🎨", "Creative Flow"],
    4: ["🎵", "Rhythm Day"],
    5: ["⭐", "Star Power"],
    6: ["🎮", "Play Time"],
    7: ["🎪", "Adventure"],
    8: ["🎭", "Express It"],
    9: ["🌈", "Rainbow Day"],
    10: ["🎯", "Target Day"],
    11: ["🎲", "Lucky Day"],
    12: ["🎸", "Rock On"],
    13: ["🎧", "Vibe Check"],
    14: ["🦋", "Transform"],
    15: ["🌙", "Dream Big"],
    16: ["🔮", "Magic Hour"],
    17: ["🌟", "Shine Bright"],
    18: ["🎪", "Show Time"],
    19: ["🎨", "Art Day"],
    20: ["🎭", "Drama Day"],
    21: ["🎪", "Circus Day"],
    22: ["🎯", "Focus Day"],
    23: ["🎲", "Game Day"],
    24: ["🎸", "Music Day"],
    25: ["🎧", "Beat Day"],
    26: ["🌈", "Color Day"],
    27: ["⭐", "Star Day"],
    28: ["🌙", "Moon Day"],
    29: ["🔮", "Crystal Day"],
    30: ["✨", "Sparkle Day"]
  };

  const [currentStyle, setCurrentStyle] = useState('indigo');
  const [currentTime, setCurrentTime] = useState('day');
  const style = colorStyles[currentStyle];

  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const emptyDays = Array(5).fill(null);
  const monthDays = Array(30).fill(null);

  return (
    <div className={`p-8 mx-auto ${style.gradient} rounded-xl shadow-2xl`}>
      {/* Header Controls */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-2">
          <Palette className={`w-6 h-6 ${style.secondary}`} />
          <div className="flex space-x-2">
            {Object.keys(colorStyles).map(styleName => (
              <button
                key={styleName}
                onClick={() => setCurrentStyle(styleName)}
                className={`px-4 py-2 rounded-lg text-sm transition-all duration-300 ${
                  currentStyle === styleName 
                    ? `${style.primary} bg-white shadow-md` 
                    : 'text-gray-600 hover:bg-white/50'
                }`}
              >
                {colorStyles[styleName].name}
              </button>
            ))}
          </div>
        </div>
        
        <button
          onClick={() => setCurrentTime(current => current === 'day' ? 'night' : 'day')}
          className="p-2 rounded-full bg-white/30 hover:bg-white/50 transition-all duration-300"
        >
          {currentTime === 'day' ? 
            <Sun className={`w-6 h-6 ${style.secondary}`} /> : 
            <Moon className={`w-6 h-6 ${style.secondary}`} />
          }
        </button>
      </div>

      {/* Calendar Header */}
      <div className="text-center mb-8 relative">
        <div className="absolute left-2 top-1/2 -translate-y-1/2">
          <Cloud className={`w-8 h-8 ${style.secondary} opacity-50`} />
        </div>
        <div>
          <h1 className={`text-5xl font-bold ${style.primary} mb-2`}>November 2024</h1>
          <p className={`text-lg ${style.secondary} flex items-center justify-center gap-2`}>
            <Sparkles className="w-5 h-5" />
            My Amazing Monthly Planner
            <Star className="w-5 h-5" />
          </p>
        </div>
        <div className="absolute right-2 top-1/2 -translate-y-1/2">
          <Cloud className={`w-8 h-8 ${style.secondary} opacity-50`} />
        </div>
      </div>
      
      {/* Calendar Grid */}
      <div className={`rounded-xl overflow-hidden shadow-lg ${currentTime === 'night' ? 'bg-gray-900/5' : 'bg-white'}`}>
        {/* Days Header */}
        <div className="grid grid-cols-7 bg-white">
          {daysOfWeek.map(day => (
            <div key={day} 
              className={`text-center font-semibold p-3 border-b-2 ${style.border} ${style.primary}`}>
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Body */}
        <div className="grid grid-cols-7 gap-px p-2">
          {emptyDays.map((_, i) => (
            <div key={`empty-${i}`} className="bg-gray-50 rounded-lg p-2 h-48" />
          ))}
          
          {monthDays.map((_, i) => {
            const day = i + 1;
            const isWeekend = (day + 5) % 7 === 0 || (day + 5) % 7 === 1;
            const [emoji, label] = dailyEmojis[day];
            
            return (
              <div key={day} 
                className={`relative p-3 h-48 rounded-lg border-2 transition-all duration-300
                  ${currentTime === 'night' ? 'bg-gray-900/5' : 'bg-white'}
                  ${isWeekend ? `${style.weekendBorder} ${style.weekendBg}` : style.dayBorder}
                  hover:shadow-lg hover:scale-[1.02] hover:z-10
                `}
              >
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-start">
                    <span className={`font-bold text-lg ${isWeekend ? style.weekendText : style.primary}`}>
                      {day}
                    </span>
                  </div>
                  
                  <div className="mt-1 flex items-center gap-2">
                    <span className="text-xl">{emoji}</span>
                    <span className={`text-xs ${style.secondary}`}>{label}</span>
                  </div>
                  
                  <div className="mt-2 flex-grow flex flex-col justify-start space-y-3">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="border-b border-dashed border-gray-300 h-6" />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Sections */}
      <div className="mt-6 grid grid-cols-2 gap-6">
        <div className={`p-6 ${currentTime === 'night' ? 'bg-gray-900/5' : 'bg-white'} rounded-xl shadow-lg border-2 ${style.dayBorder}`}>
          <h2 className={`font-bold text-xl mb-4 ${style.primary} flex items-center gap-2`}>
            <Star className="w-5 h-5" /> Monthly Goals
          </h2>
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${style.accent}`} />
                <div className="flex-grow border-b-2 border-dashed border-gray-300 h-8" />
              </div>
            ))}
          </div>
        </div>
        
        <div className={`p-6 ${currentTime === 'night' ? 'bg-gray-900/5' : 'bg-white'} rounded-xl shadow-lg border-2 ${style.dayBorder}`}>
          <h2 className={`font-bold text-xl mb-4 ${style.primary} flex items-center gap-2`}>
            <Sparkles className="w-5 h-5" /> Important Notes
          </h2>
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${style.accent}`} />
                <div className="flex-grow border-b-2 border-dashed border-gray-300 h-8" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}