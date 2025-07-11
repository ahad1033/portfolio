"use client";

import { animate } from "motion";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue } from "motion/react";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";

import { contactInfo, personalInfo } from "@/lib/data";

export function HeroSection() {
  const scrollToNext = () => {
    const nextSection = document.getElementById("experience");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  const nameTitle = "Hi I'm Ahad Ahamed Akash";

  const nameRef = useRef<HTMLSpanElement>(null);

  const progress = useMotionValue(0);

  const [doneTyping, setDoneTyping] = useState(false);

  useEffect(() => {
    const charDuration = 0.15;
    const totalDuration = nameTitle.length * charDuration;

    console.log("totalDuration: ", totalDuration);

    const controls = animate(progress, nameTitle.length, {
      duration: totalDuration,
      ease: "easeInOut",
      delay: 0.2,
      onUpdate: (v) => {
        if (nameRef.current) {
          nameRef.current.textContent = nameTitle.slice(0, Math.floor(v));
        }
      },
      onComplete: () => setDoneTyping(true),
    });

    return () => controls.stop();
  }, [progress]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-foreground dark:bg-background">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/90 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto py-32 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white"
            >
              <span
                ref={nameRef}
                className="font-heading gradient-text bg-clip-text text-transparent"
              >
                {nameTitle}
              </span>
            </motion.h1>

            <motion.h2
              className="text-xl sm:text-2xl lg:text-3xl font-medium mb-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={
                doneTyping ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ delay: doneTyping ? 0.4 : 0, duration: 0.8 }}
            >
              {personalInfo.title}
            </motion.h2>

            <motion.p
              className="text-muted dark:text-muted-foreground text-base md:text-lg sm:text-xl text-light/80 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={doneTyping ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }}
              transition={{ delay: doneTyping ? 0.6 : 0, duration: 0.8 }}
            >
              {personalInfo.subtitle}
            </motion.p>

            <motion.p
              className="text-muted dark:text-muted-foreground text-xs md:text-lg sm:text-xl text-light/80 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={doneTyping ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }}
              transition={{ delay: doneTyping ? 0.6 : 0, duration: 0.8 }}
            >
              {personalInfo.bio}
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={doneTyping ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }}
            transition={{ delay: doneTyping ? 0.9 : 0, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button
              size="lg"
              variant="outline"
              className="bg-accent-light hover:bg-accent text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href={personalInfo.resumeUrl} download>
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </a>
            </Button>

            <div className="flex items-center space-x-4">
              <motion.a
                href={contactInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              >
                <Github className="w-6 h-6 text-white" />
              </motion.a>

              <motion.a
                href={contactInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              >
                <Linkedin className="w-6 h-6 text-white" />
              </motion.a>

              <motion.a
                href={`mailto:${contactInfo.email}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              >
                <Mail className="w-6 h-6 text-white" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollToNext}
              className="animate-bounce text-white hover:bg-white/10 rounded-full p-2"
            >
              <ArrowDown className="w-6 h-6" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
