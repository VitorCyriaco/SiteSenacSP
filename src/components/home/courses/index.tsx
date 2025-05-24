import { courses } from "@/data/data"

export function Courses() {
    return (
        <div className="flex flex-col items-center mt-12">
            <div>
                <h2 className="text-3xl font-[400] mb-8 text-[#78849e] dark:text-white">Conheça nossos cursos</h2>
            </div>
            <div>
                <div className="flex items-center justify-center">
                        {courses.CoursesFirst.map((item, i) => (
                            <a key={i} className={`text-white p-3 rounded-md mt-5 m-2 text-sm`} style={{ backgroundColor: item.color }} href={item.link}>
                                {item.title}
                            </a>
                        ))}
                </div>

                <div className="flex items-center justify-center">
                        {courses.CoursesSecond.map((item, i) => (
                            <a key={i} className={`text-white p-3 rounded-md mt-5 m-2 text-sm`} style={{ backgroundColor: item.color }} href={item.link}>
                                {item.title}
                            </a>
                        ))}
                </div>
            </div>
        </div>
    )
}