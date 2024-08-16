import Components from "@/components";

export default function Home() {
  return (
    <main className="home-page w-full h-auto">
      <Components.Sections.AboutSection />
      <Components.Sections.FeaturesSection />
      <Components.Sections.ToursSection />
      <Components.Sections.StoriesSection />  
      <Components.Sections.BookingSection />
    </main>
  );
}
