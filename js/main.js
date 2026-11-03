// CHRISTMAS VILLAGE 메인 페이지 인터랙션
document.addEventListener("DOMContentLoaded", () => {
  // 모바일 메뉴 열기/닫기
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "×" : "☰";
  });

  // 모바일 메뉴에서 링크를 누르면 메뉴 닫기
  mainNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "☰";
    });
  });

  // 버튼의 data-modal 값에 맞는 팝업 열기
  const openModal = (modal) => {
    if (!modal) return;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    const closeButton = modal.querySelector(".modal-close");
    if (closeButton) closeButton.focus();
  };

  // 팝업 닫기 및 스크롤 복원
  const closeModal = (modal) => {
    if (!modal) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  document.querySelectorAll("[data-modal]").forEach(button => {
    button.addEventListener("click", () => {
      openModal(document.getElementById(button.dataset.modal));
    });
  });

  // 닫기 버튼 또는 배경 클릭으로 팝업 닫기
  document.querySelectorAll(".modal").forEach(modal => {
    modal.querySelectorAll("[data-close]").forEach(element => {
      element.addEventListener("click", () => closeModal(modal));
    });
  });

  // ESC 키로 열린 팝업 닫기
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      document.querySelectorAll(".modal.is-open").forEach(closeModal);
    }
  });
});
