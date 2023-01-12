package com.mainproject.server.tutoring.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Getter
@Setter
public class TutoringPatchDto {

    @NotNull
    private Long tutoringId;

    @NotBlank
    private String tutoringTitle;
}
