import React from 'react';
import { Search } from 'lucide-react';

const EventsSearch = () => {
  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Events & Webinars</h2>
        <p className="mt-4 text-xl text-gray-600">
          Join our upcoming events and enhance your skills
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="relative">
          <input
            type="text"
            placeholder="Search events by title, topic, or location..."
            className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-linsoft-red focus:border-transparent"
          />
          <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default EventsSearch;