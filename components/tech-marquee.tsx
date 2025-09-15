"use client";
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/ui/marquee";
import StackIcon from "tech-stack-icons";

const technologies = [
  { name: "React", icon: <StackIcon name='react' /> },
  { name: "Next", icon: <StackIcon name='nextjs' /> },
  { name: "Express", icon: <StackIcon name='expressjs' /> },
  { name: "Nest", icon: <StackIcon name='nestjs' /> },
  { name: "Go", icon: <StackIcon name='go' /> },
  { name: "Node.js", icon: <StackIcon name='nodejs' /> },
  { name: "TypeScript", icon: <StackIcon name='typescript' /> },
  { name: "Docker", icon: <StackIcon name='docker' /> },
  { name: "Kubernetes", icon: <StackIcon name='kubernetes' /> },
  { name: "AWS", icon: <StackIcon name='aws' /> },
  { name: "MongoDB", icon: <StackIcon name='mongodb' /> },
  { name: "PostgreSQL", icon: <StackIcon name='postgresql' /> },
  { name: "Redis", icon: <StackIcon name='redis' /> },
  { name: "Figma", icon: <StackIcon name='figma' /> },
  { name: "Github", icon: <StackIcon name='github' /> },
  { name: "Laravel", icon: <StackIcon name='laravel' /> },
  { name: "Jira", icon: <StackIcon name='jira' /> },
];

const TechMarquee = () => (
  <div className='w-full max-w-full bg-background'>
    <Marquee>
      <MarqueeFade side='left' />
      <MarqueeFade side='right' />
      <MarqueeContent>
        {technologies.map((value, index) => (
          <MarqueeItem
            className='h-16 w-16 md:h-24 md:w-24 flex items-center justify-center transition-all duration-300 p-2'
            key={index}
          >
            <div className='grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300'>
              {value.icon}
            </div>
          </MarqueeItem>
        ))}
      </MarqueeContent>
    </Marquee>
  </div>
);

export default TechMarquee;
