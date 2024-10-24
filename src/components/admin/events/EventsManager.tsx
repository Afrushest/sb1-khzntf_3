import React, { useState } from 'react';
import { Plus, Download, Calendar, History } from 'lucide-react';
import EventModal from './EventModal';
import EventsList from './EventsList';
import { Event } from '../../../types/event';

const EventsManager = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showPastEvents, setShowPastEvents] = useState(false);

  // Sample data - replace with actual data later
  const [events] = useState<Event[]>([
    {
      id: '1',
      bannerImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80',
      title: 'RedHat Enterprise Linux Administration',
      date: '2024-03-25',
      isMultiTopic: false,
      time: '09:00-17:00',
      type: 'in-person',
      location: 'Tunisia',
      genre: 'training',
      theme: 'Linux Administration',
      description: 'Learn the fundamentals of RHEL administration',
      agenda: '- Morning: Basic concepts\n- Afternoon: Hands-on practice',
      speakers: [
        {
          id: '1',
          firstName: 'John',
          lastName: 'Smith',
          position: 'Senior Linux Administrator',
          photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80'
        }
      ],
      isPast: false,
      visitCount: 150
    }
  ]);

  const handleExport = () => {
    console.log('Exporting events...');
  };

  const handleAddEvent = () => {
    setSelectedEvent(null);
    setModalOpen(true);
  };

  const handleEditEvent = (event: Event) => {
    setSelectedEvent(event);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedEvent(null);
  };

  const handleDeleteEvent = (eventId: string) => {
    console.log('Deleting event:', eventId);
  };

  const filteredEvents = events.filter(event => 
    event.isPast === showPastEvents &&
    (event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
     event.description?.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Events Management</h1>
        <div className="flex space-x-4">
          <div className="flex space-x-2">
            <button
              onClick={() => setShowPastEvents(false)}
              className={`px-4 py-2 rounded-md flex items-center ${
                !showPastEvents
                  ? 'bg-linsoft-red text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              <Calendar className="h-5 w-5 mr-2" />
              Upcoming Events
            </button>
            <button
              onClick={() => setShowPastEvents(true)}
              className={`px-4 py-2 rounded-md flex items-center ${
                showPastEvents
                  ? 'bg-linsoft-red text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              <History className="h-5 w-5 mr-2" />
              Past Events
            </button>
          </div>
          <button
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 inline-flex items-center"
            onClick={handleExport}
          >
            <Download className="h-5 w-5 mr-2" />
            Export
          </button>
          <button
            onClick={handleAddEvent}
            className="flex items-center px-4 py-2 bg-linsoft-red text-white rounded-md hover:bg-red-700"
          >
            <Plus className="h-5 w-5 mr-2" />
            Add Event
          </button>
        </div>
      </div>

      <EventsList
        events={filteredEvents}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onEdit={handleEditEvent}
        onDelete={handleDeleteEvent}
        showPastEvents={showPastEvents}
      />

      <EventModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        event={selectedEvent}
        isPastEvent={showPastEvents}
      />
    </div>
  );
};

export default EventsManager;