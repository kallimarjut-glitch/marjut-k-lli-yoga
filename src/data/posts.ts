import journal from "@/assets/blog-journal.jpg";
import morning from "@/assets/blog-morning.jpg";
import flowers from "@/assets/blog-flowers.jpg";

export type Post = {
  slug: string;
  image: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  content: string[];
};

export const posts: Post[] = [
  {
    slug: "five-small-rituals-spring",
    image: journal,
    category: "Mindfulness",
    date: "Apr 20, 2026",
    title: "Five small rituals that grounded me this spring",
    excerpt:
      "Tiny daily practices that quietly changed how I show up — for myself and for others.",
    content: [
      "Spring has a way of asking us to slow down even as everything around us speeds up. This season I leaned into five small rituals that reshaped my days without demanding too much of them.",
      "The first is the simplest: a few minutes of breath before reaching for my phone. Long inhale, longer exhale, repeated until my shoulders soften. It is a quiet way of telling my nervous system that it is safe to begin.",
      "The other four follow the same spirit — a morning glass of warm water, a short walk without headphones, a single page in my journal, and a gentle yin pose before bed. None of them are grand. Together, they have become the architecture of a softer life.",
    ],
  },
  {
    slug: "slow-morning-routine-anxious-minds",
    image: morning,
    category: "Wellness",
    date: "Apr 12, 2026",
    title: "A slow morning routine for anxious minds",
    excerpt:
      "How I trade the rush for ten honest minutes of breath, light and warmth.",
    content: [
      "When my mornings begin in a rush, my whole day carries that tempo. So I have learned to start the first ten minutes with intention, especially on days when anxiety arrives early.",
      "Light first — I open the curtains and let the morning in. Then warmth, usually a cup of something gentle in my hands. Then breath, slow and unhurried.",
      "Nothing here is a performance. It is permission to begin again, softly, before the world asks anything of me.",
    ],
  },
  {
    slug: "letting-softness-be-a-strength",
    image: flowers,
    category: "Self-care",
    date: "Apr 03, 2026",
    title: "Letting softness be a strength",
    excerpt:
      "Reflections on rest, boundaries and the quiet power of doing less.",
    content: [
      "For a long time I confused softness with weakness. I thought strength looked like pushing through, saying yes, holding it all together.",
      "Yin yoga taught me otherwise. Holding a shape with ease, breathing into the edges instead of forcing past them — that is its own kind of strength.",
      "Softness is a boundary. Softness is a choice to rest. Softness is the steady, quiet way I want to move through the rest of my life.",
    ],
  },
];

export const getPostBySlug = (slug: string) =>
  posts.find((p) => p.slug === slug);
