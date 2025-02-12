"use client";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { projects } from "@/data/data";

function Project() {
  return <AnimatedTestimonials testimonials={projects} />;
}
export default Project;
