import React, { useState, useEffect } from 'react';
import { X, Upload, Plus, Trash } from 'lucide-react';
import { Event, EventType, EventGenre, Speaker, EventTopic } from '../../../types/event';

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
  event?: Event | null;
  isPastEvent: boolean;
}

const EventModal: React.FC<EventModalProps> = ({ isOpen, onClose, event, isPastEvent }) => {
  const [formData, setFormData] = useState<Partial<Event>>({
    bannerImage: '',
    title: '',
    date: '',
    isMultiTopic: false,
    isPast: isPastEvent,
    visitCount: 0
  });

  useEffect(() => {
    if (event) {
      setFormData(event);
    } else {
      setFormData({
        bannerImage: '',
        title: '',
        date: '',
        isMultiTopic: false,
        isPast: isPastEvent,
        visitCount: 0
      });
    }
  }, [event, isPastEvent]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data:', formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="relative w-full max-w-4xl bg-white rounded-lg shadow-lg">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {event ? 'Edit Event' : 'Add New Event'}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Title *
                  </label>
                  <input
                    type="text"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-linsoft-red focus:ring-linsoft-red"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Date *
                  </label>
                  <input
                    type="date"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-linsoft-red focus:ring-linsoft-red"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </div>
              </div>

              {/* Add more form fields as needed */}

              <div className="flex justify-end space-x-4 mt-8">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-white bg-linsoft-red rounded-md hover:bg-red-700"
                >
                  {event ? 'Update Event' : 'Create Event'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventModal;