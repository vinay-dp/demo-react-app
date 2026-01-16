// Demo App - Main Application Component
// This app demonstrates how to import and use components from the ui-library package

import { useState } from 'react';
// Import all components from the ui-library package
// This works because we linked ui-library as an npm dependency
import { Button, Icon, Input, Dropdown } from 'ui-library';
// Import the CSS from the library
import 'ui-library/dist/ui-library.css';
import './App.css';

function App() {
  // State management for form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');

  // Handle form submission
  const handleSubmit = () => {
    alert(`Form Submitted!\nName: ${name}\nEmail: ${email}\nCountry: ${country}`);
  };

  return (
    <div className="app">
      <div className="container">
        <div className="header">
          <Icon name="user" size={32} />
          <h1>Component Library Demo</h1>
        </div>

        <p className="description">
          This demo shows how components from <strong>ui-library</strong> are consumed
          by a React application as an npm package.
        </p>

        <div className="demo-section">
          <h2>
            <Icon name="settings" size={20} />
            User Registration Form
          </h2>

          <div className="form">
            <div className="form-group">
              <label>Name</label>
              <Input
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Country</label>
              <Dropdown
                options={['United States', 'Canada', 'United Kingdom', 'Australia', 'India']}
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="Select your country"
              />
            </div>

            <div className="button-group">
              <Button onClick={handleSubmit}>
                Submit Form
              </Button>
              <Button
                variant="secondary"
                onClick={() => {
                  setName('');
                  setEmail('');
                  setCountry('');
                }}
              >
                Clear Form
              </Button>
            </div>
          </div>
        </div>

        <div className="demo-section">
          <h2>
            <Icon name="home" size={20} />
            Icon Showcase
          </h2>
          <div className="icon-showcase">
            <div className="icon-item">
              <Icon name="home" size={48} />
              <span>Home</span>
            </div>
            <div className="icon-item">
              <Icon name="user" size={48} />
              <span>User</span>
            </div>
            <div className="icon-item">
              <Icon name="settings" size={48} />
              <span>Settings</span>
            </div>
            <div className="icon-item">
              <Icon name="search" size={48} />
              <span>Search</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
