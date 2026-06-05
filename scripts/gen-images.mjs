// Downloads free, license-friendly stock photos from the web (Unsplash CDN —
// no API key required) into the public image folders. Re-run any time:
//   node scripts/gen-images.mjs
//
// Unsplash photos are free to use (https://unsplash.com/license). Swap any `url`
// below for a different Unsplash photo id to change the imagery.
import { mkdir, writeFile } from 'node:fs/promises'
import { dirname } from 'node:path'

const jobs = [
  {
    file: 'public/images/services/studio.jpg',
    // "team collaborating in a studio" — Annie Spratt
    url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=900&fit=crop&q=80',
  },
  {
    file: 'public/images/services/build.jpg',
    // "laptop with code" — Clément Hélardot
    url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=900&fit=crop&q=80',
  },
  {
    file: 'public/images/solutions/dashboard.jpg',
    // "analytics dashboard on a laptop" — Luke Chesser
    url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1280&h=800&fit=crop&q=80',
  },
  {
    file: 'public/images/solutions/assistant.jpg',
    // "person working on a laptop" — Christin Hume
    url: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=900&fit=crop&q=80',
  },

  // Industries mosaic
  {
    file: 'public/images/industries/proptech.jpg',
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1000&h=1000&fit=crop&q=80',
  },
  {
    file: 'public/images/industries/fintech.jpg',
    url: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1000&h=700&fit=crop&q=80',
  },
  {
    file: 'public/images/industries/logistics.jpg',
    url: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=700&fit=crop&q=80',
  },
  {
    file: 'public/images/industries/manufacturing.jpg',
    url: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=700&fit=crop&q=80',
  },
  {
    file: 'public/images/industries/healthcare.jpg',
    url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1000&h=700&fit=crop&q=80',
  },
  {
    file: 'public/images/industries/retail.jpg',
    url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1000&h=700&fit=crop&q=80',
  },

  // Technologies
  {
    file: 'public/images/technologies/workspace.jpg',
    // "code on a monitor" — Christopher Gower
    url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1100&h=900&fit=crop&q=80',
  },

  // Work — one cover photo per case study
  {
    file: 'public/images/work/flaree.jpg', // HR Tech — team
    url: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&h=560&fit=crop&q=80',
  },
  {
    file: 'public/images/work/pulsedate.jpg', // Social — phones
    url: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=560&fit=crop&q=80',
  },
  {
    file: 'public/images/work/sendwise.jpg', // Fintech — finance
    url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=560&fit=crop&q=80',
  },
  {
    file: 'public/images/work/assetiq.jpg', // Proptech — architecture
    url: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=560&fit=crop&q=80',
  },
  {
    file: 'public/images/work/routecast.jpg', // Logistics — containers
    url: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&h=560&fit=crop&q=80',
  },
  {
    file: 'public/images/work/mr-agent.jpg', // AI — abstract
    url: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=560&fit=crop&q=80',
  },

  // About — story collage
  {
    file: 'public/images/about/studio-a.jpg',
    url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&q=80',
  },
  {
    file: 'public/images/about/studio-b.jpg',
    url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop&q=80',
  },
  // About — leadership portraits
  {
    file: 'public/images/about/team-1.jpg',
    url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&q=80',
  },
  {
    file: 'public/images/about/team-2.jpg',
    url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&q=80',
  },
  {
    file: 'public/images/about/team-3.jpg',
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80',
  },
  {
    file: 'public/images/about/team-4.jpg',
    url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&q=80',
  },
  {
    file: 'public/images/about/team-5.jpg',
    url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&q=80',
  },
  {
    file: 'public/images/about/team-6.jpg',
    url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&q=80',
  },

  // Insights — post-1 is the large featured image, the rest are thumbnails
  {
    file: 'public/images/insights/post-1.jpg', // AI agents (featured)
    url: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=720&fit=crop&q=80',
  },
  {
    file: 'public/images/insights/post-2.jpg', // architecture / servers
    url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=400&fit=crop&q=80',
  },
  {
    file: 'public/images/insights/post-3.jpg', // process / planning
    url: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=400&h=400&fit=crop&q=80',
  },
  {
    file: 'public/images/insights/post-4.jpg', // RAG / code
    url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=400&fit=crop&q=80',
  },
  {
    file: 'public/images/insights/post-5.jpg', // mobile devops
    url: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=400&fit=crop&q=80',
  },
  {
    file: 'public/images/insights/post-6.jpg', // data
    url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop&q=80',
  },

  // Careers — "life here" culture ribbon
  {
    file: 'public/images/careers/culture-1.jpg',
    url: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=480&h=360&fit=crop&q=80',
  },
  {
    file: 'public/images/careers/culture-2.jpg',
    url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=480&h=360&fit=crop&q=80',
  },
  {
    file: 'public/images/careers/culture-3.jpg',
    url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=480&h=360&fit=crop&q=80',
  },
  {
    file: 'public/images/careers/culture-4.jpg',
    url: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=480&h=360&fit=crop&q=80',
  },
  {
    file: 'public/images/careers/culture-5.jpg',
    url: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=480&h=360&fit=crop&q=80',
  },
  {
    file: 'public/images/careers/culture-6.jpg',
    url: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=480&h=360&fit=crop&q=80',
  },
]

for (const job of jobs) {
  process.stdout.write(`Fetching ${job.file} ... `)
  try {
    const res = await fetch(job.url)
    if (!res.ok) {
      console.log(`FAILED (HTTP ${res.status})`)
      continue
    }
    const buf = Buffer.from(await res.arrayBuffer())
    await mkdir(dirname(job.file), { recursive: true })
    await writeFile(job.file, buf)
    console.log(`done (${Math.round(buf.length / 1024)} KB)`)
  } catch (err) {
    console.log(`ERROR ${err.message}`)
  }
}
