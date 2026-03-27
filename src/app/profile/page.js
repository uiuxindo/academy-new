"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Menu from "../components/ui/sticky-menu/mainMenu";
import "./profile.scss"

export default function CourseListPage() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchCourses() {
      try {
        const res = await fetch(
          "https://668e4ce4bf9912d4c92da6bd.mockapi.io/api/v1/ShortCourseData",
          { cache: "no-store" }
        );

        if (!res.ok) throw new Error("Failed to fetch courses");

        const data = await res.json();
        setCourses(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchCourses();
  }, []);

  if (loading) {
    return (
      <div>
        <p>Loading courses...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center">
        <h2 className="text-xl font-semibold text-red-500 mb-2">
          Something went wrong 😥
        </h2>
        <p className="text-gray-500 mb-4">{error}</p>
        <button
          onClick={() => location.reload()}
          className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <>
    <Menu />
    <div className="container animate-fadeIn py-3">
      <div className="row">
        <div className="col-12">
          <h2 className="mb-4">Short Courses</h2>
        </div>
      </div>
      <div className="row">
        {courses.map((course) => (
          <div key={course.id} className="col-12 col-sm-12 col-md-4">
            <div className="card course-card">
              <img src={course.img_url} alt={course.title} className="w-100 mb-2" />
              <div className="content">
                <p className="mb-0">{course.title}</p>
                <span>{course.level}</span>
                <button type="button" className="btn btn-primary btn-sm w-100 mt-3" onClick={() => router.push(`/profile/${course.id}`)}>Detail</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
