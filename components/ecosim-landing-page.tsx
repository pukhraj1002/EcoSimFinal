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
              <div>
                Interact with layers of climate and ecosystem data
              </div>
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
                    tropical rainforests to arctic tundras.</p><p>
                    <b>Tropical Rainforests:</b> Tropical rainforests, often referred to as the "lungs of the Earth," are teeming with life. Located near the equator, these forests receive abundant rainfall year-round, creating a lush, green environment. Home to more species than any other biome, rainforests are vital for global biodiversity, hosting millions of plant and animal species. The dense canopy layers, from the forest floor to the towering treetops, provide a variety of habitats for countless organisms, many of which are yet to be discovered.
                  </p>
                  <p >
    <b>Deserts:</b> Deserts are defined by their dry conditions, receiving less than 10 inches of rain per year. Despite the harsh climate, deserts are not devoid of life. Adapted to extreme temperatures and water scarcity, plants and animals in these regions have evolved unique survival strategies. From cacti that store water in their stems to nocturnal creatures that avoid the daytime heat, desert ecosystems are resilient and full of surprises.
  </p>
  <p>
    <b>Grasslands:</b> Grasslands are vast, open areas dominated by grasses and occasional trees. Found in regions with seasonal rainfall, grasslands provide habitat for large herbivores like bison, zebras, and antelope. These ecosystems are crucial for food production, particularly in agricultural regions, and they play an important role in the carbon cycle, helping to sequester carbon from the atmosphere.
  </p>
  <p >
    <b>Oceans:</b> Oceans cover about 70% of the Earth's surface and are vital to life on Earth. Marine ecosystems range from shallow coastal waters to deep ocean trenches. Coral reefs, often called the "rainforests of the sea," support an incredible diversity of marine life, from vibrant fish to delicate corals. The open ocean, while less biologically rich, is essential for global climate regulation and serves as a major source of oxygen through phytoplankton.
  </p>
  <p >
    <b>Arctic Tundra:</b> The Arctic tundra is a cold, barren landscape where harsh winds and low temperatures dominate. Located at the Earth's poles, it is home to specially adapted plants and animals that survive in extreme cold and with minimal sunlight. Permafrost, a layer of frozen soil, is a defining feature of this biome. Despite the inhospitable conditions, migratory birds, polar bears, and Arctic foxes thrive in this unique ecosystem.
  </p><br></br>
  <p>
    <b>Conclusion:</b> Exploring Earth's ecosystems is a reminder of the interconnectedness of all life. From the driest deserts to the most frigid tundras, each ecosystem plays a critical role in sustaining biodiversity and regulating the planet's climate. Understanding and protecting these ecosystems is essential for preserving the balance of life on Earth, ensuring that future generations can experience the incredible diversity of our planet's natural world.
  </p>
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
                  <p >
    <b>Atmospheric Interactions:</b> The Earth's atmosphere is a crucial factor in regulating its climate. It consists of gases such as nitrogen, oxygen, and carbon dioxide, which trap heat from the sun, creating the greenhouse effect. This effect maintains the Earth's temperature at a level suitable for life. However, human activities, like burning fossil fuels, have increased the concentration of greenhouse gases, leading to global warming and climate change.
  </p>
  <p>
    <b>Oceans and Climate:</b> Oceans play a vital role in regulating the Earth's climate by absorbing and distributing heat around the planet. The ocean currents, such as the Gulf Stream, act as conveyors of heat, transporting warm water from the equator to the poles. This movement helps maintain global temperature balances. Oceans also absorb large amounts of carbon dioxide, which influences climate dynamics.
  </p>
  <p >
    <b>Land Surface and Climate:</b> The Earth's land surface influences climate patterns through its interactions with the atmosphere. Factors such as vegetation cover, soil moisture, and land use affect how heat is absorbed or reflected. Deforestation, urbanization, and changes in agriculture can alter these interactions, leading to changes in local and global climates.
  </p>
  <p >
    <b>Ice and Climate:</b> Ice caps and glaciers play a significant role in the Earth's climate by reflecting sunlight and helping to maintain a balanced energy budget. As global temperatures rise, ice melts, reducing the Earth's albedo (reflectivity), which in turn accelerates warming. This feedback loop is a key driver of climate change, particularly in polar regions.
  </p>
  <p >
    <b>Human Impact on Climate:</b> Human activities, including industrialization, deforestation, and agriculture, have significantly altered the Earth's climate. The release of greenhouse gases, especially carbon dioxide, from burning fossil fuels, has caused global temperatures to rise. This warming has led to more extreme weather patterns, rising sea levels, and disruptions to ecosystems worldwide.
  </p><br></br>
  <p >
    <b>Conclusion:</b> Understanding climate science is essential for addressing the challenges posed by climate change. The interactions between the atmosphere, oceans, land, and ice are complex, but by studying these systems, scientists can better predict and mitigate the impacts of climate change. Protecting the planet's climate requires collective action to reduce greenhouse gas emissions and promote sustainable practices for future generations.
  </p>
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
                  <p >
    <b>Global Conservation Strategies:</b> Conservation efforts are critical to preserving Earth's biodiversity and ecosystems. Initiatives range from establishing protected areas like national parks and wildlife reserves to restoring damaged habitats. Efforts are being made to conserve both terrestrial and marine environments, focusing on safeguarding endangered species, preventing habitat loss, and mitigating the impacts of climate change. Through international collaborations and local community efforts, conservation strategies aim to ensure the survival of species and ecosystems for future generations.
  </p>
  <p>
    <b>Success Stories:</b> Around the world, many conservation projects have yielded successful results. For example, the recovery of the giant panda population in China through focused breeding programs and habitat protection has been a significant achievement. Similarly, the restoration of coral reefs in the Caribbean and Pacific, through coral planting initiatives and reducing overfishing, has shown positive outcomes. These success stories highlight the power of collective action in preserving the planet’s biodiversity.
  </p>
  <p >
    <b>Wildlife Protection:</b> The protection of endangered species is a key aspect of global conservation efforts. Organizations such as the World Wildlife Fund (WWF) and the International Union for Conservation of Nature (IUCN) work tirelessly to monitor species at risk of extinction and to implement strategies aimed at reducing threats such as poaching, habitat destruction, and climate change. Through legal frameworks, awareness campaigns, and direct interventions, wildlife protection efforts continue to evolve, offering hope for endangered species.
  </p>
  <p >
    <b>Community Involvement:</b> Local communities play a vital role in conservation efforts. In many parts of the world, conservation programs empower communities to take charge of preserving their natural environments. By promoting sustainable practices like eco-tourism, sustainable agriculture, and forest management, these initiatives help reduce environmental degradation while improving the livelihoods of local populations. The success of community-based conservation initiatives demonstrates that people and nature can coexist harmoniously.
  </p><br></br>
  <p >
    <b>Conclusion:</b> Conservation efforts are more important than ever in the fight to protect our planet's ecosystems and biodiversity. From grassroots projects to international treaties, these efforts bring people together with a shared purpose of safeguarding the future of life on Earth. Continued dedication and innovation in conservation practices will ensure that we protect the planet's natural wonders for future generations to experience and enjoy.
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
              <CardDescription>See how key climate indicators have changed over the years</CardDescription>
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
