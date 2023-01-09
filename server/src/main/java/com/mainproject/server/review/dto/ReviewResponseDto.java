package com.mainproject.server.review.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class ReviewResponseDto {

    private Long reviewId;

    private int professional;

    private int readiness;

    private int explanation;

    private int punctuality;

    private String reviewBody;
    // 프로필 이름
    private String tuteeName;

    private LocalDateTime createAt;

    private LocalDateTime updateAt;

}
