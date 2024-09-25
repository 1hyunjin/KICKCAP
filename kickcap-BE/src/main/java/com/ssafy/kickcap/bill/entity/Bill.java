package com.ssafy.kickcap.bill.entity;

import com.ssafy.kickcap.objection.entity.Objection;
import com.ssafy.kickcap.user.entity.Member;
import com.ssafy.kickcap.user.entity.Police;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;
import org.springframework.data.annotation.CreatedDate;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "bill")
public class Bill {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idx")
    private Long id;

    @Column(name = "report_idx", nullable = false)
    private Long reportId;

    @Column(nullable = false)
    private int fine;

    @Column(name = "total_bill", nullable = false)
    private int totalBill;

    @Column(nullable = false, columnDefinition = "TIMESTAMP WITH TIME ZONE")
    private ZonedDateTime deadline;

    @Enumerated(EnumType.STRING)
    @Column(name = "paid_status", nullable = false)
    private PaidStatus paidStatus;

    @Column(name = "is_obj", nullable = false, length = 1)
    @ColumnDefault(value = "'N'")
    private String isObjection;

    @CreatedDate
    @Column(name = "created_at", updatable = false, nullable = false, columnDefinition = "TIMESTAMP WITH TIME ZONE")
    private ZonedDateTime createdAt;

    @PrePersist
    public void prePersist() {
        this.createdAt = LocalDateTime.now().atZone(ZoneId.of("Asia/Seoul"));
    }

    // Relationships
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_idx", nullable = false)
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "police_idx", nullable = false)
    private Police police;

    @OneToMany(mappedBy = "bill", cascade = CascadeType.ALL)
    private List<Objection> objections = new ArrayList<>();
}
