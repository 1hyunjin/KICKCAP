package com.ssafy.kickcap.objection.service;

import com.ssafy.kickcap.bill.dto.BillObjectionDto;
import com.ssafy.kickcap.bill.entity.Bill;
import com.ssafy.kickcap.bill.entity.ReportType;
import com.ssafy.kickcap.bill.repository.BillRepository;
import com.ssafy.kickcap.cctv.entity.Crackdown;
import com.ssafy.kickcap.cctv.repository.CrackdownRepository;
import com.ssafy.kickcap.objection.dto.ObjectionDetailResponse;
import com.ssafy.kickcap.objection.dto.ObjectionListResponse;
import com.ssafy.kickcap.objection.dto.ObjectionUserListDto;
import com.ssafy.kickcap.objection.entity.Answer;
import com.ssafy.kickcap.objection.entity.Objection;
import com.ssafy.kickcap.objection.repository.AnswerRepository;
import com.ssafy.kickcap.objection.repository.ObjectionRepository;
import com.ssafy.kickcap.objection.repository.ObjectionRepositoryImpl;
import com.ssafy.kickcap.report.entity.Report;
import com.ssafy.kickcap.report.repository.ReportRepository;
import com.ssafy.kickcap.user.entity.Member;
import com.ssafy.kickcap.user.entity.Police;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@RequiredArgsConstructor
@Service
public class ObjectionService {

    private final ObjectionRepository objectionRepository;
    private final ObjectionRepositoryImpl objectionRepositoryImpl;
    private final AnswerRepository answerRepository;
    private final BillRepository billRepository;
    private final CrackdownRepository crackdownRepository;
    private final ReportRepository reportRepository;

    public void modifyObjectionByObjectionId(Member member, Long objectionId, BillObjectionDto objectionDto) {
        // Objection 조회
        Objection objection = objectionRepository.findById(objectionId)
                .orElseThrow(() -> new IllegalArgumentException("Cannot find objection"));

        // Objection 작성자가 요청한 Member와 동일한지 확인
        if (!member.equals(objection.getMember())) {
            throw new IllegalArgumentException("Cannot modify objection");
        }

        // 해당 Objection에 대한 Answer가 존재하는지 확인
        if (objection.getAnswer() != null) {
            throw new IllegalArgumentException("Cannot modify objection that has an answer");
        }

        // Objection 수정 로직 구현 (수정하려는 내용에 따라 추가)
         objection.updateObjection(objectionDto.getTitle(), objectionDto.getContent());
        // Objection 저장
        objectionRepository.save(objection);
    }

    public void deleteObjectionByObjectionId(Member member, Long objectionId) {
        // Objection 조회
        Objection objection = objectionRepository.findById(objectionId)
                .orElseThrow(() -> new IllegalArgumentException("Cannot find objection"));

        // Objection 작성자가 요청한 Member와 동일한지 확인
        if (!member.equals(objection.getMember())) {
            throw new IllegalArgumentException("Cannot modify objection");
        }

        // 해당 Objection에 대한 Answer가 존재하는지 확인
        if (objection.getAnswer() != null) {
            throw new IllegalArgumentException("Cannot modify objection that has an answer");
        }

        objectionRepository.delete(objection);
        Bill bill = billRepository.findById(objection.getBill().getId()).orElseThrow(() -> new IllegalArgumentException("Cannot find bill"));
        bill.updateIsObjection();
        billRepository.save(bill);
    }

    ///// 경찰 이의제기 목록 데이터 개수 조회 /////
    public Long getObjectionsCount(Long policeId, int status, String name) {
        return objectionRepositoryImpl.findObjectionsCount(policeId, status, name);
    }

    ///// 경찰 이의제기 목록 조회 /////
    public List<ObjectionListResponse> getObjections(Long policeId, int status, int pageNo, int pageSize, String name) {
        Pageable pageable = PageRequest.of(pageNo - 1, pageSize); // 페이지는 0부터 시작하므로 -1
        return objectionRepositoryImpl.findObjections(policeId, status, name, pageable);
    }

    ///// 일반 시민 이의제기 목록 조회 /////
    public List<ObjectionUserListDto> getUserObjections(Long memberId, int status, int pageNo, int pageSize) {
        Pageable pageable = PageRequest.of(pageNo - 1, pageSize);
        return objectionRepositoryImpl.findUserObjections(memberId, status, pageable);
    }

    ///// 이의제기 상세 조회 경찰.ver/////
    public ObjectionDetailResponse getObjectionDetail(Long objectionId) {
        Objection objection = objectionRepository.findById(objectionId).orElseThrow(() -> new IllegalArgumentException("Cannot find objection"));
        if (objection.getBill().getReportType().equals(ReportType.CCTV)){
            Crackdown crackdown = crackdownRepository.findById(objection.getBill().getReportId()).orElseThrow(() -> new IllegalArgumentException("Cannot find crackdown"));
            return objectionRepositoryImpl.findObjectionDetail(objectionId, crackdown.getViolationType().getId());
        } else {
            Report report = reportRepository.findById(objection.getBill().getReportId()).orElseThrow(() -> new IllegalArgumentException("Cannot find report"));
            return objectionRepositoryImpl.findObjectionDetail(objectionId, report.getViolationType().getId());
        }
    }

    ///// 이의제기 상세 조회 시민.ver/////
    public ObjectionDetailResponse getObjectionUserDetail(Long id, Long objectionId) {
        Objection objection = objectionRepository.findById(objectionId).orElseThrow(() -> new IllegalArgumentException("Cannot find objection"));
        if (objection.getBill().getReportType().equals(ReportType.CCTV)){
            System.out.println(objection.getBill().getReportType());
            Crackdown crackdown = crackdownRepository.findById(objection.getBill().getReportId()).orElseThrow(() -> new IllegalArgumentException("Cannot find crackdown"));
            return objectionRepositoryImpl.findObjectionUserDetail(id, objectionId, crackdown.getViolationType().getId());
        } else {
            Report report = reportRepository.findById(objection.getBill().getReportId()).orElseThrow(() -> new IllegalArgumentException("Cannot find report"));
            return objectionRepositoryImpl.findObjectionUserDetail(id, objectionId, report.getViolationType().getId());
        }
    }

    public void answerForObjection(Police police, String content, Long objectionId) {
        Objection objection = objectionRepository.findById(objectionId).orElseThrow(()-> new IllegalArgumentException("Cannot find objection"));
        if (!Objects.equals(police.getId(), objection.getPoliceIdx())) {
            throw new IllegalArgumentException("Cannot answer objection");
        }
        Answer answer = Answer.builder()
                .objection(objection)
                .content(content)
                .build();
        answerRepository.save(answer);

        Bill bill = billRepository.findById(objection.getBill().getId()).orElseThrow(()-> new IllegalArgumentException("Cannot find bill"));
        bill.updateIsObjection();
        billRepository.save(bill);
    }
}
