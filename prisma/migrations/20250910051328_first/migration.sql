-- CreateEnum
CREATE TYPE "public"."UserSex" AS ENUM ('MALE', 'FEMALE');

-- CreateEnum
CREATE TYPE "public"."WeekDay" AS ENUM ('MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY');

-- CreateTable
CREATE TABLE "public"."admin" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."student" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "address" TEXT NOT NULL,
    "img" TEXT,
    "bloodType" TEXT NOT NULL,
    "sex" "public"."UserSex" NOT NULL,
    "parentId" TEXT NOT NULL,
    "classId" TEXT,
    "gradeId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."parent" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "parent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."teacher" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "address" TEXT NOT NULL,
    "img" TEXT,
    "bloodType" TEXT NOT NULL,
    "sex" "public"."UserSex" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "teacher_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."subject" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "teacherId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "subject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."lesson" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "day" "public"."WeekDay" NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "subjectId" TEXT NOT NULL,
    "classId" TEXT NOT NULL,
    "teacherId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "lesson_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."class" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL,
    "teacherId" TEXT,
    "gradeId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "class_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."grade" (
    "id" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "grade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."exam" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "lessonId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "exam_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."assignment" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "dueDate" TIMESTAMP(3) NOT NULL,
    "lessonId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "assignment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."result" (
    "id" TEXT NOT NULL,
    "score" INTEGER NOT NULL,
    "examId" TEXT,
    "assignmentId" TEXT,
    "studentId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "result_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."attendance" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "present" BOOLEAN NOT NULL,
    "studentId" TEXT,
    "lessonId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "attendance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."event" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "classId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."announcement" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "classId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "announcement_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "admin_username_key" ON "public"."admin"("username");

-- CreateIndex
CREATE UNIQUE INDEX "student_username_key" ON "public"."student"("username");

-- CreateIndex
CREATE UNIQUE INDEX "parent_username_key" ON "public"."parent"("username");

-- CreateIndex
CREATE UNIQUE INDEX "parent_email_key" ON "public"."parent"("email");

-- CreateIndex
CREATE UNIQUE INDEX "parent_phone_key" ON "public"."parent"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "teacher_username_key" ON "public"."teacher"("username");

-- CreateIndex
CREATE UNIQUE INDEX "teacher_email_key" ON "public"."teacher"("email");

-- CreateIndex
CREATE UNIQUE INDEX "teacher_phone_key" ON "public"."teacher"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "subject_name_key" ON "public"."subject"("name");

-- CreateIndex
CREATE UNIQUE INDEX "class_name_key" ON "public"."class"("name");

-- CreateIndex
CREATE UNIQUE INDEX "grade_level_key" ON "public"."grade"("level");

-- AddForeignKey
ALTER TABLE "public"."student" ADD CONSTRAINT "student_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "public"."parent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."student" ADD CONSTRAINT "student_classId_fkey" FOREIGN KEY ("classId") REFERENCES "public"."class"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."student" ADD CONSTRAINT "student_gradeId_fkey" FOREIGN KEY ("gradeId") REFERENCES "public"."grade"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."subject" ADD CONSTRAINT "subject_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "public"."teacher"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."lesson" ADD CONSTRAINT "lesson_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "public"."subject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."lesson" ADD CONSTRAINT "lesson_classId_fkey" FOREIGN KEY ("classId") REFERENCES "public"."class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."lesson" ADD CONSTRAINT "lesson_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "public"."teacher"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."class" ADD CONSTRAINT "class_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "public"."teacher"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."class" ADD CONSTRAINT "class_gradeId_fkey" FOREIGN KEY ("gradeId") REFERENCES "public"."grade"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."exam" ADD CONSTRAINT "exam_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "public"."lesson"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."assignment" ADD CONSTRAINT "assignment_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "public"."lesson"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."result" ADD CONSTRAINT "result_examId_fkey" FOREIGN KEY ("examId") REFERENCES "public"."exam"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."result" ADD CONSTRAINT "result_assignmentId_fkey" FOREIGN KEY ("assignmentId") REFERENCES "public"."assignment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."result" ADD CONSTRAINT "result_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "public"."student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."attendance" ADD CONSTRAINT "attendance_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "public"."student"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."attendance" ADD CONSTRAINT "attendance_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "public"."lesson"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."event" ADD CONSTRAINT "event_classId_fkey" FOREIGN KEY ("classId") REFERENCES "public"."class"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."announcement" ADD CONSTRAINT "announcement_classId_fkey" FOREIGN KEY ("classId") REFERENCES "public"."class"("id") ON DELETE SET NULL ON UPDATE CASCADE;
