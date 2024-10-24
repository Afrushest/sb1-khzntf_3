import React from 'react';
import EventDetail from '../components/EventDetail';

const EventDetailPage = () => {
  // This would typically come from an API or route params
  const eventData = {
    title: "Cloud Migration Strategies Workshop",
    date: "November 28, 2023",
    time: "2:00 PM - 3:00 PM",
    type: "In-Person",
    location: "Tunisia",
    description: `Join us for an intensive workshop on cloud migration strategies. Learn best practices, common pitfalls to avoid, and how to create a successful migration plan for your organization.

    This workshop will cover:
    - Assessment and planning
    - Migration strategies and methodologies
    - Risk mitigation
    - Post-migration optimization
    
    Perfect for IT managers, system administrators, and technical decision-makers looking to modernize their infrastructure.`,
    speakers: [
      {
        name: "Sarah Johnson",
        position: "Cloud Architecture Lead",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
      },
      {
        name: "Michael Chen",
        position: "DevOps Engineer",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
      }
    ],
    agenda: [
      {
        time: "2:00 PM - 2:30 PM",
        title: "Introduction to Cloud Migration",
        speaker: {
          name: "Sarah Johnson",
          position: "Cloud Architecture Lead"
        }
      },
      {
        time: "2:30 PM - 3:00 PM",
        title: "Migration Strategies & Best Practices",
        speaker: {
          name: "Michael Chen",
          position: "DevOps Engineer"
        }
      },
      {
        time: "3:00 PM - 3:30 PM",
        title: "Case Studies & Real-world Examples",
        speaker: {
          name: "Sarah Johnson",
          position: "Cloud Architecture Lead"
        }
      },
      {
        time: "3:30 PM - 4:00 PM",
        title: "Q&A Session",
        speaker: {
          name: "Michael Chen",
          position: "DevOps Engineer"
        }
      }
    ]
  };

  return (
    <div className="pt-16">
      <EventDetail {...eventData} />
    </div>
  );
};

export default EventDetailPage;