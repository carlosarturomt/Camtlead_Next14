"use client"

import { ICONS } from "@/assets/icons"
import GetDate from "@/utils/GetDate"
import Link from "next/link"

export default function Register() {
  const today = new Date()
  const date = GetDate(today)

  const DateToday = (value: number): string => {
    if (value <= 9) return '0' + value
    else return value.toString()
  }

  const date_today = date.year + '-' + DateToday(date.month + 1) + '-' + DateToday(date.day)

  return (
    <section className='w-full'>
      <article className="w-full flex-center flex-col border p-4 rounded-md dark:border-purple-550">
        <Link href={'/'}>
          <i className="flex-center w-24 h-20">{ICONS.logo.camtlead}</i>
        </Link>
        <hgroup className="flex-center flex-col">
          <h1>Register</h1>
          <p className="text-center">Register and Access the Web App of CamtLead</p>
        </hgroup>

        <form className="w-full">
          {/* Registration Date*/}
          <div className="flex-center">
            <input
              required
              type="date"
              id="registrationDate"
              name="registrationDate"
              defaultValue={date_today}
              className="bg-transparent outline-none"
            />
          </div>

        </form>
      </article>
    </section>
  )
}