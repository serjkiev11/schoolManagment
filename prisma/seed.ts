import { WeekDay, PrismaClient, UserSex } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  // ADMIN
  await prisma.admin.create({
    data: {
      id: 'admin1',
      username: 'admin1',
    },
  })
  await prisma.admin.create({
    data: {
      id: 'admin2',
      username: 'admin2',
    },
  })

  // GRADE
  for (let i = 1; i <= 6; i++) {
    await prisma.grade.create({
      data: {
        level: i,
      },
    })
  }

  // CLASS
  const createdGrades = await prisma.grade.findMany({ select: { id: true } })
  for (let i = 0; i < 6; i++) {
    await prisma.class.create({
      data: {
        name: `${i + 1}A`,
        gradeId: createdGrades[i].id,
        capacity: Math.floor(Math.random() * (20 - 15 + 1)) + 15,
      },
    })
  }

  // SUBJECT
  const subjectData = [
    { name: 'Mathematics' },
    { name: 'Science' },
    { name: 'English' },
    { name: 'History' },
    { name: 'Geography' },
    { name: 'Physics' },
    { name: 'Chemistry' },
    { name: 'Biology' },
    { name: 'Computer Science' },
    { name: 'Art' },
  ]

  for (const subject of subjectData) {
    await prisma.subject.create({ data: subject })
  }

  // TEACHER
  for (let i = 1; i <= 15; i++) {
    await prisma.teacher.create({
      data: {
        id: `teacher${i}`, // Unique ID for the teacher
        username: `teacher${i}`,
        name: `TName${i}`,
        surname: `TSurname${i}`,
        email: `teacher${i}@example.com`,
        phone: `123-456-789${i}`,
        address: `Address${i}`,
        bloodType: 'A+',
        sex: i % 2 === 0 ? UserSex.MALE : UserSex.FEMALE,
      },
    })
  }

  // Create arrays to store created IDs
  const subjectIds: string[] = []
  const classIds: string[] = []

  // Get created subject IDs
  const subjects = await prisma.subject.findMany({ select: { id: true } })
  subjectIds.push(...subjects.map((s) => s.id))

  // Get created class IDs
  const classes = await prisma.class.findMany({ select: { id: true } })
  classIds.push(...classes.map((c) => c.id))

  // LESSON
  for (let i = 1; i <= 30; i++) {
    await prisma.lesson.create({
      data: {
        name: `Lesson${i}`,
        day: WeekDay[
          Object.keys(WeekDay)[
            Math.floor(Math.random() * Object.keys(WeekDay).length)
          ] as keyof typeof WeekDay
        ],
        startTime: new Date(new Date().setHours(new Date().getHours() + 1)),
        endTime: new Date(new Date().setHours(new Date().getHours() + 3)),
        subjectId: subjectIds[i % subjectIds.length],
        classId: classIds[i % classIds.length],
        teacherId: `teacher${(i % 15) + 1}`,
      },
    })
  }

  // PARENT
  for (let i = 1; i <= 25; i++) {
    await prisma.parent.create({
      data: {
        id: `parentId${i}`,
        username: `parentId${i}`,
        name: `PName ${i}`,
        surname: `PSurname ${i}`,
        email: `parent${i}@example.com`,
        phone: `123-456-789${i}`,
        address: `Address${i}`,
      },
    })
  }

  // Get grade IDs
  const grades = await prisma.grade.findMany({ select: { id: true } })
  const gradeIds = grades.map((g) => g.id)

  // STUDENT
  for (let i = 1; i <= 50; i++) {
    await prisma.student.create({
      data: {
        id: `student${i}`,
        username: `student${i}`,
        name: `SName${i}`,
        surname: `SSurname ${i}`,
        email: `student${i}@example.com`,
        phone: `987-654-321${i}`,
        address: `Address${i}`,
        bloodType: 'O-',
        sex: i % 2 === 0 ? UserSex.MALE : UserSex.FEMALE,
        parentId: `parentId${Math.ceil(i / 2) % 25 || 25}`,
        gradeId: gradeIds[i % gradeIds.length],
        classId: classIds[i % classIds.length],
      },
    })
  }

  // Get lesson IDs
  const lessons = await prisma.lesson.findMany({ select: { id: true } })
  const lessonIds = lessons.map((l) => l.id)

  // EXAM
  for (let i = 1; i <= 10; i++) {
    await prisma.exam.create({
      data: {
        title: `Exam ${i}`,
        startTime: new Date(new Date().setHours(new Date().getHours() + 1)),
        endTime: new Date(new Date().setHours(new Date().getHours() + 2)),
        lessonId: lessonIds[i % lessonIds.length],
      },
    })
  }

  // ASSIGNMENT
  for (let i = 1; i <= 10; i++) {
    await prisma.assignment.create({
      data: {
        title: `Assignment ${i}`,
        startDate: new Date(new Date().setHours(new Date().getHours() + 1)),
        dueDate: new Date(new Date().setDate(new Date().getDate() + 1)),
        lessonId: lessonIds[i % lessonIds.length],
      },
    })
  }

  // Get exam and assignment IDs
  const exams = await prisma.exam.findMany({ select: { id: true } })
  const examIds = exams.map((e) => e.id)
  const assignments = await prisma.assignment.findMany({ select: { id: true } })
  const assignmentIds = assignments.map((a) => a.id)

  // RESULT
  for (let i = 1; i <= 10; i++) {
    await prisma.result.create({
      data: {
        score: 90,
        studentId: `student${i}`,
        ...(i <= 5
          ? { examId: examIds[i - 1] }
          : { assignmentId: assignmentIds[i - 6] }),
      },
    })
  }

  // ATTENDANCE
  for (let i = 1; i <= 10; i++) {
    await prisma.attendance.create({
      data: {
        date: new Date(),
        present: true,
        studentId: `student${i}`,
        lessonId: lessonIds[i % lessonIds.length],
      },
    })
  }

  // EVENT
  for (let i = 1; i <= 5; i++) {
    await prisma.event.create({
      data: {
        title: `Event ${i}`,
        description: `Description for Event ${i}`,
        startTime: new Date(new Date().setHours(new Date().getHours() + 1)),
        endTime: new Date(new Date().setHours(new Date().getHours() + 2)),
        classId: classIds[i % classIds.length],
      },
    })
  }

  // ANNOUNCEMENT
  for (let i = 1; i <= 5; i++) {
    await prisma.announcement.create({
      data: {
        date: new Date(),
        classId: classIds[i % classIds.length],
      },
    })
  }

  console.log('Seeding completed successfully.')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
