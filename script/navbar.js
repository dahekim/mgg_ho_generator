function initializeNavbar() {
    const navbarLinks = document.querySelectorAll(".navbar li a"); // 모든 navbar의 li > a 선택
    const currentPage = window.location.pathname.split("/").pop(); // 현재 페이지 파일명 추출

    navbarLinks.forEach(link => {
        const linkHref = link.getAttribute("href");

        // 현재 페이지와 링크의 href가 같다면 'clicked' 클래스 추가
        if (linkHref === currentPage) {
            link.classList.add("clicked");
        } else {
            link.classList.remove("clicked"); // 다른 링크에서는 'clicked' 제거
        }
    });
}
