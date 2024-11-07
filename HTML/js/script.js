// 번역 딕셔너리
const translations = {
  ko: {
    my_name: "이국형",
    my_job: "소프트웨어 개발자",
    my_name_in_content: "이국형",
    about_content:
      "안녕하세요 이 본문은 글자의 크기와 폰트를 알아 보기 위해 작성 내용을 채우기 위해서 그냥 아무 글이나 작성 했으니 무시 해 주세요자장면 탕수육 양장피 볶음밥 계란찜 뼈감자탕 갈비 삼겹살 육개장 김치만두물냉면 양념게장, 해장국 순대국 근데 오늘 저녁은 뭐먹지돼지갈비찜, 피자 햄버거, 프로젝트 끝나고 치킨에 맥주 마시고 싶다.",
    career_content1: "쓸만한 커리어가 뭐가 있을까요?",
    career_content2: "커리어를 대신 할 공간입니다.",
    career_content3: "커리어는 많을수록 좋아요!",
    project_name1: "프로젝트 이름",
    project_name2: "프로젝트 이름",
    project_name3: "프로젝트 이름",
    project_name4: "프로젝트 이름",
    project_name5: "프로젝트 이름",
    project_name6: "프로젝트 이름",
    project_desc1: "프로젝트 간단 설명",
    project_desc2: "프로젝트 간단 설명",
    project_desc3: "프로젝트 간단 설명",
    project_desc4: "프로젝트 간단 설명",
    project_desc5: "프로젝트 간단 설명",
    project_desc6: "프로젝트 간단 설명",
    portfolio_name1: "포트폴리오 이름",
    portfolio_name2: "포트폴리오 이름",
    portfolio_name3: "포트폴리오 이름",
    portfolio_name4: "포트폴리오 이름",
    portfolio_name5: "포트폴리오 이름",
    portfolio_name6: "포트폴리오 이름",
    portfolio_desc1: "포트폴리오 간단 설명",
    portfolio_desc2: "포트폴리오 간단 설명",
    portfolio_desc3: "포트폴리오 간단 설명",
    portfolio_desc4: "포트폴리오 간단 설명",
    portfolio_desc5: "포트폴리오 간단 설명",
    portfolio_desc6: "포트폴리오 간단 설명",
    contact_me: "연락처",
    business_contact: "여러 사업 협력문의 환영",
    mon_to_fri: "월요일 - 금요일: 오전 9시 - 오후 6시 (한국 표준)",
    no_sat: "토요일 휴무",
    no_sun: "일요일 휴무",
  },
  en: {
    my_name: "COOKHYEONG LEE",
    my_job: "SOFTWARE DEVELOPER",
    my_name_in_content: "COOKHYEONG LEE",
    about_content:
      "Hello, I'm writing this to find out the size and font of the letters I just wrote anything to fill in the content, so please ignore itBlack Bean Noodles Sweet and Sour Pork and Yangjie Fried Rice with Steamed Eggs and Bone Potato Soup Ribs Pork Belly Meat Stew Kimchi Cold buckwheat noodles, marinated crab, and sundae soup. What should I eat for dinner I want to drink braised pork galbi, pizza hamburger, chicken and beer after the project.",
    career_content1: "What kind of career do you have?",
    career_content2: "It's a space to replace your career.",
    career_content3: "The more careers you have, the better!",
    project_name1: "Project name",
    project_name2: "Project name",
    project_name3: "Project name",
    project_name4: "Project name",
    project_name5: "Project name",
    project_name6: "Project name",
    project_desc1: "Project desc",
    project_desc2: "Project desc",
    project_desc3: "Project desc",
    project_desc4: "Project desc",
    project_desc5: "Project desc",
    project_desc6: "Project desc",
    portfolio_name1: "Portfolio name",
    portfolio_name2: "Portfolio name",
    portfolio_name3: "Portfolio name",
    portfolio_name4: "Portfolio name",
    portfolio_name5: "Portfolio name",
    portfolio_name6: "Portfolio name",
    portfolio_desc1: "Portfolio desc",
    portfolio_desc2: "Portfolio desc",
    portfolio_desc3: "Portfolio desc",
    portfolio_desc4: "Portfolio desc",
    portfolio_desc5: "Portfolio desc",
    portfolio_desc6: "Portfolio desc",
    contact_me: "Contact Me",
    business_contact: "I'm here for any business co-operation and contact",
    mon_to_fri: "Monday - Friday: 9AM - 6PM (GMT+9)",
    no_sat: "Saturday: Unavailable",
    no_sun: "Sunday: Unavailable",
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
