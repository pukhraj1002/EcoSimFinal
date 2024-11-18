"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Globe,
  Info,
  Clock,
  Brain,
  Menu,
  ChevronDown,
  Map,
  Monitor,
} from "lucide-react";

export function EcosimLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const smoothScroll = (e: Event) => {
      e.preventDefault();
      const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute(
        "href"
      );
      if (targetId) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", smoothScroll);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", smoothScroll);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-blue-100">
      <header className="bg-black text-white p-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold flex items-center">
            <Globe className="mr-2" />
            EcoSim
          </h1>
          <nav className="hidden md:flex space-x-4">
            <Link
              href="#eyes-on-earth"
              className="hover:underline flex items-center"
            >
              <Globe className="mr-1" size={16} />
              Eyes on Earth
            </Link>
            <Link href="#quiz" className="hover:underline flex items-center">
              <Brain className="mr-1" size={16} />
              Quiz
            </Link>
            <Link
              href="#interactive-map"
              className="hover:underline flex items-center"
            >
              <Map className="mr-1" size={16} />
              Interactive Map
            </Link>
            <Link
              href="#information"
              className="hover:underline flex items-center"
            >
              <Info className="mr-1" size={16} />
              Information
            </Link>
            <Link href="#iot" className="hover:underline flex items-center">
              <Monitor className="mr-1" size={16} />
              IOT Simulation
            </Link>
            <Link
              href="#climate-time-machine"
              className="hover:underline flex items-center"
            >
              <Clock className="mr-1" size={16} />
              Climate Time Machine
            </Link>
          </nav>
          <Button
            variant="outline"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        {isMenuOpen && (
          <nav className="mt-4 flex flex-col space-y-2 md:hidden">
            <Link
              href="#eyes-on-earth"
              className="hover:underline flex items-center"
            >
              <Globe className="mr-1" size={16} />
              Eyes on Earth
            </Link>
            <Link href="#quiz" className="hover:underline flex items-center">
              <Brain className="mr-1" size={16} />
              Quiz
            </Link>
            <Link
              href="#interactive-map"
              className="hover:underline flex items-center"
            >
              <Map className="mr-1" size={16} />
              Interactive Map
            </Link>
            <Link
              href="#information"
              className="hover:underline flex items-center"
            >
              <Info className="mr-1" size={16} />
              Information
            </Link>
            <Link href="#iot" className="hover:underline flex items-center">
              <Clock className="mr-1" size={16} />
              IOT Simulation
            </Link>
            <Link
              href="#climate-time-machine"
              className="hover:underline flex items-center"
            >
              <Clock className="mr-1" size={16} />
              Climate Time Machine
            </Link>
          </nav>
        )}
      </header>

      <main className="container mx-auto mt-8 px-4">
        <section id="hero" className="text-center mb-16 relative">
          <div className="w-full h-[700px] overflow-hidden relative rounded-lg">
            <iframe
              title="Earth"
              src="https://sketchfab.com/models/41fc80d85dfd480281f21b74b2de2faa/embed"
              allowFullScreen
              allow="autoplay; fullscreen; xr-spatial-tracking"
              className="absolute top-[-100px] left-0 w-full h-[1000px]"
            ></iframe>
          </div>

          <h2 className="text-4xl font-bold mb-4 mt-4">Welcome to EcoSim</h2>
          <p className="text-xl mb-8">
            Explore Earths ecosystems and climate through interactive
            simulations and data visualizations
          </p>
          <Button size="lg">Get Started</Button>
          <ChevronDown className="animate-bounce mt-8 mx-auto" size={32} />
        </section>

        <section id="eyes-on-earth" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">NASAs Eyes on Earth</h2>
          <Card>
            <CardHeader>
              <CardTitle>Explore Earth from Space</CardTitle>
              <CardDescription>
                Visualize NASAs Earth science satellite data in 3D
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full h-[500px] overflow-hidden relative rounded-lg">
                <iframe
                  title="Earth"
                  src="https://eyes.nasa.gov/apps/earth/#/satellites"
                  allowFullScreen
                  allow="autoplay; fullscreen; xr-spatial-tracking"
                  className="absolute top-[-100px] left-0 w-full h-[800px]"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="quiz" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Environmental Quiz</h2>
          <Card>
            <CardHeader>
              <CardTitle>Test Your Knowledge</CardTitle>
              <CardDescription>
                Take our quiz to learn more about Earths ecosystems and climate
              </CardDescription>
            </CardHeader>
            <CardContent>
              <iframe
                src="https://eco-sim-quiz.vercel.app/"
                width="100%"
                height="600"
                className="mt-4 border rounded-lg"
                title="Environmental Quiz"
                allowFullScreen
              ></iframe>
            </CardContent>
          </Card>
        </section>

        <section id="interactive-map" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Interactive Map</h2>
          <Card>
            <CardHeader>
              <CardTitle>Explore Global Environmental Data</CardTitle>
              <div>Interact with layers of climate and ecosystem data</div>
            </CardHeader>
            <CardContent>
              <div className="w-full h-[800px] overflow-hidden relative rounded-lg -mt-[100px]">
                <iframe
                  src="https://map-iota-ebon.vercel.app/"
                  allowFullScreen
                  allow="autoplay; fullscreen; xr-spatial-tracking"
                  className="absolute top-[100px] left-0 w-full h-[650px]"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="information" className="mb-16 p-8 bg-gray-50 rounded-lg shadow-lg">
  <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Information Center</h2>
  <Tabs defaultValue="ecosystems" className="max-w-6xl mx-auto">
    <TabsList className=" mx-auto flex w-[600px] justify-center space-x-4 mb-6">
      <TabsTrigger
        value="ecosystems"
        className="px-6 py-2 rounded-full font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Ecosystems
      </TabsTrigger>
      <TabsTrigger
        value="climate"
        className="px-6 py-2 rounded-full font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Climate
      </TabsTrigger>
      <TabsTrigger
        value="conservation"
        className="px-6 py-2 rounded-full font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Conservation
      </TabsTrigger>
    </TabsList>

    <TabsContent value="ecosystems">
      <Card className="bg-white shadow-md p-6 rounded-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-gray-700 mb-2">
            Earth's Ecosystems
          </CardTitle>
          <CardDescription className="text-gray-600">
            Learn about the diverse ecosystems on our planet.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-gray-700 leading-7 space-y-4">
          <p>
            Explore the intricate web of life in various biomes, from tropical
            rainforests to Arctic tundras.
          </p>
          <p>
            <b>Tropical Rainforests:</b> Tropical rainforests, often referred to
            as the lungs of the Earth, are teeming with life. Located near the
            equator, these forests receive abundant rainfall year-round, creating a
            lush, green environment.
          </p>
          <p>
            <b>Deserts:</b> Deserts are defined by their dry conditions, receiving
            less than 10 inches of rain per year. Despite the harsh climate, deserts
            are not devoid of life.
          </p>
          <p>
            <b>Grasslands:</b> Grasslands are vast, open areas dominated by grasses
            and occasional trees.
          </p>
          <p>
            <b>Oceans:</b> Oceans cover about 70% of the Earth's surface and are
            vital to life on Earth.
          </p>
          <p>
            <b>Arctic Tundra:</b> The Arctic tundra is a cold, barren landscape
            where harsh winds and low temperatures dominate.
          </p>
          <p>
            <b>Conclusion:</b> Exploring Earth's ecosystems is a reminder of the
            interconnectedness of all life.
          </p>
        </CardContent>
      </Card>
    </TabsContent>

    <TabsContent value="climate">
      <Card className="bg-white shadow-md p-6 rounded-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-gray-700 mb-2">
            Climate Science
          </CardTitle>
          <CardDescription className="text-gray-600">
            Understand the factors affecting Earth's climate.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-gray-700 leading-7 space-y-4">
          <p>
            Discover the complex interactions between the atmosphere, oceans,
            land, and ice that shape our climate.
          </p>
          <p>
            <b>Atmospheric Interactions:</b> The Earth's atmosphere is a crucial
            factor in regulating its climate.
          </p>
          <p>
            <b>Oceans and Climate:</b> Oceans play a vital role in regulating the
            Earth's climate by absorbing and distributing heat around the planet.
          </p>
          <p>
            <b>Land Surface and Climate:</b> The Earth's land surface influences
            climate patterns through its interactions with the atmosphere.
          </p>
          <p>
            <b>Ice and Climate:</b> Ice caps and glaciers play a significant role in
            the Earth's climate.
          </p>
          <p>
            <b>Human Impact on Climate:</b> Human activities, including
            industrialization and deforestation, have significantly altered the
            Earth's climate.
          </p>
          <p>
            <b>Conclusion:</b> Understanding climate science is essential for
            addressing the challenges posed by climate change.
          </p>
        </CardContent>
      </Card>
    </TabsContent>

    <TabsContent value="conservation">
      <Card className="bg-white shadow-md p-6 rounded-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-gray-700 mb-2">
            Conservation Efforts
          </CardTitle>
          <CardDescription className="text-gray-600">
            Learn about global initiatives to protect our planet.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-gray-700 leading-7 space-y-4">
          <p>
            Explore conservation strategies and success stories from around the
            world.
          </p>
          <p>
            <b>Global Conservation Strategies:</b> Conservation efforts are
            critical to preserving Earth's biodiversity and ecosystems.
          </p>
          <p>
            <b>Success Stories:</b> Around the world, many conservation projects
            have yielded successful results.
          </p>
          <p>
            <b>Wildlife Protection:</b> The protection of endangered species is a
            key aspect of global conservation efforts.
          </p>
          <p>
            <b>Community Involvement:</b> Local communities play a vital role in
            conservation efforts.
          </p>
          <p>
            <b>Conclusion:</b> Conservation efforts are more important than ever in
            the fight to protect our planet's ecosystems and biodiversity.
          </p>
        </CardContent>
      </Card>
    </TabsContent>
  </Tabs>
</section>


        <section id="iot" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">IoT Simulation</h2>
          <Card>
            <CardHeader>
              <CardTitle>Interactive IoT Simulation</CardTitle>
              <CardDescription>
                Experiment with the live IoT simulation embedded below:
              </CardDescription>
            </CardHeader>
            <CardContent>
              <iframe
                src="https://wokwi.com/projects/414817867646158849"
                width="100%"
                height="600"
                className="mt-4 border rounded-lg"
                style={{ border: "1px solid #ccc" }}
                title="Wokwi IoT Simulation"
                allowFullScreen
              ></iframe>
            </CardContent>
          </Card>
        </section>
        <section id="climate-time-machine" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Climate Time Machine</h2>
          <Card>
            <CardHeader>
              <CardTitle>Visualize Climate Change Over Time</CardTitle>
              <CardDescription>
                See how key climate indicators have changed over the years
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mt-4 aspect-video bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden">
                <div
                  className="relative overflow-hidden"
                  style={{
                    height: "750px", // 400px + 200px extra height
                    width: "1300px",
                  }}
                >
                  <iframe
                    src="https://climate.nasa.gov/interactives/climate-time-machine/?intent=021"
                    title="Specific Section"
                    className="absolute"
                    style={{
                      padding: "10px",
                      top: "-210px",
                      height: "300%", // Add 200px to both the top and bottom
                      width: "100%",
                    }}
                    frameBorder="0"
                    scrolling="no"
                  ></iframe>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="bg-green-700 text-white p-4 mt-16">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 EcoSim. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
