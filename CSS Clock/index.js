// 디지털 시계 , 시간 , 분, 초침 을 클래스를 선택후 상수로 저장
const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
const digital = document.querySelector(".digital");
const DEGREE = 90;

function setDate() {
  //지금 시간값을 가져올 수 있게 Date 객체를 now상수에 인스턴스화
  const now = new Date();

  // Date 객체의 getSeconds() 메서드로 현재 시간 초를 가져옴
  const seconds = now.getSeconds();
  // Date 객체의 getMinutes() 메서드로 현재 시간 분을 가져옴
  const minutes = now.getMinutes();
  // // Date 객체의 getHours() 메서드로 현재 시간을 가져옴
  const hours = now.getHours();

  // 현재 시간 초에 대한 각도를 360도로 나눠 아날로그 시계의 각도 degree값을 구하기
  // degrees를 구할 때 맨 마지막에 90을 더해주는 이유는, 위에서 봤듯이 처음에 세팅된 각도와
  // 12시의 각도가 90도만큼 차이가 나기때문
  const secondsDegrees = (seconds / 60) * 360 + DEGREE;
  const minutesDegrees = (minutes / 60) * 360 + DEGREE;
  const hoursDegrees = (hours / 12) * 360 + DEGREE;

  // 각 요소의 스타일에있는 transform 속성을 사용하여 시계 바늘을 회전시킵니다.
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minsHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  //  각 시침 분침 초침별로 부드러운 효과 주기 위해 transition 설정
  if (seconds === 0) {
    secondHand.style.transitionDuration = "0s";
  }

  if (minutes === 0) {
    minHand.style.transitionDuration = "0s";
  }

  if (hours === 0) {
    hourHand.style.transitionDuration = "0s";
  }
  // 디지털 시계에 현재 시간을 표시합니다.
  //00시 가 10보다 작으면 09까지만 나오게 하고 10이 넘어가면 10 이후로 출력하게
  digital.innerHTML = `${hours < 10 ? `0${hours}` : hours} : 
  ${minutes < 10 ? `0${minutes}` : minutes} : 
  ${seconds < 10 ? `0${seconds}` : seconds}`;
}
// 1초마다 setDate 함수를 호출하여 시간을 업데이트합니다.
setInterval(setDate, 1000);

// 페이지 로딩 시 시간을 설정합니다.
setDate();
