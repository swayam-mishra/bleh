import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Github, Linkedin, User, Code, Users, Zap, Check } from 'lucide-react';

interface OnboardingFlowProps {
  onComplete: () => void;
}

const steps = [
  'Profile Setup',
  'Skills & Experience',
  'Working Preferences',
  'Complete'
];

const skillCategories = {
  'Frontend': ['React', 'Vue.js', 'Angular', 'TypeScript', 'JavaScript', 'CSS/SCSS', 'Tailwind CSS'],
  'Backend': ['Node.js', 'Python', 'Java', 'Go', 'Ruby', 'PHP', 'C#'],
  'Database': ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Firebase', 'Supabase'],
  'Cloud/DevOps': ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'CI/CD'],
  'Mobile': ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Ionic'],
  'AI/ML': ['TensorFlow', 'PyTorch', 'scikit-learn', 'OpenAI API', 'Hugging Face'],
  'Design': ['Figma', 'Adobe XD', 'Sketch', 'Photoshop', 'Illustrator'],
  'Other': ['Git', 'Linux', 'Blockchain', 'IoT', 'AR/VR']
};

const OnboardingFlow: React.FC<OnboardingFlowProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    // Step 1: Profile Setup
    name: '',
    title: '',
    bio: '',
    location: '',
    timezone: '',
    github: '',
    linkedin: '',
    portfolio: '',
    
    // Step 2: Skills
    selectedSkills: [] as string[],
    experience: '',
    
    // Step 3: Preferences
    roles: [] as string[],
    workingStyle: '',
    hackathonGoal: '',
    teamSize: ''
  });

  const handleSkillToggle = (skill: string) => {
    setFormData(prev => ({
      ...prev,
      selectedSkills: prev.selectedSkills.includes(skill)
        ? prev.selectedSkills.filter(s => s !== skill)
        : [...prev.selectedSkills, skill]
    }));
  };

  const handleRoleToggle = (role: string) => {
    setFormData(prev => ({
      ...prev,
      roles: prev.roles.includes(role)
        ? prev.roles.filter(r => r !== role)
        : [...prev.roles, role]
    }));
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = () => {
    // In a real app, you'd save the data here
    console.log('Onboarding completed:', formData);
    onComplete();
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${
                  index <= currentStep 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-700 text-gray-400'
                }`}>
                  {index < currentStep ? <Check className="w-5 h-5" /> : index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-1 mx-2 transition-all ${
                    index < currentStep ? 'bg-blue-500' : 'bg-gray-700'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">
              {steps[currentStep]}
            </h2>
            <p className="text-gray-400">
              Step {currentStep + 1} of {steps.length}
            </p>
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 min-h-[500px]">
          {/* Step 1: Profile Setup */}
          {currentStep === 0 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <User className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Let's create your hacker profile</h3>
                <p className="text-gray-400">Tell us about yourself so teams can find you</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-400 focus:ring-1 focus:ring-blue-400 text-white placeholder-gray-400"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Title *</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-400 focus:ring-1 focus:ring-blue-400 text-white placeholder-gray-400"
                    placeholder="e.g. Full Stack Developer"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Location</label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-400 focus:ring-1 focus:ring-blue-400 text-white placeholder-gray-400"
                    placeholder="City, Country"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Timezone *</label>
                  <select
                    value={formData.timezone}
                    onChange={(e) => setFormData({...formData, timezone: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-400 focus:ring-1 focus:ring-blue-400 text-white"
                  >
                    <option value="">Select timezone</option>
                    <option value="EST">Eastern (EST)</option>
                    <option value="CST">Central (CST)</option>
                    <option value="MST">Mountain (MST)</option>
                    <option value="PST">Pacific (PST)</option>
                    <option value="UTC">UTC</option>
                    <option value="GMT">GMT</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Bio</label>
                <textarea
                  value={formData.bio}
                  onChange={(e) => setFormData({...formData, bio: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-400 focus:ring-1 focus:ring-blue-400 text-white placeholder-gray-400"
                  placeholder="Tell us about yourself, your experience, and what you're passionate about..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">GitHub</label>
                  <div className="relative">
                    <Github className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      value={formData.github}
                      onChange={(e) => setFormData({...formData, github: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-400 focus:ring-1 focus:ring-blue-400 text-white placeholder-gray-400"
                      placeholder="username"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">LinkedIn</label>
                  <div className="relative">
                    <Linkedin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      value={formData.linkedin}
                      onChange={(e) => setFormData({...formData, linkedin: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-400 focus:ring-1 focus:ring-blue-400 text-white placeholder-gray-400"
                      placeholder="username"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Portfolio</label>
                  <input
                    type="url"
                    value={formData.portfolio}
                    onChange={(e) => setFormData({...formData, portfolio: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-400 focus:ring-1 focus:ring-blue-400 text-white placeholder-gray-400"
                    placeholder="https://yoursite.com"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Skills & Experience */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <Code className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Your skills and experience</h3>
                <p className="text-gray-400">Help us match you with the right teammates</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Experience Level</label>
                <select
                  value={formData.experience}
                  onChange={(e) => setFormData({...formData, experience: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-400 focus:ring-1 focus:ring-blue-400 text-white"
                >
                  <option value="">Select experience level</option>
                  <option value="beginner">Beginner (0-1 years)</option>
                  <option value="intermediate">Intermediate (2-4 years)</option>
                  <option value="advanced">Advanced (5+ years)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-4">Skills (Select all that apply)</label>
                <div className="space-y-6">
                  {Object.entries(skillCategories).map(([category, skills]) => (
                    <div key={category}>
                      <h4 className="text-sm font-semibold text-gray-300 mb-3">{category}</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        {skills.map((skill) => (
                          <button
                            key={skill}
                            onClick={() => handleSkillToggle(skill)}
                            className={`px-3 py-2 text-sm rounded-lg border transition-all ${
                              formData.selectedSkills.includes(skill)
                                ? 'bg-blue-500 text-white border-blue-400'
                                : 'bg-gray-700 text-gray-300 border-gray-600 hover:border-gray-500'
                            }`}
                          >
                            {skill}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Working Preferences */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <Users className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Working preferences</h3>
                <p className="text-gray-400">Help us find teammates that match your style</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-4">Preferred Roles (Select all that apply)</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {['Frontend Developer', 'Backend Developer', 'Full Stack Developer', 'UI/UX Designer', 'Product Manager', 'Data Scientist', 'Mobile Developer', 'DevOps Engineer', 'Team Lead'].map((role) => (
                    <button
                      key={role}
                      onClick={() => handleRoleToggle(role)}
                      className={`px-4 py-3 text-sm rounded-lg border transition-all ${
                        formData.roles.includes(role)
                          ? 'bg-purple-500 text-white border-purple-400'
                          : 'bg-gray-700 text-gray-300 border-gray-600 hover:border-gray-500'
                      }`}
                    >
                      {role}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Working Style</label>
                <select
                  value={formData.workingStyle}
                  onChange={(e) => setFormData({...formData, workingStyle: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-400 focus:ring-1 focus:ring-blue-400 text-white"
                >
                  <option value="">Select working style</option>
                  <option value="collaborative">Collaborative - I love working closely with others</option>
                  <option value="independent">Independent - I prefer to work autonomously</option>
                  <option value="leadership">Leadership - I enjoy leading teams and making decisions</option>
                  <option value="supportive">Supportive - I work best supporting others' ideas</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Hackathon Goal</label>
                <select
                  value={formData.hackathonGoal}
                  onChange={(e) => setFormData({...formData, hackathonGoal: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-400 focus:ring-1 focus:ring-blue-400 text-white"
                >
                  <option value="">What's your main goal?</option>
                  <option value="win">Win prizes and competitions</option>
                  <option value="learn">Learn new technologies and skills</option>
                  <option value="network">Network and meet new people</option>
                  <option value="portfolio">Build portfolio projects</option>
                  <option value="fun">Have fun and experiment</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Preferred Team Size</label>
                <select
                  value={formData.teamSize}
                  onChange={(e) => setFormData({...formData, teamSize: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-400 focus:ring-1 focus:ring-blue-400 text-white"
                >
                  <option value="">Select team size</option>
                  <option value="2-3">Small team (2-3 people)</option>
                  <option value="4-5">Medium team (4-5 people)</option>
                  <option value="6+">Large team (6+ people)</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
            </div>
          )}

          {/* Step 4: Complete */}
          {currentStep === 3 && (
            <div className="text-center space-y-6">
              <Zap className="w-24 h-24 text-blue-400 mx-auto" />
              <h3 className="text-2xl font-bold">You're all set!</h3>
              <p className="text-gray-400 text-lg">
                Your profile is ready. Start exploring hackathons and connecting with amazing teammates.
              </p>
              
              <div className="bg-gray-700/50 rounded-xl p-6 text-left max-w-md mx-auto">
                <h4 className="font-semibold mb-4">Profile Summary:</h4>
                <div className="space-y-2 text-sm">
                  <div><span className="text-gray-400">Name:</span> {formData.name}</div>
                  <div><span className="text-gray-400">Role:</span> {formData.title}</div>
                  <div><span className="text-gray-400">Skills:</span> {formData.selectedSkills.length} selected</div>
                  <div><span className="text-gray-400">Experience:</span> {formData.experience}</div>
                  <div><span className="text-gray-400">Working Style:</span> {formData.workingStyle}</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mt-8">
          {currentStep > 0 ? (
            <button
              onClick={prevStep}
              className="flex items-center space-x-2 px-6 py-3 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back</span>
            </button>
          ) : (
            <button
              onClick={onComplete}
              className="flex items-center space-x-2 px-6 py-3 text-gray-400 hover:text-white transition-colors"
            >
              <span>Skip for now</span>
            </button>
          )}

          {currentStep < steps.length - 1 ? (
            <button
              onClick={nextStep}
              disabled={
                (currentStep === 0 && (!formData.name || !formData.title || !formData.timezone)) ||
                (currentStep === 1 && formData.selectedSkills.length === 0) ||
                (currentStep === 2 && (!formData.workingStyle || formData.roles.length === 0))
              }
              className="flex items-center space-x-2 px-8 py-3 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-all"
            >
              <span>Continue</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          ) : (
            <button
              onClick={handleComplete}
              className="flex items-center space-x-2 px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all"
            >
              <span>Complete Setup</span>
              <Check className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default OnboardingFlow;