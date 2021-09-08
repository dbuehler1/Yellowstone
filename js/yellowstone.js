$(document).ready(function(){

    $(".nav-link").click(function(e){
        e.preventDefault();
        $(this).tab('show');

    });
    $('#addEmployer').click(function(){
        $('#employer').clone().appendTo('#groupEmployers');
    });

    $('#addRelative').click(function(){
        $('#relative').clone().appendTo('#relatives');
    });

    $('#addSchool').click(function(){
        $('#School').clone().appendTo('#Schools');
    });

    $('#addIncident').click(function(){
        $('#incident').clone().appendTo('#incidents');
    });


    if($('#yesPreviousEmployee').selected===true){

    }

    // $("#nav-Position-tab").click(function(e){
    //     e.preventDefault();
    //     $(this).tab('show');
    //
    // });
    //
    // $("#nav-Experience-tab").click(function(e){
    //     e.preventDefault();
    //     $(this).tab('show');
    //
    // });
});