import Job from '../models/Job.js';
import Player from '../models/Player.js';

// Pre-seeded Ibadan Jobs
export const initialJobs = [
  {
    _id: 'job-1',
    title: 'Yellow Micra Taxi Conductor',
    location: 'Iwo Road to Challenge',
    category: 'Informal',
    description: 'Call passengers, shout "Challenge! Challenge wole pelu change e!", collect fares.',
    salaryPerShift: 3500,
    energyCost: 20,
    hungerIncrease: 25,
    requiredEducation: 'Secondary School',
    requiredCred: 0,
    experienceReward: 20,
    icon: 'Car'
  },
  {
    _id: 'job-2',
    title: 'Amala Buka Serving Master',
    location: 'Skye Bank Buka, Bodija',
    category: 'Trade',
    description: 'Serve hot amala with abula (gbegiri + ewedu) and tender goat meat to hungry customers.',
    salaryPerShift: 5500,
    energyCost: 25,
    hungerIncrease: 15,
    requiredEducation: 'Secondary School',
    requiredCred: 5,
    experienceReward: 25,
    icon: 'Utensils'
  },
  {
    _id: 'job-3',
    title: 'Mokola Phone & Laptop Repair Tech',
    location: 'Mokola Roundabout',
    category: 'Tech',
    description: 'Flash phones, fix cracked screens, and solder motherboard capacitors for students.',
    salaryPerShift: 9000,
    energyCost: 30,
    hungerIncrease: 20,
    requiredEducation: 'ND / HND',
    requiredCred: 15,
    experienceReward: 35,
    icon: 'Wrench'
  },
  {
    _id: 'job-4',
    title: 'UI Agbowo Tutorial Instructor',
    location: 'University of Ibadan, Agbowo Gate',
    category: 'Corporate',
    description: 'Teach JAMB, Post-UTME, and 100L calculus to ambitious freshmen.',
    salaryPerShift: 12500,
    energyCost: 25,
    hungerIncrease: 15,
    requiredEducation: 'B.Sc Graduate',
    requiredCred: 25,
    experienceReward: 40,
    icon: 'GraduationCap'
  },
  {
    _id: 'job-5',
    title: 'Cocoa House Tech Lead / Remote Dev',
    location: 'Cocoa House, Dugbe',
    category: 'Tech',
    description: 'Build modern fintech solutions and high-scale APIs while enjoying panoramic views of Ibadan.',
    salaryPerShift: 35000,
    energyCost: 35,
    hungerIncrease: 20,
    requiredEducation: 'Tech Bro / Master',
    requiredCred: 50,
    experienceReward: 70,
    icon: 'Laptop'
  },
  {
    _id: 'job-6',
    title: 'Bodija Market Bulk Wholesale Agent',
    location: 'Bodija Market',
    category: 'Trade',
    description: 'Negotiate trailer loads of yam tubers, beans from the north, and palm oil consignments.',
    salaryPerShift: 22000,
    energyCost: 30,
    hungerIncrease: 25,
    requiredEducation: 'ND / HND',
    requiredCred: 35,
    experienceReward: 50,
    icon: 'Store'
  }
];

export const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find().catch(() => []);
    return res.json({
      success: true,
      jobs: jobs.length > 0 ? jobs : initialJobs
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const applyJob = async (req, res) => {
  try {
    const { jobId } = req.body;
    const targetJob = initialJobs.find((j) => j._id === jobId) || { title: 'General Hustler' };

    return res.json({
      success: true,
      message: `Congratulations! You are now hired as: ${targetJob.title}!`,
      currentJobTitle: targetJob.title,
      job: targetJob
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const workShift = async (req, res) => {
  try {
    const { jobId } = req.body;
    const job = initialJobs.find((j) => j._id === jobId) || initialJobs[0];

    // Random encounters during Ibadan work shift
    const encounters = [
      'Traffic was surprisingly free at Secretariat junction! Shift completed smoothly.',
      'A grateful customer gave you an extra ₦1,000 tip for being polite and swift!',
      'You had an argument with an agbero at Iwo road, but your street cred saved the day!',
      'Generator fuel finished at work, so you had to hustle under the sun, but you persevered!'
    ];
    const randomEvent = encounters[Math.floor(Math.random() * encounters.length)];

    return res.json({
      success: true,
      earned: job.salaryPerShift,
      energyCost: job.energyCost,
      hungerIncrease: job.hungerIncrease,
      expReward: job.experienceReward,
      eventLog: randomEvent,
      message: `Shift completed as ${job.title}! You earned ₦${job.salaryPerShift.toLocaleString()}.`
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
