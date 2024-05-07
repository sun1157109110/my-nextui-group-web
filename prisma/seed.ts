import { faker } from '@faker-js/faker';
import { News_Type, Role, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function main() {
  await prisma.members.deleteMany()
  await prisma.news.deleteMany()
  const news1 = await prisma.news.create({
    data: {
      content: 'test',
      title: 'test11',
      type: News_Type.PUBLISH,
      href: ' ',
      views: 1,
      time: new Date(),
    }
  })
  const professor = await prisma.members.create({
    data: {
      name: faker.person.fullName(),
      description: faker.person.jobDescriptor(),
      phoneNumber: faker.phone.number(),
      avatar: faker.image.avatar(),
      role: Role.MASTER,
      email: faker.internet.email()
    }
  });
  const phd = await prisma.members.create({
    data: {
      name: faker.person.fullName(),
      description: faker.person.jobDescriptor(),
      phoneNumber: faker.phone.number(),
      avatar: faker.image.avatar(),
      role: Role.PHD,
      email: faker.internet.email()
    }
  })
  const master = await prisma.members.createMany({
    data: [{
      name: faker.person.fullName(),
      description: faker.person.jobDescriptor(),
      phoneNumber: faker.phone.number(),
      avatar: faker.image.avatar(),
      role: Role.MASTER,
      email: faker.internet.email()
    }, {
      name: faker.person.fullName(),
      description: faker.person.jobDescriptor(),
      phoneNumber: faker.phone.number(),
      avatar: faker.image.avatar(),
      role: Role.MASTER,
      email: faker.internet.email()
    }, {
      name: faker.person.fullName(),
      description: faker.person.jobDescriptor(),
      phoneNumber: faker.phone.number(),
      avatar: faker.image.avatar(),
      role: Role.MASTER,
      email: faker.internet.email()
    }]
  })
  console.log(news1);

}
main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });