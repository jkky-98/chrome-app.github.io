if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      console.log("위도:", latitude);
      console.log("경도:", longitude);

      localStorage.setItem("latitude", latitude);
      localStorage.setItem("longitude", longitude);

      // 여기서 가져온 위도와 경도를 사용하여 원하는 작업을 수행할 수 있습니다.
    },
    function (error) {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          console.error("사용자가 위치 정보 제공에 동의하지 않았습니다.");
          break;
        case error.POSITION_UNAVAILABLE:
          console.error("위치 정보를 사용할 수 없습니다.");
          break;
        case error.TIMEOUT:
          console.error("위치 정보를 가져오는 데 시간이 초과되었습니다.");
          break;
        case error.UNKNOWN_ERROR:
          console.error("알 수 없는 오류가 발생했습니다.");
          break;
      }
    }
  );
} else {
  console.error("브라우저가 Geolocation API를 지원하지 않습니다.");
}
