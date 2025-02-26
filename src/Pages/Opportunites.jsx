import React, { useState } from 'react';
import { trainerProfiles as initialProfiles } from '../Api'; 

export function Opportunities() {
  const [selectedType, setSelectedType] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [trainerProfiles, setTrainerProfiles] = useState(initialProfiles);

  const filterOpportunities = () => {
    return trainerProfiles.filter(opportunity => {
      const typeMatch = selectedType ? opportunity.type === selectedType : true;
      const locationMatch = selectedLocation ? opportunity.location === selectedLocation : true;
      return typeMatch && locationMatch;
    });
  };

  const updateStatus = (id) => {
    setTrainerProfiles((prevProfiles) =>
      prevProfiles.map((trainer) =>
        trainer.id === id ? { ...trainer, status: 'Interested' } : trainer
      )
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Training Opportunities</h1>

      <div className="flex justify-center gap-4 mb-8">
        <div className="w-1/3">
          <label htmlFor="type" className="block text-sm font-medium text-gray-700">Training Type</label>
          <select
            id="type"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">All</option>
            <option value="Technical">Technical</option>
            <option value="Soft Skills">Soft Skills</option>
            <option value="Leadership">Leadership</option>
          </select>
        </div>

        <div className="w-1/3">
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
          <select
            id="location"
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">All</option>
            <option value="Karnataka">Karnataka</option>
            <option value="kerala">Kerala</option>
            <option value="Chennai">Chennai</option>
            <option value="Goa">Goa</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filterOpportunities().map((opportunity) => (
          <div key={opportunity.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">{opportunity.title}</h2>
            <p className="text-gray-600 mb-2"><strong>Type:</strong> {opportunity.type}</p>
            <p className="text-gray-600 mb-2"><strong>Location:</strong> {opportunity.location}</p>
            <p className="text-gray-600 mb-2"><strong>Status:</strong> {opportunity.status ? opportunity.status : 'Not Interested'}</p>
            
            {opportunity.status === null && (
              <button
                onClick={() => updateStatus(opportunity.id)}
                className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition-colors mt-4"
              >
                Express Interest
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
