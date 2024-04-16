import { prisma } from '../src/lib/prisma'

async function seed() {
   await prisma.event.create({
      data: {
         id: "4e6e8f77-7ee0-4bdc-8914-18b9f6aa604e",
         title: 'AdriHalloween',
         details: "O halloween da tropa",
         slug: "adrihalloween",
         maximumAttendees: 200,
      },
   })
}

seed().then(() => {
   console.log("Database seeded!")
   prisma.$disconnect()
})