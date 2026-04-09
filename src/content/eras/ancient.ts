import { Era } from "@/lib/types";

export const ANCIENT_ERA: Era = {
  type: "era",
  title: "Ancient India",
  slug: "ancient",
  description:
    "From the Indus Valley Civilization to the rise of the Gupta Empire — the dawn of a civilization that shaped philosophy, mathematics, and governance for millennia.",
  period: "3300 BCE – 500 CE",
  content: `
Ancient India encompasses one of the most transformative periods in human history. 
From the meticulously planned cities of the Indus Valley to the philosophical 
treatises of the Vedic period, and from the first great empire of the Mauryas 
to the golden age of the Guptas — this era laid the foundations of Indian civilization.

The ancient period witnessed the birth of Hinduism, Buddhism, and Jainism. 
It produced some of the world's earliest treatises on statecraft, astronomy, 
and medicine. The concept of zero, the decimal system, and Panini's grammar 
rules all emerged from this remarkable age.
  `.trim(),
  dynasties: [
    {
      type: "dynasty",
      title: "Maurya Dynasty",
      slug: "maurya",
      description:
        "The first great empire to unify most of the Indian subcontinent under a single administration.",
      period: "322 BCE – 185 BCE",
      founder: "Chandragupta Maurya",
      capital: "Pataliputra",
      content: `
The Maurya Empire was the first pan-Indian empire, stretching from the Hindu Kush 
mountains in the west to Bengal in the east, and from the Himalayas in the north 
to the Deccan plateau in the south.

Founded by Chandragupta Maurya with the strategic guidance of Chanakya, 
the empire reached its greatest extent under Emperor Ashoka. 
The Mauryan administration was remarkably sophisticated, with an elaborate 
bureaucracy, spy network, and systems of taxation documented in Kautilya's Arthashastra.
      `.trim(),
      events: [
        {
          type: "event",
          title: "The Rise of Chandragupta",
          slug: "rise-of-chandragupta",
          description:
            "Chandragupta Maurya overthrows the Nanda dynasty and establishes the Mauryan Empire.",
          year: "322 BCE",
          significance:
            "Marked the beginning of the first pan-Indian empire and centralized governance.",
          content: `
With the strategic brilliance of his mentor Chanakya, Chandragupta Maurya 
assembled an army and overthrew the Nanda dynasty, establishing the Mauryan Empire 
with its capital at Pataliputra (modern-day Patna). He later defeated the generals 
of Alexander the Great, reclaiming northwestern territories.
          `.trim(),
          personalities: [],
        },
        {
          type: "event",
          title: "Battle of Kalinga",
          slug: "battle-of-kalinga",
          description:
            "The devastating war that transformed Emperor Ashoka from a conqueror to a messenger of peace.",
          year: "261 BCE",
          significance:
            "One of the most consequential battles in world history — it led Ashoka to embrace Buddhism and non-violence.",
          content: `
The Kalinga War was fought between the Maurya Empire under Ashoka and the state 
of Kalinga (modern Odisha). The bloodshed was immense — ancient texts describe 
100,000 killed and 150,000 deported. The horrors of war deeply moved Ashoka, 
leading to his transformation and adoption of Dhamma (Buddhist principles).
          `.trim(),
          personalities: [],
        },
      ],
      personalities: [
        {
          type: "personality",
          title: "Chandragupta Maurya",
          slug: "chandragupta-maurya",
          description:
            "The founder of the Maurya Empire and one of the most powerful rulers in Indian history.",
          role: "Founder & Emperor",
          birthYear: "340 BCE",
          deathYear: "298 BCE",
          achievements: [
            "Founded the Maurya Empire",
            "Defeated the Nanda dynasty",
            "Repelled Greek forces from northwestern India",
            "Established a centralized bureaucratic administration",
          ],
          content: `
Chandragupta Maurya rose from humble origins to become one of India's greatest 
emperors. Guided by his legendary advisor Chanakya, he overthrew the corrupt 
Nanda dynasty and went on to build the most extensive empire India had seen.
          `.trim(),
        },
        {
          type: "personality",
          title: "Emperor Ashoka",
          slug: "ashoka",
          description:
            "The Mauryan emperor who renounced violence after the Kalinga War and became a champion of Buddhism.",
          role: "Emperor & Philosopher King",
          birthYear: "304 BCE",
          deathYear: "232 BCE",
          achievements: [
            "Expanded the Maurya Empire to its greatest extent",
            "Adopted and spread Buddhism across Asia",
            "Erected the famous Ashoka Pillars",
            "Promoted religious tolerance and welfare programs",
          ],
          content: `
Ashoka the Great is widely regarded as one of the most remarkable rulers in 
world history. After the brutal Kalinga War, he embraced Buddhism and devoted 
himself to Dhamma — a moral code of compassion, tolerance, and non-violence. 
His edicts, carved on pillars and rocks across the subcontinent, remain some 
of the earliest deciphered examples of Indian writing.
          `.trim(),
        },
        {
          type: "personality",
          title: "Chanakya",
          slug: "chanakya",
          description:
            "The legendary strategist and author of the Arthashastra, who masterminded the rise of the Maurya Empire.",
          role: "Chief Advisor & Political Philosopher",
          achievements: [
            "Authored the Arthashastra (treatise on statecraft)",
            "Mentored Chandragupta Maurya",
            "Designed the administrative framework of the Maurya Empire",
            "Pioneered concepts of economics and political science",
          ],
          content: `
Chanakya, also known as Kautilya, was a philosopher, economist, and royal advisor 
who played a pivotal role in establishing the Maurya Empire. His work, the Arthashastra, 
is one of the world's earliest treatises on political science, economics, and military 
strategy — often compared to Machiavelli's The Prince, written nearly two millennia later.
          `.trim(),
        },
      ],
    },
    {
      type: "dynasty",
      title: "Gupta Dynasty",
      slug: "gupta",
      description:
        "The golden age of Indian civilization — an era of unprecedented advancement in arts, science, and philosophy.",
      period: "320 CE – 550 CE",
      founder: "Sri Gupta",
      capital: "Pataliputra",
      content: `
The Gupta Empire is often called the Golden Age of India. It was a period of 
extraordinary achievement in mathematics, astronomy, art, literature, and philosophy. 
The concept of zero, the decimal system, and the works of Kalidasa all flourished 
under Gupta patronage.
      `.trim(),
      events: [
        {
          type: "event",
          title: "Establishment of the Gupta Empire",
          slug: "gupta-founding",
          description:
            "Chandragupta I establishes the Gupta dynasty, ushering in the Golden Age of India.",
          year: "320 CE",
          significance:
            "Began a period of cultural and scientific renaissance in India.",
          content: `
Chandragupta I married the Lichchhavi princess Kumaradevi and established 
the Gupta dynasty with its power base in Magadha. His strategic alliances 
and expansion laid the groundwork for the golden age that would follow.
          `.trim(),
          personalities: [],
        },
      ],
      personalities: [
        {
          type: "personality",
          title: "Aryabhata",
          slug: "aryabhata",
          description:
            "The pioneering mathematician and astronomer of the Gupta period.",
          role: "Mathematician & Astronomer",
          birthYear: "476 CE",
          deathYear: "550 CE",
          achievements: [
            "Introduced the concept of zero as a placeholder",
            "Calculated the value of pi to remarkable accuracy",
            "Proposed that the Earth rotates on its axis",
            "Authored the Aryabhatiya, a foundational mathematical text",
          ],
          content: `
Aryabhata was one of the greatest mathematicians and astronomers of the ancient 
world. Working at the university of Nalanda during the Gupta period, he made 
groundbreaking contributions to mathematics and astronomy that would influence 
scholars across the world for centuries.
          `.trim(),
        },
      ],
    },
  ],
};
