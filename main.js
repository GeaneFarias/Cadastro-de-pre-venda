$(document).ready(function(){
    $('.carroselimg').slick({
        autoplay:true,
        arrows:false
    })
    $('.menuSpawn').click(function(){
        $('nav').slideToggle()
    })
    $('#telefone').mask('(00)00000-0000',{
        placeholder:'(__)_____-____'
    })
    $('#cpf').mask('000.000.000-00',{
        placeholder:'___.___.___-__'
    })
    $('#cep').mask('00000-000',{
        placeholder:'_____-___'
    })
    $('form').validate({
        rules:{
            nome:{
                required:true
            },
            email:{
                required:true,
                email:true
            },
            telefone:{
                required:true
            },
            cpf:{
                required:true
            },
            endereço:{
                required:true
            },
            cep:{
                required:true
            },
        },
        messages:{
            nome:'Por favor, insira o seu nome',
            telefone:'Por favor, insira o seu numero',
            cpf:'Por favor, insira o seu numero de CPF',
            endereço:'Por favor, insira o seu endereço completo',
            email:'Por favor, insira o seu email',
            cep:'Por favor, insira seu CEP'
        },
        submitHandler:function(form){
            console.log(form)
        },
        invalidHandler:function(evento,validador){
            let camposIncorretos = validador.numberOfInvalids()
            console.log(camposIncorretos)
            if(camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
})