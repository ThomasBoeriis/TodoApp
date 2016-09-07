$(document).ready(function() {

    $( ".items-column" ).sortable({
        connectWith: ".items-column",
        placeholder: "ui-state-highlight",

        receive: function( event, ui ) {
            console.log(ui.item,"er Droppet i", event.target);
        }
    }).disableSelection();


    



    function RenderCategories() {
        $.ajax({
            url: "api/categories"
        }).done(function (response) {
            $('.columns-container').empty();
            $.each(response, function (key, item) {
                var section = $("<section>");
                //Header Section
                $("<div>", { class: "header-column" })
                .append($("<header>")
                    .append($("<div>", { class: "category" })
                        .append($("<h2>", { id: item.id, text: item.Name }))
                    )
                    .append($("<a>", { class:"add-inline", "data-id": item.id, "data-toggle":"modal", "data-target":"#createTask"})
                        .append($("<span>", { class: "glyphicon glyphicon-plus" }))
                    )
                ).appendTo(section);
                

                //Task Section
                var taskSection = $("<div>", { class: "items-column" });
                $.each(item.Tasks, function (taskKey, task) {

                    var taskHtml = $("<div>", { class: "task-container" })
                        .append($("<div>", { class: "task" + (task.Finished == true ? " finished" : "") })
                            .append($("<p>", { class: "title", text: task.Name }))
                            .append($("<div>", { class: "icon finishTask", "data-id": task.Id })
                                .append($("<span>", { class: "glyphicon glyphicon-ok" }))
                            ).append($("<div>", { class: "icon removeTask", "data-id": task.Id })
                                .append($("<span>", { class: "glyphicon glyphicon-remove" }))
                            )
                        );
                    taskHtml.appendTo(taskSection);  
                });

                taskSection.appendTo(section);
                section.appendTo($('.columns-container'));
            });

            //SetUp Events for Buttons in tasks
            $('.finishTask').on("click", function () {
                var thisBtn = $(this);
                //Ajax Event for finish Task
                var id = $(this).data('id');
                $.ajax({
                    url: "api/Tasks/ToggleFinish/" + id,
                    method: "GET"
                }).done(function (response) {
                    alert("Task er færdig: "+response.Finished);
                    $(thisBtn).closest('.task').toggleClass("finished");
                });
                
            });

            $('.removeTask').on("click", function () {
                //Ajax event for deleting task
                $.ajax({
                    url: "api/tasks/remove" + id,
                    method: "DELETE"
                }).done(function (response) {
                    alert("Removed");
                    $(this).closest('.task-container').remove();
                });
                
            });
        });
    }

    function init() {
        RenderCategories();
    }
    init();
});
