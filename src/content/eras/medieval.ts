import { Era } from "@/lib/types";

export const MEDIEVAL_ERA: Era = {
  type: "era",
  title: "Medieval India",
  slug: "medieval",
  description:
    "The age of Rajput valor, the Delhi Sultanate, and the magnificent Mughal Empire — a period of cultural synthesis and architectural marvels.",
  period: "500 CE – 1757 CE",
  content: `
Medieval India was a period of immense cultural synthesis. The arrival of Islam 
brought new architectural styles, literary traditions, and artistic forms that 
blended with existing Indian traditions to create something uniquely beautiful.

From the Rajput kingdoms of Rajasthan to the grandeur of the Mughal court, 
this era produced the Taj Mahal, the Red Fort, and countless other monuments 
that continue to define India's architectural identity.
  `.trim(),
  dynasties: [
    {
      type: "dynasty",
      title: "Mughal Dynasty",
      slug: "mughal",
      description:
        "One of the most powerful empires in world history, renowned for art, architecture, and administration.",
      period: "1526 CE – 1857 CE",
      founder: "Babur",
      capital: "Agra / Delhi",
      content: `
The Mughal Empire at its zenith ruled over nearly the entire Indian subcontinent 
and was one of the largest economies in the world. The Mughals are remembered 
for their extraordinary contributions to art, architecture, and culture.
      `.trim(),
      events: [
        {
          type: "event",
          title: "First Battle of Panipat",
          slug: "first-battle-panipat",
          description:
            "Babur defeats Ibrahim Lodi, establishing Mughal rule in India.",
          year: "1526 CE",
          significance:
            "Marked the beginning of the Mughal Empire in India.",
          content: `
Babur, a descendant of both Timur and Genghis Khan, defeated the much larger 
army of Ibrahim Lodi at Panipat using superior tactics and gunpowder weapons. 
This decisive battle established Mughal rule in India.
          `.trim(),
          personalities: [],
        },
      ],
      personalities: [
        {
          type: "personality",
          title: "Akbar the Great",
          slug: "akbar",
          description:
            "The Mughal emperor who unified India through tolerance, diplomacy, and administrative genius.",
          role: "Emperor & Reformer",
          birthYear: "1542 CE",
          deathYear: "1605 CE",
          achievements: [
            "Established Din-i-Ilahi, a syncretic religion",
            "Abolished the jizya tax on non-Muslims",
            "Created the Mansabdari administrative system",
            "Patronized arts, music, and architecture",
          ],
          content: `
Akbar is widely considered the greatest of the Mughal emperors. His policy of 
religious tolerance, administrative reforms, and cultural patronage created 
a period of stability and prosperity that allowed the arts and sciences to flourish.
          `.trim(),
        },
      ],
    },
  ],
};
