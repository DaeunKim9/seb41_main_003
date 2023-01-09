package com.mainproject.server.message.dto;

import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class MessageResponseDto {

    private Long messageId;

    private Long senderId;

    private Long receiverId;

    private String messageContent;

    private LocalDateTime createAt;
}
