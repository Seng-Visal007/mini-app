import { SectionCard } from "@/components/SectionCard";
import { InfoItem } from "@/components/InfoItem";
import { ProjectCard } from "@/components/ProjectCard";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto space-y-6">

        {/* Header Section */}
        <header className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h1 className="text-gray-900 text-2xl font-bold">Seng Visal</h1>
            <p className="text-gray-500">Frontend Developer</p>
          </div>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
            Edit Profile
          </button>
        </header>

        {/* Main Grid: Single column on mobile, Two columns on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Main Content (2 Columns on Desktop) */}
          <main className="md:col-span-2 space-y-6">
            <SectionCard title="About Me">
              <p className="text-gray-700 leading-relaxed">
                Passionate developer building responsive web applications with React, Tailwind CSS, and modern UI libraries.
              </p>
            </SectionCard>

            <SectionCard title="Projects">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Instance 1 */}
                <ProjectCard
                  title="Habit Tracker"
                  description="A multi-page CRUD application built with React and Tailwind."
                  status="In Progress"
                  badgeVariant="secondary"
                />
                {/* Instance 2 */}
                <ProjectCard
                  title="Portfolio Website"
                  description="Personal showcase site featuring interactive components."
                  status="Completed"
                  badgeVariant="default"
                />
              </div>
            </SectionCard>
          </main>

          {/* Sidebar (1 Column on Desktop) */}
          <aside className="space-y-6">
            <SectionCard title="Personal Details">
              <InfoItem label="Location" value="Phnom Penh, Cambodia" />
              <InfoItem label="Email" value="sengvisal003@gmail.com" />
              <InfoItem label="Experience" value="Junior Developer" />
            </SectionCard>
          </aside>

        </div>
      </div>
    </div>
  );
};
