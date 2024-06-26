$(document).ready(function(){

    $('form button').ready(function(){
        $("form button").click(function(e){ 
            
                if($("#tarefa").val() === "" || $("#data").val() === ""){
                    alert('Por Favor, preencha os campos a baixo.')
                }else{
                
                e.preventDefault()
                
                var tarefaNova = $("#tarefa").val()
                var tarefaE = []
                
                $("#corpo_da_tabela tr").each(function(){
                    var tarefaExistente = $(this).find('td:first').text();
                    tarefaE.push(tarefaExistente)
                })
                
                if (tarefaE.includes(tarefaNova)){
                    alert('Está tarefa já foi adicionada.')
                }else{
                    
                    $('section').slideDown()
                    $('table').slideDown()
                    criarLinha() 
                    limparLinha() 
                    riscar()
                    
                }           
            }
    })
        
        $('section button').click(function(){
            $('section').slideUp()
            window.location.reload()
            
        })
    })

    function criarLinha(){ 
        var tarefa = $("#tarefa").val()
        var data = $("#data").val()
        var dificuldade = $("#dificuldade").val()
        const novaTabela = $('<tr>   </tr> ')
            $(` 
                    <td>${tarefa}</td>
                    <td>${data}</td>
                    <td>${dificuldade}</td>
                    <td> <input type="checkbox" name="feito" id="feito"></td>
                
            `).appendTo(novaTabela)
            
        $(novaTabela).appendTo("tbody")
        }
        
        function limparLinha(){
            $("#tarefa").val('')
            $("#data").val('')
            $("#dificuldade").val('')
        }
        $(document).on('click', "#feito", function(){ 
                if($(this).is(':checked')) {
                $(this).closest('td').siblings('td').addClass('riscado')
            }else { 
                    $(this).closest('td').siblings('td').removeClass('riscado')
            }
        })
})