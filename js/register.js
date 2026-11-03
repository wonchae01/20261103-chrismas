// 사전등록 폼: 입력값을 확인하고 완료 팝업을 보여줍니다.
// 실제 서버나 데이터베이스로 전송하지 않는 프론트엔드 데모입니다.
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("reservationForm");
  const successLayer = document.getElementById("successLayer");
  const successMessage = document.getElementById("successMessage");
  const confirmButton = document.getElementById("confirmButton");

  form.addEventListener("submit", event => {
    event.preventDefault(); // 페이지 새로고침 방지

    if (!form.reportValidity()) return;

    // 입력한 방문 정보를 완료 팝업에 간단히 표시
    const name = document.getElementById("visitorName").value.trim();
    const date = document.getElementById("visitDate").value;
    const time = document.getElementById("visitTime").value;
    const count = document.getElementById("visitorCount").value;

    successMessage.textContent = `${name}님, ${date} ${time} / ${count}명 예약 신청이 접수되었습니다.`;
    successLayer.classList.add("show");
    successLayer.setAttribute("aria-hidden", "false");
    confirmButton.focus();
  });

  // 완료 팝업 닫기
  confirmButton.addEventListener("click", () => {
    successLayer.classList.remove("show");
    successLayer.setAttribute("aria-hidden", "true");
    window.location.href = "index.html";
  });

  // 팝업 바깥을 눌러도 닫히도록 처리
  successLayer.addEventListener("click", event => {
    if (event.target === successLayer) {
      successLayer.classList.remove("show");
      successLayer.setAttribute("aria-hidden", "true");
    }
  });
});
