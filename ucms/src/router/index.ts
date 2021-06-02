import {createRouter, createWebHistory, Router, RouteRecordRaw, RouterHistory} from "vue-router";

const history: RouterHistory = createWebHistory();

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../components/view/Login.vue')
    },
    {
        path: '/manager',
        name: 'Manager',
        component: () => import('../components/view/Manager.vue'),
        children: [
            {
                path: 'teacher-apply',
                component: () => import('../components/manager/temp/TeacherApply.vue')
            },
            {
                path: 'all-courses',
                component: () => import('../components/manager/courseHandle/AllCourses.vue')
            },
            {
                path: 'save-new-course',
                component: () => import('../components/manager/courseHandle/SaveNewCourse.vue')
            },
            {
                path: 'remove-course',
                component: () => import('../components/manager/courseHandle/RemoveCourse.vue')
            },
            {
                path: 'all-students',
                component: () => import('../components/manager/studentHandle/AllStudents.vue')
            },
            {
                path: 'save-new-student',
                component: () => import('../components/manager/studentHandle/SaveNewStudent.vue')
            },
            {
                path: 'remove-student',
                component: () => import('../components/manager/studentHandle/RemoveStudent.vue')
            },
            {
                path: 'let-student-join-course',
                component: () => import('../components/manager/studentHandle/LetStudentJoinCourse.vue')
            },
            {
                path: 'let-student-leave-course',
                component: () => import('../components/manager/studentHandle/LetStudentLeaveCourse.vue')
            },
            {
                path: 'all-teachers',
                component: () => import('../components/manager/teacherHandle/AllTeachers.vue')
            },
            {
                path: 'save-new-teacher',
                component: () => import('../components/manager/teacherHandle/SaveNewTeacher.vue')
            },
            {
                path: 'remove-teacher',
                component: () => import('../components/manager/teacherHandle/RemoveTeacher.vue')
            },
            {
                path: 'add-section-to-teacher',
                component: () => import('../components/manager/teacherHandle/AddSectionToTeacher.vue')
            },
            {
                path: 'remove-section-of-teacher',
                component: () => import('../components/manager/teacherHandle/RemoveSectionOfTeacher.vue')
            },
            {
                path: 'all-sections',
                component: () => import('../components/manager/sectionHandle/AllSections.vue')
            },
            {
                path: 'save-new-section',
                component: () => import('../components/manager/sectionHandle/SaveNewSection.vue')
            },
            {
                path: 'remove-section',
                component: () => import('../components/manager/sectionHandle/RemoveSection.vue')
            },
            {
                path: 'apply',
                component: () => import('../components/manager/applyHandle/Apply.vue')
            },
        ]
    },
    {
        path: '/student',
        name: 'Student',
        component: () => import('../components/view/Student.vue'),
        children: [
            {
                path: 'stu-home-page',
                component: () => import('../components/student/StuHomePage.vue')
            },
            {
                path: 'training-scheme',
                component: () => import('../components/student/TrainingScheme.vue')
            },
            {
                path: 'select-course',
                component: () => import('../components/student/SelectCourse.vue')
            },
            {
                path: 'course-scheme',
                component: () => import('../components/student/StudentCourseSchedule.vue')
            },
            {
                path: 'done-courses',
                component: () => import('../components/student/DoneCourses.vue')
            }
        ]
    },
    {
        path: '/teacher',
        name: 'Teacher',
        component: () => import('../components/view/Teacher.vue'),
        children: [
            {
                path: '',
                component: () => import('../components/teacher/QueryCourseSchedule.vue')
            },
            {
                path: 'query-course-schedule',
                component: () => import('../components/teacher/QueryCourseSchedule.vue')
            },
            {
                path: 'query-provided-courses',
                component: () => import('../components/teacher/QueryProvidedCourses.vue')
            },
            {
                path: 'apply-for-beginning-course',
                component: () => import('../components/teacher/ApplyForBeginningCourse.vue')
            },
            {
                path: 'course-schedule-info/:courseId/:secId/:semester/:year',
                component: () => import('../components/teacher/CourseScheduleInfo.vue')
            }
        ]
    },
    {
        path: '/un-auth',
        name: 'UnAuth',
        component: () => import('../components/view/UnAuth.vue')
    }
];

const router: Router = createRouter({
    history,
    routes
});

export default router;
