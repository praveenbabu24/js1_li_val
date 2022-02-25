$("#n_err").hide();
$("#e_err").hide();
$("#ps_err").hide();
$("#pm_err").hide();
$("#pw_err").hide();
$("#i1").keyup(function()
{
    $("#n_err").hide();
    let $val1 = $(this).val();
    let $valreg1 = /^[a-z\.]+$/;
    if (!$val1.match($valreg1))
        {
            $("#n_err").show();  
        }
});
$("#i2").keyup(function()
{
    $("#e_err").hide();
    let $val2 = $(this).val();
    let $valreg2 = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    if (!$val2.match($valreg2))
        {
            $("#e_err").show();  
        }
});
$("#i3").keyup(function()
{
    $("#ps_err").hide();
    $("#pm_err").hide();
    $("#pw_err").hide();
    let $val3 = $(this).val();
    let $valreg4 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})$/
    let $valreg3 = /^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))$/;
    if (!$valreg3.test($val3))
        {
            $("#pw_err").show();  
        }
        else if(!$valreg4.test($val3))
        {
            $("#ps_err").show();
        }
        else
        {
            $("#pm_err").show();
        }
    
});