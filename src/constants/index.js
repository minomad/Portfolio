import about from "../assets/img/about.png";
import port01 from "../assets/img/port01.png";
import port02 from "../assets/img/port02.png";
import port04 from "../assets/img/port04.png";
import port05 from "../assets/img/port05.png";

export const headerNav = [
    {
        title: "intro",
        url: "#intro"
    },
    {
        title: "skill",
        url: "#skill"
    },
    {
        title: "portfolio",
        url: "#port"
    },
];

export const introText = {
    title: "강경민의 포트폴리오",
    img: about
}

export const skillText = [
    {
        title: "HTML, CSS, SASS, TailWind",
        desc: "접근성, 웹표준, 반응형, SEO"
    },
    {
        title: "React, JavaScript, TypeScript",
        desc: "함수형 프로그래밍"
    },
    {
        title: "React-Query, Zustand",
        desc: "상태관리 라이브러리"
    },
    {
        title: "Git, Figma, Pocketbase",
        desc: "버전관리, 디자인, 백엔드"
    }
]


export const portText = [
    {
        num: "01",
        title: "야무지개놀자 (팀 프로젝트)",
        desc: "리액트로 구성된 여행 대표앱 '야놀자'를 모티브로 하는 기능과 심플한 UI/UX에 중점을 둔 앱, 야무지개놀자 여행앱입니다.",
        img: port01,
        code: "https://github.com/minomad/1st-ComeOn-TripApp",
        view: "https://1st-come-on-trip-app.vercel.app",
    },
    {
        num: "02",
        title: "인생드라마 (개인 프로젝트)",
        desc: "인생 드라마를 추천하고 리뷰를 작성하는 컨셉의 사이트입니다.",
        img: port02,
        code: "https://github.com/minomad/life-drama",
        view: "https://life-drama.vercel.app",
    },
    // {
    //     num: "03",
    //     title: "NEXTANIME (개인 프로젝트-작업중)",
    //     desc: "타입스크립트와 NEXT.JS로 작업한 애니메이션 OTT 클론 코딩",
    //     // img: port03,
    //     code: "https://github.com/minomad/next-anime",
    //     view: "https://github.com/minomad/next-anime",
    // },
    {
        num: "04",
        title: "Lion Place (팀 프로젝트)",
        desc: "[테킷 멋쟁이 사자처럼] 프론트엔드 스쿨 6기에서 진행한 JS 프로젝트, 네이버 플레이스 기반으로 한 바닐라 JS 앱 만들기",
        img: port04,
        code: "https://github.com/JS-15GJO/JS-15GJO",
        view: "https://github.com/JS-15GJO/JS-15GJO",
    },
    {
        num: "05",
        title: "EnterEuid (팀 프로젝트)",
        desc: "[테킷 멋쟁이 사자처럼] 프론트엔드 스쿨 6기에서 진행한 HTML, SASS 프로젝트",
        img: port05,
        code: "https://github.com/minomad/a11y-EnterEuid",
        view: "https://github.com/JS-15GJO/JS-15GJO",
    },
];

