// 实时更新时间函数
function updateDateTime() {
    const dateTimeElement = document.querySelector('.date-time');
    const now = new Date();

    // 格式化为 'YYYY年MM月DD日 HH:MM:SS' 格式
    const formattedTime = now.getFullYear() + '年' + 
                          (now.getMonth() + 1).toString().padStart(2, '0') + '月' + 
                          now.getDate().toString().padStart(2, '0') + '日 ' + 
                          now.getHours().toString().padStart(2, '0') + ':' + 
                          now.getMinutes().toString().padStart(2, '0') + ':' + 
                          now.getSeconds().toString().padStart(2, '0');
    dateTimeElement.textContent = formattedTime;
}

// 预约时间自动设置为当天上午11点
function updateReservationTime() {
    const reservationTimeElement = document.querySelector('.time-date');
    const reservationHourElement = document.querySelector('.time-hour');
    
    const now = new Date();
    const reservationDate = (now.getMonth() + 1).toString().padStart(2, '0') + '-' + 
                            now.getDate().toString().padStart(2, '0');
    
    const reservationHour = '11:00:00'; // 固定为上午11点

    reservationTimeElement.textContent = reservationDate;
    reservationHourElement.textContent = reservationHour;
}

// 每秒更新一次时间
setInterval(updateDateTime, 1000);

// 页面加载时立即更新时间和预约时间
window.onload = function() {
    updateDateTime();
    updateReservationTime();
};
