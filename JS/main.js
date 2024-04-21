$(document).ready(function(){
    $('.carosel-imagens').slick({
        autoplay:true,
        arrows:false, //tira as setas

    })
    $('.menu-hamburger').click(function(){
        $('nav').slideToggle()
    })

    $('#tele').mask('(00)00000-0000',{
        placeholder:'(__)_____-____'
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
            modeloDoVeiculo:{
                required:false
            },
            menssagem:{
                required:true
            }
        },
        messages:{
            nome:'Porfavro, insira o seu nome',
            telefone:'Porfavro, insira o seu numero',
            email:'Porfavro, insira o seu email',
            menssagem:'Porfavor, insira uma menssagem'
        },
        submitHandler:function(form){
            console.log(form)
        },
        invalidHandler:function(evento, validador){
            let camposIncorretor = validador.numberOfInvalids()
            console.log(camposIncorretor)
            if(camposIncorretor){
                alert(`Existem ${camposIncorretor} campos incorretos`)
            }
        }
    })

    $('.lista-veiculos button').click(function(){
        const destino = $('#contato');

        const nomeVeiculo =($(this).parent().find('h3').text());
        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop:destino.offset().top
        },1000)
    })
    
})