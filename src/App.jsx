import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import { AddTrainer } from './Components/Addtrainer';
import { DashBoard } from './Pages/Dashboard';
import { Opportunities } from './Pages/Opportunites';
import { Operations } from './Pages/Operations';
import { NotFound } from './Pages/Notfound';
import { Navbar } from './Components/Navbar';
import { trainerProfiles as initialProfiles } from './Api';

function App() {
  const [trainerProfiles, setTrainerProfiles] = useState(initialProfiles);



  const updateTrainerAvailability = (id, newAvailability) => {
    setTrainerProfiles((prevProfiles) =>
      prevProfiles.map((trainer) =>
        trainer.id === id ? { ...trainer, availability: newAvailability } : trainer
      )
    );
  };


  const assignTrainerToSession = (trainerId, session) => {
    setTrainerProfiles((prevProfiles) =>
      prevProfiles.map((trainer) =>
        trainer.id === trainerId
          ? { ...trainer, assignedSession: session }
          : trainer
      )
    );
  };

  // Function to track trainer performance
  const trackTrainerPerformance = (trainerId, performance) => {
    setTrainerProfiles((prevProfiles) =>
      prevProfiles.map((trainer) =>
        trainer.id === trainerId
          ? { ...trainer, performance: performance }
          : trainer
      )
    );
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<DashBoard trainerProfiles={trainerProfiles} setTrainerProfiles={setTrainerProfiles} />}
        />

        <Route
          path="/add-trainer"
          element={<AddTrainer trainerProfiles={trainerProfiles} setTrainerProfiles={setTrainerProfiles} />}
        />
        <Route
          path="/edit-trainer/:id"
          element={<AddTrainer trainerProfiles={trainerProfiles} setTrainerProfiles={setTrainerProfiles} />}
        />
        <Route
          path="/opportunities"
          element={<Opportunities />}
        />
        <Route
          path="/operations"
          element={
            <Operations
              trainerProfiles={trainerProfiles}
              updateTrainerAvailability={updateTrainerAvailability}
              assignTrainerToSession={assignTrainerToSession}
              trackTrainerPerformance={trackTrainerPerformance}
            />
          }
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
