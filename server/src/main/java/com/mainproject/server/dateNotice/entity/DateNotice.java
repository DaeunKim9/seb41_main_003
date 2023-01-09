package com.mainproject.server.dateNotice.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.mainproject.server.audit.Auditable;
import com.mainproject.server.tutoring.entity.Tutoring;
import lombok.*;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Set;

@Getter
@NoArgsConstructor
@Entity
@Builder
@AllArgsConstructor
public class DateNotice extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long dateNoticeId;

    @Column(nullable = false)
    @Setter
    private String dateNoticeTitle;

    @Column(nullable = false)
    @Setter
    private String startTime;

    @Column(nullable = false)
    @Setter
    private String endTime;

    /* 연관 관계 매핑 */

    @ToString.Exclude
    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @Setter
    private Notice notice;

    @ToString.Exclude
    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @Setter
    private Schedule schedule;

    @ToString.Exclude
    @ManyToOne(optional = false, fetch = FetchType.EAGER, cascade = CascadeType.DETACH)
    @Setter
    private Tutoring tutoring;

    @ToString.Exclude
    @OrderBy("homeworkId")
    @OneToMany(mappedBy = "dateNotice",cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @Setter
    private Set<Homework> homeworks;


    /* 연관 관계 편의 메소드 */

    public void addHomework(Homework homework) {
        this.homeworks.add(homework);
    }

    public void addNotice(Notice notice) {
        setNotice(notice);
    }

    public void addSchedule(Schedule schedule) {
        setSchedule(schedule);
    }

    public void addTutoring(Tutoring tutoring) {
        setTutoring(tutoring);
        tutoring.addDateNotice(this);
    }

}
