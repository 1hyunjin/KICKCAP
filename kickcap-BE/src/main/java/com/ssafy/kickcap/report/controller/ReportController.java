package com.ssafy.kickcap.report.controller;

import com.ssafy.kickcap.report.dto.ParkingReportRequestDto;
import com.ssafy.kickcap.report.dto.RedisRequestDto;
import com.ssafy.kickcap.report.service.ParkingReportService;
import com.ssafy.kickcap.report.service.RealTimeReportService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
@RequiredArgsConstructor
// @Tag(name = "신고 컨트롤러", description = "신고 CRUD API") swagger UI 적용시 사용 예정
@RequestMapping("/reports")
public class ReportController {

    private final RealTimeReportService realTimeReportService;
    private final ParkingReportService parkingReportService;

//    @PostMapping("/real-time")
//    public ResponseEntity<Void> saveRealTimeReport(@AuthenticationPrincipal CustomOAuth2User customOAuth2User, @RequestBody RealTimeReportRequestDto requestDto) {
//        reportService.saveReportToRedis(customOAuth2User.getId(), requestDto);
//        return ResponseEntity.status(HttpStatus.CREATED).build();
//    }

    @PostMapping("/real-time")
    public ResponseEntity<Void> saveRealTimeReport(@RequestBody RedisRequestDto requestDto) {
        Long memberId = 1L; // social login 완성 후에는 바꿀 예정
        realTimeReportService.saveReportToRedis(memberId, requestDto);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @PostMapping("/parking")
    public ResponseEntity<Void> saveParkingReport(@RequestBody ParkingReportRequestDto requestDto) {
        Long memberId = 1L; // social login 완성 후에는 바꿀 예정
        parkingReportService.saveParkingReportToRedis(memberId, requestDto);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }
}
