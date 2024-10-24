import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, Video } from 'lucide-react';
import EventFilters from './EventFilters';

interface Event {
  id: string;
  type: 'Event' | 'Webinar';
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
  maxParticipants: number;
  currentParticipants: number;
  hasWaitingList: boolean;
}

const EventsList = () => {
  const [activeFilters, setActiveFilters] = useState({
    type: '',
    location: '',
    date: '',
    topic: ''
  });

  const events: Event[] = [
    {
      id: '1',
      type: 'Event',
      title: 'RedHat Enterprise Linux Administration',
      description: 'Learn the fundamentals of RHEL administration in this hands-on workshop.',
      date: 'March 25, 2024',
      location: 'Tunisia',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80',
      maxParticipants: 30,
      currentParticipants: 25,
      hasWaitingList: true
    },
    {
      id: '2',
      type: 'Webinar',
      title: 'AWS Cloud Architecture Best Practices',
      description: 'Deep dive into AWS cloud architecture patterns and best practices.',
      date: 'March 28, 2024',
      location: 'Online',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
      maxParticipants: 100,
      currentParticipants: 80,
      hasWaitingList: true
    }
  ];

  const getRegistrationStatus = (event: Event) => {
    const available = event.currentParticipants < event.maxParticipants;
    const almostFull = event.maxParticipants - event.currentParticipants <= 5;
    
    if (available) {
      return {
        type: 'available',
        message: almostFull ? 'Few spots left!' : `${event.maxParticipants - event.currentParticipants} spots available`,
        buttonText: 'Register Now'
      };
    } else if (event.hasWaitingList) {
      return {
        type: 'waiting',
        message: 'Join Waiting List',
        buttonText: 'Join Waiting List'
      };
    } else {
      return {
        type: 'full',
        message: 'Event Full',
        buttonText: 'Registration Closed'
      };
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* Filters */}
      <div className="lg:col-span-1">
        <EventFilters
          activeFilters={activeFilters}
          onFilterChange={setActiveFilters}
        />
      </div>

      {/* Events Grid */}
      <div className="lg:col-span-3">
        <div className="space-y-8">
          {events.map((event) => {
            const status = getRegistrationStatus(event);
            
            return (
              <div 
                key={event.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <div className="flex items-center">
                      {event.type === 'Webinar' ? (
                        <Video className="h-5 w-5 text-linsoft-red" />
                      ) : (
                        <Calendar className="h-5 w-5 text-linsoft-red" />
                      )}
                      <span className="ml-2 text-sm font-semibold text-linsoft-red">
                        {event.type}
                      </span>
                    </div>

                    <h3 className="mt-3 text-xl font-semibold text-gray-900">
                      {event.title}
                    </h3>

                    <p className="mt-2 text-gray-600">{event.description}</p>

                    <div className="mt-4 grid grid-cols-2 gap-4">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="h-4 w-4 mr-2" />
                        <span>{status.message}</span>
                      </div>
                    </div>

                    <div className="mt-6 flex items-center justify-between">
                      <Link
                        to={`/event/${event.id}`}
                        className="text-linsoft-red hover:text-red-700 font-semibold"
                      >
                        View Details →
                      </Link>
                      <Link
                        to={`/event/${event.id}`}
                        className={`px-4 py-2 rounded-md font-semibold ${
                          status.type === 'available'
                            ? 'bg-linsoft-red text-white hover:bg-red-700'
                            : status.type === 'waiting'
                            ? 'bg-yellow-500 text-white hover:bg-yellow-600'
                            : 'bg-gray-300 text-gray-600 cursor-not-allowed'
                        }`}
                      >
                        {status.buttonText}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EventsList;