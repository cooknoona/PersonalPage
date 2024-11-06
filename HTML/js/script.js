// 번역 딕셔너리
const translations = {
  ko: {
    my_name: "이국형",
    my_job: "소프트웨어 개발자",
    my_name_in_content: "이국형",
    about_content1: "안녕하세요 이 본문은 글자의 크기와 폰트를 알아 보기 위해 작성",
    about_content2: "내용을 채우기 위해서 그냥 아무 글이나 작성 했으니 무시 해 주세요",
    about_content3: "자장면 탕수육 양장피 볶음밥 계란찜 뼈감자탕 갈비 삼겹살 육개장 김치만두",
    about_content4: "물냉면 양념게장, 해장국 순대국 근데 오늘 저녁은 뭐먹지",
    about_content5: "돼지갈비찜, 피자 햄버거, 프로젝트 끝나고 치킨에 맥주 마시고 싶다.",
    career_content1: "쓸만한 커리어가 뭐가 있을까요?",
    career_content2: "커리어를 대신 할 공간입니다.",
    career_content3: "커리어는 많을수록 좋아요!",
  },
  en: {
    my_name: "COOKHYEONG LEE",
    my_job: "SOFTWARE DEVELOPER",
    my_name_in_content: "COOKHYEONG LEE",
    about_content1: "Hello, I'm writing this to find out the size and font of the letters",
    about_content2: "I just wrote anything to fill in the content, so please ignore it",
    about_content3: "Black Bean Noodles Sweet and Sour Pork and Yangjie Fried Rice with Steamed Eggs and Bone Potato Soup Ribs Pork Belly Meat Stew Kimchi",
    about_content4: "Cold buckwheat noodles, marinated crab, and sundae soup. What should I eat for dinner",
    about_content5: "I want to drink braised pork galbi, pizza hamburger, chicken and beer after the project.",
    career_content1: "What kind of career do you have?",
    career_content2: "It's a space to replace your career.",
    career_content3: "The more careers you have, the better!",
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
