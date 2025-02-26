import React, { useState } from 'react';

export function Operations({
  trainerProfiles,
  updateTrainerAvailability,
  assignTrainerToSession,
  trackTrainerPerformance
}) {
  const [newSchedule, setNewSchedule] = useState({ trainer: '', newAvailability: '' });
  const [trainerSession, setTrainerSession] = useState({ trainer: '', session: '' });
  const [trainerPerformance, setTrainerPerformance] = useState({ trainer: '', performance: '' });

  
  const handleUpdateSchedule = (e) => {
    e.preventDefault();
    const trainer = trainerProfiles.find(t => t.name === newSchedule.trainer);
    if (trainer) {
      updateTrainerAvailability(trainer.id, newSchedule.newAvailability);
    }
    setNewSchedule({ trainer: '', newAvailability: '' });
  };

  
  const handleAssignTrainerToSession = (e) => {
    e.preventDefault();
    const trainer = trainerProfiles.find(t => t.name === trainerSession.trainer);
    if (trainer) {
      assignTrainerToSession(trainer.id, trainerSession.session);
    }
    setTrainerSession({ trainer: '', session: '' });
  };

  
  const handleTrackTrainerPerformance = (e) => {
    e.preventDefault();
    const trainer = trainerProfiles.find(t => t.name === trainerPerformance.trainer);
    if (trainer) {
      trackTrainerPerformance(trainer.id, trainerPerformance.performance);
    }
    setTrainerPerformance({ trainer: '', performance: '' });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className='text-center text-3xl font-bold mb-8'>Operations Panel</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column: Forms (Update Schedule, Assign Trainer, Track Performance) */}
        <div className="space-y-8">
          {/* Update Schedule Section */}
          <div className="max-w-lg mx-auto">
            <h2 className="text-xl font-semibold mb-4">Update Trainer Schedule</h2>
            <form onSubmit={handleUpdateSchedule} className="space-y-4">
              <div>
                <label htmlFor="trainer" className="block text-sm font-medium text-gray-700">Select Trainer</label>
                <select
                  id="trainer"
                  value={newSchedule.trainer}
                  onChange={(e) => setNewSchedule({ ...newSchedule, trainer: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="">Select a Trainer</option>
                  {trainerProfiles.map((trainer, index) => (
                    <option key={index} value={trainer.name}>{trainer.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="newAvailability" className="block text-sm font-medium text-gray-700">New Availability</label>
                <input
                  type="text"
                  id="newAvailability"
                  value={newSchedule.newAvailability}
                  onChange={(e) => setNewSchedule({ ...newSchedule, newAvailability: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter new availability"
                />
              </div>
              <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
                Update Schedule
              </button>
            </form>
          </div>

          {/* Assign Trainer to Session Section */}
          <div className="max-w-lg mx-auto">
            <h2 className="text-xl font-semibold mb-4">Assign Trainer to Session</h2>
            <form onSubmit={handleAssignTrainerToSession} className="space-y-4">
              <div>
                <label htmlFor="trainer" className="block text-sm font-medium text-gray-700">Select Trainer</label>
                <select
                  id="trainer"
                  value={trainerSession.trainer}
                  onChange={(e) => setTrainerSession({ ...trainerSession, trainer: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="">Select a Trainer</option>
                  {trainerProfiles.map((trainer, index) => (
                    <option key={index} value={trainer.name}>{trainer.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="session" className="block text-sm font-medium text-gray-700">Session Name</label>
                <input
                  type="text"
                  id="session"
                  value={trainerSession.session}
                  onChange={(e) => setTrainerSession({ ...trainerSession, session: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter session name"
                />
              </div>
              <button type="submit" className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600">
                Assign Trainer to Session
              </button>
            </form>
          </div>

          {/* Track Trainer Performance Section */}
          <div className="max-w-lg mx-auto">
            <h2 className="text-xl font-semibold mb-4">Track Trainer Performance</h2>
            <form onSubmit={handleTrackTrainerPerformance} className="space-y-4">
              <div>
                <label htmlFor="trainer" className="block text-sm font-medium text-gray-700">Select Trainer</label>
                <select
                  id="trainer"
                  value={trainerPerformance.trainer}
                  onChange={(e) => setTrainerPerformance({ ...trainerPerformance, trainer: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="">Select a Trainer</option>
                  {trainerProfiles.map((trainer, index) => (
                    <option key={index} value={trainer.name}>{trainer.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="performance" className="block text-sm font-medium text-gray-700">Performance Rating</label>
                <input
                  type="text"
                  id="performance"
                  value={trainerPerformance.performance}
                  onChange={(e) => setTrainerPerformance({ ...trainerPerformance, performance: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter performance rating"
                />
              </div>
              <button type="submit" className="w-full bg-yellow-500 text-white p-2 rounded-md hover:bg-yellow-600">
                Track Performance
              </button>
            </form>
          </div>
        </div>

        
        <div className="max-w-lg mx-auto mt-8 md:mt-0">
          <h2 className="text-xl font-semibold mb-4">Trainer Performance Overview</h2>
          <div className="space-y-4">
            {trainerProfiles.map((trainer) => (
              <div key={trainer.id} className="p-4 mb-4 border rounded-md">
                <h3 className="font-semibold">{trainer.name}</h3>
                <p><strong>Availability:</strong> {trainer.availability}</p>
                <p><strong>Assigned Session:</strong> {trainer.assignedSession || 'None'}</p>
                <p><strong>Performance Rating:</strong> {trainer.performance || 'No rating yet'}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
