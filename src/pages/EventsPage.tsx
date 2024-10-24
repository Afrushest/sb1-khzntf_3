import React from 'react';
import EventsHero from '../components/events/EventsHero';
import EventsSearch from '../components/events/EventsSearch';
import EventsList from '../components/events/EventsList';
import NewsletterSignup from '../components/events/NewsletterSignup';

const EventsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Slider with Latest Events */}
      <EventsHero />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Search and Title */}
        <EventsSearch />

        {/* Events List with Filters */}
        <EventsList />

        {/* Newsletter Signup */}
        <NewsletterSignup />
      </div>
    </div>
  );
};

export default EventsPage;