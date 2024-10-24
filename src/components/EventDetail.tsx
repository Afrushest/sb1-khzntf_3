import React from 'react';
import { Calendar, Clock, MapPin, User } from 'lucide-react';

interface Speaker {
  name: string;
  position: string;
  image: string;
}

interface AgendaItem {
  time: string;
  title: string;
  speaker: {
    name: string;
    position: string;
  };
}

interface EventDetailProps {
  title: string;
  date: string;
  time: string;
  type: string;
  location: string;
  description: string;
  speakers: Speaker[];
  agenda: AgendaItem[];
}

const EventDetail = ({
  title,
  date,
  time,
  type,
  location,
  description,
  speakers,
  agenda
}: EventDetailProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Banner */}
      <div 
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60">
          <div className="max-w-7xl mx-auto px-4 h-full flex flex-col justify-center text-white">
            <h1 className="text-4xl font-bold mb-6">{title}</h1>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>{date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>{time}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>{location}</span>
              </div>
            </div>
            <button className="mt-8 bg-linsoft-red text-white px-8 py-3 rounded-md inline-block w-fit hover:bg-red-700 transition-colors">
              Register Now
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          {/* Description */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Description</h2>
            <p className="text-gray-600">{description}</p>
          </section>

          {/* Speakers */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Speakers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {speakers.map((speaker, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <img 
                    src={speaker.image} 
                    alt={speaker.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{speaker.name}</h3>
                    <p className="text-gray-600">{speaker.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Agenda */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Agenda</h2>
            <div className="space-y-6">
              {agenda.map((item, index) => (
                <div key={index} className="border-l-4 border-linsoft-red pl-4">
                  <div className="text-sm text-gray-500">{item.time}</div>
                  <h3 className="font-semibold text-lg mt-1">{item.title}</h3>
                  <div className="flex items-center mt-2 text-gray-600">
                    <User className="h-4 w-4 mr-2" />
                    <span>{item.speaker.name} - {item.speaker.position}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Registration Form */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
            <h2 className="text-2xl font-bold mb-6">Registration</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-linsoft-red focus:ring-linsoft-red"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Gender *
                </label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input type="radio" name="gender" value="male" className="text-linsoft-red" />
                    <span className="ml-2">Male</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="gender" value="female" className="text-linsoft-red" />
                    <span className="ml-2">Female</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-linsoft-red focus:ring-linsoft-red"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone *
                </label>
                <input
                  type="tel"
                  required
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-linsoft-red focus:ring-linsoft-red"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company *
                </label>
                <input
                  type="text"
                  required
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-linsoft-red focus:ring-linsoft-red"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Position *
                </label>
                <input
                  type="text"
                  required
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-linsoft-red focus:ring-linsoft-red"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Country *
                </label>
                <select
                  required
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-linsoft-red focus:ring-linsoft-red"
                >
                  <option value="">Select a country</option>
                  <option value="Tunisia">Tunisia</option>
                  <option value="Algeria">Algeria</option>
                  <option value="Morocco">Morocco</option>
                  <option value="Libya">Libya</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-linsoft-red text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors"
              >
                Register
              </button>

              <p className="text-sm text-gray-500 mt-2">
                * Required fields
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;