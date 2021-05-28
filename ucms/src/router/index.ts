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
                path: 'all-courses',
                component: () => import('../components/manager/AllCourses.vue')
            },
            {
                path: 'all-students',
                component: () => import('../components/manager/AllStudents.vue')
            },
            {
                path: 'all-teachers',
                component: () => import('../components/manager/AllTeachers.vue')
            },
            {
                path: 'all-sections',
                component: () => import('../components/manager/AllSections.vue')
            },
            {
                path: 'teacher-apply',
                component: () => import('../components/manager/TeacherApply.vue')
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
