/**
 *
 */

/*상세보기 상단 작성자*/
$('.userIdWrap').on("mouseover",function(){
    $(this).children().children('.idHoverMenu').css("display", "block");
})

$('.userIdWrap').on("mouseout",function(){
    $(this).children().children('.idHoverMenu').css("display", "none");
})

/*우측 리더 정보*/
$('.userIdTxt').on("mouseover",function(){
    $(this).children('.idHoverMenu').css("display", "block");
})

$('.userIdTxt').on("mouseout",function(){
    $(this).children('.idHoverMenu').css("display", "none");
})

/*우측 구독중인 네오스인*/
$('.hoverNameWrap').on("mouseover",function(){
    $(this).children('.hoverName').css("display", "block");
})

$('.hoverNameWrap').on("mouseout",function(){
    $(this).children('.hoverName').css("display", "none");
})

// 작은 하트 호버
$('.favoriteSymbol').on("mouseover", function () {
    $(this).children('.favorite').css("background-image", "url(https://letspl.me/_next/static/media/ic-favorite-empty-hover.03f7a2966e132a098a985cdc42f83b46.svg)")
})

$('.favoriteSymbol').on("mouseout", function () {
    $(this).children('.favorite').css("background-image", "url(https://letspl.me/_next/static/media/ic-favorite-empty-white.b1db0e3e169a5cf61afa41daf5bfdc15.svg)")
    $(this).children('.active').css("background-image", "url(https://letspl.me/_next/static/media/ic-favorite-full.5a5209416a8859031c9099b5540c281a.svg)")
})

// 작은 하트 활성화 선택
$('.favoriteSymbol').click(function(){
    $(this).toggleClass('active'); /* active가 없으면 생성, 있으면 삭제*/
});

$(".favorite").on("click", function () {
    $(this).toggleClass('active');
})

// 내용부 상단 탭 작동
$('.workMag').click(function(){
    $(this).toggleClass('active'); /* active가 없으면 생성, 있으면 삭제*/
    $(this).parent().children('.milestoneMag').removeClass('active');
    $(this).parents('.projectTab').children('.taskTab').toggleClass('active',true);
    $(this).parents('.projectTab').children('.mileStoneTab').toggleClass('active',false);
});

$('.milestoneMag').click(function(){
    $(this).toggleClass('active'); /* active가 없으면 생성, 있으면 삭제*/
    $(this).parent().children('.workMag').removeClass('active');
    $(this).parents('.projectTab').children('.taskTab').toggleClass('active',false);
    $(this).parents('.projectTab').children('.mileStoneTab').toggleClass('active',true);
});

// 온, 오프라인 모임 지도 보이기
var $member = $(".member");
var $meeting = $(".meeting");

$meeting.attr('disabled',true);

$member.on("change", function() {
    if($member.val() == "01"){
        $('.meeting').removeAttr('disabled');
    }else{
        $('.meeting').attr('disabled',true);
    }
});

$meeting.on("change", function() {
    if($meeting.val() == "02"){
        $('.meetingPlace').css("display", "flex");
    }else{
        $('.meetingPlace').css("display", "none");
    }
});

// 진행 중 할일 지도 보이기
let placeCheck = false;
$(".placePick").on("click", function() {
    if(!placeCheck){
        placeCheck = true;
        $('.place').css("display", "flex");
    }else{
        placeCheck = false;
        $('.place').css("display", "none");
    }
});

// 마일스톤 목표 수정
let $milestoneTitle;
let $milestoneText;
$(".mileBtn").on("click", function () {
    if($(this).text()=="수정"){
        $milestoneTitle = $(this).parents('.nowMilestoneWrap').children('.mileStoneTit').val();
        $milestoneText = $(this).parents('.nowMilestoneWrap').children('.mileStoneTxt').children().val();
        $(this).text("등록");
        $(this).next().text("취소");
        $(this).parents('.nowMilestoneWrap').children('.mileStoneTit').attr("disabled", false);
        $(this).parents('.nowMilestoneWrap').children('.mileStoneTxt').children().attr("disabled", false)
            .attr("rows", 3);
    }
    if($(this).text()=="취소"){
        $(this).text("완료");
        $(this).prev().text("수정");
        $(this).parents('.nowMilestoneWrap').children('.mileStoneTit').val($milestoneTitle);
        $(this).parents('.nowMilestoneWrap').children('.mileStoneTxt').children().val($milestoneText);
        $(this).parents('.nowMilestoneWrap').children('.mileStoneTit').attr("disabled", true);
        $(this).parents('.nowMilestoneWrap').children('.mileStoneTxt').children("textarea").attr("disabled", true)
            .attr("rows", 1);
    }
})