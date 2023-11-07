package com.thirty.insitereadservice.activeusers.dto.request;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ViewCountsPerActiveUserReqDto {

    private String applicationToken;
    private String currentUrl;

}