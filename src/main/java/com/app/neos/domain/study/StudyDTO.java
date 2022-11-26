package com.app.neos.domain.study;


import com.app.neos.embeddable.study.StudyField;
import com.app.neos.embeddable.study.StudyOnlineWhether;
import com.app.neos.entity.study.Study;
import com.app.neos.type.study.StudyRecruitStatus;
import com.app.neos.type.study.StudyStatus;
import com.querydsl.core.annotations.QueryProjection;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
@Data
@NoArgsConstructor
public class StudyDTO {
    private Long studyId;
    private String studyTitle;
//    임베디드1
    private String studyType;
    private String studyKeyword;
//    임베디드2
    private String studyO2o;
    private String studyCity;

    private Integer studySupport;
    private StudyRecruitStatus studyRecruitStatus;
    private StudyStatus studyStatus;
    private String studyContent;
    private int studyView;
    private LocalDateTime studyEndDate;

    public Study toEntity(){
       StudyField studyField =  StudyField.builder().studyType(studyType).studyKeyword(studyKeyword).build();
        StudyOnlineWhether studyOnlineWhether = StudyOnlineWhether.builder().studyO2o(studyO2o).studyCity(studyCity).build();

        return Study.builder()
                .studyTitle(studyTitle)
                .studySupport(studySupport)
                .studyRecruitStatus(studyRecruitStatus)
                .studyStatus(studyStatus)
                .studyContent(studyContent)
                .studyEndDate(studyEndDate)
                .studyField(studyField)
                .studyOnlineWhether(studyOnlineWhether)
                .build();
    }

    @QueryProjection
    public StudyDTO(Long studyId, String studyTitle, String studyType, String studyKeyword, String studyO2o, String studyCity, Integer studySupport, StudyRecruitStatus studyRecruitStatus, StudyStatus studyStatus, String studyContent, int studyView, LocalDateTime studyEndDate) {
        this.studyId = studyId;
        this.studyTitle = studyTitle;
        this.studyType = studyType;
        this.studyKeyword = studyKeyword;
        this.studyO2o = studyO2o;
        this.studyCity = studyCity;
        this.studySupport = studySupport;
        this.studyRecruitStatus = studyRecruitStatus;
        this.studyStatus = studyStatus;
        this.studyContent = studyContent;
        this.studyView = studyView;
        this.studyEndDate = studyEndDate;
    }
}
