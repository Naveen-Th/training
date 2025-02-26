import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export function AddTrainer({ trainerProfiles, setTrainerProfiles }) {
  const navigate = useNavigate();
  const { id } = useParams();  // Get the 'id' from the URL parameters

  const [trainer, setTrainer] = useState({
    name: '',
    expertise: '',
    availability: '',
    contact: '',
    location: ''  // Added location field
  });

  // When 'id' changes (i.e., for editing), load the existing trainer data
  useEffect(() => {
    if (id) {
      const trainerToEdit = trainerProfiles.find((profile) => profile.id === parseInt(id));
      if (trainerToEdit) {
        setTrainer(trainerToEdit);
      }
    }
  }, [id, trainerProfiles]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTrainer((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (id) {
      // If editing an existing trainer, update the existing trainer's data
      const updatedProfiles = trainerProfiles.map((profile) =>
        profile.id === parseInt(id) ? { ...trainer, id: parseInt(id) } : profile
      );
      setTrainerProfiles(updatedProfiles);
    } else {
      // If adding a new trainer, create a new trainer with a new id
      const newTrainer = { ...trainer, id: trainerProfiles.length + 1 };
      setTrainerProfiles([...trainerProfiles, newTrainer]);
    }

    navigate('/');  // Redirect to home or another page after submission
  };

  return (
    <div className="mb-6 p-10">
      <h2 className="text-2xl font-semibold text-center mb-4">
        {id ? 'Edit Trainer' : 'Add Trainer'}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={trainer.name}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="expertise">Expertise</label>
          <input
            type="text"
            id="expertise"
            name="expertise"
            value={trainer.expertise}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="availability">Availability</label>
          <input
            type="text"
            id="availability"
            name="availability"
            value={trainer.availability}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="contact">Contact</label>
          <input
            type="email"
            id="contact"
            name="contact"
            value={trainer.contact}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={trainer.location}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded w-full"
        >
          {id ? 'Save Changes' : 'Add Trainer'}
        </button>
      </form>

      <div className="mt-4 text-center">
        <button
          onClick={() => navigate('/')}
          className="bg-gray-500 text-white py-2 px-4 rounded w-full"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
