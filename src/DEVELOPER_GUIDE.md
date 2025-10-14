# Developer Quick Reference Guide

## 🎨 Color Palette - Quick Reference

### Teal/Cyan Theme
```css
/* Primary Colors */
--deep-teal: #0F766E;     /* Headings, CTAs, Dark accents */
--teal: #14B8A6;           /* Secondary elements, hover states */
--cyan: #06B6D4;           /* Text accents, interactive elements */
--light-cyan: #22D3EE;     /* Highlights, gradients, active states */
```

### Common Gradient Patterns
```tsx
// Primary Gradient
className="bg-gradient-to-r from-[#0F766E] via-[#14B8A6] to-[#22D3EE]"

// Text Gradient
className="bg-gradient-to-br from-[#0F766E] to-[#22D3EE] bg-clip-text text-transparent"

// Subtle Background
className="bg-gradient-to-b from-white via-[#22D3EE]/5 to-white"

// Overlay
className="bg-gradient-to-br from-[#0F766E]/95 via-[#14B8A6]/90 to-[#22D3EE]/85"
```

---

## 🧩 Component Import Reference

### Custom Components
```tsx
// Buttons & Interactions
import { AnimatedButton } from "./components/AnimatedButton";

// Service Display
import { ServiceFlower } from "./components/ServiceFlower";
import { ServiceImageCards } from "./components/ServiceImageCards";

// Statistics & Data
import { CountCard } from "./components/CountCard";
import { DistrictStatsBox } from "./components/DistrictStatsBox";

// Navigation
import { Navbar } from "./components/Navbar";
import { HomeSidebar } from "./components/HomeSidebar";

// Maps
import { MaharashtraMapSimple } from "./components/MaharashtraMapSimple";

// Utility
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
```

### Shadcn UI Components
```tsx
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader } from "./components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "./components/ui/dialog";
import { Input } from "./components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
```

### Icons
```tsx
import { 
  ArrowRight, MapPin, TrendingUp, Building2, 
  Users, Briefcase, Mail, Phone, Clock,
  Linkedin, Twitter, Globe, Home
} from "lucide-react";
```

### Animation
```tsx
import { motion, useScroll, useTransform, useInView } from "motion/react";
```

---

## 🎬 Common Animation Patterns

### Fade In on Scroll
```tsx
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.8 }}
>
  {/* Content */}
</motion.div>
```

### Hover Scale
```tsx
<motion.div
  whileHover={{ scale: 1.05, y: -5 }}
  whileTap={{ scale: 0.98 }}
  transition={{ duration: 0.3 }}
>
  {/* Content */}
</motion.div>
```

### Stagger Children
```tsx
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
>
  {items.map((item, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      {/* Item content */}
    </motion.div>
  ))}
</motion.div>
```

### Parallax Scroll
```tsx
const ref = useRef<HTMLDivElement>(null);
const { scrollYProgress } = useScroll({
  target: ref,
  offset: ["start start", "end start"]
});

const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

<motion.div style={{ y, opacity }}>
  {/* Parallax content */}
</motion.div>
```

---

## 📐 Layout Patterns

### Section Container
```tsx
<section className="py-20 px-4 bg-gradient-to-b from-white to-[#22D3EE]/5">
  <div className="max-w-7xl mx-auto">
    {/* Content */}
  </div>
</section>
```

### Card with Hover Effect
```tsx
<motion.div
  whileHover={{ y: -8, scale: 1.05 }}
  className="relative group"
>
  {/* Glow effect */}
  <div className="absolute -inset-1 bg-gradient-to-br from-[#0F766E]/20 to-[#22D3EE]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  
  {/* Card content */}
  <div className="relative bg-white rounded-3xl border border-[#22D3EE]/20 shadow-xl hover:shadow-2xl transition-all p-6">
    {/* Content */}
  </div>
</motion.div>
```

### Grid Layout
```tsx
{/* 2 columns on mobile, 4 on desktop */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
  {items.map((item) => (
    <div key={item.id}>{/* Item */}</div>
  ))}
</div>

{/* Auto-fit responsive grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {items.map((item) => (
    <div key={item.id}>{/* Item */}</div>
  ))}
</div>
```

---

## 🎯 Button Variants

### AnimatedButton Usage
```tsx
// Primary (White bg, teal text)
<AnimatedButton variant="primary" onClick={handleClick}>
  Click Me
</AnimatedButton>

// Secondary (Cyan bg, white text)
<AnimatedButton variant="secondary" icon={<ArrowRight />}>
  Learn More
</AnimatedButton>

// Outline (Transparent, white border)
<AnimatedButton variant="outline">
  Explore
</AnimatedButton>

// Gradient (Teal to cyan)
<AnimatedButton variant="gradient" iconPosition="left" icon={<Mail />}>
  Contact Us
</AnimatedButton>

// Glass (Glassmorphism effect)
<AnimatedButton variant="glass">
  Get Started
</AnimatedButton>
```

---

## 📊 Statistics & Counters

### CountCard Implementation
```tsx
import { CountCard } from "./components/CountCard";
import { Building2 } from "lucide-react";

<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
  <CountCard
    icon={Building2}
    count={100}
    suffix="+"
    label="Municipal Councils"
    delay={0}
  />
  <CountCard
    icon={Globe}
    count={50}
    suffix="L+"
    label="Properties Surveyed"
    delay={0.1}
  />
</div>
```

---

## 🗺️ Interactive Map

### MaharashtraMapSimple Usage
```tsx
import { MaharashtraMapSimple } from "./components/MaharashtraMapSimple";

<MaharashtraMapSimple />
```

**Features:**
- Hover to highlight districts
- Click to select
- Shows district statistics
- Color-coded regions

---

## 🌸 Service Flower Component

### Basic Usage
```tsx
import { ServiceFlower } from "./components/ServiceFlower";

<ServiceFlower />
```

**User Interactions:**
- Click any petal to view service details
- Use center up/down buttons to scroll through services
- Selected service shows in right panel
- White border indicates current petal

**Customizing Services:**
Edit the `services` array in `ServiceFlower.tsx`:
```typescript
const services: Service[] = [
  {
    icon: Building2,
    title: "Your Service Name",
    description: "Service description",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    color: "#0F766E" // Use theme colors
  },
  // Add more services...
];
```

---

## 🖼️ Images

### Using ImageWithFallback
```tsx
import { ImageWithFallback } from "./components/figma/ImageWithFallback";

<ImageWithFallback
  src="https://images.unsplash.com/photo-..."
  alt="Description"
  className="w-full h-full object-cover rounded-xl"
/>
```

**Benefits:**
- Automatic fallback handling
- Loading states
- Error handling

---

## 📱 Responsive Design Utilities

### Common Breakpoint Patterns
```tsx
{/* Hide on mobile */}
<div className="hidden md:block">Desktop only</div>

{/* Show only on mobile */}
<div className="block md:hidden">Mobile only</div>

{/* Responsive text sizes */}
<h1 className="text-3xl md:text-5xl lg:text-6xl">
  Responsive Heading
</h1>

{/* Responsive padding */}
<div className="px-4 md:px-8 lg:px-12">
  Content
</div>

{/* Responsive flex direction */}
<div className="flex flex-col md:flex-row gap-6">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

---

## 🎨 Common CSS Classes

### Glass Effect
```tsx
className="bg-white/10 backdrop-blur-md border border-white/30"
```

### Shadow Levels
```tsx
className="shadow-lg"           // Medium shadow
className="shadow-xl"           // Large shadow
className="shadow-2xl"          // Extra large shadow
className="hover:shadow-2xl"    // Shadow on hover
```

### Rounded Corners
```tsx
className="rounded-lg"          // Large (10px)
className="rounded-xl"          // Extra large (12px)
className="rounded-2xl"         // 2X large (16px)
className="rounded-3xl"         // 3X large (24px)
className="rounded-full"        // Complete circle
```

### Opacity Levels
```tsx
className="opacity-0"           // Invisible
className="opacity-50"          // 50% transparent
className="opacity-75"          // 25% transparent
className="opacity-100"         // Fully visible
className="hover:opacity-80"    // Change on hover
```

---

## 🔄 State Management Patterns

### Local Component State
```tsx
const [isOpen, setIsOpen] = useState(false);
const [selectedItem, setSelectedItem] = useState<Item | null>(null);
const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: ""
});
```

### Refs for DOM Access
```tsx
const ref = useRef<HTMLDivElement>(null);
const containerRef = useRef<HTMLDivElement>(null);

// Scroll to element
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: 'smooth' });
};
```

### InView Detection
```tsx
import { useInView } from "motion/react";

const ref = useRef(null);
const isInView = useInView(ref, { 
  once: true, 
  margin: "-100px" 
});

<div ref={ref}>
  {isInView && <AnimatedContent />}
</div>
```

---

## 🔗 Navigation Patterns

### Link with React Router
```tsx
import { Link } from "react-router-dom";

<Link to="/about">
  <AnimatedButton variant="secondary">
    Learn More
  </AnimatedButton>
</Link>
```

### Smooth Scroll to Section
```tsx
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};

<button onClick={() => scrollToSection('services')}>
  View Services
</button>
```

---

## 🐛 Debugging Tips

### Check Animation Performance
```tsx
// Add this to see animation frames
<motion.div
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
  onAnimationStart={() => console.log("Animation started")}
  onAnimationComplete={() => console.log("Animation completed")}
>
```

### Viewport Debugging
```tsx
// See when element enters viewport
<motion.div
  whileInView={{ opacity: 1 }}
  viewport={{ once: true, margin: "-100px" }}
  onViewportEnter={() => console.log("Entered viewport")}
  onViewportLeave={() => console.log("Left viewport")}
>
```

---

## 📝 Code Style Guidelines

### Naming Conventions
- **Components:** PascalCase (`ServiceFlower`, `AnimatedButton`)
- **Functions:** camelCase (`scrollToSection`, `handleClick`)
- **Constants:** UPPER_SNAKE_CASE (`MAX_ITEMS`, `DEFAULT_THEME`)
- **CSS Classes:** kebab-case (built-in with Tailwind)

### File Organization
```
components/
  ├── ComponentName.tsx        # Component file
  ├── ui/                      # Shadcn components
  └── figma/                   # Figma-specific utilities
```

### Component Structure
```tsx
// 1. Imports
import { useState } from "react";
import { motion } from "motion/react";

// 2. Types/Interfaces
interface Props {
  title: string;
  children: ReactNode;
}

// 3. Component
export function ComponentName({ title, children }: Props) {
  // 4. State and hooks
  const [state, setState] = useState(false);
  
  // 5. Event handlers
  const handleClick = () => {
    setState(true);
  };
  
  // 6. Render
  return (
    <div>
      {/* JSX */}
    </div>
  );
}
```

---

## 🚀 Quick Commands

```bash
# Development
npm run dev              # Start dev server
npm run build           # Build for production
npm run preview         # Preview production build

# Code Quality
npm run lint            # Run ESLint
npm run type-check      # TypeScript checking

# Deployment
npm run build           # Build
# Then deploy 'dist' folder to hosting
```

---

## 📚 Useful Resources

- **Tailwind CSS:** https://tailwindcss.com/docs
- **Motion/React:** https://motion.dev/docs
- **Lucide Icons:** https://lucide.dev/icons
- **React Router:** https://reactrouter.com
- **Shadcn/UI:** https://ui.shadcn.com

---

**Quick Tip:** Keep this guide open in a second monitor while developing for quick reference to color codes, animation patterns, and component APIs!
