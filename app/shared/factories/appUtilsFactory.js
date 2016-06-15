/**
 * Created by jihan on 4/19/16.
 */
app.factory('appUtilsFactory', [function(){
    return {
        // AUTH_TENANT_USER: 'auth/tenant/user',
        // AUTH_TENANT_SYSTEM: 'auth/tenant/system',
        AUTH_LOGIN: 'auth/login',
        AUTH_USER: 'auth/user',
        APPLICANT: 'applicant',
        DEPARTMENTS: 'department',
        JOB: 'job',
        PUBLIC_JOBS: 'public/jobs',
        PUBLIC_JOBS_EVENT: 'public/jobs/event',
        APPLICANT_JOBS_IS_APPLY: 'applicant/jobs/isApply',
        APPLICANT_UPDATE: 'applicant/update',
        APPLICANT_RESUME: 'applicant/resume',
        QUESTION: 'question',
        QUESTION_SELECT: 'question/select',
        QUESTION_JOB: 'question/job',
        JOB_QUESTION: 'job/question',
        JOB_APPLICANT: 'job/applicant',
        AUTH_USER_UPDATE:'auth/user/update',
        PHOTO:'photo',
        QUESTION_BANK:'question/bank',
        QUESTIONNAIRE:'questionnaire',
        QUESTIONNAIRE_BANK:'questionnaire/bank',
        APPLICATION_ANSWER:'applicant/answer',
        JOB_INTERVIEWER:"job/interviewer",
        APPOINTMENT:"appointment",
        AUTH_USER_IS_ENABLE: 'auth/user/isEnable',
        PUBLIC_ROLES: 'public/roles',
        SCHEDULE: 'schedule',
        SKILL:'skill',
        APPLICANT_JOBS_IS_APPOINTED:'applicant/jobs/isAppointed',
        APPLICANT_JOBS:'applicant/jobs',
        QUESTIONNAIRE_QUESTION:'questionnaire/question',
        RECOMMENDED:'recommended',
        SCHEDULE_EVENTS:'schedule/events',
        EDUCATION:'education',
        JOB_INTERVIEWER_SCORE:"job/interviewer/score",
        APPLICANT_JOBS_SELECT: 'applicant/jobs/select'


    };
}]);