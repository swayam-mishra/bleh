import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Upload, X, Plus } from 'lucide-react';
import Button from '../components/Button';
import { useAuth } from '../context/AuthContext';

const OnboardingPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    profilePhoto: null as File | null,
    banner: null as File | null,
    bio: '',
    skills: [] as string[],
    github: '',
    linkedin: '',
    resume: null as File | null,
  });
  const [skillInput, setSkillInput] = useState('');
  
  const { updateUser } = useAuth();
  const navigate = useNavigate();

  const totalSteps = 4;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      // Complete onboarding
      updateUser({ 
        isOnboardingComplete: true,
        bio: formData.bio,
        skills: formData.skills 
      });
      navigate('/dashboard');
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFileUpload = (field: string, file: File | null) => {
    setFormData({ ...formData, [field]: file });
  };

  const addSkill = () => {
    if (skillInput.trim() && !formData.skills.includes(skillInput.trim())) {
      setFormData({
        ...formData,
        skills: [...formData.skills, skillInput.trim()],
      });
      setSkillInput('');
    }
  };

  const removeSkill = (skill: string) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter(s => s !== skill),
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addSkill();
    }
  };

  const FileUploadButton = ({ 
    label, 
    accept, 
    onChange, 
    file 
  }: { 
    label: string; 
    accept: string; 
    onChange: (file: File | null) => void;
    file: File | null;
  }) => (
    <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center hover:border-gray-500 transition-colors">
      <input
        type="file"
        accept={accept}
        onChange={(e) => onChange(e.target.files?.[0] || null)}
        className="hidden"
        id={`upload-${label.replace(/\s+/g, '-').toLowerCase()}`}
      />
      <label
        htmlFor={`upload-${label.replace(/\s+/g, '-').toLowerCase()}`}
        className="cursor-pointer flex flex-col items-center"
      >
        <Upload className="w-8 h-8 text-gray-400 mb-2" />
        <span className="text-sm text-gray-400 mb-1">{label}</span>
        {file && <span className="text-xs text-green-400">{file.name}</span>}
      </label>
    </div>
  );

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">Let's set up your profile</h2>
              <p className="text-gray-400">Upload your profile photo and banner to get started</p>
            </div>
            
            <div className="space-y-4">
              <FileUploadButton
                label="Upload Profile Photo"
                accept="image/*"
                onChange={(file) => handleFileUpload('profilePhoto', file)}
                file={formData.profilePhoto}
              />
              
              <FileUploadButton
                label="Upload Banner Image"
                accept="image/*"
                onChange={(file) => handleFileUpload('banner', file)}
                file={formData.banner}
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">Tell us about yourself</h2>
              <p className="text-gray-400">Write a short bio to help others understand who you are</p>
            </div>
            
            <div>
              <label htmlFor="bio" className="block text-sm font-medium text-gray-300 mb-2">
                Bio
              </label>
              <textarea
                id="bio"
                value={formData.bio}
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                rows={6}
                className="w-full px-3 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors resize-none"
                placeholder="Tell us about your experience, interests, and what you're passionate about building..."
              />
              <p className="mt-2 text-sm text-gray-400">{formData.bio.length}/500 characters</p>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">Add your skills</h2>
              <p className="text-gray-400">Tag your technical skills and areas of expertise</p>
            </div>
            
            <div>
              <label htmlFor="skills" className="block text-sm font-medium text-gray-300 mb-2">
                Skills
              </label>
              <div className="flex">
                <input
                  id="skills"
                  type="text"
                  value={skillInput}
                  onChange={(e) => setSkillInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                  placeholder="e.g., React, Python, UI/UX, Machine Learning"
                />
                <Button
                  type="button"
                  onClick={addSkill}
                  className="rounded-l-none"
                  size="sm"
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              
              {formData.skills.length > 0 && (
                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-300 mb-2">Your Skills:</p>
                  <div className="flex flex-wrap gap-2">
                    {formData.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-purple-600/20 text-purple-300 border border-purple-600/30"
                      >
                        {skill}
                        <button
                          onClick={() => removeSkill(skill)}
                          className="ml-2 text-purple-400 hover:text-purple-200"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">Connect your profiles</h2>
              <p className="text-gray-400">Link your social profiles and upload your resume (optional)</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="github" className="block text-sm font-medium text-gray-300 mb-2">
                  GitHub Profile
                </label>
                <input
                  id="github"
                  type="url"
                  value={formData.github}
                  onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                  className="w-full px-3 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                  placeholder="https://github.com/yourusername"
                />
              </div>
              
              <div>
                <label htmlFor="linkedin" className="block text-sm font-medium text-gray-300 mb-2">
                  LinkedIn Profile
                </label>
                <input
                  id="linkedin"
                  type="url"
                  value={formData.linkedin}
                  onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                  className="w-full px-3 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                  placeholder="https://linkedin.com/in/yourprofile"
                />
              </div>
              
              <FileUploadButton
                label="Upload Resume (Optional)"
                accept=".pdf,.doc,.docx"
                onChange={(file) => handleFileUpload('resume', file)}
                file={formData.resume}
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <span className="text-sm text-gray-400">Step {currentStep} of {totalSteps}</span>
            <span className="text-sm text-gray-400">{Math.round((currentStep / totalSteps) * 100)}% complete</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div
              className="bg-purple-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700">
          {renderStep()}
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <Button
            variant="ghost"
            onClick={handleBack}
            disabled={currentStep === 1}
            className="flex items-center"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back
          </Button>
          
          <Button onClick={handleNext} className="flex items-center">
            {currentStep === totalSteps ? 'Complete Setup' : 'Next'}
            {currentStep < totalSteps && <ChevronRight className="w-4 h-4 ml-1" />}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingPage;