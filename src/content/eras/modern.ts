import { Era } from "@/lib/types";

export const MODERN_ERA: Era = {
  type: "era",
  title: "Modern India",
  slug: "modern",
  description:
    "The struggle for independence, the birth of a republic, and the shaping of contemporary India.",
  period: "1757 CE – Present",
  content: `
Modern India begins with the establishment of British colonial rule and encompasses 
the heroic freedom struggle, the birth of the world's largest democracy, and India's 
emergence as a major global power.

This era produced some of history's most influential leaders — from Mahatma Gandhi's 
philosophy of non-violence to Subhas Chandra Bose's militant resistance, and from 
Jawaharlal Nehru's vision of a secular republic to Sardar Patel's unification of 
the princely states.
  `.trim(),
  dynasties: [
    {
      type: "dynasty",
      title: "Freedom Movement",
      slug: "freedom-movement",
      description: "The organized resistance against British rule that led to India's independence.",
      period: "1857 CE – 1947 CE",
      founder: "Multiple leaders",
      capital: "Various centers",
      content: `
The Indian freedom movement was one of the most remarkable anti-colonial struggles 
in history. It combined mass civil disobedience, armed resistance, philosophical 
innovation, and political organizing on an unprecedented scale.
      `.trim(),
      events: [
        {
          type: "event",
          title: "Indian Independence",
          slug: "independence-1947",
          description: "India gains independence from British colonial rule.",
          year: "1947 CE",
          significance: "The birth of the world's largest democracy.",
          content: `
On August 15, 1947, India gained independence after nearly two centuries 
of British rule. The moment was bittersweet — independence was accompanied 
by the traumatic partition of the subcontinent into India and Pakistan.
          `.trim(),
          personalities: [],
        },
      ],
      personalities: [
        {
          type: "personality",
          title: "Mahatma Gandhi",
          slug: "gandhi",
          description: "The father of the nation who led India to independence through non-violence.",
          role: "Freedom Fighter & Philosopher",
          birthYear: "1869 CE",
          deathYear: "1948 CE",
          achievements: [
            "Led the Non-Cooperation Movement",
            "Led the Salt March (Dandi March)",
            "Pioneered Satyagraha as a form of resistance",
            "Inspired civil rights movements worldwide",
          ],
          content: `
Mohandas Karamchand Gandhi, known as Mahatma (Great Soul), transformed the Indian 
independence movement through his philosophy of non-violent civil disobedience. 
His methods inspired civil rights leaders around the world, including Martin Luther 
King Jr. and Nelson Mandela.
          `.trim(),
        },
      ],
    },
  ],
};
