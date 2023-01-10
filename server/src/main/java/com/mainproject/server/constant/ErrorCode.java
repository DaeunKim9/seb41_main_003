package com.mainproject.server.constant;

import lombok.Getter;

public enum ErrorCode {
    USER_NOT_FOUND(404, "USER NOT FOUND"),
    USER_ID_NOT_NULL(404, "USER ID NOT NULL"),
    USER_EMAIL_EXISTS(409, "USER EMAIL EXISTS"),
    NOT_FOUND(404, "NOT FOUND"),
    UNAUTHORIZED_ACCESS(401, "UNAUTHORIZED ACCESS"),
    ACCESS_DENIED(403, "ACCESS DENIED"),

    INTERNAL_SERVER_ERROR(500, "INTERNAL SERVER ERROR"),
    NOT_IMPLEMENTED(501,"NOT IMPLEMENTED"),
    EXPIRED_ACCESS_TOKEN(403, "EXPIRED ACCESS TOKEN"),
    TOKEN_NOT_NULL(404, "TOKEN_NOT_NULL"),
    EXPIRED_REFRESH_TOKEN(401,"EXPIRED REFRESH TOKEN"),
    OAUTH2_ACCESS_ERROR(400, "OAUTH2 ACCESS ERROR"),
    BAD_REQUEST(400, "BAD REQUEST");

    @Getter
    private int status;

    @Getter
    private String message;

    ErrorCode(int code, String message) {
        this.status = code;
        this.message = message;
    }
}
