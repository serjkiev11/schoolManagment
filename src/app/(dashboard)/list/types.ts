export type Teacher = {
  id: number
  teacherId: string
  name: string
  email?: string
  photo: string
  phone: string
  subjects: string[]
  classes: string[]
  address: string
}

export type Announcement = {
  id: number
  title: string
  class: string
  date: string
}

export type Assignment = {
  id: number
  subject: string
  class: string
  teacher: string
  dueDate: string
}

export type Class = {
  id: number
  name: string
  capacity: number
  grade: number
  supervisor: string
}
