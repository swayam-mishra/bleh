import React, { useEffect, useRef, useState } from 'react';
import { UserPlus, Search, Users, Rocket } from 'lucide-react';

const steps = [
  {
    icon: <UserPlus className="w-8 h-8" />,
    title: 'Create Hacker Card',
    description: 'Build your profile with skills, experience, and working style preferences.',
    color: 'blue'
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: 'Find a Hackathon',
    description: 'Browse live hackathons from Devpost, MLH, and community submissions.',
    color: 'green'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Smart Match',
    description: 'Get matched with compatible teammates based on skills and timezone.',
    color: 'purple'
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: 'Team Up & Build',
    description: 'Collaborate in-app with chat, task management, and resource sharing.',
    color: 'orange'
  }
];

const colorMap = {
  blue: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
  green: 'text-green-400 bg-green-400/10 border-green-400/20',
  purple: 'text-purple-400 bg-purple-400/10 border-purple-400/20',
  orange: 'text-orange-400 bg-orange-400/10 border-orange-400/20'
};

const HowItWorks: React.FC = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = stepRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1 && !visibleSteps.includes(index)) {
              setVisibleSteps(prev => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [visibleSteps]);

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It <span className="text-blue-400">Works</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From solo coder to winning team in four simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el) => (stepRefs.current[index] = el)}
              className={`relative group p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl transition-all duration-700 transform ${
                visibleSteps.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              } hover:border-gray-600 hover:bg-gray-800/70`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-6 w-8 h-8 bg-gray-900 border-2 border-gray-700 rounded-full flex items-center justify-center text-sm font-bold">
                {index + 1}
              </div>

              {/* Icon */}
              <div className={`w-16 h-16 rounded-xl border-2 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${colorMap[step.color as keyof typeof colorMap]}`}>
                {step.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                {step.description}
              </p>

              {/* Connecting Line (except last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-gray-600 to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;