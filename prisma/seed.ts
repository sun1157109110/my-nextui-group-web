import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();
enum News_Type {
  ACTIVITY = 'ACTIVITY',
  LECTURE = 'LECTURE',
  PUBLISH = 'PUBLISH'
}
enum Role {
  PROFESSOR = "PROFESSOR",
  PHD = "PHD",
  MASTER = "MASTER",
  GRADUATE = "MASTER",
}
async function main() {
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
  const user = await prisma.members.create({
    data:{
      name:'jason',
      description:'test',
      phoneNumber:'111111',
      role:Role.MASTER,
      email:'1111@qq.com'
    }
  })
  console.log(news1,user);

}
main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });