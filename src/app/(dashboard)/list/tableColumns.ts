export const TeacherColumns = [
  { header: 'Info', accessor: 'info' },
  {
    header: 'Teacher ID',
    accessor: 'teacherId',
    className: 'hidden md:table-cell',
  },
  {
    header: 'Subjects',
    accessor: 'subjects',
    className: 'hidden md:table-cell',
  },
  {
    header: 'Classes',
    accessor: 'classes',
    className: 'hidden md:table-cell',
  },
  {
    header: 'Phone',
    accessor: 'phone',
    className: 'hidden lg:table-cell',
  },
  {
    header: 'Address',
    accessor: 'address',
    className: 'hidden lg:table-cell',
  },
  {
    header: 'Actions',
    accessor: 'actions',
  },
]

export const StudentColumns = [
  { header: 'Info', accessor: 'info' },
  {
    header: 'Student ID',
    accessor: 'studentId',
    className: 'hidden md:table-cell',
  },
  {
    header: 'Grade',
    accessor: 'grade',
    className: 'hidden md:table-cell',
  },
  {
    header: 'Phone',
    accessor: 'phone',
    className: 'hidden lg:table-cell',
  },
  {
    header: 'Address',
    accessor: 'address',
    className: 'hidden lg:table-cell',
  },
  {
    header: 'Actions',
    accessor: 'actions',
  },
]

export const ParentColumns = [
  { header: 'Info', accessor: 'name' },
  {
    header: 'Students',
    accessor: 'students',
  },
  {
    header: 'Phone',
    accessor: 'phone',
    className: 'hidden md:table-cell',
  },
  {
    header: 'Address',
    accessor: 'address',
    className: 'hidden md:table-cell',
  },
  {
    header: 'Actions',
    accessor: 'actions',
  },
]

export const SubjectColumns = [
  { header: 'Subject Name', accessor: 'name' },
  {
    header: 'Teachers',
    accessor: 'teachers',
    className: 'hidden md:table-cell',
  },
  {
    header: 'Actions',
    accessor: 'actions',
  },
]

export const ClassesColumns = [
  { header: 'Class Name', accessor: 'name' },
  {
    header: 'Capacity',
    accessor: 'capacity',
    className: 'hidden md:table-cell',
  },
  {
    header: 'Grade',
    accessor: 'grade',
    className: 'hidden md:table-cell',
  },
  {
    header: 'Supervisor',
    accessor: 'supervisor',
    className: 'hidden md:table-cell',
  },
  {
    header: 'Actions',
    accessor: 'actions',
  },
]

export const LessonColumns = [
  { header: 'Subject Name', accessor: 'name' },
  {
    header: 'Class',
    accessor: 'class',
  },
  {
    header: 'Teacher',
    accessor: 'teacher',
    className: 'hidden md:table-cell',
  },
  {
    header: 'Actions',
    accessor: 'actions',
  },
]

export const ExamColumns = [
  { header: 'Subject Name', accessor: 'name' },
  {
    header: 'Class',
    accessor: 'class',
  },
  {
    header: 'Teacher',
    accessor: 'teacher',
    className: 'hidden md:table-cell',
  },
  {
    header: 'Date',
    accessor: 'date',
    className: 'hidden md:table-cell',
  },
  {
    header: 'Actions',
    accessor: 'actions',
  },
]

export const AssignmentColumns = [
  { header: 'Subject Name', accessor: 'name' },
  {
    header: 'Class',
    accessor: 'class',
  },
  {
    header: 'Teacher',
    accessor: 'teacher',
    className: 'hidden md:table-cell',
  },
  {
    header: 'Due Date',
    accessor: 'dueDate',
    className: 'hidden md:table-cell',
  },
  {
    header: 'Actions',
    accessor: 'actions',
  },
]

export const ResultColumns = [
  { header: 'Info', accessor: 'info' },
  {
    header: 'Student Names',
    accessor: 'students',
    className: 'hidden md:table-cell',
  },
  {
    header: 'Phone',
    accessor: 'phone',
    className: 'hidden lg:table-cell',
  },
  {
    header: 'Address',
    accessor: 'address',
    className: 'hidden lg:table-cell',
  },
  {
    header: 'Actions',
    accessor: 'actions',
  },
]

export const EventColumns = [
  { header: 'Title', accessor: 'title' },
  {
    header: 'Class',
    accessor: 'class',
  },
  {
    header: 'Date',
    accessor: 'date',
    className: 'hidden md:table-cell',
  },
  {
    header: 'Start Time',
    accessor: 'startTime',
    className: 'hidden md:table-cell',
  },
  {
    header: 'End Time',
    accessor: 'endTime',
    className: 'hidden md:table-cell',
  },
  {
    header: 'Actions',
    accessor: 'actions',
  },
]

export const AnnouncemetColumns = [
  { header: 'Title', accessor: 'title' },
  {
    header: 'Class',
    accessor: 'class',
  },
  {
    header: 'Date',
    accessor: 'date',
    className: 'hidden md:table-cell',
  },
  {
    header: 'Actions',
    accessor: 'actions',
  },
]
