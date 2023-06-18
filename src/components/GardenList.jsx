import  { useState } from 'react';
import Confetti from 'react-confetti';
import { FiSmile } from 'react-icons/fi';

const GardenList = () => {
  const [gardens, setGardens] = useState([
    {
      name: 'Garden 1',
      location: 'Location 1',
      description: 'Description 1',
    },
    {
      name: 'Garden 2',
      location: 'Location 2',
      description: 'Description 2',
    },
    {
      name: 'Garden 3',
      location: 'Location 3',
      description: 'Description 3',
    },
  ]);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGarden = {
      name,
      location,
      description,
    };
    setGardens([...gardens, newGarden]);
    setName('');
    setLocation('');
    setDescription('');
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white py-6 px-6">
      <h2>Garden List</h2>
      {submitted && (
        <>
          <div className="relative">
            <Confetti width={window.innerWidth} height={window.innerHeight} />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <FiSmile className="text-6xl text-yellow-400" />
            </div>
          </div>
          <p className="text-lg mt-4">Thank you for adding your garden!</p>
        </>
      )}
      {!submitted && (
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-4">
            <label htmlFor="name" className="text-lg">
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="bg-gray-800 text-white px-4 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="location" className="text-lg">
              Location:
            </label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
              className="bg-gray-800 text-white px-4 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="text-lg">
              Description:
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="bg-gray-800 text-white px-4 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg focus:outline-none"
          >
            Add Garden
          </button>
        </form>
      )}
      <div className="mt-8 grid gap-4 grid-cols-2">
  {gardens.map((garden, index) => (
    <div key={index} className="bg-gray-800 text-white p-4 rounded-lg">
      <h3 className="text-xl font-bold">{garden.name}</h3>
      <p className="text-gray-400">{garden.location}</p>
      <p>{garden.description}</p>
    </div>
  ))}
</div>

    </section>
  );
};

export default GardenList;
