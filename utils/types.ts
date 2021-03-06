import { Dispatch, SetStateAction } from 'react'
export interface ParentFormProps {
  name: string
  phone: string
  location: string
  pt_id: number
  st_name: string
  st_gender: string
  st_age: number
  st_grade: string
  st_school: string
  st_subject: string[]
  days: number
  hours: number
}
export interface ReportFormProps {
  professionality: string
  semiTotalHour: string
  noDays: string
  feedback: string
  envChallenge: string
  tuteeChallenge: string
  yourChallenge: string
  envResponse: string
  tuteeResponse: string
  yourResponse: string
  envHelp: string
  tuteeHelp: string
  yourHelp: string
  quiz: string
  assg: string
  test: string
  subjects: string
  topics: string
}
export interface ParentComponentProps {
  formData: ParentFormProps
  setFormData: Dispatch<SetStateAction<ParentFormProps>>
  page: number
  setPage: Dispatch<SetStateAction<number>>
}
export interface ReportComponentProps {
  formData: ReportFormProps
  setFormData: Dispatch<SetStateAction<ReportFormProps>>
  page: number
  setPage: Dispatch<SetStateAction<number>>
}
export interface ParentPostProps {
  fullName: string
  email: string | null
  phone1: string
  phone2: string | null
  location: string
  preferredBank: string | null
  profilePicture: string | null
  userId: number | null
}

export interface StudentPostProps {
  fullName: string
  nickName: string | null
  gender: string
  age: number | null
  subjects: string[]
  grade: string
  address: string | null
  school: string | null
  prevTutored: boolean | null
  prevTutorExperience: string | null
  idealTutor: string | null
  workDays: number | null
  workHour: number | null
  hobby: string | null
  parentId: number
}

export interface ReportPostProps {
  professionality: string | null
  assg: string | null
  noDays: string
  feedback: string | null
  semiTotalHour: string | null
  quiz: string | null
  test: string | null
  envChallenge: string | null
  envHelp: string | null
  envResponse: string | null
  yourChallenge: string | null
  yourHelp: string | null
  yourResponse: string | null
  tuteeChallenge: string | null
  tuteeHelp: string | null
  tuteeResponse: string | null
  subjects: string | null
  topics: string | null
  token: string
  tutorId: number
}

export interface TutorPostProps {
  fullName: string
  email: string
  phone: string
  gender: string
  subjects: string[]
  age: number
  acadStatus: string
  UEE: number
  cGPA: string
  field: string
  college: string
  volenteerism: string
  prevTutored: boolean
  prevTutorGrades: string
  prevTutorExperience: string
  idealTutor: string
  preferredBank: string
  bankAccountNo: string
  contactName: string
  contactPhone1: string
  contactPhone2: string | null
  contactEmail: string
  workDays: number
  workHour: number
  location: string
  essay: string
  hobby: string
  profilePicture: string
  token: string
  userId: number
}
