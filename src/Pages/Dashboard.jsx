import React from 'react';
import { Link } from 'react-router-dom';

export function DashBoard({ trainerProfiles, setTrainerProfiles }) {
  const removeTrainer = (id) => {
    const updatedProfiles = trainerProfiles.filter((trainer) => trainer.id !== id);
    setTrainerProfiles(updatedProfiles); // Correctly using the passed function
  };

  return (
    <div className="mt-10 p-6">
      <h1 className="text-3xl font-bold text-center mb-10">Trainer Profiles</h1>
      <Link
        to="/add-trainer"
        className="bg-green-500 text-white py-2 px-4 rounded mb-6 inline-block hover:bg-green-600 transition-colors"
      >
        Add Trainer
      </Link>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 mx-auto">
        {trainerProfiles.map((trainer) => (
          <div
            key={trainer.id}
            className="border p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
          >
            <h2 className="text-2xl font-semibold text-center mb-4">{trainer.name}</h2>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Expertise: </span>{trainer.expertise}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Availability: </span>{trainer.availability}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Location: </span>{trainer.location}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Contact: </span>
              <a href={`mailto:${trainer.contact}`} className="text-blue-500">{trainer.contact}</a>
            </p>

            <div className="flex justify-between mt-6">
              <Link
                to={`/edit-trainer/${trainer.id}`}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
              >
                Edit
              </Link>
              <button
                onClick={() => removeTrainer(trainer.id)} // Remove function called here
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
