import { createStudent } from 'backend-utils/parent-utils'
import { ParentComponentProps } from 'utils/types'

export default function ParentRegistration_12({
  formData,
  setFormData,
  page,
  setPage,
}: ParentComponentProps) {
  const handleClick = () => {
    console.log(formData)
    createStudent({
      fullName: formData.st_name,
      gender: formData.st_gender,
      address: formData.location,
      age: formData.st_age,
      grade: formData.st_grade,
      hobby: null,
      idealTutor: null,
      nickName: null,
      parentId: formData.pt_id,
      prevTutorExperience: null,
      prevTutored: null,
      school: formData.st_school,
      subjects: formData.st_subject,
      workDays: formData.days,
      workHour: formData.hours,
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err))
  }
  return (
    <div>
      <div className="font-minionPro bg-[#FED607]">
        <div>
          <h1 className="text-3xl font-bold text-[#1A3765] ">
            Tell us how much hour do you{' '}
          </h1>
          <p className="p-2 pl-0 text-2xl  font-semibold text-[#5A5A5A]">
            want your child to be tutored
          </p>
        </div>

        <div className="mt-10 mb-16 flex flex-row">
          <div>
            <label
              className="text-md block py-2 pl-0  font-semibold text-[#5A5A5A]"
              htmlFor="price"
            >
              How many days per week
            </label>
            <input
              className="h-12 w-full  text-xl"
              type="number"
              id="days"
              value={formData.days}
              onChange={(e) =>
                setFormData({ ...formData, days: parseInt(e.target.value) })
              }
              placeholder="&nbsp;  &nbsp;  &nbsp;&nbsp;  &nbsp;  &nbsp;   &nbsp;    &nbsp; Days &nbsp;  &nbsp;  &nbsp;   &nbsp; "
            ></input>
            <label
              className=" p-2 pl-24 text-sm  font-semibold text-[#5A5A5A]"
              htmlFor="price"
            >
              {' '}
              Recommended: 3 days
            </label>
          </div>

          <div className="mx-5">
            <label
              className="text-md block py-2 pl-0  font-semibold text-[#5A5A5A]"
              htmlFor="price"
            >
              How many hours per day
            </label>
            <input
              className="h-12 w-full  text-xl"
              type="number"
              id="price"
              value={formData.hours}
              onChange={(e) =>
                setFormData({ ...formData, hours: parseInt(e.target.value) })
              }
              placeholder="&nbsp;  &nbsp;  &nbsp;&nbsp;  &nbsp;  &nbsp;   &nbsp;    &nbsp; Hour &nbsp;  &nbsp;  &nbsp;   &nbsp; "
            ></input>
            <label
              className=" p-2  pl-24   text-sm  font-semibold text-[#5A5A5A]"
              htmlFor="price"
            >
              Recommended: 1:30 hr
            </label>
          </div>
        </div>

        <div className=" mt-32 flex flex-row">
          <div className="mr-8">
            <button className=" bg-[#1A3765] py-2 px-6 text-2xl font-semibold text-white hover:bg-blue-700 ">
              Show Price
            </button>
          </div>
          <div className="mr-6">
            <input className="block h-12" type="text" id="price"></input>
            <label className="text-sm text-[#5A5A5A]" htmlFor="price">
              Registration fee: 500 ETB
            </label>
          </div>
        </div>

        <div className="mt-8 text-center md:text-left">
          <button
            onClick={handleClick}
            className=" bg-[#1A3765] py-3 px-10 text-3xl font-semibold text-white hover:bg-blue-700 "
          >
            Submit
          </button>
        </div>
        <div className="mt-8 text-center lg:text-left">
          <button
            onClick={() => {
              setPage((currentPage) => currentPage - 1)
            }}
            className="bg-[#1A3765] py-3 px-6 text-3xl font-semibold text-white hover:bg-blue-700 "
          >
            PREVIOUS
          </button>
        </div>
      </div>
    </div>
  )
}