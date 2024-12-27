'use client'

import { Badge } from "@/components/ui/badge";
import BlurFade from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle,CardContent} from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import ShineBorder from "@/components/ui/shine-border";
import TypingAnimation from "@/components/ui/typing-animation";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@radix-ui/react-collapsible";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import {ChevronsUpDown, Github} from "lucide-react";
import Image from 'next/image';
import Link from "next/link";

export default function Home() {

  return (
    <div className="flex items-center justify-center">
        <div className="flex flex-col bg-muted min-w-[800px] max-w-[1000px]">
      <div id="title" className="flex flex-row justify-between align-middle py-10 px-10 mt-10 ">
        <div id="greeting" className="flex flex-col align-middle justify-center">
          <TypingAnimation duration={20}className="text-6sm">Hello my name is,</TypingAnimation>
          <TypingAnimation delay={200} duration={75} className="text-6xl">Kassem Taha</TypingAnimation>
        </div>

        <div id="picturemaybe" >
          <BlurFade delay={1}>
            <ShineBorder
            className="relative flex h-[350px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
          >
            <Image className="border-solid border-cyan-400 border-3 shadow-lg" src="/kassem.jpg" alt="alt" width={200} height={200} />
            </ShineBorder>
          </BlurFade>
        </div>
      </div>

      <div id="about" className="flex flex-col py-10 px-10">
        <BlurFade delay={1}>
          <h1 className="text-3xl font-bold flex flex-row align-baseline">
            About Me
          </h1>
        </BlurFade>
        
        <BlurFade delay={1.25}>
          <p className="text-sm">
          I’m Kassem Taha, a computer science student at Carleton University with a strong passion for creating impactful software solutions. I’ve had the opportunity to develop and launch projects ranging from high-performance web applications using NextJS and Firebase to iOS apps with Swift. My hands-on experiences have not only sharpened my technical skills but also fueled my love for problem-solving and innovation. As a natural leader, I’ve led competitive robotics teams to success and enjoy mentoring aspiring programmers. With a strong academic foundation and a commitment to continuous growth, I’m excited to tackle new challenges and make meaningful contributions to the tech world.
          </p>
        </BlurFade>
      </div>

      <div id="education" className="flex flex-col py-10 px-10">
        <BlurFade delay={1}>
          <h1 className="text-3xl font-bold">
            Education
          </h1>
        </BlurFade>

        <BlurFade delay={1.25}>
          <Collapsible>
            <div
              id="uniCard"
              className="flex flex-col bg-gray-100 px-2 py-2 rounded-lg w-full my-4 gap-2 shadow-lg"
            >
              <CollapsibleTrigger asChild>
              <div className="flex flex-row items-center justify-between gap-2 hover:cursor-pointer">
                <div id="uni" className="flex flex-row items-center justify-between w-full">
                  <div id="leftUni" className="flex flex-row gap-4 items-center">
                    <Image
                      src="https://carleton.ca/brand/wp-content/uploads/social-media-sample-red-247w-1.png"
                      alt="alt"
                      width={40}
                      height={40}
                      className="rounded-3xl"
                    />
                    <div id="nameDegree" className="flex flex-col">
                      <h1 className="text-sm font-semibold">Carleton University</h1>
                      <h1 className="text-xs">Bachelor of Computer Science: Software Engineering Stream</h1>
                    </div>
                  </div>
                  <div id="date" className="ml-auto">
                    <h1 className="text-xs font-semibold">September 2023 - April 2028</h1>
                  </div>
                </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="ml-2 shrink-0 flex justify-center items-center"
                  >
                    <ChevronsUpDown className="h-4 w-4" />
                    <span className="sr-only">Toggle</span>
                  </Button>
              </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="CollapsibleContent space-y-2">
                <ul className="mx-10 list-disc list-inside text-gray-800 text-sm space-y-2">
                  <li>
                    <span className="font-semibold">CGPA:</span> 11.5/12 (3.8/4.0) (A)
                  </li>
                  <li>
                    <span className="font-semibold">Awards:</span> Lester B Pearson Award, President’s Scholar
                  </li>
                  <li>
                    <span className="font-semibold">Coursework:</span> Computer Architecture, Comparison of Learning Algorithms, Computational Theory
                  </li>
                </ul>
              </CollapsibleContent>
            </div>
          </Collapsible>
        </BlurFade>
      </div>

      <div id="experience" className="flex flex-col py-10 px-10">
        <BlurFade delay={0.25} inView>
          <h1 className="text-3xl font-bold">
            Experience
          </h1>
        </BlurFade>

        <BlurFade delay={0.5} inView>
        <Collapsible>
          <div
            id="uniCard"
            className="flex flex-col bg-gray-100 px-2 py-2 rounded-lg w-full my-4 gap-2 shadow-lg"
          >
              <CollapsibleTrigger asChild>
              <div className="flex flex-row items-center justify-between gap-2 hover:cursor-pointer">
                <div id="uni" className="flex flex-row items-center justify-between w-full">
                  <div id="leftUni" className="flex flex-row gap-4 items-center">
                    <Image
                      src="https://marketplace.canva.com/EAGFNmKiY9s/1/0/1600w/canva-blue-soccer-sports-logo-rQrjayPQsF0.jpg"
                      alt="alt"
                      width={40}
                      height={40}
                      className="rounded-3xl"
                    />
                    <div id="nameDegree" className="flex flex-col">
                      <h1 className="text-sm font-semibold">Gulf Legacy Football</h1>
                      <h1 className="text-xs">Lead Web Developer</h1>
                    </div>
                  </div>
                  <div id="date" className="ml-auto">
                    <h1 className="text-xs font-semibold">June 2024 – Present</h1>
                  </div>
                </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="ml-2 shrink-0 flex justify-center items-center"
                  >
                    <ChevronsUpDown className="h-4 w-4" />
                    <span className="sr-only">Toggle</span>
                  </Button>
                
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent className="CollapsibleContent space-y-2">
              <ul className="mx-10 list-disc list-inside text-gray-800 text-sm space-y-2">
                <li>
                  Developed landing page, Firebase database, and Stripe integration using NextJS, enabling seamless user registration and access to standings and schedules.
                </li>
                <li>
                  Created results and standings pages providing accurate match outcomes and team rankings with quick response times.
                </li>
                <li>
                  Optimized front-end performance for enhanced user experience.
                </li>
              </ul>
            </CollapsibleContent>
          </div>
        </Collapsible>
        </BlurFade>

        <BlurFade delay={0.75} inView>
        <Collapsible>
          <div
            id="uniCard"
            className="flex flex-col bg-gray-100 px-2 py-2 rounded-lg w-full my-4 gap-2 shadow-lg"
          >
            <CollapsibleTrigger asChild>
            <div className="flex flex-row items-center justify-between gap-2 hover:cursor-pointer">
              <div id="uni" className="flex flex-row items-center justify-between w-full">
                <div id="leftUni" className="flex flex-row gap-4 items-center">
                  <Image
                    src="https://pbs.twimg.com/profile_images/1282740588631273474/c8Wfx_m9_400x400.jpg"
                    alt="alt"
                    width={40}
                    height={40}
                    className="rounded-3xl"
                  />
                  <div id="nameDegree" className="flex flex-col">
                    <h1 className="text-sm font-semibold">Our Wave Hub</h1>
                    <h1 className="text-xs">iOS Developer Intern</h1>
                  </div>
                </div>
                <div id="date" className="ml-auto">
                  <h1 className="text-xs font-semibold">June 2022 – August 2022</h1>
                </div>
              </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="ml-2 shrink-0 flex justify-center items-center"
                >
                  <ChevronsUpDown className="h-4 w-4" />
                  <span className="sr-only">Toggle</span>
                </Button>
            </div>
            </CollapsibleTrigger>

            <CollapsibleContent className="CollapsibleContent space-y-2">
              <ul className="mx-10 list-disc list-inside text-gray-800 text-sm space-y-2">
                <li>
                  Received hands-on training in design thinking, entrepreneurial frameworks, and user journey mapping.
                </li>
                <li>
                  Developed an iOS app using Swift and Xcode, integrating Google Firebase.
                </li>
                <li>
                  Designed a user-friendly interface to improve engagement and retention.
                </li>
              </ul>
            </CollapsibleContent>
          </div>
        </Collapsible>
        </BlurFade>

        <BlurFade delay={1} inView>
        <Collapsible>
          <div
            id="uniCard"
            className="flex flex-col bg-gray-100 px-2 py-2 rounded-lg w-full my-4 gap-2 shadow-lg"
          >
            <CollapsibleTrigger asChild>
            <div className="flex flex-row items-center justify-between gap-2 hover:cursor-pointer">
              <div id="uni" className="flex flex-row items-center justify-between w-full">
                <div id="leftUni" className="flex flex-row gap-4 items-center">
                  <Image
                    src="https://robotics.nasa.gov/wp-content/uploads/2020/04/vex_robotics_logo.png"
                    alt="alt"
                    width={40}
                    height={40}
                    className="rounded-3xl"
                  />
                  <div id="nameDegree" className="flex flex-col">
                    <h1 className="text-sm font-semibold">4659 Warrior Robotix</h1>
                    <h1 className="text-xs">Captain, Lead Programmer</h1>
                  </div>
                </div>
                <div id="date" className="ml-auto">
                  <h1 className="text-xs font-semibold">Sept 2022 – March 2023</h1>
                </div>
              </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="ml-2 shrink-0 flex justify-center items-center"
                >
                  <ChevronsUpDown className="h-4 w-4" />
                  <span className="sr-only">Toggle</span>
                </Button>
            </div>
            </CollapsibleTrigger>
            <CollapsibleContent className="CollapsibleContent space-y-2">
              <ul className="mx-10 list-disc list-inside text-gray-800 text-sm space-y-2">
                <li>
                  Led a fledgling team to qualify for provincial competitions, ranking among the top 50 teams in Ontario, Canada.
                </li>
                <li>
                  Spearheaded programming efforts, including the implementation of Odometry, motor control, event handling, and auto-aiming software.
                </li>
                <li>
                  Earned recognition for innovative programming and design during a judge&apos;s interview.
                </li>
              </ul>
            </CollapsibleContent>
          </div>
        </Collapsible>
        </BlurFade>

      </div>

      <div id="skills" className="flex flex-col py-10 px-10">
        <BlurFade delay={0.25} inView>
          <h1 className="text-3xl font-bold">
            Skills
          </h1>
        </BlurFade>

        <BlurFade delay={0.5} inView>
          <div className="flex flex-row gap-4">
          <Badge>Javascript</Badge> <Badge>Next.js</Badge> <Badge>Java</Badge>  <Badge>Python</Badge> <Badge>C</Badge> <Badge>C++</Badge> <Badge>Swift</Badge>  <Badge>Xcode</Badge> <Badge>SQL</Badge> <Badge>Deno</Badge> <Badge>Node</Badge>  <Badge>Express</Badge>
          </div>
        </BlurFade>
      </div>

      <div id="projects" className="flex flex-col py-10 px-10 mb-20 justify-center items-center  gap-4 w-full">
        <BlurFade delay={0.25} inView>
          <h1 className="text-3xl font-bold">
            Projects
          </h1>
        </BlurFade>

        <div className="grid md:grid-cols-2 sm:grid-cols-1 grid-flow-row justify-center items-center gap-4">
        <BlurFade delay={0.5} inView>
        <ShineBorder
            className="relative flex h-[600px] w-[400px] flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
          >
        <Tabs defaultValue="info" className="w-[400px]">
          <Card className="bg-white shadow-md rounded-lg border border-gray-200 h-[600px]">
          <TabsList className="grid w-full grid-cols-2 bg-gray-100 rounded-t-lg">
            <TabsTrigger
              value="info"
              className="text-gray-700 font-medium data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:font-semibold rounded-lg py-2"
            >
              Info
            </TabsTrigger>
            <TabsTrigger
              value="details"
              className="text-gray-700 font-medium data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:font-semibold rounded-lg py-2"
            >
              Details
            </TabsTrigger>
          </TabsList>
            <CardHeader className="p-4 border-b border-gray-200">
              <CardTitle className="text-gray-900 font-semibold text-lg">Web Crawler and Search Engine</CardTitle>
            </CardHeader>
            <TabsContent value="info">
              <CardContent className="p-4 space-y-4">
                <div>
                  <p className="text-gray-700 font-medium">Timeline</p>
                  <p className="text-gray-600 text-sm">September 2023 – December 2023</p>
                </div>
                <div className="relative w-full max-w-xs mx-auto">
                  <Carousel className="w-full">
                    <CarouselContent>
                      <CarouselItem>
                        <div className="p-1 flex flex-row justify-center items-center">
                          <Image src="/webcrawler.png" alt="alt" width={400} height={200} />
                        </div>
                      </CarouselItem>
                      <CarouselItem>
                        <div className="p-1 flex flex-row justify-center items-center">
                          <Image src="/crawlCode.png" alt="alt" width={500} height={300} />
                        </div>
                      </CarouselItem>
                      <CarouselItem>
                        <div className="p-1 flex flex-row justify-center items-center">
                          <Image src="/crawlerCode.png" alt="alt" width={400} height={200} />
                        </div>
                      </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-gray-200 p-2 rounded-full shadow-md" />
                    <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-gray-200 p-2 rounded-full shadow-md" />
                  </Carousel>
                </div>
                <div>
                  <p className="text-gray-700 font-medium">Description</p>
                  <p className="text-gray-600 text-sm">A web crawler which extracts information from specific web pages then organizes the code to be searchable</p>
                </div>
              </CardContent>
            </TabsContent>
            <TabsContent value="details">
              <CardContent className="p-4 space-y-4">
                <div>
                  <p className="text-gray-700 font-medium">Technologies:</p>
                  <p className="text-gray-600 text-sm">Java, Javafx</p>
                </div>
                <div>
                  <p className="text-gray-700 font-medium">Details:</p>
                  <ul className="list-disc pl-5 text-gray-600 text-sm">
                  <li> Engineered a high-performance web crawler capable of extracting thousands of web pages within two minutes.</li>
                  <li> Designed and implemented a search engine utilizing algorithms such as PageRank and cosine similarity to efficiently search through the amassed data, delivering search results in seconds.</li>
                  </ul>
                </div>
                <div >
                  Links:
                  <Link className="flex flex-row gap-2" href="https://github.com/KassemT76/crawlerJava">
                      <Github></Github> https://github.com/KassemT76/crawlerJava
                  </Link>
                </div>
              </CardContent>
            </TabsContent>
          </Card>
        </Tabs>
        </ShineBorder>
        </BlurFade>

        <BlurFade delay={0.75} inView>
        <ShineBorder
            className="relative flex h-[600px] w-[400px] flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
          >
        <Tabs defaultValue="info" className="w-[400px]">
          <Card className="bg-white shadow-md rounded-lg border border-gray-200 h-[600px]">
            <TabsList className="grid w-full grid-cols-2 bg-gray-100 rounded-t-lg">
              <TabsTrigger
                value="info"
                className="text-gray-700 font-medium data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:font-semibold rounded-lg py-2"
              >
                Info
              </TabsTrigger>
              <TabsTrigger
                value="details"
                className="text-gray-700 font-medium data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:font-semibold rounded-lg py-2"
              >
                Details
              </TabsTrigger>
            </TabsList>
            <CardHeader className="p-4 border-b border-gray-200">
              <CardTitle className="text-gray-900 font-semibold text-lg">Acadamate</CardTitle>
            </CardHeader>
            <TabsContent value="info">
              <CardContent className="p-4 space-y-4">
                <div>
                  <p className="text-gray-700 font-medium">Timeline</p>
                  <p className="text-gray-600 text-sm">June 2022 – August 2022</p>
                </div>
                <div className="relative w-full max-w-xs mx-auto">
                  <Carousel className="w-full">
                    <CarouselContent>
                       <CarouselItem>
                          <div className="p-1 flex flex-row justify-center items-center">
                            <Image src="/acadamate.jpg" alt="alt" width={300} height={200} />
                          </div>
                        </CarouselItem>
                        <CarouselItem>
                          <div className="p-1 flex flex-row justify-center items-center">
                            <Image src="/author.jpg" alt="alt" width={150} height={200} />
                          </div>
                        </CarouselItem>
                        <CarouselItem>
                          <div className="p-1 flex flex-row justify-center items-center">
                            <Image src="/posts.jpg" alt="alt" width={150} height={200} />
                          </div>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-gray-200 p-2 rounded-full shadow-md" />
                    <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-gray-200 p-2 rounded-full shadow-md" />
                  </Carousel>
                </div>
                <div>
                  <p className="text-gray-700 font-medium">Description</p>
                  <p className="text-gray-600 text-sm">
                    Developed an iOS social media app connecting students to collaborate academically.
                  </p>
                </div>
              </CardContent>
            </TabsContent>
            <TabsContent value="details">
              <CardContent className="p-4 space-y-4">
                <div>
                  <p className="text-gray-700 font-medium">Technologies Used:</p>
                  <p className="text-gray-600 text-sm">Swift, Xcode, Google Firebase</p>
                </div>
                <div>
                  <p className="text-gray-700 font-medium">Details:</p>
                  <ul className="list-disc pl-5 text-gray-600 text-sm">
                    <li>Developed features like message posting and infinite scroll.</li>
                    <li>Implemented core social media functionalities for academic collaboration.</li>
                  </ul>
                </div>
                <div >
                  Links:
                  <Link className="flex flex-row gap-2" href="https://github.com/KassemT76/coopProject">
                      <Github></Github> https://github.com/KassemT76/coopProject
                  </Link>
                </div>
              </CardContent>
            </TabsContent>
          </Card>
        </Tabs>
        </ShineBorder>
        </BlurFade>

        <Tabs defaultValue="info" className="w-[400px]">
          <Card className="bg-white shadow-md rounded-lg border border-gray-200 h-[600px] relative">
            <TabsList className="grid w-full grid-cols-2 bg-gray-100 rounded-t-lg">
              <TabsTrigger
                value="info"
                className="text-gray-700 font-medium data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:font-semibold rounded-lg py-2"
              >
                Info
              </TabsTrigger>
              <TabsTrigger
                value="details"
                className="text-gray-700 font-medium data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:font-semibold rounded-lg py-2"
              >
                Details
              </TabsTrigger>
            </TabsList>
            <CardHeader className="p-4 border-b border-gray-200">
              <CardTitle className="text-gray-900 font-semibold text-lg">More to come...</CardTitle>
            </CardHeader>
            <TabsContent value="info">
              <CardContent className="p-4 space-y-4">
                <div>
                  <p className="text-gray-700 font-medium">Still need to transcribe my old projects and organize them </p>
                </div>
              </CardContent>
            </TabsContent>
            <TabsContent value="details">
              <CardContent className="p-4 space-y-4">
                <div>
                  BE PATIENT!
                </div>
              </CardContent>
            </TabsContent>
          </Card>
        </Tabs>


        </div>
        

      </div>
    </div>
    </div>
    
  );
}

