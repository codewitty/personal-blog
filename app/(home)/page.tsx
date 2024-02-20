import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { GithubIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="text-2xl mb-8 font-medium">Hey, I&apos;m Joshua</div>
      <div className="flex flex-col gap-4 prose dark:prose-invert prose-p:m-0">
        <p>
          I'm a Software Engineer and tech enthusiast with a background that might surprise you. 
          Driven by a sense of adventure, I began my professional career as a Merchant Navy Officer, navigating midnight storms,
          facing down the threat of piracy, and exploring the world's most remote corners.
          I am a software engineer with a strong background in full-stack
          development and data structures. I am a passionate and highly skilled
          software engineer with a robust foundation in full-stack development
          and a deep understanding of data structures.
        </p>
        <p>
          Yet, even amidst the vastness of the ocean, a different curiosity grew within me. 
          My time on board introduced me to the pervasive hum of technology. 
          From the autopilot seamlessly guiding the ship to the intricate digital displays of the ECDIS plotting our course, 
          computers were interwoven into the fabric of our work.  
          Observing their precision sparked a new intrigue; 
          I found myself craving to understand the language behind these systems, 
          the logic that brought them to life.  
          This ignited a desire to shift my focus, to explore the world of programming and become a creator of such transformative digital solutions.
        </p>
        <p>
        Inspired to do more than simply navigate, I envisioned using programming to design solutions, forge connections, and bring ideas to life that could have a positive impact. This vision drove me to chart a new course, swapping sextants and nautical charts for code and compilers. Now, lines of code are my instruments of creation. Within the world of ones and zeros, I strive to build experiences that leave a positive ripple in the lives of others.
        </p>
        Currently, I work at Codex Health Inc., where I collaborate with a team dedicated to transforming healthcare with AI-powered solutions. Our flagship product is an AI-based virtual care assistant,  empowering personalized and proactive care that extends beyond the clinical setting. With cutting-edge AI, we identify at-risk patients and facilitate timely interventions, empowering providers to make informed decisions with rich, longitudinal data. At Codex, I see how my code builds a foundation for compassionate, scalable care that directly improves lives.
        <p>
        
        </p>
      </div>
      <div className="flex flex-row items-center mt-5 -ml-3">
        <Link
          href="https://github.com/codewitty"
          className={cn(buttonVariants({ variant: "link" }), "text-inherit")}
        >
          <GithubIcon className="mr-1 w-5 h-5" /> GitHub
        </Link>
        <Link
          href="https://twitter.com/codewitty_"
          className={cn(
            buttonVariants({ variant: "link" }),
            "text-inherit -ml-3"
          )}
        >
          <TwitterIcon className="mr-1 w-5 h-5" /> Twitter
        </Link>
      </div>
    </div>
  );
}
