"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
          <div className="w-full h-[400px] overflow-hidden relative rounded-lg">
            <iframe
              title="Earth"
              src="https://sketchfab.com/models/41fc80d85dfd480281f21b74b2de2faa/embed"
              allowFullScreen
              allow="autoplay; fullscreen; xr-spatial-tracking"
              className="absolute top-[-100px] left-0 w-full h-[800px]"
            ></iframe>
          </div>

          <h2 className="text-4xl font-bold mb-4">Welcome to EcoSim</h2>
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
              <div className="w-full h-[400px] overflow-hidden relative rounded-lg">
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
              <CardDescription>
                Interact with layers of climate and ecosystem data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  alt="Interactive Map"
                  width={800}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="information" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Information Center</h2>
          <Tabs defaultValue="ecosystems">
            <TabsList>
              <TabsTrigger value="ecosystems">Ecosystems</TabsTrigger>
              <TabsTrigger value="climate">Climate</TabsTrigger>
              <TabsTrigger value="conservation">Conservation</TabsTrigger>
            </TabsList>
            <TabsContent value="ecosystems">
              <Card>
                <CardHeader>
                  <CardTitle>Earths Ecosystems</CardTitle>
                  <CardDescription>
                    Learn about the diverse ecosystems on our planet
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Explore the intricate web of life in various biomes, from
                    tropical rainforests to arctic tundras.
                  </p>
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Diverse Ecosystems"
                    width={400}
                    height={200}
                    className="mt-4 rounded-lg"
                  />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="climate">
              <Card>
                <CardHeader>
                  <CardTitle>Climate Science</CardTitle>
                  <CardDescription>
                    Understand the factors affecting Earths climate
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Discover the complex interactions between the atmosphere,
                    oceans, land, and ice that shape our climate.
                  </p>
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Climate Factors"
                    width={400}
                    height={200}
                    className="mt-4 rounded-lg"
                  />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="conservation">
              <Card>
                <CardHeader>
                  <CardTitle>Conservation Efforts</CardTitle>
                  <CardDescription>
                    Learn about global initiatives to protect our planet
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Explore conservation strategies and success stories from
                    around the world.
                  </p>
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Conservation Efforts"
                    width={400}
                    height={200}
                    className="mt-4 rounded-lg"
                  />
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
              <div
                className="relative overflow-hidden w-full"
                style={{
                  height: "750px", // 400px + 200px extra height
                  width: "800px",
                }}
              >
                <iframe
                  src="https://climate.nasa.gov/interactives/climate-time-machine/?intent=021"
                  title="Specific Section"
                  className="absolute"
                  style={{
                    top: "-180px",
                    height: "calc(100% + 450px)", // Add 200px to both the top and bottom
                    width: "100%",
                  }}
                  frameBorder="0"
                  scrolling="no"
                ></iframe>
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
