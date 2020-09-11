$(document).ready(function () {
                //AJAX GETTING AND INNERHTML
                $.ajax({         
                    type: "GET",
                    url: "http://127.0.0.1:8000/api/",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function(result){
                        var i,finaldiv;
                        finaldiv = "";
                        for (i=0;i<result.response.length;i++){
                            //console.log(typeof(result.response[i]["task"]));
                            finaldiv +=  "<div class='mb-2 col-md-5 tcolor p-3 rounded shadow-lg'><a href='/edit/"+result.response[i]["id"]+"' class='btn btn-md btn-primary mr-2'>Edit</a><a href='/del/"+result.response[i]["id"]+"' class='btn btn-md btn-danger mr-2'>Delete</a><strong class='h5 font-weight-bold'>"+result.response[i]["task"]+"</strong></div>"
                            };
                        $('#taskdiv').html(finaldiv);
                        }
                    });
                //Ajax Posting and InnerHTML
                $("#taskform").submit(function(e){
                $.ajax({         
                    type: "POST",
                    url: "http://127.0.0.1:8000/",
                    data:$(this).serialize(),
                    success: function(result){
                        $.ajax({         
                            type: "GET",
                            url: "http://127.0.0.1:8000/api/",
                            contentType: "application/json; charset=utf-8",
                            dataType: "json",
                            success: function(result){
                                var i,finaldiv;
                                finaldiv = "";
                                for (i=0;i<result.response.length;i++){
                                    //console.log(typeof(result.response[i]["task"]));
                                    finaldiv +=  "<div class='mb-2 col-md-5 tcolor p-3 rounded shadow-lg'><a href='/edit/"+result.response[i]["id"]+"' class='btn btn-md btn-primary mr-2'>Edit</a><a href='/del/"+result.response[i]["id"]+"' class='btn btn-md btn-danger mr-2'>Delete</a><strong class='h5 font-weight-bold'>"+result.response[i]["task"]+"</strong></div>"
                                    };
                                $('#taskdiv').html(finaldiv);
                                }
                            });
                }
                    });
                    e.preventDefault();
                    });



            });
