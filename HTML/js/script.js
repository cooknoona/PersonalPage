// 번역 딕셔너리
const translations = {
  ko: {
    cate1: "정보",
    cate2: "프로젝트",
    cate3: "포트폴리오",
    cate4: "연락처",
  },
  en: {
    cate1: "ABOUT",
    cate2: "PROJECTS",
    cate3: "PORTFOLIO",
    cate4: "CONTACT",
  },
};

// 언어 변경 변수값
function changeLanguage(lang) {
  for (const id in translations[lang]) {
    // id를 통해 딕셔너리 내의 값을 찾음
    const element = document.getElementById(id);
    // 값이 일치하면 출력
    if (element) {
      element.textContent = translations[lang][id];
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // 기본 언어 값을 한국어로 설정
  changeLanguage("ko");
});

document.addEventListener("DOMContentLoaded", () => {
  // 네비게이션 바에 있는 리스트를 리스너에 추가
  document.querySelectorAll(".nav_list a").forEach((anchor) => {
    anchor.addEventListener("click", function (event) {
      event.preventDefault(); // 기본 링크 이동 방지
      const sectionId = this.getAttribute("href"); // 클릭된 링크의 href 속성값
      const section = document.querySelector(sectionId); // 해당 섹션 선택

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
});
