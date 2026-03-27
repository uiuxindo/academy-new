"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Menu from "@/app/components/ui/sticky-menu/mainMenu";

export default function CourseDetailPage() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id;

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCourse() {
      try {
        const res = await fetch(
          "https://668e4ce4bf9912d4c92da6bd.mockapi.io/api/v1/ShortCourseData",
          { cache: "no-store" }
        );

        if (!res.ok) throw new Error("Failed to fetch course data");

        const data = await res.json();
        const found = data.find((item) => Number(item.id) === Number(id));

        if (!found) throw new Error("Course not found");

        setCourse(found);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchCourse();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <div className="flex flex-col items-center gap-3 text-gray-600">
          <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p>Loading course details...</p>
        </div>
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
          onClick={() => router.refresh()}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Try again
        </button>
        <button type="button" className="btn btn-primary" onClick={() => router.push("/profile")}>
          ← Back to Courses
        </button>
      </div>
    );
  }

  return (
    <>
    <Menu />
    <div className="container animate-fadeIn py-3">
      <div className="row">
        <div className="col-12 pb-4">
          <h2 className="mb-0">{course.title}</h2>
          <span>{course.level}</span>
        </div>
        <div className="col-12">
          <p>{course.desc}</p>
          <button type="button" className="btn btn-primary" onClick={() => router.push("/profile")}>
            ← Back to Courses
          </button>
        </div>
      </div>
    </div>
    </>
  );
}
