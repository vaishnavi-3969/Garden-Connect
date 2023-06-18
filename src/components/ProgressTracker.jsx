import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ProgressTracker = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [avatar, setAvatar] = useState('');
  const [userInfo, setUserInfo] = useState(null);

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const steps = [
    {
      label: 'Planting',
      badge: '🌱',
      description: 'Start planting seeds and saplings',
      points: 50,
    },
    {
      label: 'Watering',
      badge: '💧',
      description: 'Water the plants regularly',
      points: 30,
    },
    {
      label: 'Weeding',
      badge: '🌿',
      description: 'Remove weeds from the garden',
      points: 20,
    },
    {
      label: 'Harvesting',
      badge: '🌾',
      description: 'Collect ripe fruits and vegetables',
      points: 40,
    },
  ];

  useEffect(() => {
    const fetchRandomAvatar = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        const avatarUrl = data.results[0].picture.large;
        setAvatar(avatarUrl);
        setUserInfo(data.results[0]);
      } catch (error) {
        console.log('Error fetching random avatar:', error);
      }
    };

    fetchRandomAvatar();
  }, []);

  return (
    <div className="progress-tracker bg-gradient-to-br from-purple-600 to-blue-600 text-white px-5 py-4">
      <motion.div
        className="progress-bar "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className={`progress-step ${index <= currentStep ? 'active' : ''}`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="step-badge">{step.badge}</div>
            <div className="step-label">{step.label}</div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        className="step-details"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <motion.h3
          className="step-label"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          {steps[currentStep].label}
        </motion.h3>
        <motion.div
          className="step-badge"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          {steps[currentStep].badge}
        </motion.div>
        <motion.p
          className="step-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          {steps[currentStep].description}
        </motion.p>
        <motion.p
          className="step-points"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.3 }}
        >
          Points: <span>{steps[currentStep].points}</span>
        </motion.p>
        {userInfo && (
          <motion.div
            className="user-card"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <div className="user-avatar">
              <img src={avatar} alt="User Avatar" />
            </div>
            <div className="user-info">
              <h4 className="user-name">
                {userInfo.name.first} {userInfo.name.last}
              </h4>
              <p className="user-occupation">{userInfo.dob.age} years old, {userInfo.location.city}</p>
              <p className="user-contributions">Contributions: Gardening, Environmental Care</p>
              <p className="user-redemption">Redemption Coupons: 5</p>
            </div>
          </motion.div>
        )}
      </motion.div>
      <motion.div
        className="button-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <motion.button
          className="prev-button"
          disabled={currentStep === 0}
          onClick={handlePrevStep}
        >
          Previous
        </motion.button>
        <motion.button
          className="next-button"
          disabled={currentStep === steps.length - 1}
          onClick={handleNextStep}
        >
          Next
        </motion.button>
      </motion.div>
    </div>
  );
};

export default ProgressTracker;
